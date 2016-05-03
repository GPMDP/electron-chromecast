// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.SeekRequest

export default class SeekRequest {
  constructor() {
    this.currentTime = null;
    this.customData = {};
    this.resumeState = null;
  }
}
