// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session

export default class Session {
  constructor(sessionId, appId, displayName, appImages, receiver) {
    this.appId = appId;
    this.appImages = appImages;
    this.displayName = displayName;
    this.receiver = receiver;
    this.sessionId = sessionId;

    this.media = [];
    this.namespaces = [];
    this.senderApps = [];
    this.status = chrome.cast.SessionStatus.DISCONNECTED;
    this.statusText = null;

    this._mediaHooks = [];
    this._messageHooks = {};
    this._updateHooks = [];
  }

  addMediaListener(listener) {
    this._mediaHooks.push(listener);
  }

  addMessageListener(namespace, listener) {
    this._messageHooks[namespace] = this._messageHooks[namespace] || [];
    this._messageHooks[namespace].push(listener);
  }

  addUpdateListener(listener) {
    this._updateHooks.push(listener);
  }

  leave(successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#leave
  }

  loadMedia(loadRequest, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#loadMedia
  }

  queueLoad(queueLoadRequest, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#queueLoad
  }

  removeMediaListener(listener) {
    this._mediaHooks = this._mediaHooks.filter((item) => item !== listener);
  }

  removeMessageListener(namespace, listener) {
    if (!this._messageHooks[namespace]) return;
    this._messageHooks[namespace] = this._messageHooks[namespace].filter((item) => item !== listener);
  }

  removeUpdateListener(listener) {
    this._updateHooks = this._updateHooks.filter((item) => item !== listener);
  }

  sendMessage(namespace, message, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#sendMessage
  }

  setReceiverMuted(muted, successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#setReceiverMuted
  }

  stop(successCallback, errorCallback) {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session#stop
  }
}
