<template>
    <div class="myMusic">
        <!-- <my-music-header :myMusic="myMusic"></my-music-header> -->
        <!-- 列表 -->
        <div class="content">
        	<ul class="mui-table-view mui-table-view-chevron text-left">
                <li class="mui-table-view-cell">
                    <a href="javascript:;"><i class="btn btn1"></i>本地音乐</a>
                    <div class="arrow">
                        <i class="num">0</i>
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </li>
            </ul>
            <ul class="mui-table-view mui-table-view-chevron text-left">
                <li class="mui-table-view-cell">
                    <a><span class="btn btn2"></span>最近播放</a>
                     <div class="arrow">
                        <i class="num">0</i>
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </li>
            </ul>
            <ul class="mui-table-view mui-table-view-chevron text-left">
                <li class="mui-table-view-cell">
                    <a><span class="btn btn3"></span>我的电台</a>
                    <div class="arrow">
                        <i class="num">0</i>
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </li>
            </ul>
            <ul class="mui-table-view mui-table-view-chevron text-left">
                <li class="mui-table-view-cell">
                    <a><span class="btn btn4"></span>我的收藏</a>
                    <div class="arrow">
                        <i class="num">0</i>
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </li>
            </ul>
            <ul class="mui-table-view mui-table-view-chevron text-left">
                <li class="mui-table-view-cell">
                    <a><span class="btn btn5"></span>Sati空间</a>
                     <div class="arrow">
                        <i class="num">0</i>
                        <span class="mui-icon mui-icon-arrowright"></span>
                    </div>
                </li>
            </ul>

        </div>
        <!-- <my-music-footer></my-music-footer> -->
    </div>
</template>

<script>
import myMusicHeader from '../header/header-home'
import myMusicFooter from '../footer/footer-base'
export default {
    data(){
        return {
            myMusic:true
        }
    },
    components:{

        'my-music-header': myMusicHeader,
        'my-music-footer': myMusicFooter
    },
    created(){
        
    }
}
</script>

<style scoped>
.arrow{
	position: absolute !important;
    right: 17px;
    top: 32%;
	color: #999;
}
.mui-icon{
	vertical-align: -2px;
	margin-right: 2px;
}
.mui-icon-extra{
	vertical-align: -3px;
}
.text-left{
	text-align: left;
	padding-left: 0.5rem;
    height: 4rem;
}
.btn{
   display: inline-block;
    width: 1.8rem;
    height: 1.8rem;
    vertical-align: -0.6rem;
    margin-right: 14px;
    background-size: 201.4%;
    background-position: -15px;
    background-repeat: no-repeat;
}
.mui-table-view-cell{
    padding: 16px 15px;
}
.btn1{
    background-image: url("/static/img/myMusic/1.png");
}
.btn2{
    background-image: url("/static/img/myMusic/2.png");
}
.btn3{
    background-image: url("/static/img/myMusic/3.png");
}
.btn4{
    background-image: url("/static/img/myMusic/4.png");
}
.btn5{
    background-image: url("/static/img/myMusic/5.png");
}
.content{
    position: relative;
    top: -1rem;
}
</style>
