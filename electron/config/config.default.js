'use strict';

const dayjs = require('dayjs');

/**
 * 默认配置
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Ee.EeAppConfig}
   **/
  const config = {};

  /* 应用模式配置 */
  config.developmentMode = {
    default: 'vue',
    mode: {
      vue: {
        hostname: 'localhost',
        port: 8080
      },
      react: {
        hostname: 'localhost',
        port: 3000
      },
      html: {
        hostname: 'localhost',
        indexPage: 'index.html'
      },
    }
  };

  /* 开发者工具 */
  config.openDevTools = false;

  /* 应用程序顶部菜单 */
  config.openAppMenu = true;

  /* 加载loading页 */
  config.loadingPage = true;

  /* 主窗口 */
  config.windowsOption = {
    width: 980,
    height: 650,
    minWidth: 800,
    minHeight: 650,
    webPreferences: {
      //webSecurity: false,
      contextIsolation: false, // 设置此项为false后，才可在渲染进程中使用electron api
      nodeIntegration: true,
    },
    frame: true,
    //titleBarStyle: 'hidden'
  };

  /* ee框架日志 */
  config.logger = {
    appLogName: `ee-${dayjs().format('YYYY-MM-DD')}.log`, 
    errorLogName: `ee-error-${dayjs().format('YYYY-MM-DD')}.log` 
  }

  /* 远程web地址 (可选) */
  config.remoteUrl = {
    enable: false, // 是否启用
    url: 'https://discuz.chat/' // Any web url
  };

  /* 内置socket服务 */
  config.socketServer = {
    port: 7070, // 默认端口
    isDynamic: false // 如果值为false，框架默认使用port端口（如果默认端口被使用，则随机获取一个）；如果为true，默认端口无效，框架随机生成
  };

  /* 应用自动升级 (可选) */
  config.autoUpdate = {
    windows: false, // windows平台
    macOS: false, // macOs 需要签名验证
    linux: false, // linux平台
    options: {
      provider: 'generic', // or github, s3, bintray
      url: 'http://kodo.qiniu.com/' // resource dir, end with '/'
    },
    force: false, // 强制更新（运行软件时，检查新版本并后台下载安装）
  };

  /* 被浏览器唤醒 (可选) */
  config.awakeProtocol = {
    protocol: 'ee', // 自定义协议名（默认你的应用名称-英文）
    args: []
  };

  /* 托盘 (可选)  */
  config.tray = {
    title: 'EE程序', // 托盘显示标题
    icon: '/public/images/tray_logo.png' // 托盘图标
  }

  return {
    ...config
  };
}
