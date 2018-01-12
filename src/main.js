import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
import 'common/css/index.styl'

// 解决移动端点击事件300ms延迟
fastclick.attach(document.body)
Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: require('common/images/psb.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
