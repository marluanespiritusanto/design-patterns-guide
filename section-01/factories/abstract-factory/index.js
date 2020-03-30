const iPhoneFactory = require("./iphone-factory");

const iPhoneXR = iPhoneFactory.create("iPhone Xr", "xr-0001");
const iPhoneXS = iPhoneFactory.create("iPhone Xs", "xs-0002");

iPhoneXR.displayConfig();
iPhoneXS.displayConfig();
