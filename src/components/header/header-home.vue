<template>
    <!-- <div id="app-header"> -->
      <header class="mui-bar mui-bar-nav">
        <!-- <i class="header-song"></i> -->
        <i class="iconfont icon-luyin" v-if="luyin" v-show="searching"></i>
        <i class="iconfont icon-11" v-if="icon11"></i>
        <div class="mui-indexed-list-search mui-input-row mui-search">
            <input id="searchInput" ref="searchInput" type="search" @focus="focusSearch" v-model="searchVal" class="mui-input-clear mui-indexed-list-search-input"  :style=" !searching ? 'width:16.9rem' : ''" v-show="home" placeholder="李荣浩-老街">
            <span class="setting" v-show="setting">账号</span>
            <span class="myMusic" v-show="myMusic">我的音乐</span>
            <span class="find" v-show="find">发现</span>
        </div>
        <a href="#" v-if="this.$store.getters.getSearchPage"> 
            <div class="header-music">
                <i class="i1"></i>
                <i class="i2"></i>
                <i class="i3"></i>
                <i class="i4"></i>
            </div>
        </a>
        <a v-else class="return" @touchstart="returnHomePage">
            取消
        </a>
    </header>
</template>

<script>
export default {
    data(){
        return {
            home : true,
            luyin:true,
            searching:true,
            inputWIdth:'',
            searchVal:"",
        }
    },
    methods:{
        focusSearch(){
            this.searching = false;
            this.$router.push({path:"/search"})
            this.searching = false;
        },
        returnHomePage(){
            this.$router.push({path:"/home"})
            this.searching = true;
        },

    },
    created(){
        if(this.setting == true || this.myMusic == true || this.find == true || this.video == true){
            this.home = false
        }
    },
    watch: {
        searchVal(){
            this.$store.commit("setSearchVal",this.searchVal)
        },
    },
    props:["setting","myMusic","find","video","icon11"]
}
</script>

<style scoped>
.return{
    color: #fff;
    line-height: 44px;
    font-size: 1rem;
    white-space: nowrap;
}
.mui-bar-nav>a{
    width: 2.2rem;
}
.inputWIdth{
    width: 15rem !important;
}
.mui-input-clear{
    background-image: url("/static/img/header/search.png");
    background-repeat: no-repeat;
    background-position: 0.3rem 0.2rem;
    background-size:1.5rem;
}
/* setting */
.setting,.myMusic,.find{
    color: #fff;
    font-size: 1rem;
    line-height: 44px;
}

.mui-bar-nav {
    display: flex;
    justify-content: space-between;
    line-height: 10px;
    background: #da3f35;
}
.mui-bar-nav .header-song{
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background: url("/static/img/header/video.png") no-repeat;
    background-position: 0px 10px;
}
.iconfont{
    font-size: 26px;
    color: #fff;
    line-height: 40px;
}
.mui-bar-nav .header-music{
    display: flex;
    width: 1.5rem;
    text-align: center;
    justify-content: space-around;
    height: 2rem;
    /* line-height: 2rem; */
    align-items: flex-end;
}
.mui-bar-nav .header-music i{
    width: 2px;
    background: #fff;
}
.mui-bar-nav .header-music .i1{
    height: 10px;
}
.mui-bar-nav .header-music .i2{
    height: 1rem;
}
.mui-bar-nav .header-music .i3{
    height: 1.4rem;
}
.mui-bar-nav .header-music .i4{
    height: 0.8rem;
}

.mui-bar-nav .mui-input-clear{
    background-color: #e0645c;
    border-radius: 20px;
    color: #efb2ad !important;
}
</style>
