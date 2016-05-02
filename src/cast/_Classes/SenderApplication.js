// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.SenderApplication

export default class SenderApplication {
  constructor(platform) {
    this.platform = platform;

    // TODO: Determine usage of these two properties
    this.packageId = null;
    this.url = null;
  }
}
