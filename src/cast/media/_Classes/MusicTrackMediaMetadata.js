// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.MusicTrackMediaMetadata

export default class MusicTrackMediaMetadata {
  constructor() {
    this.albumArtist = null;
    this.albumName = null;
    this.artist = null;
    this.composer = null;
    this.discNumber = null;
    this.images = [];
    this.metadataType = this.type = 3;
    this.releaseDate = null;
    this.songName = null;
    this.title = null;
    this.trackNumber = null;
  }
}
