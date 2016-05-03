// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueSetPropertiesRequest

export default class QueueSetPropertiesRequest {
  constructor() {
    this.type = 'QUEUE_UPDATE';
    this.customData = {};
    this.repeatMode = null;
    this.sessionId = null;
    this.requestId = null;
  }
}
