<template>
    <!-- 这里是home -->
    <div id="app-table-bar">
        <!--  -->
        <navigator-tab></navigator-tab>
    </div>
</template>
<script>
// 选项卡
import navigator from '../navigator/navigator.vue'
// 头部
import headerHome from '../header/header-home'
// 底部
import footerBase from './footer-base.vue'
export default {
    data(){
        return {
            div:{

            }
        }
    },
    components: {
        "navigator-tab":navigator,
        "header-home":headerHome,
        "footer-base":footerBase
    }
}
</script>

<style scoped>

</style>
