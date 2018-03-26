<template>
  <div class="home-page">
    <div class="home-top">
      <span class="content-msg">仿网易云音乐</span>
    </div>
    <!--<tab>-->
    <!--<tabitem selected>已发货</tabitem>-->
    <!--<tabitem>未发货</tabitem>-->
    <!--<tabitem>全部订单</tabitem>-->
    <!--</tab>-->
  </div>
</template>

<script>
  import card from '@/components/card'

  export default {
    data () {
      return {
        motto: 'Hello World',
        userInfo: {}
      }
    },

    components: {
      card
    },

    methods: {
      getUserInfo () {
        // 调用登录接口
        wx.login({
          success: () => {
            wx.getUserInfo({
              success: (res) => {
                this.userInfo = res.userInfo
              }
            })
          }
        })
      }
    },

    created () {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    }
  }
</script>

<style lang="postcss" scoped>
  .home-top {
    text-align: left;
    background: #e74c3c;
    color: #fff;
    padding: 15px;
    font-size: 24px;
    font-weight: bold;
    font-family: DFKai-SB;
  }
</style>
