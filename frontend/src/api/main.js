import request from '@/utils/request'

const eggApiroute = {
  uploadFile: '/api/example/uploadFile',
  executeJS: '/api/example/executeJS',
  autoLaunchEnable: '/api/example/autoLaunchEnable',
  autoLaunchDisable: '/api/example/autoLaunchDisable',
  autoLaunchIsEnabled: '/api/example/autoLaunchIsEnabled',
  openSoftware: '/api/example/openSoftware',
  messageShow: '/api/example/messageShow',
  messageShowConfirm: '/api/example/messageShowConfirm',
  dbOperation: '/api/example/dbOperation',
  testElectronApi: '/api/example/testElectronApi',
}

const ipcApiRoute = {
  messageShow: 'controller.example.messageShow',
  messageShowConfirm: 'controller.example.messageShowConfirm',
  selectFolder: 'controller.example.selectFolder',
  openDirectory: 'controller.example.openDirectory',
}

/**
 * 访问egg api
 */
const requestEggApi = (uri, parameter) => {
  return request({
    url: eggApiroute[uri],
    method: 'post',
    data: parameter
  })
}

export {
  requestEggApi,
  ipcApiRoute
}