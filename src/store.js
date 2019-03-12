import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        header:{
            home:true,
            setting:false,
            find:false,
            video:false,
            myMusic:false,
        },
        audio :'', //audio标签
        nowtime :'',
        userMsg: [],  //用户信息
        showSongContent:false,  //控制显示歌词还是图片
        playing:false,   //是否播放
        timer:"", //定时器
        searchVal:'',
        searchPage:true
    },
    mutations:{// 修改共享数据方法
        setSearchPage(state,hide){
            state.searchPage = hide;
        },
        setTimer(state,clear){
            state.timer = clear;
        },
        setPlaying(state,Isplaying){ //修改播放状态
            state.playing = Isplaying;
        },
        homeHide(state,isHide){
            state.header.home = isHide;
        },
        setNowTime(state,time){
            state.nowtime = time
        },
        setUserMsg(state,userMsg){
            state.userMsg = userMsg
        },
        // 控制显示歌词还是图片
        setShowSongContent(state,set){
            state.showSongContent = set;
        },
        setSearchVal(state,searchVal){
            state.searchVal = searchVal;
        }
      },
    getters : {
        getSearchPage(state){
            return state.searchPage;
        },
        getTimer(state){
            return state.timer
        },
        getPlaying(state){
            return state.playing;
        },
        homeHideGet(state){
            return state.header.home;
        },
        audioSrc(state){  //获取当前audio
            return state.audio;
        },
        nowTime(state){  //获取当前播放时间
            return state.nowtime;
        },
        getUserMsg(state){
            return state.userMsg;
        },
        // 控制显示歌词还是图片
        getShowSongContent(state){
            return state.showSongContent;
        },
        getSearchVal(state){
            return state.searchVal;
        }
    },
    actions : {
        setTimer(state,clear){
            state.timer = clear;
        },
    }
})