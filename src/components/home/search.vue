<template>
    <div class="app-search">
        <ul class="search-list">
            <li class="search">
            搜索 "{{searchVal}}"
            </li>
            <li v-for="item in searchList" :key="item">
                 <!-- :to="`/music/${item.uid}`"> -->
                <router-link :to="`/music/${item.uid}`">
                    <div  class="hellow">
                        <span class="iconfont icon-sousuo"></span>
                        <span class="uname">{{item.uname}}</span>
                        <span class="songName">{{item.songName}}</span>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            searchList:[],
            searchVal:""
        }
    },
    props:[],
    mounted() {
        // console.log(this.$refs.searchInput)
        var searchInput = document.getElementById("searchInput")
        searchInput.addEventListener("input",()=>{
            this.searchVal = searchInput.value
        })
    },
    watch: {
        searchVal(){
            var keyWord = this.searchVal;
            console.log(keyWord)
            this.axios.get("http://localhost:3030/search",{params:{keyWord}}).then((res)=>{
               var searchList = res.data.searchList;
               if(searchList.length > 0){
                   this.searchList = searchList;
                   console.log(searchList)
               }
            })
        }
    },
}
</script>


<style scoped>
.hellow{
    text-align: left;
    padding-left: 1rem;
    line-height: 2.2rem;
}
.hellow > span{
    font-size: 1.1rem;
}
.search{
    text-align: left;
    font-size: 1.2rem;
    color: #0c73c2;
    border-bottom: 1px;
}
.search-list li{
    height: 2.2rem;
    line-height: 2.2rem;
}
.search-list>li{
    border-bottom: 1px solid #ddd;
}
</style>
