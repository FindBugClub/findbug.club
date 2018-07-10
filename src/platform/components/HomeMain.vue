/**
* Created by OXOYO on 2018/7/10.
*
*/

<style scoped lang="less" rel="stylesheet/less">
  .home-main {
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
    background: #fff;
  }
</style>

<template>
  <!-- 子路由 -->
  <div class="home-main">
    <h1>TODO HomeMain</h1>
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HomeMain'
}
</script>
