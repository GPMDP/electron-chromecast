/* eslint-disable no-console, camelcase, max-len */

const chrome = {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};

chrome.cast.timeout = {};
chrome.cast.timeout.requestSession = 1E4;
chrome.cast.timeout.leaveSession = 3E3;
chrome.cast.timeout.stopSession = 3E3;
chrome.cast.timeout.setReceiverVolume = 3E3;
chrome.cast.timeout.sendCustomMessage = 3E3;

chrome.cast.ReceiverType = {
  CAST: 'cast',
  DIAL: 'dial',
  HANGOUT: 'hangout',
  CUSTOM: 'custom',
};

chrome.cast.requestSession = function(a, b, c, d) {
  console.log(a, b, c, d);
};

chrome.cast.isAvailable = false;

chrome.cast.initialize = (apiConfig, onInitSuccess, onError) => {
  // DEV: do some init commands or do onError if fails.
  console.log(apiConfig, onInitSuccess, onError);
  onInitSuccess();
};

chrome.cast.SessionRequest = function(appId, opt_capabilities, opt_timeout) {
  console.log(appId, opt_capabilities, opt_timeout);
  this.appId = appId;
  this.capabilities = opt_capabilities; // || [chrome.cast.Capabilties.VIDEO_OUT, chrome.cast.Capabilities.AUDIO_OUT];
  this.requestSessionTimeout = opt_timeout || chrome.cast.timeout.requestSession;
  this.language = null;
};

chrome.cast.DialLaunchResponse = function(doLaunch, launchParameter) {
  this.doLaunch = doLaunch;
  this.launchParameter = launchParameter || null;
};

chrome.cast.AutoJoinPolicy = {
  TAB_AND_ORIGIN_SCOPED: 'tab_and_origin_scoped',
  ORIGIN_SCOPED: 'origin_scoped',
  PAGE_SCOPED: 'page_scoped',
};

chrome.cast.Receiver = function(label, friendlyName, capabilities, volume) {
  this.label = label;
  this.friendlyName = friendlyName;
  this.capabilities = capabilities || [];
  this.volume = volume || null;
  this.receiverType = chrome.cast.ReceiverType.CAST;
  this.ipAddress = this.displayStatus = this.isActiveInput = null;
};

chrome.cast.ReceiverDisplayStatus = function(statusText, appImages) {
  this.statusText = statusText;
  this.appImages = appImages;
  this.showStop = null;
};

chrome.cast.Session = function(sessionId, appId, displayName, appImages, receiver) {
  this.sessionId = sessionId;
  this.appId = appId;
  this.displayName = displayName;
  this.statusText = null;
  this.appImages = appImages;
  this.receiver = receiver;
  this.senderApps = [];
  this.namespaces = [];
  this.media = [];
  this.status = chrome.cast.SessionStatus.CONNECTED;
  this.transportId = '';
};

chrome.cast.SessionStatus = {
  CONNECTED: 'connected',
  DISONNECTED: 'disconnected',
  STOPPED: 'stopped',
};
chrome.cast.VERSION = [1, 2];


chrome.cast.DefaultActionPolicy = {
  CREATE_SESSION: 'create_session',
  CAST_THIS_TAB: 'cast_this_tab',
};

chrome.cast.ApiConfig = function(sessionRequest, sessionListener, receiverListener, opt_autoJoinPolicy, opt_defaultActionPolicy) {
  this.sessionRequest = sessionRequest;
  this.sessionListener = sessionListener;
  this.receiverListener = receiverListener;
  this.autoJoinPolicy = opt_autoJoinPolicy || chrome.cast.autoJoinPolicy.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = opt_defaultActionPolicy || chrome.cast.DefaultActionPolicy.CREATE_SESSION;
  this.customDialLaunchCallback = null;
};

chrome.cast.init = () => {
  console.log('init chromecast!');
  if (!chrome.cast.initialized) {
    // DEV: Originally this is where the API iframe is initialized.
    // However we are going to initialize castv2 here instead.

    chrome.cast.isAvailable = true;
    if (typeof window.__onGCastApiAvailable === 'function') {
      window.__onGCastApiAvailable(true);
    }
  }
};
chrome.cast.initialized = false;

if (document.readyState === 'complete') {
  chrome.cast.init();
} else {
  window.addEventListener('load', chrome.cast.init, false);
  window.addEventListener('DOMContentLoaded', chrome.cast.init, false);
}
global.chrome = chrome;
