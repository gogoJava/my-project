<template>
  <div class="container">
    <div class="userinfo">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl"/>
      <span class="content-msg">IT之家</span>
    </div>
    <div class="content-summary">IT之家官方账号，爱科技，爱这里。IT人的家园，IT界的烟火。</div>
    <div class="content-list">
      <div style="padding-bottom: 5px;">注：navigationStyle 只在 app.json 中生效。开启 custom 后，低版本客户端需要做好兼容。开发者工具基础库版本切到 1.7.0（不代表最低版本，只供调试用） 可方便切到旧视觉</div>
      <div class="tip">接受一个数组，每一项都是字符串，来指定小程序由哪些页面组成。每一项代表对应页面的【路径+文件名】信息，数组的第一项代表小程序的初始页面。小程序中新增/减少页面，都需要对 pages 数组进行修改。</div>
    </div>
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

<style scoped>
.userinfo {
  text-align: center;
  background: #fff;
  padding-top: 15px;
}

.userinfo-avatar {
  width: 42px;
  height: 42px;
  margin: 2px;
  border-radius: 50%;
  /*float: left;*/
}

.content-msg {
  position: relative;
  top: -10px;
  font-weight: bold;
  padding-left: 15px;
}

.content-list {
  background: #fff;
  position: relative;
  top: 5px;
  text-align: left;
  font-size: 16px;
  padding: 15px;
}

.tip {
  padding-top: 5px;
  border-top: 1px solid #eeeeee;
}

.content-summary {
  font-size: 14px;
  color: darkgrey;
  padding: 0px 30px 15px 30px;
  text-align: center;
  background: #fff;
}

</style>
