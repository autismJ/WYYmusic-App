<template>
    <div class="app-video">
         <div class="nav">
          <mt-navbar v-model="active" class="page-part">
            <mt-tab-item id="tab-container1">
              推荐
            </mt-tab-item>
            <mt-tab-item id="tab-container2">
              Look直播
            </mt-tab-item>
            <mt-tab-item id="tab-container3">
              现场
            </mt-tab-item>
            <mt-tab-item id="tab-container4">
              翻唱
            </mt-tab-item>
          </mt-navbar>
        </div>
        <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
            <mt-tab-container-item id="tab-container1">
                <tuijian></tuijian>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container2">
                Look直播
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container3">
                现场
            </mt-tab-container-item>
            <mt-tab-container-item id="tab-container4">
                翻唱
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import tuijian from './videoComponents/tuijian'
export default {
    data(){
        return {
            active:"tab-container1"
        }
    },
    components:{
        tuijian
    }
}
</script>

<style scoped>
.app-video{
    position: relative;
    top: 2rem;
    padding-bottom: 4rem;
}
.nav{
    background: #da3f35;
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
    padding-bottom: 3.3rem;
    background: #da3f35;
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
    margin: 0 1.9rem;
    color: #ddd;
}
</style>
