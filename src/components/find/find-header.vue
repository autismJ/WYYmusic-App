<template>
    <div class="app-find">
       <mt-navbar class="page-part" v-model="selected">
            <i class="iconfont icon-tianjiahaoyou"></i>
            <div class="changeTwo">
                <mt-tab-item class="dongtai" id="dongtai">动态</mt-tab-item>
                <mt-tab-item class="fujin" id="fujin">附近</mt-tab-item>
            </div>
            <i class="iconfont icon-histogram"></i>
       </mt-navbar>
       <!-- 内容 -->
        <mt-tab-container class="page-tabbar-tab-container" v-model="selected">
            <mt-tab-container-item id="dongtai">
                <findOne></findOne>
            </mt-tab-container-item>
            <mt-tab-container-item id="fujin">
                 <findOne></findOne>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import Vue from 'vue'
import { Navbar, TabItem } from 'mint-ui';
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
import findOne from './findOne.vue'
export default {
    data(){
        return {
            selected:"dongtai",
        }
    },
    components:{
        findOne
    }
}
</script>


<style scoped>
.app-find{
    position: relative;
    top: -1rem;
}
.page-part{
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
}
.dongtai,.fujin{
    border-radius: 5.9rem;
    width: 3.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
.page-part{
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background: #da3f35;
    height: 3.2rem;
}
.mint-tab-item{
    flex: none !important;
    color: #eee;
}
.changeTwo{
    width: 6rem;
    display: flex;
    justify-content: space-around;
    border: 1px solid #ddd;
    border-radius: 2rem;
    height: 2.2rem;
    width: 7.4rem;
}

.is-selected{
    background: #fff;
    color: #da3f35 !important;
    border: none !important;
}
.iconfont{
    font-size: 1.5rem;
    color: #fff;
}
.mint-tab-container{
    overflow: scroll;
}
</style>
