/*************************************************
 ** preload为预加载模块，该文件将会在程序启动时加载 **
 *************************************************/
// const {
//   MessageChannel,
//   ProcessManager,
//   BrowserService
// } = require('electron-re');
const path = require('path');
const Jobs = require('ee-core/module/jobs');
const Utils = require('ee-core/module/Utils');
const Log = require('ee-core/module/log');

/**
 * 预加载模块入口
 * @param {Object} app - 全局app对象
 */
module.exports = async (app) => {

  //已实现的功能模块，可选择性使用和修改
  const trayAddon = app.addon.tray;
  const securityAddon = app.addon.security;
  const awakenAddon = app.addon.awaken;
  const autoUpdaterAddon = app.addon.autoUpdater;
  
  trayAddon.create();
  securityAddon.create();
  awakenAddon.create();
  autoUpdaterAddon.create();

  // Object.keys(Log.logger)
  // let personKeys3 = []
  // for (var prop in Log.logger) {
  //   personKeys3.push(prop)
  // }
  // console.log('logger:', personKeys3);
  Log.info('dddddddddd')

  // pm
  // ProcessManager.openWindow();
  // const exampleFile = path.join(app.config.baseDir, 'jobs', 'example.js');
  // const myService = new BrowserService('exampleJob', exampleFile);
  // await myService.connected();

  // logger.info("[main] process: ", process);
  // console.log("isRenderer: ", Utils.isRenderer());
  // console.log("isMain: ", Utils.isMain());
  // console.log("isForkedChild: ", Utils.isForkedChild());
  // let res = require('../jobs/example') 
  // console.log('res:', res);

  // let opt = {
  //   dev: true,
  //   type: 'child', // renderer 
  //   path: 'example.js',
  //   winOptions: {
  //     show: true
  //   },
  //   childOptions: {}
  // }
  // let myJob = new Jobs();
  // myJob.create('exampleJob', opt);
}