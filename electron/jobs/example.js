
const Utils = require('ee-core/module/utils');
const Loader = require('ee-core/module/loader');
const { logger } = require('ee-core/module/log');
const test = Loader.requireModule('./test');


let baseDir = Utils.getBaseDir();
logger.info('[example] baseDir -------- ', baseDir);

let helloRes = test.hello();
logger.info('[example] helloRes -------- ', helloRes);