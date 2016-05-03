// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueRemoveItemsRequest

export default class QueueRemoveItemsRequest {
  constructor(itemIdsToRemove) {
    this.customData = {};
    this.itemIds = itemIdsToRemove;
  }
}
