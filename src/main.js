import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import {
  ColorPicker,
  Input,
  Button,
  Message,
  Select,
  Option,
  Icon,
  Backtop
} from 'element-ui'
if (location.host !== 'oldcabbage.net3v.net') {
  window.location.href = 'http://oldcabbage.net3v.net/novel-tool/index.html'
};
Vue.use(ColorPicker)
Vue.use(Input)
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Icon)
Vue.use(Backtop)
// 由于Message组件并没有install 方法供Vue来操作的，是直接返回的，因此按照官方文档单独引入的方法是
// 会报错的，需要给 Message 添加 install 方法
Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}
Vue.use(Message)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
