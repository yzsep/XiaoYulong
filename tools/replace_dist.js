'use strict';
const path = require('path');
const fs = require('fs');
const fsPro = require('fs-extra');

console.log('[electron] [replace_dist] moving frontend asset to egg public dir');
console.log('[electron] [replace_dist] start');
// argv
let distDir = '';
for (let i = 0; i < process.argv.length; i++) {
  const tmpArgv = process.argv[i]
  if (tmpArgv.indexOf('--dist_dir=') !== -1) {
    distDir = tmpArgv.substr(11)
  }
}

const fileExist = (filePath) => {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
};

const sourceDir = path.normalize(distDir);
const targetDir = path.normalize('./app/public');
const sourceIndexFile = path.normalize(sourceDir + '/index.html');
const targetIndexFile = path.normalize( './app/view/index.ejs');
if (!fileExist(sourceIndexFile)) {
  console.log('[electron] [replace_dist] ERROR source dir is empty!!!');
  return
}

console.log('[electron] [replace_dist] delete target dir:', targetDir);
fs.rmdirSync(targetDir, {recursive: true});

console.log('[electron] [replace_dist] copy :', sourceDir);
fsPro.copySync(sourceDir, targetDir);

// replace ejs
fsPro.copySync(sourceIndexFile, targetIndexFile);
console.log('[electron] [replace_dist] replace index.ejs');

console.log('[electron] [replace_dist] end');

