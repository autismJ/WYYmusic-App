import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import footerNavigator from '@/components/footer/footer-bar'
import songSheet from '@/components/songSheet/songSheet'
import music from '@/components/music/music'
import setting from '@/components/setting/setting'
import myMusic from '@/components/myMusic/myMusic'
import find from '@/components/find/find-header'
import video from '@/components/video/video'
// const video = () => import('@/components/video/video')
import notFound from '@/components/notFound/notFound'
import search from '@/components/home/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: footerNavigator,
    },
    {
      path: '/songSheet/:uid', 
      component: songSheet
    },
    {
      path: '/music/:uid',
      component: music
    },
    {
      path: '/setting',
      component: setting
    },
    {
      path: '/myMusic',
      component: myMusic
    },
    {
      path: '/find',
      component: find
    },
    {
      path: '/video',
      component: video
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/*',
      component: notFound
    },
  ]
})
