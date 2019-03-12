<template>
    <div class="app-setting">
        <!-- 头部 -->
        <my-header-self :setting="setting"></my-header-self>
        <!-- 个人内容 -->
		<div class="mui-page-content" v-show="self">
			<div class="mui-scroll-wrapper">
				<div class="mui-scroll">
					<ul class="mui-table-view mui-table-view-chevron">
						<li class="mui-table-view-cell mui-media">
							<a class="mui-navigate-right" href="javascript:;">
								<img class="mui-media-object mui-pull-left head-img" id="head-img" :src="this.$store.getters.getUserMsg.avatar">
								<div class="mui-media-body">
									{{this.$store.getters.getUserMsg.phone}}
									<i class="iconfont icon-qiandao"></i>										
								</div>
								<div class="dongtai">
									<span>
										<p>动态</p>
										<p class="i1">0</p>
									</span>
									<span>
										<p>关注</p>
										<p class="i1">5</p>
									</span>
									<span>
										<p>粉丝</p>
										<p class="i1">999</p>
									</span>
									<span>
										<a href="javascript:;"><span class="mui-icon mui-icon-compose"></span></a>
										<p class="">我的资料</p>
									</span>
								</div>
							</a>
						</li>
					</ul>
					<ul class="mui-table-view mui-table-view-chevron text-left">
						<li class="mui-table-view-cell">
							<a id="icon-email" href="javascript:;"><span class="mui-icon mui-icon-email mr-6"></span>我的信息</a>
							<span class="mui-icon arrow mui-icon-arrowright"></span>
						</li>
					</ul>
					<ul class="mui-table-view mui-table-view-chevron text-left">
						<li class="mui-table-view-cell">
							<a><span class="mui-icon-extra mui-icon-extra-cart mr-6"></span>商城</a>
							<span class="mui-icon arrow mui-icon-arrowright"></span>
						</li>
					</ul>
					<ul class="mui-table-view mui-table-view-chevron text-left">
						<li class="mui-table-view-cell">
							<a><span class="mui-icon-extra mui-icon-extra-holiday mr-6"></span>会员中心</a>
							<span class="mui-icon arrow mui-icon-arrowright"></span>
						</li>
					</ul>
					<ul class="mui-table-view mui-table-view-chevron text-left">
						<li class="mui-table-view-cell">
							<a><span class="mui-icon-extra mui-icon-extra-grech mr-6"></span>游戏推荐:明日之后</a>
							<span class="mui-icon arrow mui-icon-arrowright"></span>
						</li>
					</ul>
					<ul class="mui-table-view mui-table-view-chevron text-left">
						<li class="mui-table-view-cell">
							<a><span class="mui-icon-extra mui-icon-extra-outline mr-6"></span>音乐闹钟</a>
							<!-- <a><span class="mui-icon mui-icon-flag"></span>设置</a> -->
							<span class="mui-icon arrow mui-icon-arrowright"></span>
						</li>
					</ul>
					<ul class="mui-table-view mui-table-view-chevron text-left">
						<li class="mui-table-view-cell">
							<a><span class="mui-icon-extra mui-icon-extra-sweep mr-6"></span>扫一扫</a>
							<span class="mui-icon arrow mui-icon-arrowright"></span>
						</li>
					</ul>
					<ul class="mui-table-view mui-table-view-chevron text-left">
						<li class="mui-table-view-cell">
							<a id="icon-gear"><span class="mui-icon mui-icon-gear mr-6"></span>设置</a>
							<span class="mui-icon arrow mui-icon-arrowright"></span>
						</li>
					</ul>
					<ul class="mui-table-view mui-table-view-chevron text-left">
						<li class="mui-table-view-cell">
							<a><span class="mui-icon-extra mui-icon-extra-card mr-6"></span>优惠券</a>
							<span class="mui-icon arrow mui-icon-arrowright"></span>
						</li>
					</ul>
					<ul class="mui-table-view mt-1">
						<li class="mui-table-view-cell" style="text-align: center;">
							<a @click="logout">退出登录</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 登录 -->
		<div class="login" v-show="loginHide">
			<div class="phone">
				<i id="icon-phone " class="sanshi" ><span class="mui-icon mui-icon-phone"></span></i>
				<input class="jiushi" v-model="logPhoneVal" type="text" maxlength="11" placeholder="手机号">
			</div>
			<div class="phone">
				<i id="icon-phone " class="sanshi" ><span class="mui-icon mui-icon-locked"></span></i>
				<input class="jiushi" v-model="logPwdVal" type="password" placeholder="密码">
			</div>
			<div class="loginNow">
				<a href="javascript:;" class="chect" :class="baise" @click="login">登录</a>
				<a href="javascript:;" @click="callback" class="chect">返回</a>
			</div>
		</div>
		<!-- 注册 -->
		<div class="reg login" v-show="regHide">
			<div class="phone">
				<i id="icon-phone " class="sanshi" ><span class="mui-icon mui-icon-phone"></span></i>
				<input class="jiushi" type="text" maxlength="11" v-model="regPhoneVal" @input="notWord($event)" placeholder="输入手机号">
			</div>
			<div class="phone">
				<i id="icon-phone " class="sanshi" ><span class="mui-icon mui-icon-locked"></span></i>
				<input class="jiushi" type="password" v-model="regPwdVal" placeholder="设置登录密码,不少于六位">
			</div>
			<div class="loginNow">
				<a href="javascript:;" class='chect' :class="baise" @click="reg">下一步</a>
				<a href="javascript:;" @click="callback"  class="chect">返回</a>
			</div>
		</div>
			<!--页面主内容区结束-->
		<div class='login' v-show="check">
			<div class="logo">
				<img src="/static/img/Swipe/logo.jpg" alt="">
			</div>
			<div class="loginNow">
				<a href="javascript:;" @click="toLogin" class="chect">登录</a>
			</div>
			<div class="loginNow">
				<a href="javascript:;" @click="toReg" class="chect">注册</a>
			</div>
		</div>
		<!-- </div> -->
        <!-- 底部 -->
        <!-- <my-footer-self></my-footer-self> -->
    </div>
</template>

<script>

import {Toast} from 'mint-ui'
import settingHeader from '../header/header-home'
import settingFooter from '../footer/footer-base'

export default {
    data(){
        return {
			setting : true, 
			self:false,
			loginHide:false, 
			regHide:false,
			regPhoneVal:'', //注册手机值
			regPwdVal:'',   //注册密码值
			logPhoneVal:'', //登录手机值
			logPwdVal: '',  //登录密码值
			baise:{
				bai:false
			},
			userMsg: [],  //用户信息
			check: true
        }
	},
	methods:{
		notWord(e){
			this.regPhoneVal = this.regPhoneVal.replace(/[^\d]/g,"")
		},
		// 注册验证
		reg(){
			var phone = this.regPhoneVal;
			var pwd = this.regPwdVal;
			//  var regTel=/^1[2-8][\d]{9}$/;
    			// var regPwd=/^[a-z0-9_-]{6,16}$/;
			var regPhone = /^1[2-8][\d]{9}$/;
			if(!regPhone.test(phone)){
				Toast("手机必须为11位数字");
				return
			}
			if(pwd.length < 6){
				Toast("密码长度不够");
				return
			}
			// var obj = {phone,pwd};
			var obj =  "phone="+phone+"&upwd="+pwd
			this.axios.post("http://localhost:3030/register",obj).then(res=>{
				// console.log(res)
				if(res.data.code == 0){
					Toast(`${res.data.msg}`);
					return;
				}
				if(res.data.code == 1){
					Toast("注册成功");
					this.loginHide = true;
					this.regHide = false
					return
				}
			})
		},
		login(){
			var phone = this.logPhoneVal;
			var upwd = this.logPwdVal;
			var regPhone = /^1[2-8][\d]{9}$/;
			if(!regPhone.test(phone)){
				Toast("手机必须为11位数字");
				return
			}
			if(upwd.length < 6){
				Toast("密码错误");
				return
			}
			console.log(phone,upwd)
			this.axios.get("http://localhost:3030/login?phone="+phone+"&upwd="+upwd).then(result=>{
				var data = result.data
				if(data.code == 0){
					Toast(`${data.msg}`)
					return;
				}
				if(data.code == 1){
					Toast(`${data.msg}`);
					this.loginHide = false;
					this.regHide = false;
					this.self = true
					this.userMsg = data.result;
					this.$store.state.userMsg = data.result[0]
					this.$store.commit("setUserMsg",data.result[0]);
					// console.log(data.result[0])
					// console.log(this)
					console.log(this.$store.getters.getUserMsg);
				}
			})
		},
		logout(){
			this.$store.commit("setUserMsg","");
			this.self = false;
			this.loginHide = false;
			this.regHide = false;
			this.check = true
		},
		toLogin(){
			this.check = false;
			this.loginHide = true
		},
		toReg(){
			this.check = false;
			this.regHide = true
		},
		callback(){
			this.self = false;
			this.check = true;
			this.regHide = false;
			this.loginHide = false;
		}
		
	},
	created(){
		if(this.$store.getters.getUserMsg.length != 0){
			console.log(this.$store.getters.getUserMsg.length)
			// console.log("created");
			this.self = true;
			this.loginHide = false;
			this.regHide = false;
		}
	},
	watch:{
		regPwdVal(){
			if( this.regPwdVal != ""){
				this.baise.bai = true;
			}else{
				this.baise.bai = false;
			}
		},
		logPwdVal(){
			if(this.logPwdVal != ""){
				this.baise.bai = true;
			}else{
				this.baise.bai = false;
			}
		}
	},
    components:{
        'my-header-self': settingHeader,
        'my-footer-self': settingFooter
    }
}
</script>

<style scoped>
.mui-media-body{
	height: 2.6rem;
	line-height: 2.6rem;
	display: flex;
	justify-content: space-between;
	padding: 0.3rem;
}
.mui-scroll-wrapper{
    top: 2.7rem;
	background: #eee;
}
/* 动态的小icon */
.dongtai{
	display: flex;
	justify-content: space-around;
	padding-top: 0.5rem;
	border-top: 1px solid #999;
	margin-top: 1rem;
}
.dongtai .i1{
	color: #000;
}
.mui-navigate-right{
	padding-right: 2rem !important;
}
.text-left{
	text-align: left;
	padding-left: 0.5rem;
}
.text-left .icon{
	display: inline-block;
	width: 1rem;
	height: 1rem;
	/* background: red; */
	vertical-align: center;
}

.mui-icon{
	vertical-align: -2px;
	margin-right: 2px;
}
.mui-icon-extra{
	vertical-align: -3px;
}
/* 箭头 */
.arrow{
	position: absolute !important;
    right: 17px;
    top: 32%;
	color: #999;
}
.mt-1{
	margin-top: 1rem;
	color: #da3f35;
}
.mr-6{
	margin-right: .6rem;
}
.phone{
	display: flex;
	border-bottom:1px solid gray;
}
.sanshi{
	width: 10%;
	padding: 5px 0 0 3px;
}
.jiushi{
	width: 90%;
	background: none;
	margin-bottom: 0;
	border: none;
	padding-left: 0;
}
.login{
	padding: 0 1rem;
}
.loginNow{
	padding: 0 1rem;
}
.loginNow a{
	display: inline-block;
	width: 100%;
	height: 2rem;
	line-height: 2rem;
	border-radius: 1rem;
	margin-top: 1rem;
	border:1px solid #da3f35;
	color: #da3f35;
}
.bai{
	color: red !important;
	border: 1px solid red !important;
}
.chect{
	color: #eee;
	font-size: 1rem
}
.logo{
	width: 7rem;
    height: 7rem;
	margin: 0 auto;
}
.iconfont{
	font-size: 2rem;
    color: #da3f35;
}
</style>
