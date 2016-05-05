// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MediaInfo

export default class MediaInfo {
  constructor(contentId, contentType) {
    castConsole.info('new MediaInfo', contentId, contentType);
    this.contentId = contentId;
    this.contentType = contentType;
    this.customData = {};
    this.duration = null;
    this.metadata = null;
    this.streamType = chrome.cast.media.StreamType.BUFFERED;
    this.textTrackStyle = null;
    this.tracks = [];
  }
}
