// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.GenericMediaMetadata

export default class GenericMediaMetadata {
  constructor() {
    this.images = [];
    this.metadataType = null;
    this.releaseDate = null;
    this.subtitle = null;
    this.title = null;
  }
}
