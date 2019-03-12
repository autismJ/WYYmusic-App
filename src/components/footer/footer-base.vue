<template>
    <nav class="app-base mui-bar mui-bar-tab tabble-bar">
        <!-- 测试 -->
        <mt-tabbar v-model="selected" class="tabble-bar">
            <mt-tab-item id="tab1">
                 <router-link to='/home' id="defaultTab" class="mui-tab-item" href="">
                    <!-- <i class="btn btn1"></i> -->
                    <i class="iconfont icon-weibiaoti--"></i>
                    <div>发现</div>
                 </router-link>
            </mt-tab-item>
            <mt-tab-item id="tab2">
                 <router-link to='/video' class="mui-tab-item" href="">
                    <!-- <i class="btn btn2"></i> -->
                    <i class="iconfont icon-shipin"></i>
                    <div class="">视频</div>
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="tab3">
                <router-link to='/myMusic' class="mui-tab-item" href="">
                    <!-- <i class="btn btn3"></i> -->
                    <i class="iconfont icon-yinyue"></i>
                    <div class="">我的</div>
                </router-link>
            </mt-tab-item>
            <mt-tab-item id="tab4">
                 <router-link to='/find' class="mui-tab-item find">
                    <!-- <i class="btn btn4">
                        <i class="find-circel"></i>
                    </i> -->
                    <i class="iconfont icon-pengyou"></i>
                     <div class="">朋友</div>
                 </router-link>
            </mt-tab-item>
            <mt-tab-item id="tab5">
                 <router-link to="/setting" class="mui-tab-item" href="">
                    <!-- <i class="btn btn5"></i> -->
                    <i class="iconfont icon-zhanghao"></i>
                    <div class="">账号</div>
                </router-link>
            </mt-tab-item>
        </mt-tabbar>
    </nav>
    
</template>

<script>
export default {
    data(){
        return {
            selected:"tab1",
        }
    },
    methods:{
       
    },
    created(){
    }
}
</script>

<style scoped>
.mint-tabbar > .mint-tab-item.is-selected a{
    color: #eb483c;
}
.mint-tabbar > .mint-tab-item.is-selected{
    background: none !important;
    /* padding-bottom: 1px; */
}
.iconfont{
    font-size: 1.5rem;
    margin-bottom: 0.2rem;
}
.icon-shipin,.icon-pengyou{
    font-size: 1.8rem;
}
.mint-tab-item{
    padding: 0;
}
.tabble-bar{
  background: linear-gradient(to right, #f7dfde,#f5f4f1);
  height: 55px;
  padding-top: 3px;
}

.mui-tab-item>div{
    margin-top: 0.3rem;
}

.tabble-bar div.active{
    color: #dd7069;
}
.tabble-bar .btn{
  display: inline-block;
  width: 2.4rem;
  height: 1.8rem;
  background: url("/static/img/footer/taber_bar.png") no-repeat;
  background-size: 1000%;
}
.tabble-bar .btn1{
    background-position: -18px -3px;
}
.tabble-bar .btn2{
    background-position: -95px -3px;
}
.tabble-bar .btn3{
    background-position: -172px -3px;
}
.tabble-bar .btn4{
    background: url("/static/img/footer/friend.png") no-repeat;
   background-size: 80%;
    background-position: 5px 4px;
    position: relative;
}
.tabble-bar .btn5{
    background-position: -326px -3px;
}
.tabble-bar .find{
    position: relative;
}
.tabble-bar .find-circel{
    display: inline-block;
    position: absolute;
    width: 12px;
    height: 12px;
    background: #d12d21;
    border: 1px solid #f3e0df;
    right: 0;
    border-radius: 50%;
}
</style>
