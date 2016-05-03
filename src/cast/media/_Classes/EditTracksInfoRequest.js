// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.media.EditTracksInfoRequest

export default class EditTracksInfoRequest {
  constructor(opt_activeTrackIds, opt_textTrackStyle) {
    this.activeTrackIds = opt_activeTrackIds || null;
    this.textTrackStyle = opt_textTrackStyle || null;
  }
}
