'use strict';

const path = require('path');
const dayjs = require('dayjs');

exports.get = function () {
  const _config = {
    log: {
      file: {
        fileName: path.join(__dirname, '../logs/electron-' + dayjs().format('YYYY-MM-DD') + '.log'),
        level: 'silly', // error, warn, info, verbose, debug, silly
        format: '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}] {text}',
        maxSize: '1048576' // 1048576 (1mb) by default.
      }
    },
    windowsOption: {
      width: 800,
      height: 600,
      minWidth: 800,
      minHeight: 600,
      webPreferences: {
        //webSecurity: false,
        nodeIntegration: true,
        preload: path.join(__dirname, 'preload.js')
      },
      //frame: false,
      //titleBarStyle: 'hidden'
    },
    egg: {
      title: 'electron-egg',
      env: 'prod',
      port: 7068,
      hostname: '0.0.0.0',
      workers: 1
    }
  }

  return _config;
};

exports.setup = function () {
  return true;
};

exports = module.exports;