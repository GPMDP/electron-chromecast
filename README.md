Electron Chromecast
------------------

[![Join the chat at https://gitter.im/GPMDP/electron-chromecast](https://badges.gitter.im/GPMDP/electron-chromecast.svg)](https://gitter.im/GPMDP/electron-chromecast?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Build Status](https://travis-ci.org/GPMDP/electron-chromecast.svg?branch=master)](https://travis-ci.org/GPMDP/electron-chromecast)

> An implementation of the chrome.cast API in electron

## Usage

### Basic

You must consume `electron-chromecast` from within your renderer process, preferably in a `preload` script.

```js
// ES5
require('electron-chromecast');

// ES6
import 'electron-chromecast';
```

This will inject the `chrome.cast` variables and the associated methods globally automatically.  
By default when requesting a new [`Session`](https://developers.google.com/cast/docs/reference/chrome/chrome.cast.Session) through [`chrome.cast.requestSession`](https://developers.google.com/cast/docs/reference/chrome/chrome.cast#.requestSession) you will be provided an active Session with the first Chromecast Device we find.  To change this behaviour read the Advanced section.


### Advanced

```js
// ES5
var chromecast = require('electron-chromecast');

chromecast(function (receivers) {
    return new Promise(function (resolve, reject) {
        // Do some logic to choose a receiver, possibly ask the user through a UI
        var chosenReceiver = receivers[0];
        resolve(chosenReceiver);
    });
});

// ES6
import chromecast from 'electron-chromecast';

chromecast((receivers) =>
    new Promise((resolve, reject) => {
        // Do some logic to choose a receiver, possibly ask the user through a UI
        const chosenReceiver = receivers[0];
        resolve(chosenReceiver);
    });
);
```

The function returned from `electron-chromecast` should be called with a single parameter; a function that returns a promise that will eventually resolve with a single receiver.  This receiver is the one that will be used by `chrome.cast`.

## Installation

Note: Behind the scenes we use MDNS which has some [system requirements](https://github.com/agnat/node_mdns#installation), make sure your system has the required dependencies.

## TODO
- [ ] All the TODO's in code (We only implemented the functionality required by Google Play Music, however this should be sufficient for MOST applications)

**TODO *(But totally not needed)*:** The `chrome.cast.games` API
