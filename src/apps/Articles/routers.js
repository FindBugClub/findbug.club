/**
 * Created by OXOYO on 2017/12/5.
 */

export default {
  path: 'Articles',
  name: 'platform.home.Articles',
  component: resolve => require(['./pages/Index'], resolve),
  meta: {
    title: 'Articles',
    requiresAuth: true,
    scrollToTop: true
  }
}
