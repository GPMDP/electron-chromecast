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
        this._lastCurrentTime = Date.now() / 1000
        this.customData = status.customData;
        this.volume = new chrome.cast.Volume(status.volume.level, status.volume.muted);
        if (status.media) {
          this.media = status.media;
        }
        if (status.mediaSessionId) {
          this.mediaSessionId = status.mediaSessionId;
        }
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
    try {
      this.channel.send(message);
      castConsole.info(message);
    } catch (e) {
      castConsole.error(e);
      errorCallback(new chrome.cast.Error(chrome.cast.ErrorStatus.SESSION_ERROR));
    }
    successCallback();
  }

  addUpdateListener(listener) {
    // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#addUpdateListener
    this._updateHooks.push(listener);
  }

  editTracksInfo(editTracksInfoRequest, successCallback, errorCallback) {
    castConsole.info('editTracksInfoRequest', editTracksInfoRequest, errorCallback);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#editTracksInfo
  }

  getEstimatedTime() {
    // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#getEstimatedTime
    if (!this.currentTime) return 0;
    return this.currentTime + ((Date.now() / 1000) - this._lastCurrentTime);
  }

  getStatus(getStatusRequest, successCallback, errorCallback) {
    castConsole.info('getStatusRequest', getStatusRequest, errorCallback);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#getStatus
  }

  pause(pauseRequest, successCallback, errorCallback) {
    // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#pause
    castConsole.info('pause', pauseRequest);
    this._sendMediaMessage({ type: 'PAUSE' }, successCallback, errorCallback);
  }

  play(playRequest, successCallback, errorCallback) {
    // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#play
    this._sendMediaMessage({ type: 'PLAY' }, successCallback, errorCallback);
  }

  queueAppendItem(item, successCallback, errorCallback) {
    castConsole.info('queueAppendItem', item, errorCallback);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueAppendItem
  }

  queueInsertItems(queueInsertItemsRequest, successCallback, errorCallback) { // eslint-disable-line no-unused-vars
    castConsole.info('queueInsertItems', queueInsertItemsRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueInsertItems
  }

  queueJumpToItem(itemId, successCallback, errorCallback) { // eslint-disable-line no-unused-vars
    castConsole.info('queueJumpToItem', itemId);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueJumpToItem
  }

  queueMoveItemToNewIndex(itemId, newIndex, successCallback, errorCallback) { // eslint-disable-line no-unused-vars
    castConsole.info('queueMoveItemToNewIndex', itemId, newIndex);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueMoveItemToNewIndex
  }

  queueNext(successCallback, errorCallback) { // eslint-disable-line no-unused-vars
    castConsole.info('queuenext', successCallback);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueNext
  }

  queuePrev(successCallback, errorCallback) { // eslint-disable-line no-unused-vars
    castConsole.info('queuePrev', successCallback);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queuePrev
  }

  queueRemoveItem(itemId, successCallback, errorCallback) { // eslint-disable-line no-unused-vars
    castConsole.info('queueRemoveItem', itemId);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueRemoveItem
  }

  queueReorderItems(queueReorderItemsRequest, successCallback, errorCallback) { // eslint-disable-line no-unused-vars
    castConsole.info('queueReorderItems', queueReorderItemsRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueReorderItems
  }

  queueSetRepeatMode(repeatMode, successCallback, errorCallback) { // eslint-disable-line no-unused-vars
    castConsole.info('queueSetRepeatMode', repeatMode);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueSetRepeatMode
  }

  queueUpdateItems(queueUpdateItemsRequest, successCallback, errorCallback) { // eslint-disable-line no-unused-vars
    castConsole.info('queueUpdateItems', queueUpdateItemsRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueUpdateItems
  }

  removeUpdateListener(listener) {
    castConsole.info('removeUpdateListener', listener);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#removeUpdateListener
  }

  seek(seekRequest, successCallback, errorCallback) { // eslint-disable-line no-unused-vars
    this._sendMediaMessage({ type: 'SEEK', currentTime: seekRequest.currentTime }, successCallback, errorCallback);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#seek
  }

  setVolume(volumeRequest, successCallback, errorCallback) { // eslint-disable-line no-unused-vars
    this._sendMediaMessage({ type: 'SET_VOLUME', volume: volumeRequest.volume }, successCallback, errorCallback);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#setVolume
  }

  stop(stopRequest, successCallback, errorCallback) {
    // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#stop
    this._sendMediaMessage({ type: 'STOP' }, successCallback, errorCallback);
  }

  supportsCommand(command) {
    castConsole.info('supportsCommand', command);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#supportsCommand
  }
}
