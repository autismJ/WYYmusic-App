<template>
    <div id="app-navigator-view">
        <div class="nav">
            <mt-navbar v-model="active" class="page-part">
            <mt-tab-item id="tab-container1">
                个性推荐
            </mt-tab-item>
            <mt-tab-item id="tab-container2">
                主播电台
            </mt-tab-item>
            </mt-navbar>
        </div>
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" > <!--swipeable-->
            <mt-tab-container-item id="tab-container1">
                <!-- homeleft -->
                <homeOne></homeOne>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container2">
                <!-- homeRight -->
                <homeTwo></homeTwo>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import homeOne from '../home/homeOne'
import homeTwo from '../home/homeTwo'
export default {
    data(){
        return {
            active:"tab-container1"
      }
    },
    components:{
       homeOne,
       homeTwo
    }
}
</script>

<style scoped>
.nav{
    position: fixed;
    top: 2.3rem;
    width: 100%;
    z-index: 10;
}
.is-selected{
    color: #fff !important;
    border-bottom: 3px solid #fff !important;
}
.mint-navbar{
    background: #da3f35;
    padding-bottom: 3.3rem;
    height: 2.7rem;
    justify-content: center;
}
#app-navigator-view{
    position: relative;
    top: 1.7rem;
    padding-bottom: 3.8rem;
}
.mint-tab-item{
    flex: 0 !important;
    white-space: nowrap;
    margin: 0 2.3rem;
    color: #ddd;
}
.navigator-list{
    display: flex;
    padding: 0 70px;
    justify-content: space-around;
    background: #da3f35;
    position: fixed;
    top: 43px;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 2rem;
    line-height: 2rem;
    padding-bottom: 2.5rem;
}
.navigator-list .navigator-item{
    color: #ddd;
}
.navigator-list a.navigator-item1{
    color: #fff;
    /* border-bottom: 2px solid #fffffe; */
    /* border-bottom-width: 2px; */
}
.navigator-line{
    position: absolute;
    width: 30px;
    height: 3px;
    background: #fff;
    top: 1.6rem;
    left: 7.1rem;
    border-radius: 5px;
}

.mui-content{
    position: relative;
    top: 2px;
    padding: 0 10px;
    background: #da3f35;
}
</style>
