// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import  '../static/iconFont/iconFont.css'

// 引入mint-ui Swipe组件
import Mint from'mint-ui'
import'mint-ui/lib/style.css'

Vue.use(Mint);
import {Swipe,SwipeItem,Cell,Checklist } from 'mint-ui'

Vue.component(Cell.name,Cell)
Vue.component(Checklist.name,Checklist);
// infiniteScroll;
import { InfiniteScroll } from 'mint-ui';
Vue.use( InfiniteScroll )

import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);

Vue.component(TabContainerItem.name, TabContainerItem);

import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

// 注册
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);

// import '../node_modules/swiper/dist/css/swiper.css'
// import Swiper from "swiper"
// import '../node_modules/swiper/dist/js/swiper.js'
// import '../node_modules/swiper/dist/js/swiper.min.js'

// Vue.use(Swiper)
// console.log(Swiper)


// 引入 axios 库
import axios from "axios"
// 跨域保存 session值
axios.defaults.withCredentials = true
// 在Vue的原型对象中添加方法
Vue.prototype.axios = axios

Vue.filter("s_to_hours",function(s){
  var h;
  h = s/60;
  s = s % 60;
  s = Math.floor(s);
  h = Math.floor(h);
  h += '';
  s += '';
  if( h.length == 1){
    h = '0' + h
  }
  if( s.length == 1){
    s = '0' + s;
  }
  return h + ':' + s;
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
