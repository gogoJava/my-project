import Vue from 'vue'
import App from './App'
import '../static/weui/weui.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: [
      '^pages/home/home'
    ], // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      backgroundColor: '#eeeeee',
      navigationBarTitleText: 'Demo',
      navigationBarTextStyle: 'black'
    }
  }
}
