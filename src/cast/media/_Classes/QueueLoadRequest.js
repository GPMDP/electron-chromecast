// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueLoadRequest

export default class QueueLoadRequest {
  constructor(items) {
    this.customData = {};
    this.items = items;
    this.repeatMode = chrome.cast.media.RepeatMode.OFF;
    this.startIndex = 0;
  }
}
