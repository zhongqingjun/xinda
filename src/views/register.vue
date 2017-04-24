<template>
	<div class="landing">
		<div class="landing-g">
			<div class="landing-header">
				<div class="landing-left">
					<img src="../assets/images/logo.png">
				</div>
				<b>信达</b>
				<div class="handing-right">
					<p>欢迎注册</p>
				</div>
			</div>
		</div>
		<div class="landing-content">
			<div class="landing-c">
				<div class="content-left">
					<div class="shuru">
						<input type="text"  v-model="phone" @focus="ptx"  @blur="psq" placeholder="请输入手机号 "/>
						<div class="wrong0" v-if="shouerror">手机号不能为空</div>
						<div class="wrong0" v-if="shouerror2">手机号输入有误</div>
						<div class="wrong" v-if="yanerror">验证码不能为空</div>
						<div class="wrong" v-if="yanerror1">验证码输入错误</div>
						<div class="yanzheng">
							<input type="text" @focus="ytx"  @blur="ysq" v-model="yanzhengma" placeholder="请输入验证码 "/>
							<div class="yan-pic1"><img :src="validateImg" alt="加载中"></div>
							<div @click=yanzhengshuaxin class="kanbuqing">看不清换一张</div>
						</div>
						<div class="wrong1" v-if="danerror">短信验证码不能为空</div>
						<div class="wrong1" v-if="danerror1">短信验证码输入错误</div>
						<div  class="yanzheng">
							<input type="text" v-model="newsyan" @focus="dtx"  @blur="dsq" placeholder="请输入短信验证码 "/>
							<div @click="getnews" class="yan-pic">点击获取</div>
						</div>
						<v-distpicker class="area">
							<select name="sheng">
							</select>
							<select name="shi" class="shi">
							</select>
							<select name="qu" class="qu">
							</select>
						</v-distpicker>
						<input type="text" v-model="mima" placeholder="请输入密码 "/>
						<button class="quickly">立即注册</button>
						<div class="tiaokuan">注册即同意遵守<span>《服务协议》</span></div>
					</div>
				</div>
				<div class="content-right">
					<div class="zhuce">
						<h3>还没有账号？</h3>
						<router-link to="/">直接登陆>></router-link>
						<img src="../assets/images/renwu.jpg">	
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios'
	import Distpicker from 'v-distpicker'
	export default {
		data(){
			return {
				phone:"",
				shouerror:false,
				shouerror2:false,
				yanzhengma:"",
				newsyan:"",
				mima:"",
				yanerror:false,
				yanerror1:false,
				danerror:false,
				danerror1:false,
				daojishi:10,
				validateImg:this.yanzhengurl()
			}
		},
		created() {
			this.$parent.head=false;
//			let self=this;
//			let daoji=setInterval(function(){
//							console.log(self.daojishi)
//							if(self.daojishi){
//								self.daojishi=self.daojishi-1;
//							}else{
//								clearInterval(daoji);
//								self.daojishi=10;
//							}
//						},1000)
		},
		mounted() {
//			this.getValidImg()
		},
		beforeRouteLeave(to,from,next){
			//删除定时器
			next();
		},
		methods:{
			//获取短信验证码
			getnews:function(){
				let self=this;
				self.psq();
				self.ysq();
				if((!this.shouerror)&&(!this.shouerror2)&&(!this.yanerror)){
					axios({
						url:'/xinda-api/register/sendsms?cellphone='+this.phone+'&smsType=1&imgCode='+this.yanzhengma,
					 	method:'post',
						headers: {'Content-Type': 'application/x-www-form-urlencoded'}
					}).then(function(data){
						//若获得验证码成功
						if(data.status==1){
							console.log("chenggong")
						}else{
						//获得验证码失败	
							console.log("shibai")
							self.yanerror1=true;
							self.yanzhengshuaxin();
						}
					})
				}
			},
			//手机号输入框获得焦点执行的函数
			ptx:function(){
				this.shouerror=false;
				this.shouerror2=false;
			},
			//手机号输入框离开时执行的函数
			psq:function(){
				//手机号内容是否为空
				if(this.phone==""){
					this.shouerror=true;
				} else if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.phone))){ 	//手机号不为空执行进一步判断
					this.shouerror2=true;
				} 
			},
			//验证码输入框获得焦点执行的函数
			ytx:function(){
				this.yanerror=false;
				this.yanerror1=false;
			},
			//手机号输入框离开时执行的函数
			ysq:function(){
				//手机号内容是否为空
				if(this.yanzhengma==""){
					this.yanerror=true;
				}
			},
			//验证码输入框获得焦点执行的函数
			dtx:function(){
				this.danerror=false;
				this.danerror1=false;
			},
			//短信验证输入框离开时执行的函数
			dsq:function(){
				//短信验证内容是否为空
				if(this.newsyan==""){
					this.danerror=true;
				}
			},
			yanzhengshuaxin:function(){
				this.shuaxin();
			}
			
		}
	}
</script>
<style lang="less" scoped>
		.landing-g {
			width: 100%;
			height: 99px;
			background: #fff;
			.landing-header {
				width: 1200px;
				padding-top: 20px;
				overflow: hidden;
				margin: 0 auto;
				height: 56px;
				.landing-left {
					float: left;
				}
				b {
					float: left;
					font-size: 28px;
					margin: 12px;
				}
				.handing-right {
					height: 56px;
					border-left: 1px solid #b4b4b4;
					float: left;
					p {
						line-height: 56px;
						font-size: 18px;
						padding-left: 10px;
					}
				}
				
			}
		}
		.landing-content {
			width: 100%;
			background: #f5f5f5;
			padding-top: 45px;
			.landing-c {
				width: 1200px;
				margin: 0 auto;
				background: #fff;
				overflow: hidden;
				.content-left {
					width: 50%;
					float: left;
					.shuru {
						width: 282px;
						margin: 53px auto 125px;
						height: 410px;
						position: relative;
						input {
							border: 1px solid #cbcbcb;
							width: 258px;
							height: 35px;
							border-radius: 5px;
							display: block;
							margin-bottom: 25px;
							padding-left: 22px;
						}
						.quickly {
							border: 1px solid #cbcbcb;
							width: 282px;
							height: 35px;
							border-radius: 5px;
							display: block;
							background: #fff;
							color: #409CD7;
						}
						.tiaokuan {
							margin-left: 45px;
							line-height: 35px;
							color: #2C3E50;
							font-size: 14px;
							span {
								color: #409CD7;
							}
						}
						.wrong0 {
							overflow: hidden;
							width: 282px;
							height: 20px;
							position: absolute;
							color: #fd0202;
							top: 40px;
							left: 22px;
							font-size: 12px;
						}
						
						.wrong {
							overflow: hidden;
							width: 282px;
							height: 20px;
							position: absolute;
							color: #fd0202;
							top: 102px;
							left: 22px;
							font-size: 12px;
						}
						.wrong1 {
							overflow: hidden;
							width: 282px;
							height: 20px;
							position: absolute;
							color: #fd0202;
							top: 164px;
							left: 22px;
							font-size: 12px;
						}
						.get {
							width: 85px;
							height: 35px;
							background: #d8d8d2;
							position: absolute;
							top: 125px;
							right: 0;
						}
						.yanzheng {
							position: relative;
							width: 282px;
							height: 37px;
							margin-bottom: 25px;
							.kanbuqing {
								position: absolute;
								cursor: pointer;
								right: -60px;
								top: 8px;
								font-size: 12px;
							}
							input {
								height: 35px;
								width: 150px;
								float: left;
							}
							.yan-pic1 {
								float: right;
								width: 85px;
								height: 35px;
								margin-right: 15px;
								img {
									width: 100%;
									height: 100%;
								}
							}
							.yan-pic {
								float: right;
								width: 100px;
								height: 35px;
								border: 1px solid #2693d4;
								color: #2693d4;
								text-align: center;
								line-height: 35px;
								border-radius: 5px;
								cursor: pointer;
							}
						}
						select {
							border: 1px solid #CBCBCB;
							width: 79px;
							height: 35px;
							border-radius: 5px;
							float: left;
							margin-bottom: 25px;
							padding-left: 14px;
						}
						.shi {
							margin: 0 22px;
						}
						.qu {
							float: right;
						}
					}
				}
				.content-right {
					width: 50%;
					float: left;
					border-left: 1px solid #cbcbcb;
					box-sizing: border-box;
					margin-top: 53px;
					.zhuce {
						width: 165px;
						margin: 0 auto;
						h3 {
							font-size: 18px;
							color: #6b6b6b;
							margin-bottom: 23px;
						}
						a {
							font-size: 18px;
							color: #409CD7;
							text-decoration: none;
						}
						img {
							margin-top: 23px;
						}
					}
				}
			}
		}
</style>