/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: { template: '<div><router-view /></div>' },
    children: [
      {
        path: 'fileOpenDir',
        name: 'FileOpenDir',
        component: () => import('@/views/example/OpenDir')
      },
      {
        path: 'uploadFile',
        name: 'UploadFile',
        component: () => import('@/views/example/UploadFile')
      },
      {
        path: 'ipc',
        name: 'Ipc',
        component: () => import('@/views/example/Ipc')
      },
      {
        path: 'setting',
        name: 'Setting',
        component: () => import('@/views/Setting')
      }
    ]
  }
]
