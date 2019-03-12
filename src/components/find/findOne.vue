<template>
    <div class="app-find-one">
        <div class="write">
            <div class="">
                <i class="iconfont icon-write"></i>
                <span>发动态</span>
            </div>
            <div class="">
                <i class="iconfont icon-shipin1"></i>
                <span>发布视频</span>
            </div>
        </div>
        <!--  -->
        <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
    <!-- 我关注的他们 -->
        <div class="">
            <ul id="refreshContainer">
                <li class="myFollow">
                    <div class="">
                        我关注的他们
                        <i class="iconfont icon-arrow"></i>
                    </div>
                    <div class="follwUser">
                        <div class="user" v-for="(item,index) of guanzhuList" :key="index">
                            <div class="userImg">
                                <img :src="item.userImg" alt="">
                            </div>
                            <span class="">
                                {{item.uname}}
                            </span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
          <ul class="page-loadmore-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="moreLoading" infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
            <!-- <li v-for="(item,index) in list" class="page-loadmore-listitem" :key="index">{{ item }}</li> -->
            <li class="dongtai" v-for="(item,index) of dongtaiList" :key="index">
                <div class="headImg">
                    <div class="rtv">
                        <img :src="item.userImg" alt="">
                        <img class="v" src="/static/img/v.png" alt="">
                    </div>
                </div>
                <div class="head">
                    <div class="tit">
                        <span class="type">
                            {{item.uname}}
                        </span>
                        <span>分享专辑:</span>
                        <i class="iconfont icon-guanzhu" @touchstart="guanzhu(item,index)" :class=" item.guanzhu == 0 ? '':'iconfontRed'"></i>
                        <div class="sub_time">
                            {{item.time}}
                        </div>
                    </div>
                    <div class="content" v-html="item.content"></div>
                    <div class="footer">
                        <div v-for="(img,i) of item.imgs" :key="i" :style="item.imgs.length < 3 ? 'width:70%' :''">
                            <img :src="img.img_url" alt="">
                        </div>
                    </div>
                    <div class="footer_icons">
                        <i class="iconfont icon-praise">
                            <span>123</span>
                        </i>
                        <i class="iconfont icon-xiaoxishouye">
                            <span>123</span>
                        </i>
                        <i class="iconfont icon-share">
                            <span>123</span>
                        </i>
                        <i class="iconfont icon-diandiandian">
                        </i>
                    </div>
                </div>
            </li>
            <!-- 底部 -->
            <li class="more_loading" v-show="!queryLoading">
              <span class="mui-spinner"   v-show="!allLoaded"></span>
              <span v-show="allLoaded">厉害了，你刷到了底线</span>
             </li>
          </ul>

          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>
          <!-- <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
            <span v-show="bottomStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div> -->
      </mt-loadmore>
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            find:true,
            list: [],
            allLoaded: false,
            bottomStatus: '',
            wrapperHeight: 0,
            topStatus: '',
            //wrapperHeight: 0,
            translate: 0,
            moveTranslate: 0,
            dongtaiList:[],//动态列表
            pageNum:0,
            pageSize:2,
            queryLoading: false,
            moreLoading: false,
            allLoaded: false,
            guanzhuList:[], //关注列表
        }
    },
   computed: {
    params() {
        return{
        //这里先定义要传递给后台的数据
        //然后将每次请求20条的参数一起提交给后台
        pageSize: this.pageSize
        }
    }
  },
  methods: {
      guanzhu(guanzhu,index){
          var {userImg,uname,guanzhu} = guanzhu;
        //   console.log(index)
          var nArr = {userImg,uname}
          if(guanzhu == 0){
              this.dongtaiList[index].guanzhu = 1
              this.guanzhuUpad();
          }else{
            this.dongtaiList[index].guanzhu = 0
            this.guanzhuUpad();
          }
      },
      guanzhuUpad(){
          var nArr = [];
          for(var i=0; i<this.dongtaiList.length; i++){
              if( this.dongtaiList[i].guanzhu == 1){
                  nArr.push(this.dongtaiList[i])
              }
          }
          this.guanzhuList = nArr
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
                this.axios.get("http://localhost:3030/dongtai?pageNum="+this.pageNum+"&pageSize="+this.pageSize).then((res) => {
                if(res.data.code == 1 && res.data.dongtaiList){
                    this.dongtaiList.push(...res.data.dongtaiList);
                }else if(res.data.code == 0){
                    this.queryLoading = false;
                    this.allLoaded = true;
                }
                    this.moreLoading = this.allLoaded;
                })
            },
      handleBottomChange(status) {
          this.bottomStatus = status;
      },
    //   loadBottom() {
    //     setTimeout(() => {
    //       let lastValue = this.list[this.list.length - 1];
    //       if (lastValue < 40) {
    //         for (let i = 1; i <= 10; i++) {
    //           this.list.push(lastValue + i + "32");
    //         }
    //       } else {
    //         this.allLoaded = true;
    //       }
    //       this.$refs.loadmore.onBottomLoaded();
    //     }, 1500);
    //   },
       handleTopChange(status) {
        this.moveTranslate = 1;
        this.topStatus = status;
      },
      translateChange(translate) {
        const translateNum = +translate;
        this.translate = translateNum.toFixed(2);
        this.moveTranslate = (1 + translateNum / 70).toFixed(2);
      },
      loadTop() {
        setTimeout(() => {
           this.axios.get("http://localhost:3030/dongtai?pageNum="+this.pageNum+"&pageSize="+this.pageSize).then((res) => {
               console.log(1)
               if(res.data.code == 1){
                   for(var i = res.data.dongtaiList.length - 1 ;i >0; i--){
                       this.dongtaiList.unshift(res.data.dongtaiList[i])
                   }
               }else{
                    console.log("到顶了,没数据了")                   
               }
           })
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      },
  },
  created() {
    //   for (let i = 1; i <= 20; i++) {
    //     this.list.push(i + "123");
    //   }
    this.loadMore();      
    },
     mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
   
}
</script>

<style scoped>
.mint-loadmore-content > ul{
    padding-bottom: 3rem;
}
.app-find{
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
}
.write{
    display: flex;
    justify-content: space-around;
    height: 2.5rem;
    align-items: center;
    padding: 0 2.8rem;
    background-color: #da3f35;
    color: #eee;
}
.myFollow{
    border-bottom: 1px solid #ddd;
    padding: 1rem 0.5rem 0.5rem ;
}
.myFollow .iconfont{
    font-size: 0.7rem;
}
.myFollow>:nth-child(1){
    text-align: left;
}
.user .userImg{
    width: 2.8rem;
    height: 2.8rem;
}
.user .userImg img{
    border-radius: 50%;
}
.follwUser .user{
    display: flex;
    flex-direction: column;
    width: 3.7rem;
}
.follwUser{
    display: flex;
    padding-top: 0.7rem;
}
.follwUser span{
    text-overflow: ellipsis;
    overflow: hidden;
    width: 3.1rem;
    white-space: nowrap;
}

.refreshText{ 
    position: absolute; 
    width: 100%; 
    line-height: 50px; 
    text-align: center; 
    left: 0; 
    top: 2rem; 
}

/* 加载更多样式 */
.mint-tab-container,.page-tabbar-tab-container{
    overflow: scroll !important;
}

.mint-loadmore-top span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}
.mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.mint-loadmore-top span {
    display: inline-block;
    vertical-align: middle
}
/* 加载更多样式 */

/* 动态 */
.dongtai{
    display: flex;
    padding: 0.3rem 2.5rem 0.3rem 0.3rem;
}
.dongtai .headImg{
    width: 20%;
    position: relative;
}
.dongtai .head{
    width: 80%;
}
.dongtai .headImg img{
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
}
.rtv{
    position: relative;
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
}
.dongtai .headImg .v{
    width: 1rem;
    height: 1rem;
    position: absolute;
    top: 0;
    right: 0;
}
.dongtai .head .tit{
    text-align: left;
    padding-top: 0.6rem;
}
.dongtai .head .tit .iconfont{
    float: right;
    font-size: 1.3rem;
}
.dongtai .head .tit .iconfontRed{
    color: #da3f35;
}
.dongtai .head .content{
    text-align: left;
}
.dongtai .head .content>>>img{
    width: 1.1rem;
    height: 1.1rem;
    vertical-align: middle;
}
.content img{
    width: 1rem;
    height: 1rem;
}
.dongtai .head .tit .type{
    color: #0c73c2;
    margin-right: 0.2rem;
}
.dongtai .tit>span,.sub_time{
    color: #888;
}
.dongtai .tit .sub_time{
    font-size: 0.6rem;
}
.dongtai .footer{
    display: flex;
    flex-wrap: wrap;
}
.dongtai .footer>div{
    width: 33%;
    padding: 0.2rem;
}
.dongtai .footer_icons{
    display: flex;
    justify-content: space-between;
    padding: 0 0.3rem;
}
.dongtai .footer_icons .iconfont{
    font-size: 1.2rem;
}
.largImg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.largImg img{
    height: 100%;
    width: 100%;
}
.footer img{
    max-height: 9rem;
}
/* 动态 */
</style>
