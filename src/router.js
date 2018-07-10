// FIXME 动态加载路由
import state from './store/platform/state'
const router = state.layout.router
const routerList = router.list
const childrenRouter = []
// 解析menuList
routerList.map(item => {
  if (item.enable) {
    let moduleName = item.moduleName
    try {
      // 加载路由
      let module = require('./apps/' + moduleName + '/routers.js')
      let moduleRouter = module.default
      childrenRouter.push(moduleRouter)
    } catch (e) {
      console.warn('Load', './apps/' + moduleName + '/routers.js', 'failed.')
    }
  }
})

export default [
  // 平台首页
  {
    path: '/',
    name: 'platform.Home',
    component: resolve => require(['./platform/pages/Home'], resolve),
    meta: {
      title: '首页',
      requiresAuth: false,
      scrollToTop: true
    },
    children: [
      ...childrenRouter
    ]
  }
]
