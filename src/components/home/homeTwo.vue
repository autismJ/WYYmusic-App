<template>
    <div class="app-homeRight">
        右边;
    </div>
</template>

<script>
// 轮播
import Swipe from '../Swipe/Swipe'
// 九宫格
import gongGe from '../gongGe/gongGe'
// table
import contentTable from '../content-table/content-table'

export default {
     data(){
       return {
           
       }
     },
     components:{
        "Swipe-list":Swipe,
        "gongGe-list":gongGe,
        "content-table":contentTable
    }
}
</script>


<style scoped>

</style>
