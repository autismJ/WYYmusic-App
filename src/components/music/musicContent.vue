<template>
    <div class="app-music-img">
        <div id="touch">
            <div id="upStep" ref="upStep" @click="showTxt">
                <p ref="p" v-for="(item,i) of lyric"  :data-time="lyricTime[i]" :key="i">{{item}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            lyric: [],
            lyricTime: [], //lyricTime
            scrollNum :0,  //
        }
    },
    methods:{
        // 将lyric时间解析出来
        lyricParse(lyric){
            var text = lyric.match(/\d{2}:\d{2}/g)
            this.lyricTime = text;
            // console.log(text)
        },
        s_to_hours(s){
            var h;
            h = s/60;
            s = s % 60;
            s = Math.floor(s);
            h = Math.floor(h);
            h += '';
            s += '';
            if( h.length == 1){
                h = '0' + h
            }
            if( s.length == 1){
                s = '0' + s;
            }
            return h + ':' + s;
        },
        showTxt(){
            this.$store.commit("setShowSongContent",false)
        },
    },
    created(){
        this.lyric = this.nowSong.content.split("\r");
        this.lyricParse(this.nowSong.lyric)
    },
    mounted(){
        var audio = this.$store.getters.audioSrc;
        var upStep = this.$refs.upStep;
        var pAll = this.$refs.p
        var Vue = this;
        // getAttribute("data-name"))
        console.log(pAll[0].getAttribute("data-time"))
        var timer = setInterval(function(){
            var audioTime = Vue.s_to_hours(audio.currentTime) //播放时间
           for(var i=0; i<pAll.length; i++){
               var ptime = pAll[i].getAttribute("data-time")
               if(ptime == audioTime){
                    var scrollNum = Vue.scrollNum;
                    upStep.style.top = `-${41 * i}px`
                    for(var j=0; j<pAll.length; j++){
                        if(pAll[i] == pAll[j]){
                            pAll[i].className = "color"
                        }else{
                            pAll[j].className = pAll[j].className.replace("color","");
                        }
                    }
                    console.log(pAll[i].siblingElems)
               }else{
               }
           }
        },1000)
    },
    props:["nowSong"],
}
</script>

<style scoped>
#upStep{
    position: relative;
    transition: top 0.5s linear;
}
#upStep>p{
    transition: color 0.5s linear;

}

.color{
    color: #fff !important;
}
.app-music-img{
    height: 100%;
    overflow: auto;
    padding-top: 16rem;
    /* background: #333; */
}
#touch{
    position: relative;
    top: 0;
}
.app-music-img p{
    position: relative;
    top: 0px;
    font-size: 1.1rem;
    margin-bottom: 20px;
}
</style>
