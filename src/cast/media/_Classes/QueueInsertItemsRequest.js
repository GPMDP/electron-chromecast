// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueInsertItemsRequest

export default class QueueInsertItemsRequest {
  constructor(itemsToInsert) {
    this.customData = {};
    this.insertBefore = null;
    this.items = itemsToInsert;
  }
}
