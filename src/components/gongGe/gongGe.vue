<template>
    <div class="app-gongge">
        <div class="mui-slider-item">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon iconfont icon-shouyinji"></span>
                        <div class="mui-media-body">私人Fm</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon iconfont icon-rili"></span>
                        <div class="mui-media-body">每日推荐</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                         <span class="mui-icon iconfont icon-gedan"></span>
                        <div class="mui-media-body">歌单</div>
                    </a>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <a href="#">
                        <span class="mui-icon iconfont icon-paihangbang"></span>
                        <div class="mui-media-body">排行榜</div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.iconfont{
    font-size: 2.8rem !important;
    color: #fff;
}
.mui-col-xs-4{
    width: 25%;
}
.app-gongge .mui-slider-item{
    background: #fff;
    border: none;
    border-bottom: 1px solid #999;
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    padding: 0;
}

.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
    font-size: 10px
}
.app-gongge .mui-icon{
    background: #da3f35;
    width: 50px;
    height: 50px;
    line-height: 50px;
    border-radius: 50%;
}
.icon-gedan,.icon-rili {
    font-size: 2.1rem !important;
}
/* 
.app-gongge .icon1{
    background-image: url("/static/img/gongge/member.png");
    background-size: contain;
}
.app-gongge .icon2{
    background-image: url("/static/img/gongge/reco.png");
    background-size: contain;
}
.app-gongge .icon3{
    background-image: url("/static/img/gongge/sole.png");
    background-size: contain;
}
.app-gongge .icon4{
    background-image: url("/static/img/gongge/more.png");
    background-size: contain;
} */

</style>
