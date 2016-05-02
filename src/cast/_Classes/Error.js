// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Error

export default class Error {
  constructor(code, opt_description, opt_details = {}) {
    this.code = code;
    this.description = opt_description || null;
    this.details = opt_details;
  }
}
