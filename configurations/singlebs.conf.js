
var merge = require("deepmerge");
var wdioConf = require("./wdio.conf.js");
exports.config = merge(wdioConf.config, {
  /*   services: ['browserstack'],
    user: process.env.lakshmisarithava1,
    key: process.env.rv8PD65oDji5pEDU9tSW,
    
    browserstackLocal: true, */
  specs: ["./Tests/Leads/Homepageleads.js"],
  port: 4723,

  services: ["browserstack" , "appium"],
  user: process.env.BROWSERSTACK_USERNAME || "lakshmisarithava1",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "rv8PD65oDji5pEDU9tSW",
  capabilities: [{
    name: 'single_appium_test',
    build: 'webdriver-browserstack',
    device: 'Samsung Galaxy S7',
    browserName: 'android',
  //  app: process.env.BROWSERSTACK_APP_ID || 'bs://<hashed app-id>',
    'browserstack.debug': true
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3
})


