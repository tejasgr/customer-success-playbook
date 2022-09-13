#!/usr/bin/env node
/**
 * app.js
 *
 * Use `app.js` to run your app.
 *
 * For more information see:
 *   https://sailsjs.com/anatomy/app.js
 */
 import HttpStatus from 'http-status-codes';
 import sails from 'sails';
 import rc from 'sails/accessible/rc';
 
 const { custom: logger = console } = require('./config/log').log;
 
 console.error = console.log = logger.log || console.log;
 
 const assets = './dist/assets';

 (async () => {
   try {
    global.HttpStatus = HttpStatus;
    const config = rc('sails');
    config.appPath = __dirname;
    config.paths = Object.assign(config.paths || {}, {
      public: assets,
    });
    require('dotenv/config');
    // lifting the sails app after loading all env
    console.log("TEST_ENV_VAR: ", process.env.TEST_ENV_VAR);
    sails.lift(config);
   } catch (err) {
    logger.error("App:Failed to lift the sails app", err);
   }
 })();
 