// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.SessionRequest

export default class SessionRequest {
  constructor(appId, opt_capabilities = null, opt_timeout = null) {
    this.appId = appId;
    this.capabilities = opt_capabilities || [chrome.cast.Capability.VIDEO_OUT, chrome.cast.Capability.AUDIO_OUT];
    this.language = null;
    this.requestSessionTimeout = opt_timeout || chrome.cast.timeout.requestSession;
  }
}
