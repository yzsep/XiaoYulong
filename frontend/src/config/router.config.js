/**
 * 基础路由
 * @type { *[] }
 */
 import {AppSider, DemoMenu} from '@/layouts'

 const RouteView = {
   name: 'RouteView',
   render: (h) => h('router-view')
 }
export const constantRouterMap = [
  {
    path: '/',
    component: AppSider,
    children: [
      {
        path: '/demo',
        name: 'Demo',
        component: DemoMenu,
        children: [
          {
            path: '/demo/file/index',
            name: 'DemoFileIndex',
            component: () => import('@/views/demo/file/Index')
          },
          {
            path: '/demo/socket/index',
            name: 'DemoSocketIndex',
            component: () => import('@/views/demo/socket/Index')
          },
          {
            path: '/demo/db/index',
            name: 'DemoDBIndex',
            component: () => import('@/views/demo/db/Index')
          },
          {
            path: '/demo/windowview/index',
            name: 'DemoWindowViewIndex',
            component: () => import('@/views/demo/windowview/Index')
          },
          {
            path: '/demo/window/index',
            name: 'DemoWindowIndex',
            component: () => import('@/views/demo/window/Index')
          },
          {
            path: '/demo/extension/index',
            name: 'DemoExtensionIndex',
            component: () => import('@/views/demo/extension/Index')
          },
          {
            path: '/demo/notification/index',
            name: 'DemoNotificationIndex',
            component: () => import('@/views/demo/notification/Index')
          },
          {
            path: '/demo/powermonitor/index',
            name: 'DemoPowerMonitorIndex',
            component: () => import('@/views/demo/powermonitor/Index')
          },
          {
            path: '/demo/screen/index',
            name: 'DemoScreenIndex',
            component: () => import('@/views/demo/screen/Index')
          },
          {
            path: '/demo/theme/index',
            name: 'DemoThemeIndex',
            component: () => import('@/views/demo/theme/Index')
          },                               
          {
            path: '/demo/shortcut/index',
            name: 'DemoShortcutIndex',
            component: () => import('@/views/demo/shortcut/Index')
          },
          {
            path: '/demo/software/open',
            name: 'DemoSoftwareIndex',
            component: () => import('@/views/demo/software/Index')
          },
          {
            path: '/demo/system/index',
            name: 'DemoSystemIndex',
            component: () => import('@/views/demo/system/Index')
          },
          {
            path: '/demo/testapi/index',
            name: 'DemoTestApiIndex',
            component: () => import('@/views/demo/testapi/Index')
          },
        ]  
      },
      {
        path: '/other/index',
        name: 'OtherIndex',
        component: () => import('@/views/other/Index')
      }
    ]
  }
]
