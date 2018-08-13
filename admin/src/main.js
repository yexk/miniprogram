// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang'
// import element ui
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// global css
import '@/styles/index.scss'

Vue.config.productionTip = false

Vue.use(Element, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App)
})
