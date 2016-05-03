import ApiConfig from './_Classes/ApiConfig';
import Error from './_Classes/Error';
import Image from './_Classes/Image';
import Receiver from './_Classes/Receiver';
import ReceiverDisplayStatus from './_Classes/ReceiverDisplayStatus';
import SenderApplication from './_Classes/SenderApplication';
import Session from './_Classes/Session';
import SessionRequest from './_Classes/SessionRequest';
import Volume from './_Classes/Volume';

const mdns = require('mdns');

// DEV: workaround for RPi (and apparently Ubuntu)
// https://github.com/agnat/node_mdns/issues/130#issuecomment-120731155

const sequence = [
  mdns.rst.DNSServiceResolve(),
  'DNSServiceGetAddrInfo' in mdns.dns_sd ? mdns.rst.DNSServiceGetAddrInfo() : mdns.rst.getaddrinfo({families:[0]}),
  mdns.rst.makeAddressesUnique()
];
const browser = mdns.createBrowser(mdns.tcp('googlecast'), {resolverSequence: sequence});

// DEV: apiConfig from initialize
let globalApiConfig;

export default class Cast {

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.AutoJoinPolicy
  static AutoJoinPolicy = {
    TAB_AND_ORIGIN_SCOPED: 'TAB_AND_ORIGIN_SCOPED',
    ORIGIN_SCOPED: 'ORIGIN_SCOPED',
    PAGE_SCOPED: 'PAGE_SCOPED',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.Capability
  static Capability = {
    VIDEO_OUT: 'VIDEO_OUT',
    VIDEO_IN: 'VIDEO_IN',
    AUDIO_OUT: 'AUDIO_OUT',
    AUDIO_IN: 'AUDIO_IN',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.DefaultActionPolicy
  static DefaultActionPolicy = {
    CREATE_SESSION: 'CREATE_SESSION',
    CAST_THIS_TAB: 'CAST_THIS_TAB',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.ErrorCode
  static ErrorCode = {
    CANCEL: 'CANCEL',
    TIMEOUT: 'TIMEOUT',
    API_NOT_INITIALIZED: 'API_NOT_INITIALIZED',
    INVALID_PARAMETER: 'INVALID_PARAMETER',
    EXTENSION_NOT_COMPATIBLE: 'EXTENSION_NOT_COMPATIBLE',
    EXTENSION_MISSING: 'EXTENSION_MISSING',
    RECEIVER_UNAVAILABLE: 'RECEIVER_UNAVAILABLE',
    SESSION_ERROR: 'SESSION_ERROR',
    CHANNEL_ERROR: 'CHANNEL_ERROR',
    LOAD_MEDIA_FAILED: 'LOAD_MEDIA_FAILED',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.isAvailable
  static isAvailable = true;

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.ReceiverAction
  static ReceiverAction = {
    CAST: 'CAST',
    STOP: 'STOP',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast.html#.ReceiverActionListener
  static ReceiverActionListener = class {};

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.ReceiverAvailability
  static ReceiverAvailability = {
    AVAILABLE: 'AVAILABLE',
    UNAVAILABLE: 'UNAVAILABLE',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.ReceiverType
  static ReceiverType = {
    CAST: 'CAST',
    HANGOUT: 'HANGOUT',
    CUSTOM: 'CUSTOM',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.SenderPlatform
  static SenderPlatform = {
    CHROME: 'CHROME',
    IOS: 'IOS',
    ANDROID: 'ANDROID',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.SessionStatus
  static SessionStatus = {
    CONNECTED: 'CONNECTED',
    DISCONNECTED: 'DISCONNECTED',
    STOPPED: 'STOPPED',
  };

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.VERSION
  static VERSION = [1, 2];

  static addReceiverActionListener = (listener) => {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast.html#.addReceiverActionListener
    console.log(listener);
  }

  static initialize = (apiConfig, successCallback, errorCallback) => {
    console.log(apiConfig);
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.initialize
    globalApiConfig = apiConfig;

    browser.on('serviceUp', (service) => {
      // TODO: Flush and update receiverList with new Receiver objects based on scan.
      console.log(service);
      // service.name = device name
      // service.address[0] = IP address
      // service.port = port

      // DEV: Notify listeners that we found cast devices
      apiConfig.receiverListener(chrome.cast.ReceiverAvailability.AVAILABLE);
      // DEV: Stop scanning.
      browser.stop();
    });
    browser.start();
  }

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.logMessage
  static logMessage = (message) => {
    console.info('CAST MSG:', message); // eslint-disable-line
  }

  static removeReceiverActionListener = (listener) => {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.removeReceiverActionListener
    console.log(listener);
  }

  static requestSession = (successCallback, errorCallback, opt_sessionRequest) => {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.requestSession
    console.log(successCallback, errorCallback, opt_sessionRequest);

    // TODO: Figure out how the sessionId is generated as well as appImages.
    // return new chrome.cast.Session(sessionId, gloalApiConfig.appId, displayName, appImages, receiver);
  }

  static requestSessionById = (sessionId) => {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.requestSessionById
    console.log(sessionId);
  }

  static setCustomReceivers = (receivers, successCallback, errorCallback) => {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.setCustomReceivers
    console.log(receivers, successCallback, errorCallback);
  }

  static setReceiverDisplayStatus = (receiver, successCallback, errorCallback) => {
    // TODO: https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.setReceiverDisplayStatus
    console.log(receiver, successCallback, errorCallback);
  }

  // https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.unescape
  static unescape = (escaped) => unescape(escaped);
}

// Static Classes
Cast.ApiConfig = ApiConfig;
Cast.Error = Error;
Cast.Image = Image;
Cast.Receiver = Receiver;
Cast.ReceiverDisplayStatus = ReceiverDisplayStatus;
Cast.SenderApplication = SenderApplication;
Cast.Session = Session;
Cast.SessionRequest = SessionRequest;
Cast.Volume = Volume;

// Extensions
Cast.media = {};
Cast.timeout = {};
