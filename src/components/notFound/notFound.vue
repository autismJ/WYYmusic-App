<template>
  <div class="app-infinite">
    <div class="page-loadmore">
    <!-- <h1 class="page-title">Pull up</h1> -->
    <!-- <p class="page-loadmore-desc">在列表底部, 按住 - 上拉 - 释放可以获取更多数据</p>
    <p class="page-loadmore-desc">translate : {{ translate }}</p> -->
  
      <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
        <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
          <ul class="page-loadmore-list">
            <li v-for="(item,index) in list" class="page-loadmore-listitem" :key="index">{{ item }}</li>
          </ul>


          <div slot="top" class="mint-loadmore-top">
            <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
            <span v-show="topStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>

          <div slot="bottom" class="mint-loadmore-bottom">
            <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
            <span v-show="bottomStatus === 'loading'">
              <mt-spinner type="snake"></mt-spinner>
            </span>
          </div>
      </mt-loadmore>
    </div>
  </div>


    </div>
</template>

<script>
 export default {
  data() {
   return {
    //初始化无限加载相关参数
    queryLoading: false,
    moreLoading: false,
    allLoaded: false,
    totalNum: 0,
    pageSize: 20,
    pageNum: 1,
    list:[
        {id:1,msg:"123a"},
        {id:2,msg:"123b"},
        {id:3,msg:"123d"},
        {id:4,msg:"123we"},
        {id:5,msg:"123w"},
        {id:6,msg:"123e"},
        {id:7,msg:"123e"},
        {id:8,msg:"123aw"},
        {id:9,msg:"123sd"},
        {id:10,msg:"123b"},
        {id:11,msg:"123d"},
        {id:12,msg:"123d"},
        {id:13,msg:"123d"},
        {id:14,msg:"123d"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
        {id:15,msg:"123f"},
    ],
    allLoaded: false,
    bottomStatus: '',
    wrapperHeight: 0,
    topStatus: '',
    //wrapperHeight: 0,
    translate: 0,
    moveTranslate: 0
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
      handleBottomChange(status) {
          this.bottomStatus = status;
      },
      loadBottom() {
        setTimeout(() => {
          let lastValue = this.list[this.list.length - 1];
          if (lastValue < 40) {
            for (let i = 1; i <= 10; i++) {
              this.list.push(lastValue + i + "32");
            }
          } else {
            this.allLoaded = true;
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      },
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
          let firstValue = this.list[0];
          for (let i = 1; i <= 10; i++) {
            this.list.unshift(firstValue - i +'123');
          }
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      },
  },
  created() {
  },
  mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    }
 }
</script>

<style scoped>
.mui-table-view{
    padding-bottom: 3.5rem;
    top: -1rem;
}
.more_loading{
    text-align: center;
    margin: 0 auto;
}
.mt-spinner>div{
    margin: 0 auto;
}
.mint-spinner-snake{

}
.more_loading>span>div{
    margin: 0 auto;
}

.loading-background, .mint-loadmore-top span {
    -webkit-transition: .2s linear;
    transition: .2s linear
}
.mint-loadmore-top span {
    display: inline-block;
    vertical-align: middle
}

.mint-loadmore-top span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.page-loadmore .mint-spinner {
    display: inline-block;
    vertical-align: middle
}

.page-loadmore-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px
}

.page-loadmore-desc:last-of-type,
.page-loadmore-listitem {
    border-bottom: 1px solid #eee
}

.page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    text-align: center
}

.page-loadmore-listitem:first-child {
    border-top: 1px solid #eee
}

.page-loadmore-wrapper {
    overflow: scroll
}

.mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
}

.mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

</style>
