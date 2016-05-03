// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.QueueReorderItemsRequest

export default class QueueReorderItemsRequest {
  constructor(itemIdsToReorder) {
    this.customData = {};
    this.type = 'QUEUE_REORDER';
    this.insertBefore = null;
    this.itemIds = itemIdsToReorder;
  }
}
