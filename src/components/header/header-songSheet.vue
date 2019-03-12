<template>
    <!-- 歌单头部 -->
    <div class="app-songSheet mui-bar mui-bar-nav">
        <router-link to="/home" class="header-return"></router-link>
        <div class="tit">歌单</div>
        <div class="right-icon">
            <a href="#">
                <div class="circel-three">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
            </a>
            <a href="#">
                <div class="header-music">
                    <i class="i1"></i>
                    <i class="i2"></i>
                    <i class="i3"></i>
                    <i class="i4"></i>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>


<style scoped>
.mui-bar{
    display: flex;
    background: #da3f35;
    line-height: 44px;
    justify-content: space-between;
    padding: 0 1rem;
}
.mui-bar-nav{
    box-shadow: 0 1px 1px #a40011;
}
.app-songSheet .header-music{
    display: flex;
    width: 1.5rem;
    text-align: center;
    justify-content: space-around;
    height: 2rem;
    /* line-height: 2rem; */
    align-items: flex-end;
}
.app-songSheet .header-music i{
    width: 2px;
    background: #fff;
}
.app-songSheet .header-music .i1{
    height: 10px;
}
.app-songSheet .header-music .i2{
    height: 1rem;
}
.app-songSheet .header-music .i3{
    height: 1.4rem;
}
.app-songSheet .header-music .i4{
    height: 0.8rem;
}

.tit{
    color: #fff;
    width: 4rem;
    text-align: right;
}
.right-icon{
    display: flex;
}
/* 返回 */
.app-songSheet .header-return{
    display: inline-block;
    width: 1rem;
    height: 1rem;
    background: url("/static/img/arrow-left.png") no-repeat;
    background-size: contain;
    align-self: center;
}

/* 三个小点 */
.circel-three{
    display: flex;
    width: 2rem;
    text-align: center;
    justify-content: space-around;
    height: 1.7rem;
    /* line-height: 2rem; */
    align-items: flex-end;
    padding-right: 0.3rem
}
.app-songSheet .circel-three i{
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #ffffff;
}


</style>
