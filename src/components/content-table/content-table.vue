<template>
    <div class="app-content">
        <ul class="mui-table-view mui-grid-view">
        <h2>{{title1 == undefined ? "新歌上市" : title1 }} <i class="content-right"></i></h2>
            <li class="mui-table-view-cell mui-media mui-col-xs-6" v-for="item of songSheet" :key="item.uid">
                <!-- <router-link :to="'/songSheet?id='+item.uid"> -->
                <router-link :to="`/songSheet/${item.uid}`">
                    <div class="play-num">
                        <i class="icon-play"></i>
                        <span></span>
                    </div>
                    <img class="mui-media-object" :src="item.singerImg">
                    <div class="mui-media-body">{{item.content}}</div>
                </router-link>
            </li>
        </ul>    
    </div>
</template>
<script>
export default {
    data(){
        return {
            songSheet:[],
        }
    },
    methods:{

    },
    created(){
        this.axios.get("http://localhost:3030/songSheet").then(res=>{
            this.songSheet = res.data;
        });
    },
    props:["title1"],
}
</script>

<style scoped>
.app-content .mui-col-xs-6{
    width: 34%;
}
.app-content h2{
    height: 2rem;
    line-height: 2.6rem;
    text-align: left;
    padding-left: 1rem;
    font-size: 1rem;
    color: #000;
}
.app-content .content-right{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: url("/static/img/content-right.png") no-repeat;
    background-size: contain;
    vertical-align: -2px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell > a:not(.mui-btn){
    margin: -10px 0 0 -19px;
}

</style>
