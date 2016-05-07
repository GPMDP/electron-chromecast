// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session
import { Client } from 'castv2';

export default class Session {
  constructor(sessionId, appId, displayName, appImages, receiver, _cb) {
    this.clientConnection = null;
    this.clientHeartbeat = null;
    this.clientReceiver = null;

    this.client = new Client();
    this.client.on('message', castConsole.warn.bind(castConsole));
    this.client.connect(receiver.ipAddress, () => {
      let transportHeartbeat;
      // create various namespace handlers
      this.clientConnection = this.client.createChannel(
        'sender-0',
        'receiver-0',
        'urn:x-cast:com.google.cast.tp.connection',
        'JSON'
      );
      this.clientHeartbeat = this.client.createChannel(
        'sender-0',
        'receiver-0',
        'urn:x-cast:com.google.cast.tp.heartbeat',
        'JSON'
      );
      this.clientReceiver = this.client.createChannel(
        'sender-0',
        'receiver-0',
        'urn:x-cast:com.google.cast.receiver',
        'JSON'
      );

      // establish virtual connection to the receiver
      this.clientConnection.send({ type: 'CONNECT' });
      window.addEventListener('beforeunload', () => {
        this.clientConnection.send({ type: 'CLOSE' });
        if (this.transportConnect) {
          this.transportConnect.send({ type: 'CLOSE' });
        }
      });

      // start heartbeating
      this.clientHeartbeat.send({ type: 'PING' });
      setInterval(() => {
        if (transportHeartbeat) {
          transportHeartbeat.send({ type: 'PING' });
        }
        this.clientHeartbeat.send({ type: 'PING' });
      }, 5000);

      // launch appId
      castConsole.info(`LAUNCHING: ${appId}`);
      this.clientReceiver.send({ type: 'LAUNCH', appId, requestId: 1 });

      // display receiver status updates
      let once = true;
      this.clientReceiver.on('message', (data, broadcast) => { // eslint-disable-line no-unused-vars
        // TODO: Implement broadcast, remove disabled eslint
        if (data.type === 'RECEIVER_STATUS') {
          if (data.status.applications && data.status.applications[0].appId === appId) {
            const app = data.status.applications[0];
            this.app = app;
            if (once) {
              once = false;
              this.transport = this.transportId = app.transportId;
              this.clientId = `client-${Math.floor(Math.random() * 10e5)}`;
              this.transportConnect = this.client.createChannel(
                this.clientId,
                this.transport,
                'urn:x-cast:com.google.cast.tp.connection',
                'JSON'
              );
              this.transportConnect.send({ type: 'CONNECT' });
              transportHeartbeat = this.client.createChannel(
                this.clientId,
                this.transport,
                'urn:x-cast:com.google.cast.tp.heartbeat',
                'JSON'
              );
              this.status = chrome.cast.SessionStatus.CONNECTED;
              this.sessionId = app.sessionId;
              this.namespaces = app.namespaces;
              this.displayName = app.displayName;
              this.statusText = app.displayName;

              // DEV: Media Listener
              // TODO: Move somewhere nicer
              this.addMessageListener('urn:x-cast:com.google.cast.media', (namespace, media) => {
                if (media.status && media.status.length > 0) {
                  castConsole.info('Media Reciever', media);
                  castConsole.error('Media Reciever', this._mediaHooks);
                  // const mediaObject = new chrome.cast.media.Media(this.app.sessionId, media.requestId);
                  // this._mediaHooks.forEach((hookFn) => hookFn(mediaObject));
                }
              });
              _cb(this);
            }

            this.statusText = app.statusText;
            this.displayName = app.displayName;
            this.namespaces = app.namespaces;
          }
          if (data.status.volume) {
            this.receiver.volume = new chrome.cast.Volume(data.status.volume.level, data.status.volume.muted);
          }
          castConsole.info('Firing Update Hooks');
          this._updateHooks.forEach((hook) => {
            hook();
          });
          castConsole.log('Reciever Update:', data.status);
        } else {
          castConsole.info('RANDOM MSG', data);
        }
      });
    });

    this.appId = appId;
    this.appImages = appImages;
    this.displayName = displayName;
    this.receiver = receiver;
    this.sessionId = sessionId;

    this.media = [];
    this.namespaces = [];
    this.senderApps = [];
    this.status = chrome.cast.SessionStatus.DISCONNECTED;
    this.statusText = null;

    this._mediaHooks = [];
    this._channels = {};
    this._updateHooks = [];

    this.sequenceNumber = 0;
  }

  _createChannel(namespace) {
    if (!this._channels[namespace]) {
      this._channels[namespace] = this.client.createChannel(this.clientId, this.transport, namespace, 'JSON');
      this._channels[namespace].on('message', (message) => {
        castConsole.info('Message on:', namespace, message);
      });
    }
  }

  addMediaListener(listener) {
    castConsole.info('Media Listener: ', listener);
    this._mediaHooks.push(listener);
  }

  addMessageListener(namespace, listener) {
    this._createChannel(namespace);
    this._channels[namespace].on('message', (data) => {
      listener(namespace, JSON.stringify(data));
    });
    castConsole.info('Message Hook For: ', namespace);
  }

  addUpdateListener(listener) {
    this._updateHooks.push(listener);
    castConsole.info('Update listener', listener);
  }

  leave(successCallback, errorCallback) { // eslint-disable-line no-unused-vars
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#leave
    castConsole.info('leave');
  }

  loadMedia(loadRequest, successCallback, errorCallback) {
    this.sendMediaMessage({
      type: 'LOAD',
      requestId: 0,
      media: loadRequest.media,
      activeTrackIds: loadRequest.activeTrackIds || [],
      autoplay: loadRequest.autoplay || false,
      currentTime: loadRequest.currentTime || 0,
      customData: loadRequest.customData || {},
      repeatMode: 'REPEAT_OFF',
    });
    let once = true;
    castConsole.info('ADD LISTEN');
    this.addMessageListener('urn:x-cast:com.google.cast.media', (namespace, data) => {
      const mediaObject = JSON.parse(data);
      if (once && mediaObject.status && mediaObject.status.length > 0) {
        castConsole.info('LISTEN FIRED');
        once = false;
        const media = new chrome.cast.media.Media(
          this.app.sessionId,
          mediaObject.status[0].mediaSessionId,
          this._channels['urn:x-cast:com.google.cast.media']
        );
        successCallback(media);
      } else {
        errorCallback(new chrome.cast.Error(chrome.cast.ErrorCode.SESION_ERROR));
      }
    });
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#loadMedia
  }

  queueLoad(queueLoadRequest, successCallback, errorCallback) { // eslint-disable-line
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#queueLoad
    castConsole.info('Queue Load', queueLoadRequest);
  }

  removeMediaListener(listener) {
    castConsole.info('Remove Media Listener');
    this._mediaHooks = this._mediaHooks.filter((item) => item !== listener);
  }

  removeMessageListener(namespace, listener) {
    castConsole.info('Remove Message Listener');
    if (!this._messageHooks[namespace]) return;
    this._messageHooks[namespace] = this._messageHooks[namespace].filter((item) => item !== listener);
  }

  removeUpdateListener(listener) {
    castConsole.info('Remove Update Listener');
    this._updateHooks = this._updateHooks.filter((item) => item !== listener);
  }

  sendMediaMessage(message) {
    this.sendMessage('urn:x-cast:com.google.cast.media', message, () => {}, () => {});
  }

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#sendMessage
  sendMessage(namespace, message, successCallback, errorCallback) {
    castConsole.info('Sending Message', namespace, message);
    this._createChannel(namespace);
    try {
      // this._channels[namespace].send({
      //   type: 'app_message',
      //   message: {
      //     sessionId: this.app.sessionId,
      //     namespaceName: namespace,
      //     message,
      //   },
      //   timeoutMillis: 3000,
      //   sequenceNumber: ++this.sequenceNumber,
      //   clientId: this.clientId,
      // });
      this._channels[namespace].send(message);
    } catch (e) {
      errorCallback(new chrome.cast.Error(chrome.cast.ErrorCode.SESSION_ERROR));
      return;
    }
    successCallback();
  }

  setReceiverMuted(muted, successCallback, errorCallback) {
    try {
      const data = {
        type: 'SET_VOLUME',
        volume: { muted: true },
        requestId: 0,
      };
      this.clientReceiver.send(data);
    } catch (e) {
      errorCallback(new chrome.cast.Error(chrome.cast.ErrorCode.SESSION_ERROR));
    }
    successCallback();
  }

  setReceiverVolumeLevel(newLevel, successCallback, errorCallback) {
    try {
      const data = {
        type: 'SET_VOLUME',
        volume: { level: newLevel },
        requestId: 0,
      };
      this.clientReceiver.send(data);
    } catch (e) {
      errorCallback(new chrome.cast.Error(chrome.cast.ErrorCode.SESSION_ERROR));
    }
    successCallback();
  }

  stop(successCallback, errorCallback) {
    try {
      const data = {
        type: 'STOP',
        sessionId: this.sessionId,
        requestId: 0,
      };
      this.clientReceiver.send(data);
    } catch (e) {
      errorCallback(new chrome.cast.Error(chrome.cast.ErrorCode.SESSION_ERROR));
    }
    successCallback();
  }
}
