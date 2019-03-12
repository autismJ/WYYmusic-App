<template>
    <div class="app-music-content">
        <!-- <p v-for=""></p> -->
        <div class="roundImg" @click="showTxt" ref="upStep">
            <img :src="nowSong.singerImg" class="imgAnimation" alt="">
        </div>
        <div class="icon">
            <div class="btn btn-like" @click="addSong(nowSong.uid)"></div>
            <div class="btn btn-install"></div>
            <div class="btn btn-share"></div>
            <div class="btn btn-comment">
                <i>111</i>
            </div>
            <div class="btn btn-circel">
                <i></i>
                <i></i>
                <i></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            showSongContent:this.$store.getters.getShowSongContent
        }
    },
    methods:{
        addSong(uid){
            console.log(uid)
        },
        showTxt(){
            console.log(1)
            this.$store.commit("setShowSongContent",true)
            // this.$store.commit("setShowSongContent",true)
            console.log(this.showSongContent)

        },
    },
    props:["nowSong"],
    created(){
    }
}
</script>

<style scoped>
.icon{
    display: flex;
    justify-content: space-around;
    padding: 0 1.5rem 2.2rem 1.5rem;
    position: absolute;
    bottom: 0;
    width: 100%;
}
.btn{
    width: 2rem;
    height: 2rem;
    /* background: red; */
    background-repeat: no-repeat;
}
.btn-like{
    background-image: url("/static/img/music/like.png");
    background-size: 159%;
    background-position: -7px;
}
.btn-install{
    background-image: url("/static/img/music/download.png");
    background-size: 159%;
    background-position: -7px;
}
.btn-share{
    background-image: url("/static/img/music/fenxiang.png");
    background-size: 144%;
    background-position: -7px;
}
.btn-comment{
    background-image: url("/static/img/music/comment.png");
    background-size: 159%;
    background-position: -7px;
    position: relative;
}
.btn-comment i{
    position: absolute;
    color: #fff;
    font-size: 10px;
    top: -1px;
    right: -0.4rem;
}

/* ... */
.btn-circel{
    display: flex;
    align-items: center;
    justify-content: space-around;
    transform: rotate(90deg)
}

.btn-circel i{
    /* display:  */
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #fff;
}

.app-music-content{
    /* margin-top: 6rem; */
}
.roundImg{
    padding-top: 6rem;
    padding-bottom: 7rem;
}
img{
    width: 70%;
    border-radius: 50%;
    /* box-shadow:  */
    box-shadow: 0px 0px 3rem #888888;
    
}
.imgAnimation{
    animation: roundImg 16s linear infinite;
}

@keyframes roundImg{
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg)
    }
}
</style>
