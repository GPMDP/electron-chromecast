// TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.ApiConfig

export default class ApiConfig {
  constructor(sessionRequest, sessionListener, receiverListener, opt_autoJoinPolicy, opt_defaultActionPolicy) {
    this.sessionRequest = sessionRequest;
    this.sessionListener = sessionListener;
    this.receiverListener = receiverListener;
    this.autoJoinPolicy = opt_autoJoinPolicy;
    this.defaultActionPolicy = opt_defaultActionPolicy;
  }
}
