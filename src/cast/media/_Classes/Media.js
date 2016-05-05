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
    console.info('addUpdateListener', listener);
  }

  editTracksInfo(editTracksInfoRequest, successCallback, errorCallback) {
    console.info('editTracksInfoRequest', editTracksInfoRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#editTracksInfo
  }

  getEstimatedTime() {
    console.info('getEstimatedTime');
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#getEstimatedTime
  }

  getStatus(getStatusRequest, successCallback, errorCallback) {
    console.info('getStatusRequest', getStatusRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#getStatus
  }

  pause(pauseRequest, successCallback, errorCallback) {
    console.info('pause', pauseRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#pause
  }

  play(playRequest, successCallback, errorCallback) {
    console.info('play', playRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#play
  }

  queueAppendItem(item, successCallback, errorCallback) {
    console.info('queueAppendItem', item);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueAppendItem
  }

  queueInsertItems(queueInsertItemsRequest, successCallback, errorCallback) {
    console.info('queueInsertItems', queueInsertItemsRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueInsertItems
  }

  queueJumpToItem(itemId, successCallback, errorCallback) {
    console.info('queueJumpToItem', itemId);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueJumpToItem
  }

  queueMoveItemToNewIndex(itemId, newIndex, successCallback, errorCallback) {
    console.info('queueMoveItemToNewIndex', itemId, newIndex);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueMoveItemToNewIndex
  }

  queueNext(successCallback, errorCallback) {
    console.info('queuenext', successCallback);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueNext
  }

  queuePrev(successCallback, errorCallback) {
    console.info('queuePrev', successCallback);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queuePrev
  }

  queueRemoveItem(itemId, successCallback, errorCallback) {
    console.info('queueRemoveItem', itemId);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueRemoveItem
  }

  queueReorderItems(queueReorderItemsRequest, successCallback, errorCallback) {
    console.info('queueReorderItems', queueReorderItemsRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueReorderItems
  }

  queueSetRepeatMode(repeatMode, successCallback, errorCallback) {
    console.info('queueSetRepeatMode', repeatMode);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueSetRepeatMode
  }

  queueUpdateItems(queueUpdateItemsRequest, successCallback, errorCallback) {
    console.info('queueUpdateItems', queueUpdateItemsRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#queueUpdateItems
  }

  removeUpdateListener(listener) {
    console.info('removeUpdateListener', listener);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#removeUpdateListener
  }

  seek(seekRequest, successCallback, errorCallback) {
    console.info('seekRequest', seekRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#seek
  }

  setVolume(volumeRequest, successCallback, errorCallback) {
    console.info('setVolume', setVolume);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#setVolume
  }

  stop(stopRequest, successCallback, errorCallback) {
    console.info('stop', stopRequest);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#stop
  }

  supportsCommand(command) {
    console.info('supportsCommand', command);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.Media#supportsCommand
  }
}
