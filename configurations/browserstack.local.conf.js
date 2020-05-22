var browserstack = require("browserstack-local");
var merge = require("deepmerge");
var wdioConf = require("../wdio.conf.js");
exports.config = merge(wdioConf.config, {
  /*   services: ['browserstack'],
    user: process.env.lakshmi,
    key: process.env.rv8PD65o,
    
    browserstackLocal: true, */

    services: ["browserstack" , "appium"],
  
  user: process.env.BROWSERSTACK_USERNAME || "lakshmisari***",
  key: process.env.BROWSERSTACK_ACCESS_KEY || "***********",
  browserstackLocal: true,

  maxInstances: 6,
  
  specs: ["./Tests/Leads/Homepageleads.js"],


 /* browserstackLocal: false,
  maxInstances: 10,
  commonCapabilities: {
    name: 'parallel_appium_test',
    build: 'webdriver-browserstack',
    browserName: 'android',
    app: process.env.BROWSERSTACK_APP_ID || 'bs://<hashed app-id>',
    'browserstack.debug': true
  },

  capabilities: [{
    device: 'Google Pixel'
  }, {
    device: 'Samsung Galaxy S7'
  }, {
    device: 'Samsung Galaxy S6'
  }, {
    device: 'Google Nexus 9'
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3, */


   capabilities: [
    
   {
      browser: "firefox"
    },

    { browser: "internet explorer" },
    {
      browser: "safari"
    }, 
   
    
  ],
  //host: 'hub.browserstack.com',

  //Code to start browserstack local before start of test
  onPrepare: function(config, capabilities) {
    console.log("Connecting local");
    return new Promise(function(resolve, reject) {
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({ key: exports.config.key }, function(error) {
        if (error) return reject(error);
        console.log("Connected. Now testing...");

        resolve();
      });
    });
  },

  //Code to stop browserstack local after end of test
  onComplete: function(capabilties, specs) {
    exports.bs_local.stop(function() {});
  }
},
  { clone: false }) ;
