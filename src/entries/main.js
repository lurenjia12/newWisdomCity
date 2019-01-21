// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'

import store from '@/store'
import router from '@/router'

import App from '../App'
import axios from '@/configs/axios'
// import SUCCESS from '@/constants/response-code.js'

import '../scss/_my-style.scss'


// import $ from 'jquery'
// import _ from 'lodash'


// window.$ = $
// window._ = _





Vue.use(Element)
Vue.use(axios)


Vue.config.productionTip = (process.env.NODE_ENV === 'development')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data() {
    return {
      // 接口成功code
      // codeSuccess: SUCCESS,
      // 下载frame
      // downloadFrame: document.getElementById('downloadFrame')
    }
  },
  template: '<App/>',
  components: { App }
})


// this.$http[method](api,params).then(res=>{
//   if(res.code===this.$root.codeSuccess) {

//   }else{
//
//   }
// },()=>{

// })
