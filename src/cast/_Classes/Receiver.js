// https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Receiver

export default class Receiver {
  constructor(label, friendlyName, opt_capabilities = [], opt_volume = null) {
    this.capabilities = opt_capabilities;
    this.displayStatus = null;
    this.friendlyName = friendlyName;
    this.label = label;
    this.volume = opt_volume;

    this.receiverType = chrome.cast.ReceiverType.CAST;

    // DEV: Properties not in spec but in crx
    this.ipAddress = null;
    this.isActiveInput = null;
  }
}
