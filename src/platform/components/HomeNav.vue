/**
* Created by OXOYO on 2018/7/10.
*
*/

<style lang="less" rel="stylesheet/less">
  .home-nav {
    width: 100%;
    padding: 12px 0;
    color: rgba(255,255,255,0.75);
    background: #24292e;
    text-align: center;

    .nav-main {
      width: 90%;
      max-width: 1400px;
      min-width: 960px;
      margin: 0 auto;
      text-align: left;

      .nav-logo {
        display: inline-block;
        vertical-align: middle;

        &.nav-img {
          width: 30px;

          .logo-img {
            display: inline-block;
          }
        }
        &.nav-text {
          .logo-text {
            display: inline-block;
          }
        }

        .logo-img {
          display: none;
          width: 100%;
        }
        .logo-text {
          display: none;
          margin-right: 10px;
          font-size: 24px;
          font-weight: bold;

          .part-one {
            display: inline-block;
            color: #fff;
          }
          .part-two {
            display: inline-block;
            color: red;
          }
        }
      }
      .nav-search {
        display: inline-block;
        vertical-align: middle;

        input {
          background: rgba(255, 255, 255, 0.125);
          border: transparent;

          &:focus {
            background: #fff;
          }
        }
      }
      .nav-menu {
        float: right;
        display: inline-block;
        vertical-align: middle;

        .menu-item {
          display: inline-block;
          padding: 10px 0;
          margin: 0 5px;
        }
      }
    }
  }
</style>

<template>
  <div class="home-nav">
    <div class="nav-main">
      <div class="nav-logo nav-text">
        <img class="logo-img" :src="$Config.System.logo" :alt="$Config.System.title">
        <div class="logo-text">
          <div class="part-one">Find</div>
          <div class="part-two">Bug</div>
        </div>
      </div>
      <div class="nav-search">
        <Input icon="search">
        </Input>
      </div>
      <div class="nav-menu">
        <div class="menu-item">创建</div>
        <div class="menu-item">登录</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNav'
}
</script>
