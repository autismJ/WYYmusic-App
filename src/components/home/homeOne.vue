<template>
    <div class="app-homeOne">
        <Swipe-list :bannerLeft="bannerLeft"></Swipe-list>
        <!-- 九宫格 -->
        <gongGe-list></gongGe-list>
        <!-- 表格 -->
        <content-table :title1="title1"></content-table>
        <content-table ></content-table>
        <ul class="mui-table-view" v-infinite-scroll="loadMore" infinite-scroll-disabled="moreLoading" infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
            <li class="video" v-for="(item,index) of vedioList" :key="index">
                <div class="one">
                    <div class="shipin">
                        <img src="http://localhost:3030/user/tit_img.jpg" alt="">
                        <div class="tit">来感受一下90年代的派对现场是什么样的</div>
                        <div class="time">
                            <i class="iconfont icon-histogram"></i>
                            04:30
                        </div>
                        <i class="iconfont icon-bofang"></i>
                    </div>
                    <div class="baseUser">
                        <div class="userImg">
                            <img src="http://localhost:3030/user/sub_img.jpg" alt="">
                            <span>我最可爱是不是</span>
                        </div>
                        <div class="icons">
                            <div class="videoplay">
                                <i class="iconfont icon-bofang"></i>
                                34万
                            </div>
                            <div class="pinglun">
                                <i class="iconfont icon-xiaoxishouye"></i>
                                201
                            </div>
                            <div class="fenxiang">
                                <i class="iconfont icon-diandiandian"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="two">
                    <router-link :to="`/music/${item.uid}`" class="musicImg">
                        <img :src="item.singerImg" alt="">
                        <i class="iconfont icon-bofang"></i>
                    </router-link>
                    <div class="musicright">
                        <div class="tit">
                            <span class="siger">
                                单曲
                            </span>
                            <span>{{item.songName}}</span>
                        </div>

                        <div class="commit">
                            <i class="iconfont icon-xiaoxishouye"></i>
                            1864
                        </div>

                        <div class="uinfo">
                            <div class="uname">

                                <div class="uImg">
                                    <img src="http://p1.music.126.net/-FiCMP9yDVfh6hSldNljZw==/109951163609721623.jpg?param=40y40" alt="">
                                </div>
                                <div class="">李欣儿</div>
                            </div>
                            <i class="iconfont icon-diandiandian"></i>
                        </div>
                        
                    </div>
                </div>
                <div class="three"></div>
            </li>
             <!--底部判断是加载图标还是提示“全部加载”-->
             <li class="more_loading" v-show="!queryLoading">
              <span class="mui-spinner"   v-show="!allLoaded"></span>
              <span v-show="allLoaded">厉害了，你刷到了底线</span>
             </li>
        </ul>
    </div>
</template>


<script>
// 轮播
import Swipe from '../Swipe/Swipe'
// 九宫格
import gongGe from '../gongGe/gongGe'
// table
import contentTable from '../content-table/content-table'
export default {
     data(){
         return {
            title1:"推荐歌单",
            bannerLeft:[],
            queryLoading: false,
            moreLoading: false,
            allLoaded: false,
            // totalNum: 0,
            pageSize: 2,
            pageNum: 0,
            vedioList:[]
         }
     },
     methods:{
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
                this.axios.get("http://localhost:3030/homeVideo?pageNum="+this.pageNum+"&pageSize="+this.pageSize).then((res) => {
                if(res.data.code == 1 && res.data.list){
                    this.vedioList.push(...res.data.list);
                }else if(res.data.code == 0){
                    this.queryLoading = false;
                    this.allLoaded = true;
                }
                    this.moreLoading = this.allLoaded;
                })
            }
     },
     created(){
          this.axios.get("http://localhost:3030/bannerImg").then(result=>{
            // console.log(result);
            this.bannerLeft = result.data;
          });
          this.loadMore();
     },
     components:{
        "Swipe-list":Swipe,
        "gongGe-list":gongGe,
        "content-table":contentTable,
    }
}
</script>

<style scoped>
.video{
    padding: 5px 10px;
    position: relative;

}
.one{
    position: relative;
    background: #fff;
    margin-bottom: 1rem;
}
.shipin{
    position: relative;
}
.one .tit{
    position: absolute;
    bottom: 0.8rem;
    left: 0.2rem;
    font-size: 1rem;
    color:#fff;
    width: 17rem;
    text-align: left;
}
.time{
    position: absolute;
    right: 0.3rem;
    bottom: 0.3rem;
    color: #fff;
}
.shipin .icon-bofang{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #6e6e6e;
    font-size: 3rem;
}
.one .baseUser{
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.one .userImg{
    height: 2rem;
    width: 2rem;
    white-space: nowrap;
    line-height: 2rem;
}
.one .userImg>span{
    vertical-align: text-bottom;
}
.one .icons{
    display: flex;
    width: 43%;
    justify-content: space-between;
    color: #888;
}
.two{
    display: flex;
}
.two .musicImg{
    width: 40%;
    position: relative;
    height: 10rem;
}
.two .musicImg img{
    border-radius: 1rem;
}
.two .musicright{
    width: 60%;
    height: 10rem;
    position: relative;
    display: flex;
    flex-direction: column;
}
.two .musicImg>i{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
    font-size: 2.5rem;
}

.uImg{
    height: 3rem;
}
.uImg img{
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
}
.musicright .tit{
    text-align: left;
    /* padding:  */
}
.tit .siger{
    color: #da3f35;
    border: 1px solid #da3f35;
    border-radius: 0.3rem;
    margin: 0 0.3rem;
}
.musicright .tit>:nth-child(2){
    font-size: 1rem;
} 
.two .commit{
    text-align: left;
    padding-left: 0.3rem;
    border-bottom: 1px solid #ddd;
    padding-bottom: 0.7rem;
    padding-top: 0.3rem;
}
.two .commit .iconfont{
    vertical-align: middle;
}
.uinfo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem  1.3rem 0 0.3rem;
}
.uinfo .uname{
    white-space: nowrap;
    width: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
