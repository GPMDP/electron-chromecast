// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MediaInfo

export default class MediaInfo {
  constructor(contentId, contentType) {
    console.info('MediaInfo', contentId, contentType);
    this.contentId = contentId;
    this.contentType = contentType;
    this.customData = {};
    this.duration = null;
    this.metadata = null;
    this.streamType = null;
    this.textTrackStyle = null;
    this.tracks = [];
  }
}
