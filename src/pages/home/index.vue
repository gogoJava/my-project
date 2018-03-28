<template>
  <div class="home-page">
    <!--<div class="home-top">-->
      <!--<span class="content-msg">仿网易云音乐</span>-->
    <!--</div>-->
    <div class="weui-tab">
      <div class="weui-navbar">
        <block v-for='(item,index) in tabs' :key='index'>
          <div :id="index" :class="{'weui-bar__item_on': activeIndex === index}" class="weui-navbar__item" @click="tabClick(index)">
            <div class="weui-navbar__title">{{item}}</div>
          </div>
        </block>
        <div class="weui-navbar__slider" :class="navbarSliderClass"></div>
      </div>
      <div class="weui-tab__panel">
        <div class="weui-tab__content" :hidden="activeIndex !== 0">选项一的内容</div>
        <div class="weui-tab__content" :hidden="activeIndex !== 1">选项二的内容</div>
        <div class="weui-tab__content" :hidden="activeIndex !== 2">选项三的内容</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tabs: ['选项一', '选项二', '选项三'],
        activeIndex: 0,
        fontSize: 30
      }
    },
    components: {},
    computed: {
      navbarSliderClass () {
        if (this.activeIndex === 0) {
          return 'weui-navbar__slider_0'
        }
        if (this.activeIndex === 1) {
          return 'weui-navbar__slider_1'
        }
        if (this.activeIndex === 2) {
          return 'weui-navbar__slider_2'
        }
      }
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
      },
      tabClick (index) {
        this.activeIndex = index
      }
    },

    created () {
      // 调用应用实例的方法获取全局数据
      this.getUserInfo()
    }
  }
</script>

<style lang="postcss" scoped>
  /*.home-top {*/
    /*text-align: left;*/
    /*background: #e74c3c;*/
    /*color: #fff;*/
    /*padding: 15px;*/
    /*font-size: 24px;*/
    /*font-weight: bold;*/
    /*font-family: DFKai-SB;*/
  /*}*/
  .weui-navbar__slider_0 {
    left: 29rpx;
    transform: translateX(0);
  }
  .weui-navbar__slider_1 {
    left: 29rpx;
    transform: translateX(250rpx);
  }
  .weui-navbar__slider_2 {
    left:29rpx;
    transform: translateX(500rpx);
  }
</style>
