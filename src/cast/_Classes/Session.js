// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session
import { Client } from 'castv2';

export default class Session {
  constructor(sessionId, appId, displayName, appImages, receiver, _host, _cb) {
    this.client = new Client();
    this.client.on('message', console.warn.bind(console));
    this.client.connect(_host, () => {
      // create various namespace handlers
      const clientConnection = this.client.createChannel('sender-0', 'receiver-0', 'urn:x-cast:com.google.cast.tp.connection', 'JSON');
      const clientHeartbeat = this.client.createChannel('sender-0', 'receiver-0', 'urn:x-cast:com.google.cast.tp.heartbeat', 'JSON');
      const clientReceiver = this.client.createChannel('sender-0', 'receiver-0', 'urn:x-cast:com.google.cast.receiver', 'JSON');

      // establish virtual connection to the receiver
      clientConnection.send({ type: 'CONNECT' });

      // start heartbeating
      clientHeartbeat.send({ type: 'PING' });
      setInterval(() => {
        clientHeartbeat.send({ type: 'PING' });
      }, 5000);

      console.info(`LAUNCHING: ${appId}`);
      // launch YouTube app
      clientReceiver.send({ type: 'LAUNCH', appId, requestId: 1 });

      // display receiver status updates
      let once = true;
      clientReceiver.on('message', (data, broadcast) => {
        if (data.type === 'RECEIVER_STATUS') {
          if (data.status.applications && data.status.applications[0].appId === appId) {
            const app = data.status.applications[0];
            if (once) {
              once = false;
              this.transport = app.transportId;
              this.status = chrome.cast.SessionStatus.CONNECTED;
              _cb(this);
            }

            this.statusText = app.statusText;
            this.displayName = app.displayName;
            this.namespaces = app.namespaces;
          }
          if (data.status.volume) {
            this.receiver.volume = new chrome.cast.Volume(data.status.volume.level, data.status.volume.muted);
          }
          console.info('Firing Update Hooks');
          this._updateHooks.forEach((hook) => {
            hook();
          });
          console.log('Reciever Update:', data.status);
        } else {
          console.info('RANDOM MSG', data);
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
  }

  _createChannel(namespace) {
    if (!this._channels[namespace]) {
      this._channels[namespace] = this.client.createChannel(this.transport, 'receiver-0', namespace, 'JSON');
      this._channels[namespace].on('message', (message) => {
        console.info('Message on:', namespace, message);
      });
    }
  }

  addMediaListener(listener) {
    console.info('Media Listener: ', listener);
    this._mediaHooks.push(listener);
  }

  addMessageListener(namespace, listener) {
    this._createChannel(namespace);
    this._channels[namespace].on('message', listener);
    console.info('Message Hook For: ', namespace);
  }

  addUpdateListener(listener) {
    this._updateHooks.push(listener);
    console.info('Update listener', listener);
  }

  leave(successCallback, errorCallback) {
    console.info('leave');
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#leave
  }

  loadMedia(loadRequest, successCallback, errorCallback) {
    console.info('load', loadRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#loadMedia
  }

  queueLoad(queueLoadRequest, successCallback, errorCallback) {
    console.info('Queue Load', queueLoadRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#queueLoad
  }

  removeMediaListener(listener) {
    console.info('Remove Media Listener');
    this._mediaHooks = this._mediaHooks.filter((item) => item !== listener);
  }

  removeMessageListener(namespace, listener) {
    console.info('Remove Message Listener');
    if (!this._messageHooks[namespace]) return;
    this._messageHooks[namespace] = this._messageHooks[namespace].filter((item) => item !== listener);
  }

  removeUpdateListener(listener) {
    console.info('Remove Update Listener');
    this._updateHooks = this._updateHooks.filter((item) => item !== listener);
  }

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#sendMessage
  sendMessage(namespace, message, successCallback, errorCallback) {
    console.info('Sending Message', namespace, message);
    this._createChannel(namespace);
    try {
      this._channels[namespace].send(message);
    } catch (e) {
      errorCallback(new chrome.cast.Error(chrome.cast.ErrorCode.SESSION_ERROR));
      return;
    }
    successCallback();
  }

  setReceiverMuted(muted, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#setReceiverMuted
  }

  stop(successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#stop
  }
}
