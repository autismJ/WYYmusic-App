<template>
    <div class="app-tuijian">
        <div class="video">
            <!-- <div class=""></div> -->
            <ul class=""  v-infinite-scroll="loadMore" infinite-scroll-disabled="moreLoading" infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
                <li class="video_list"   v-for="(item,index) of vedioList" :key="index">
                    <video controlsList="nodownload" ref='`${index}`' @touchstart = "showPause(index)">
                        <source src="http://localhost:3030/x.mp4" type="video/mp4"/>
                    </video>
                    <div class="name">{{item.singerName}}</div>
                    <div class="playNum">
                        <div class="play iconfont icon-bofang">64445</div>
                        <div class="playTime" v-show="minute">
                            <span class="secend">00:01</span>
                            <span class="minute">/&nbsp;03:32</span>
                        </div>
                    </div>
                    <!-- subContent -->
                    <div class="subContent">
                        <div class="subtit">{{item.title}}</div>
                        <div class="user_img">
                            <div class="img">
                                <div class="arvatar">
                                    <img src="http://localhost:3030/user/me.jpg" alt="">
                                </div>
                                <div class="sub_name">{{item.name}}</div>
                            </div>
                            <div class="icons">
                                <div class="iconfont icon-praise">
                                    <span class="sup_sum">{{item.zan}}</span>
                                </div>
                                <div class="iconfont icon-xiaoxishouye font2">
                                    <span class="sup_sum">{{item.msg}}</span>
                                </div>
                                <div class="iconfont icon-diandiandian font2"></div>
                            </div>
                        </div>
                    </div>
                           <!-- controls -->
                    <div class="controls">
                        <div class="iconfont icon-bofang" @touchstart="play(index)" v-show="playHide[index]"></div>
                        <div class="iconfont icon-pause"  @touchstart="play(index)" v-show="paused[index]"></div>
                        <div @click="a">{{playHide[index]}}</div>
                    </div>
                </li>
                <!-- 加载完显示 -->
                <li class="more_loading" v-show="!queryLoading">
                  <span class="mui-spinner"   v-show="!allLoaded"></span>
                  <span v-show="allLoaded">厉害啦，居然刷到了底线</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            minute:false,
            vedioList:[
                {id:1,singerName:"李志",name:"渡浬",title:"7.7济南 叁叁肆 和声好听",zan:254,vedio_url:"http://localhost:3030/x.mp4",minute:"03:59",msg:19,},
                {id:2,singerName:"山路的夏天",name:"白佳蕾",title:"今晚唱歌碰到两个李志的小粉丝,激动!",zan:32,vedio_url:"http://localhost:3030/x.mp4",minute:"03:59",msg:783,},
                {id:3,singerName:"山路的夏天",name:"白佳蕾",title:"今晚唱歌碰到两个李志的小粉丝,激动!",zan:32,vedio_url:"http://localhost:3030/x.mp4",minute:"03:59",msg:783,},
            ],
            playHide:[  //播放隐藏
                true,
                true,
                true,
            ],
            paused:[ //暂停隐藏
                false,
                false,
                false,
            ],
            queryLoading: false,
            moreLoading: false,
            allLoaded: false,
            totalNum: 0,
            pageSize: 5,
            pageNum: 1,
        }
    },
    watch:{
    },
    methods:{
        a(){
            this.playHide[0] = false
            console.log(this.playHide[0])
        },
        play(index){
            var video = this.$refs['`${index}`'][index]
            var videoList = Array.from(this.$refs['`${index}`']);
            var _this = this;
            for(var i=0; i<videoList.length; i++){
                if(videoList[i] !== video){
                    videoList[i].pause();
                }
            }
            console.log(index)
            if(video.paused == true){
                video.play();
                setTimeout(function(){
                    _this.playHide[index] = false
                    _this.paused[index] = true;
                    console.log(_this.paused[index])
                    console.log("执行了paused = true")
                })
            }else{
                // video.play();
                video.pause();
                setTimeout(function(){
                    _this.playHide[index] = true;
                    console.log(_this.playHide[index])
                    console.log("执行了paused = false")
                })
            }
        },
        showPause(index){
            var video = this.$refs['`${index}`'][index];
            console.log(1)
            if(video.paused == true){
            }else{
                this.paused[index] = true;
                setTimeout(()=>{
                    this.paused[index] = false;
                },500)
            }
        },
        loadMore() {
            if(this.allLoaded){
                this.moreLoading = true;
                return;
            }
            if(this.queryLoading){
                return;
            }
            this.moreLoading = !this.queryLoading;
            this.pageNum++;
            this.axios.get("http://localhost:3030/video?pageNum="+this.pageNum+"&pageSize="+this.pageSize).then((res) => {
                if(res.data.code == 1 && res.data.list){
                    this.vedioList = res.data.list
                    for(var i=0; i<res.data.list.length; i++){
                        this.playHide[i] = true;
                        this.paused[i] = false;
                        console.log(1)
                    }
                }else if(res.data.code == 2 && res.data.arr){
                    this.vedioList = res.data.arr;
                    this.queryLoading = false;
                    this.allLoaded = true;
                    for(var i=0; i<res.data.arr.length; i++){
                        this.playHide[i] = true;
                        this.paused[i] = false;
                    }
                }
                this.moreLoading = this.allLoaded;
            })
        }
    }
}
</script>

<style scoped>
.video_list{
    position: relative;
}
.app-tuijian video{
    width: 100%;
    position: relative;
    border-radius: 0.5rem;
}
.app-tuijian .video .name{
   position: absolute;
   right: 1rem;
   top: 0.5rem;
   padding: 0 0.1rem;
   color: #fff;
   border: 1px solid #fff;
   border-radius: 1rem;
   font-size: 0.5rem;
}
.app-tuijian .video .playNum{
    position: absolute;
    left: 0.5rem;
    top: 12.8rem;
}
.app-tuijian .video .play{
    position: absolute;
    top: -1rem;
}
.app-tuijian .video .playTime{
    position: absolute;
    top: -1.6rem;
    white-space: nowrap;
}

/* 控制器 */
.controls .iconfont{
    position: absolute;
    top: 36%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.controls .iconfont{
    color: #fff;
    font-size: 3.5rem;
    opacity: 0.8;
}
/* sub_content */
.subContent .user_img{
    display: flex;
    justify-content: space-between;
    height: 3rem;
    align-items: center;
    border-top: 1px solid #ddd;
}
.user_img .img{
    white-space: nowrap;
    display: flex;
}
.subContent .arvatar{
    width: 2rem;
    height: 2rem;
}
.subContent .arvatar img{
    border-radius: 50%;
}
.subContent .subtit{
    text-align: left;
    font-size: 1rem;
    height: 1.8rem;
    line-height: 1.8rem;
}
.user_img .img .sub_name{
    line-height: 32px;
    padding-left: 0.3rem;
}
.user_img .icons{
    display: flex;
    width: 8rem;
    white-space: nowrap;
    justify-content: space-between;
}
.user_img .icons .iconfont{
    font-size: 1.6rem;
    position: relative;
}
.user_img .icons .font2{
    font-size: 1.7rem;
}
.user_img .icons .iconfont .sup_sum{
    position: absolute;
    top: -0.7rem;
    right: -0.6rem;
}

.video_list{
    padding: 0.3rem;
    background: #fff;
    margin-bottom: .4rem;
}
.video_list>video{
    height: 13rem;
}

</style>
