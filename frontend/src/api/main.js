import request from '@/utils/request'
// import storage from 'store'

const mainApi = {
  outApi: '/api/v1/outApi',
  openDir: '/api/v1/example/openLocalDir',
  uploadFile: '/api/v1/example/uploadFile',
  executeJS: '/api/v1/example/executeJS',
  setShortcut: '/api/v1/example/setShortcut',
  autoLaunchEnable: '/api/v1/example/autoLaunchEnable',
  autoLaunchDisable: '/api/v1/example/autoLaunchDisable',
  autoLaunchIsEnabled: '/api/v1/example/autoLaunchIsEnabled',
  openSoftware: '/api/v1/example/openSoftware',
}

/**
 * outApi
 */
export function outApi (uri, parameter) {
  return request({
    url: mainApi[uri],
    method: 'post',
    data: parameter
  })
}

/**
 * local api
 */
export function localApi (uri, parameter) {
  return request({
    url: mainApi[uri],
    method: 'post',
    data: parameter
  })
}

/**
 * uploadFile
 */
export function uploadFile (parameter) {
  return request({
    url: mainApi.uploadFile,
    method: 'post',
    data: parameter
  })
}