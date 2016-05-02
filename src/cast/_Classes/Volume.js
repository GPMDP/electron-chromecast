// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Volume

export default class Volume {
  constructor(opt_level, opt_muted) {
    this.level = opt_level || null;
    this.muted = opt_muted || null;
  }
}
