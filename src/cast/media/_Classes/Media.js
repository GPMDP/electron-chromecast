// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media

export default class Media {
  constructor(sessionId, mediaSessionId) {
    this.activeTrackIds = [];
    this.currentItemId = null;
    this.customData = {};
    this.idleReason = null;
    this.items = [];
    this.loadingItemId = null;
    this.media = null;
    this.mediaSessionId = mediaSessionId;
    this.playbackRate = 1;
    this.playerState = chrome.cast.media.PlayerState.IDLE;
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
  }

  addUpdateListener(listener) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#addUpdateListener
  }

  editTracksInfo(editTracksInfoRequest, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#editTracksInfo
  }

  getEstimatedTime() {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#getEstimatedTime
  }

  getStatus(getStatusRequest, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#getStatus
  }

  pause(pauseRequest, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#pause
  }

  play(playRequest, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#play
  }

  queueAppendItem(item, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueAppendItem
  }

  queueInsertItems(queueInsertItemsRequest, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueInsertItems
  }

  queueJumpToItem(itemId, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueJumpToItem
  }

  queueMoveItemToNewIndex(itemId, newIndex, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueMoveItemToNewIndex
  }

  queueNext(successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueNext
  }

  queuePrev(successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queuePrev
  }

  queueRemoveItem(itemId, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueRemoveItem
  }

  queueReorderItems(queueReorderItemsRequest, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueReorderItems
  }

  queueSetRepeatMode(repeatMode, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueSetRepeatMode
  }

  queueUpdateItems(queueUpdateItemsRequest, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueUpdateItems
  }

  removeUpdateListener(listener) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#removeUpdateListener
  }

  seek(seekRequest, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#seek
  }

  setVolume(volumeRequest, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#setVolume
  }

  stop(stopRequest, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#stop
  }

  supportsCommand(command) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#supportsCommand
  }
}
