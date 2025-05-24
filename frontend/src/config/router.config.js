/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/file',
    component: { template: '<div><router-view /></div>' },
    children: [
      {
        path: 'openDir',
        name: 'FileOpenDir',
        component: () => import('@/views/file/OpenDir')
      }
    ]
  },
  {
    path: '/testc',
    component: { template: '<div><router-view /></div>' },
    children: [
      {
        path: 'testc',
        name: 'testc',
        component: { template: '<div><h1>这是设置内一</h1></div>' }
      },
      {
        path: '/testd',
        name: 'testd',
        component: { template: '<div><h1>这是设置内二</h1></div>' }
      }
    ]
  },
  { path: '/testa', component: () => import('@/views/Contenta') },
  { path: '/testb', component: () => import('@/views/Contentb') }
]