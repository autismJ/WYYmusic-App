<template>
    <div class="app-swipe">
        <mt-swipe @click="a">
            <mt-swipe-item  @click="a" v-for="item in bannerLeft" :key="item">
                <img :src="item"  @swipe="a"/>
            </mt-swipe-item>
        </mt-swipe> 
    </div>  
</template>
<script>
export default {
   data(){
        return {
            
        }
    },
    methods:{
        a(){
            console.log(1)
        },
    },
    created(){
       
    },
    props:["bannerLeft"]
}
</script>

<style scoped>
 .app-swipe .mint-swipe{
      height:10.5rem;
}

.mint-swipe-indicator.is-active{
    background: red !important;
}


</style>

