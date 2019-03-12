<template>
    <div class="app-music">
        <header>
            <div class="app-songSheet mui-bar mui-bar-nav">
                <router-link to="/home" class="header-return"></router-link>
                <div class="tit">
                    <i class="i1">{{nowSong.songName}}</i>
                    <i class="i2">{{nowSong.uname}}</i>
                </div>
                <div class="right-icon">
                    <a href="#">
                        <div class="circel-three">
                            <i></i>
                            <i></i>
                            <i></i>
                        </div>
                    </a>
                    <a href="#">
                        <div class="header-music">
                            <i class="i1"></i>
                            <i class="i2"></i>
                            <i class="i3"></i>
                            <i class="i4"></i>
                        </div>
                    </a>
                </div>
            </div>
        </header>
        <div class="songImg" id="songText"  v-if="this.$store.getters.getShowSongContent">
             <music-content ref="musicContent" :nowSong="nowSong"></music-content>
        </div>
        <div class="songText" id="songImg" v-else >
             <music-img :nowSong="nowSong"></music-img>
        </div>
        <!-- foter -->
        <footer class="mui-bar mui-bar-tab tabble-bar">
                <!-- progress bar -->
                <div class="progress">
                    <span>{{this.$store.getters.nowTime | s_to_hours}}</span>
                     <div class="mui-input-row mui-input-range">
		                <input type="range" id='block-range' :value="inputValue" min="0" max="100" >
		             </div>
                    <span>{{nowSong.time}}</span>
                </div>
                <div class="control">
                    <a href="javascript:;">
                        <div class="btn btnOrder"></div>
                    </a>
                    <a href="javascript:;">
                        <div class="btn btnPrev"></div>
                    </a>
                    <a href="javascript:;">
                        <div class="btn btnPlay" @touchstart="paused"></div>
                    </a>
                    <a href="javascript:;">
                        <div class="btn btnNext"></div>
                    </a>
                    <a href="javascript:;">
                        <div class="btn btnList"></div>
                    </a>
                </div>
        </footer>
        <div class="z-bar"></div>
    </div>
</template>

<script>
import musicImg from './musicImg'
import musicContent from './musicContent'
export default {
    data(){
        return {
            uid: parseInt(this.$route.params.uid),
            nowSong:[], //用现在的 uid 查询到的当前歌曲所有内容
            songList:[],   //查找到的全部歌曲
            showHtml:this.$store.getters.getShowSongContent, //切断图片或歌词
            lyric: [],
            lyricTime: [], //lyric 时间 数组
            songContent: [], //歌词内容
            nowTime : this.$store.getters.nowTime,
            inputValue:0
        }
    },
    methods:{
        // 图片和歌词切换
        showSongContent(){
            if(this.showHtml == true){
                this.showHtml = false
            }else{
                this.showHtml = true;
            }
        },
        paused(){
            var audio = this.$store.getters.audioSrc;
            if(audio.paused == true){
                this.timer();
            }else{
                audio.pause();
                this.$store.commit("setTimer",null)
            }
        },
        playMusic(){
            var audio = this.$store.getters.audioSrc
            // console.log(this.$store.getters.getTimer.timer)
            // console.log(this)
            var Vue = this;
            audio.play();
            audio.loop = "loop"
            Vue.$store.commit("setNowTime",audio.currentTime)
            Vue.inputValue = Math.floor(audio.currentTime / audio.duration * 100 )
        },
        timer(){
            this.$store.commit("setTimer",setInterval(()=>{
                    this.playMusic();
            },1000))
        },
                
    },
    created(){
        this.axios.get("http://localhost:3030/songAll").then(result=>{
            var data = result.data
            for(var item of data){
                if(item.uid == this.uid){
                    this.nowSong = item
                }
            }
            // songList 为后续生成歌单
            this.songList = data;
            this.songContent = this.nowSong.content.split("\n");
            const audio = new Audio();
            audio.src = this.nowSong.songUrl;
            this.$store.state.audio = audio;
            this.timer()
        }).then(()=>{
            // var audio = this.$store.getters.audioSrc
            // var Vue = this;
            // audio.ontimeupdate = function(e){
            //     Vue.$store.commit("setNowTime",this.currentTime)
            //     Vue.inputValue = Math.floor(this.currentTime / this.duration * 100 )
            // }
        })
    },
    mounted(){
       this.$store.commit("homeHide",false)
    },
    components:{
        "music-img":musicImg,
        "music-content":musicContent
    },
    watch: {
        '$route' (to, from) {
            // console.log(to)
        }
    }
}
</script>

<style scoped>
.footer,.header{
    z-index: 10;
    position: relative
}

.songText,.songImg{
    position: absolute;
    top: 2.7rem;
    width: 100%;
    z-index: 10;
    height: 82%;;
    overflow: hidden;
}
.app-music{
    background: url("/static/img/songSheet/songSheetBg.jpg") no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    
}
header{
    position: relative;
    z-index: 11;
}
.z-bar{
    background: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
}
.mui-bar{
    background: none;
    display: flex;
    justify-content: space-between;
    padding-top: 4px;
    box-shadow: none;
}
header .mui-bar{
    box-shadow: 0 0 1px #999;
}
.tit{
    padding-left: 1.6rem;
}
.tit i{
    display: block;
}
.tit .i1{
    font-size: 1rem;
    color: #fff;
}
.tit .i2{
    color: #fff;
    font-size: 0.5rem
}
/* .app-songSheet */

.app-songSheet .header-return{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: url("/static/img/arrow-left.png") no-repeat;
    background-size: contain;
    align-self: center;
}

/* 三个小点 */
.circel-three{
    display: flex;
    width: 2rem;
    text-align: center;
    justify-content: space-around;
    height: 1.7rem;
    /* line-height: 2rem; */
    align-items: center;
    padding-right: 0.3rem
}
.app-songSheet .circel-three i{
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
}


/* footer */
.mui-bar-tab{
    height: 70px;
}

.control{
  height: 55px;
  padding-top: 3px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 0;
}

.btnOrder{
    width: 1.8rem;
    height: 1.8rem;
    background: url("/static/img/music/play-order.png") no-repeat;
   background-size: 156.8%;
    background-position: -8px;
}

.btnPrev{
    width: 1.7rem;
    height: 1.7rem;
    background: url("/static/img/music/play-prev.png") no-repeat;
    background-size: 100%;
}

.btnPlay{
    width: 2.3rem;
    height: 2.3rem;
    background: url("/static/img/music/pused.png") no-repeat;
    background-size: 126.5%;
    background-position: -5px -5px;
}

.btnNext{
    width: 1.7rem;
    height: 1.7rem;
    background: url("/static/img/music/play-next.png") no-repeat;
    background-size: 100%;
}

.btnList{
   width: 2.6rem;
    height: 2.6rem;
    background: url("/static/img/music/play-list.png") no-repeat;
    background-size: 100%;
}

/* 播放进度条 */
.progress{
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    width: 100%;
    padding: 0 1rem;
}

/* .progress .line{
    width: 80%;
    border: 2px solid black;
    height: 2px;
    align-self: center;
    position: relative;
}
.progress .line .circel{
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    background: #fff;
    position: absolute;
    top: -5.1px;
    left: 0;
    border-radius: 50%;
} */

.mui-input-range{
    padding: 0 13px;
    width: 80%;
}
#block-range{
    top: -0.5rem;
}
input[type="range"]::-webkit-slider-thumb{
    /* border: 3px solid #fff; */
    background: url("/static/img/music/range.png") no-repeat;
    background-size: cover;
    border-radius: 50%;
}

.z-bar{
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.6;
}
</style>
