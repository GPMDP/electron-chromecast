// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ReceiverDisplayStatus

export default class ReceiverDisplayStatus {
  constructor(statusText, appImages) {
    this.statusText = statusText;
    this.appImages = appImages;
  }
}
