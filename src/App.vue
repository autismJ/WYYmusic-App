<template>
  <div id="app">
    <header-home v-show="this.$store.getters.homeHideGet"></header-home>
    <router-view/>
    <footerBase v-show="this.$store.getters.homeHideGet || find" ref="abcd"></footerBase>
  </div>
</template>

<script>
import headerHome from "./components/header/header-home"
import footerBase from "./components/footer/footer-base"
export default {
    data(){
        return {
            find:false
        }
    },
    components:{
        "header-home":headerHome,
        "footerBase":footerBase
    },
    created(){
    },
     watch: {
        '$route' (to, from) {
            if (to.fullPath.slice(1,6) == 'music'){
                 this.$store.commit("homeHide",false)
            }else{
                 this.$store.commit("homeHide",true)
            }
            if (to.fullPath.slice(1) == 'search'){
                this.$store.commit("setSearchPage",false)
                console.log(1)
            }else{
                this.$store.commit("setSearchPage",true)
                console.log(2)
            }
        }
    }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}

body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td {
    margin:0;
    padding:0;
}

body{
    font: 10px;
    font-family: 'Microsoft YaHei', Tahoma, Arial, sans-serif;
}

a{
    text-decoration: none;
    color: #969696;
    font-family: 'Microsoft YaHei', Tahoma, Arial, sans-serif;
}
a:hover {
    text-decoration: none;
}
h1, h2, h3, h4, h5, h6 {
    font-size: 100%;
    font-family: 'Microsoft YaHei';
}
img {
    border: none;
}
/* 防止用户选到文本 */
body * {
    -webkit-user-select: none;
    font-family: Helvetica;
    font-size: 10px;
}

html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    /* 解决IOS默认滑动很卡的情况 */
    -webkit-overflow-scrolling : touch;
}

/* 禁止缩放表单 */
input[type="submit"], input[type="reset"], input[type="button"], input {
    resize: none;
    border: none;
}

img {
    width: 100%;
}

em,
i {
    font-style: normal;
}

ul,
li {
    list-style: none;
}
</style>
