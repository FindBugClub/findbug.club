/**
 * Created by OXOYO on 2017/12/5.
 */

export default {
  layout: {
    router: {
      // 当前激活路由
      activeName: 'platform.Home.Articles',
      // home页路由
      home: 'platform.Home',
      list: [
        {
          id: 200,
          index: 200,
          name: 'platform.Home.Articles',
          moduleName: 'Articles',
          icon: '',
          title: '文章',
          // 是否启用
          enable: true
        }
      ]
    }
  }
}
