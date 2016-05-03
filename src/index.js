import Cast from './cast';

global.chrome = {
  cast: Cast, // eslint-disable-line
};

global.requestHandler = (receiverList) =>
  new Promise((resolve) => resolve(receiverList[0]));

module.exports = (requestHandler) => {
  global.requestHandler = requestHandler;
};
