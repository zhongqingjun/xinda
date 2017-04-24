<template>
	<div class="landing">
		<div class="landing-g">
			<div class="landing-header">
				<div class="landing-left">
					<img src="../assets/images/logo.png">
				</div>
				<b>信达</b>
				<div class="handing-right">
					<p>欢迎登陆</p>
				</div>
			</div>
		</div>
		<div class="landing-content">
			<div class="landing-c">
				<div class="content-left">
					<div class="shuru">
						<input type="text" placeholder="请输入手机号 "/>
						<input type="text" placeholder="请输入密码 "/>
						<div class="wrong">验证码输入错误</div>
						<div class="yanzheng">
							<input type="text" placeholder="请输入验证码 "/>
							<div class="yan-pic">dycn</div>
						</div>
						<router-link to="forget">忘记密码？</router-link>
						<button >立即登录</button>
					</div>
				</div>
				<div class="content-right">
					<div class="zhuce">
						<h3>还没有账号？</h3>
						<router-link to="register">立即注册>></router-link>
						<img src="../assets/images/renwu.jpg">	
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		created(){
			this.$parent.head=false;
		},
		data(){
			return {
				
			}
		},
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
						height: 261px;
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
						button {
							border: 1px solid #cbcbcb;
							width: 282px;
							height: 35px;
							border-radius: 5px;
							display: block;
							background: #fff;
							color: #409CD7;
						}
						.wrong {
							overflow: hidden;
							width: 282px;
							height: 20px;
							position: absolute;
							color: #fd0202;
							top: 102px;
							left: 0;
							font-size: 14px;
						}
						.yanzheng {
							overflow: hidden;
							width: 282px;
							height: 37px;
							margin-bottom: 25px;
							input {
								height: 35px;
								width: 150px;
								float: left;
							}
							div {
								float: right;
								width: 85px;
								height: 35px;
								background: #d8d8d2;
							}
						}
						a {
							float: right;
							color: #409cd7;
							font-size: 13px;
							padding-bottom: 25px;
							text-decoration: none;
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
						height: 270px;
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
