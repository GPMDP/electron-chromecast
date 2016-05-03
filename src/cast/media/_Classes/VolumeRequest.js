// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.VolumeRequest

export default class VolumeRequest {
  constructor(volume) {
    this.volume = volume;
    this.customData = {};
  }
}
