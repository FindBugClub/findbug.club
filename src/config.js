/**
 * Created by OXOYO on 2018/7/10.
 *
 */

// 服务配置
export const Serv = {
  development: '//localhost:3000/api',
  production: '//localhost:3000/api'
}

// cookie相关配置
export const Cookie = {
  prefix: 'FB-',
  keys: {
    account: 'account',
    token: 'key',
    userType: 'user-type',
    userCode: 'user-code'
  },
  getItem: function (key) {
    return key ? this.prefix + this.keys[key] : ''
  }
}

// 系统配置
export const System = {
  version: '1.0.1',
  name: 'findbug.club',
  title: 'findbug.club',
  subtitle: 'findbug.club',
  logo: './assets/logo.png',
  copyright: '© 2018'
}
