// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.LoadRequest

export default class LoadRequest {
  constructor(mediaInfo) {
    console.info('mediaInfo', mediaInfo);
    this.activeTrackIds = [];
    this.autoplay = false;
    this.currentTime = 0;
    this.customData = {};
    this.media = mediaInfo;
  }
}
