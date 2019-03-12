<template>
    <div class="app-songList-content">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media tit">
                <div>
                    <a href="#" class="play-all">
                        <i class="play-icon"></i>
                        <span class="t1">播放全部</span>
                        <span class="t2">(共{{songList.length}}首)</span>
                    </a>
                </div>
                <div class="add">
                    <i class="t3">+</i>
                    <span class="t1">收藏</span>
                    <span class="t2">({{songList.length * Math.floor(Math.random() *100000)}})</span>
                </div>
            </li>
            <li class="mui-table-view-cell mui-media" v-for="item of songList" :key="item.uid">
                <div class="left">
                    <span>{{item.uid}}</span>
                    <router-link :to="`/music/${item.uid}`">
                        <img class="mui-media-object mui-pull-left" :src="item.singerImg">
                        <div class="mui-media-body">
                            <p class="t1">{{item.songName}}</p>
                            <i class="gaopinzhi"></i>
                            <p class='mui-ellipsis'>{{item.uname}}</p>
                        </div>
                    </router-link>
                </div>
                <a href="javascript:;" class="share">
                    <i></i>
                    <i></i>
                    <i></i>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        ListenMusic(uid){
            this.$router.push("/music/"+this.songList);
        }
    },
    props:["songList"],
}
</script>

<style scoped>
/* tit */
.tit{
    display: flex;
    justify-content: space-between;
    /* padding-left: 1rem; */
    vertical-align: middle;
    align-items: center;
}
.play-all{
    display: inline-block;
    color: #000;
}
.play-icon{
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    /* background: red; */
    background: url("/static/img/songSheet/play-all.png") no-repeat;
    background-size: contain;
    vertical-align: -6px;
}
.t1{
    font-size: 1.1rem;
}
.t2{
    font-size: 0.8rem;
    color: #666;
}
.t3{
    font-size: 1.5rem;
}
.add{
    position: absolute;
    right: 0;
    background: #eb483c;
    height: 100%;
    line-height: 42px;
    padding-left: 0.4rem;
    border-top-left-radius: 1rem;
    /* border-bottom-left-radius: 1rem; */
}
.gaopinzhi{
    display: inline-block;
    width: 2.3rem;
    height: 1rem;
    background: url("/static/img/songSheet/icn_vip_sq.png") no-repeat;
    background-size: contain;
    vertical-align: 3.7px;
}


.mui-media-body{
    text-align: left;
}
.mui-ellipsis{
    display: inline-block;
    width: 5rem;
    /* overflow: visible; */
}
.mui-table-view-cell{
    /* text-align: left; */
    display: flex;
    justify-content: space-between;
    padding-right: 2rem;
}
.mui-table-view-cell a{
    display: inline-block;
}
.share{
    display: flex;
    width: 3rem;
    justify-content: space-around;
    line-height: 2.3rem;
}
.share i{
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    /* display: flex; */
    background: #999;
    border-radius: 50%;
}
.left{
    /* line-height: 1rem; */
    display: flex;
}
.left span{
    display: inline-block;
    align-self: center;
    padding-right: 1.5rem;
    font-size: 1.5rem;
    color: #999;
}

</style>
