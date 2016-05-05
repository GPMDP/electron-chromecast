// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media

export default class Media {
  constructor(sessionId, mediaSessionId, _channel) {
    this.activeTrackIds = [];
    this.currentItemId = 1;
    this.customData = {};
    this.currentTime = 0;
    this.idleReason = null;
    this.items = [];
    this.loadingItemId = null;
    this.media = null;
    this.mediaSessionId = mediaSessionId;
    this.playbackRate = 1;
    this.playerState = chrome.cast.media.PlayerState.PAUSED;
    this.preloadedItemId = null;
    this.repeatMode = chrome.cast.media.RepeatMode.OFF;
    this.sessionId = sessionId;
    this.supportedMediaCommands = [
      chrome.cast.media.MediaCommand.PAUSE,
      chrome.cast.media.MediaCommand.SEEK,
      chrome.cast.media.MediaCommand.STREAM_VOLUME,
      chrome.cast.media.MediaCommand.STREAM_MUTE,
    ];
    this.volume = new chrome.cast.Volume();

    this.channel = _channel;
    this.channel.on('message', (data) => {
      if (data && data.type === 'MEDIA_STATUS' && data.status && data.status.length > 0) {
        castConsole.error('Update MEDIA based on:', data);
        const status = data.status[0];
        this.currentTime = status.currentTime;
        this.customData = status.customData;
        this.volume = new chrome.cast.Volume(status.volume.level, status.volume.muted);
        // this.metadata =
        this.playbackRate = status.playbackRate;
        this.playerState = status.playerState;
        this.repeatMode = status.repeatMode;
        // currentTime, volume, metadata, playbackRate, playerState, customData

        this._updateHooks.forEach((hookFn) => hookFn());
      }
    });

    this._updateHooks = [];
  }

  _sendMediaMessage(message, successCallback, errorCallback) {
    message.mediaSessionId  = this.mediaSessionId; // eslint-disable-line
    message.requestId = 0; // eslint-disable-line
    message.sessionId = this.sessionId; // eslint-disable-line
    message.customData = null; // eslint-disable-line
    this.channel.send(message);
    castConsole.info(message);
    successCallback();
  }

  addUpdateListener(listener) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#addUpdateListener
    // castConsole.info('addUpdateListener', listener);
    this._updateHooks.push(listener);
  }

  editTracksInfo(editTracksInfoRequest, successCallback, errorCallback) {
    castConsole.info('editTracksInfoRequest', editTracksInfoRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#editTracksInfo
  }

  getEstimatedTime() {
    castConsole.info('getEstimatedTime');
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#getEstimatedTime
  }

  getStatus(getStatusRequest, successCallback, errorCallback) {
    castConsole.info('getStatusRequest', getStatusRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#getStatus
  }

  pause(pauseRequest, successCallback, errorCallback) {
    castConsole.info('pause', pauseRequest);
    this._sendMediaMessage({ type: 'PAUSE' }, successCallback);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#pause
  }

  play(playRequest, successCallback, errorCallback) {
    this._sendMediaMessage({ type: 'PLAY' }, successCallback);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#play
  }

  queueAppendItem(item, successCallback, errorCallback) {
    castConsole.info('queueAppendItem', item);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueAppendItem
  }

  queueInsertItems(queueInsertItemsRequest, successCallback, errorCallback) {
    castConsole.info('queueInsertItems', queueInsertItemsRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueInsertItems
  }

  queueJumpToItem(itemId, successCallback, errorCallback) {
    castConsole.info('queueJumpToItem', itemId);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueJumpToItem
  }

  queueMoveItemToNewIndex(itemId, newIndex, successCallback, errorCallback) {
    castConsole.info('queueMoveItemToNewIndex', itemId, newIndex);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueMoveItemToNewIndex
  }

  queueNext(successCallback, errorCallback) {
    castConsole.info('queuenext', successCallback);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueNext
  }

  queuePrev(successCallback, errorCallback) {
    castConsole.info('queuePrev', successCallback);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queuePrev
  }

  queueRemoveItem(itemId, successCallback, errorCallback) {
    castConsole.info('queueRemoveItem', itemId);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueRemoveItem
  }

  queueReorderItems(queueReorderItemsRequest, successCallback, errorCallback) {
    castConsole.info('queueReorderItems', queueReorderItemsRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueReorderItems
  }

  queueSetRepeatMode(repeatMode, successCallback, errorCallback) {
    castConsole.info('queueSetRepeatMode', repeatMode);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueSetRepeatMode
  }

  queueUpdateItems(queueUpdateItemsRequest, successCallback, errorCallback) {
    castConsole.info('queueUpdateItems', queueUpdateItemsRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueUpdateItems
  }

  removeUpdateListener(listener) {
    castConsole.info('removeUpdateListener', listener);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#removeUpdateListener
  }

  seek(seekRequest, successCallback, errorCallback) {
    castConsole.info('seekRequest', seekRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#seek
  }

  setVolume(volumeRequest, successCallback, errorCallback) {
    castConsole.info('setVolume', setVolume);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#setVolume
  }

  stop(stopRequest, successCallback, errorCallback) {
    this._sendMediaMessage({ type: 'STOP' }, successCallback);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#stop
  }

  supportsCommand(command) {
    castConsole.info('supportsCommand', command);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#supportsCommand
  }
}
