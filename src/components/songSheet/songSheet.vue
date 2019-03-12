<template>
    <div class="app-songSheet">
        <div class="topMsg">
            <header-songSheet></header-songSheet>
            <!-- <div class=""> -->
            <div class="songSheetDetails">
                <div class="mui-card">
                    <div class="singer-img">
                        <!-- 大img -->
                        <img class="mui-card-header mui-card-media" :src="songDetails.singerImg">
                        <div class="tit">
                            <p class='t1'>{{songDetails.content}}</p>
                                <!-- <i></i> -->
                            <a href="#" class="img-icon">
                                <div class="icon-outer">
                                    <i class="icon"></i>
                                </div>
                                <span>可尼晏</span>
                                <i class="go"></i>
                            </a>
                        </div>
                    </div>
                    <!-- 四个小icon -->
                    <div class="mui-card-footer">
                        <a class="mui-card-link">
                            <i class="btn btn1"></i>
                        <div class="active">{{songDetails.sum}}</div>
                        </a>
                        <a class="mui-card-link">
                            <i class="btn btn2"></i>
                        <div class="active">{{songDetails.sum}}</div>
                        </a>
                        <a class="mui-card-link">
                            <i class="btn btn3"></i>
                        <div class="active">下载</div>
                        </a>
                        <a class="mui-card-link">
                            <i class="btn btn4"></i>
                        <div class="active">添加</div>
                        </a>
                    </div>
                </div>
                <!-- zbar -->
                <div class="zbar"></div>
            </div>
        </div>
        <!--songList  -->
       <songList-content :songList="songList"></songList-content>
        <!-- </div> -->
        <!-- <footer-base></footer-base> -->
    </div>
</template>

<script>
// songSheet-header
import headerSongSheet from '../header/header-songSheet'
// 底部
import footerBase from '../footer/footer-base'
// 歌曲列表
import songListContent from './songList-content'
export default {
    data(){
        return {
            uid : this.$route.params.uid,
            songDetails: [],
            songList: []
        }
    },
    components:{
        "header-songSheet":headerSongSheet,
        "footer-base":footerBase,
        "songList-content":songListContent
    },
    created(){
        this.axios.get("http://localhost:3030/songSheetUid?uid="+this.uid).then(result=>{
            this.songDetails = result.data[0];
        }),
        this.axios.get("http://localhost:3030/songAll").then(result=>{
            this.songList = result.data;
        })
    }
}
</script>

<style scoped>
/* 专辑列表 */
.topMsg .mui-card{
    margin: 0;
    padding: 0.5rem 1rem 0 1rem;
    background: none;
    z-index: 3;
}
.topMsg .singer-img{
    display: flex;
}
.topMsg .mui-card-media{
    width: 10rem;
    height: 10rem;
    border-radius: 1rem;
}
.topMsg .tit{
    /* line-height: 7rem; */
    padding-top: 3rem;
    color: #000;
    text-align: left;
}
.topMsg .tit .t1{
    font-size: 1.1rem;
    text-align: left;
    color: #ffffff;
}
.topMsg .img-icon{
    display: inline-block;
    width: 6rem;
    height: 1.8rem;
    display: flex;
    line-height: 3rem;
    position: relative;
}
.topMsg .img-icon span{
    white-space: nowrap;
    color: #fff;
}
.topMsg .icon-outer{
   width: 2.4rem;
    height: 2.4rem;
    background: url("http://localhost:3030/img/singer/1.jpg") no-repeat;
    background-size: contain;
    border-radius: 50%;
    position: relative;
    margin-right: 1px;
}
.topMsg .icon-outer .icon{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: url("http://localhost:3030/img/icon/ry.png") no-repeat;
    background-size: contain;
    position: absolute;
    right: 0;
    bottom: 0;
}
.topMsg .go{
    display: inline-block;
    width: 1.3rem;
    height: 1.3rem;
    background: url("/static/img/a6a.png") no-repeat;
    background-size: contain;
    position: absolute;
    right: -6px;
    bottom: -4px;
}
/* 底部icon */
.topMsg .mui-card-footer .mui-card-link{
    display: flex;
    flex-direction: column;
    margin: 0;
    height: 3.8rem;
}
.topMsg .mui-card-footer .btn{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-bottom: 0.5rem;
    background-repeat: no-repeat;
    background-size: 197%;
    background-position: -15px;
}

.topMsg .mui-card-footer{
    padding: 0 1rem;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
}
.topMsg .mui-card-link .active{
    height: 1rem;
    line-height: 1rem;
    color: #ffffff
}

.topMsg .mui-card-footer .btn1{
    background-image: url("/static/img/songSheet/1.png");
}
.topMsg .mui-card-footer .btn2{
    background-image: url("/static/img/songSheet/2.png");
}
.topMsg .mui-card-footer .btn3{
    background-image: url("/static/img/songSheet/3.png");
}
.topMsg .mui-card-footer .btn4{
    background-image: url("/static/img/songSheet/4.png");
}
.songSheetDetails{
    position: absolute;
    top: 2.7rem;
    background : url("/static/img/songSheet/songSheetBg.jpg") no-repeat;
    /* background-size: 1; */
    /* background-color: cadetblue; */
    opacity: 0.9;
    z-index: 1;
}
.songSheetDetails .zbar{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: #000;
    z-index: 2;
    opacity: 0.5;
}

/* 歌曲列表 */
.app-songList-content{
    position: absolute;
    top: 18.4rem;
    width: 100%;
}
</style>
