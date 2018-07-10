/**
* Created by OXOYO on 2018/7/10.
*
*/

<style scoped lang="less" rel="stylesheet/less">
  .platform-home {
    background: #f5f7f9;
    height: 100%;
    width: 100%;
    border: none;
  }
</style>

<template>
  <!-- 系统首页 -->
  <div class="platform-home">
    <HomeNav></HomeNav>
    <HomeMain></HomeMain>
  </div>
</template>

<script>
import HomeNav from '../components/HomeNav.vue'
import HomeMain from '../components/HomeMain.vue'

export default {
  name: 'Home',
  components: {
    HomeNav,
    HomeMain
  }
}
</script>
