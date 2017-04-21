<template>
	<div class="landing">
		<div class="landing-g">
			<div class="landing-header">
				<div class="landing-left">
					<img src="../assets/images/logo.png">
				</div>
				<b>信达</b>
				<div class="handing-right">
					<p>找回密码</p>
				</div>
			</div>
		</div>
		<div class="landing-content">
			<div class="landing-c">
				<div class="content-left">
					<div class="shuru">
						<input type="text" placeholder="请输入手机号 "/>
						<div class="wrong">验证码输入错误</div>
						<div class="yanzheng">
							<input type="text" placeholder="请输入验证码 "/>
							<div class="yan-pic">dycn</div>
						</div>
						<div class="wrong1">短信验证码输入错误</div>
						<button class="get">重新获取(30s)</button>
						<div class="yanzheng">
							<input type="text" placeholder="请输入短信验证码 "/>
							<button class="yan-pic">点击获取</button>
						</div>
						<input type="text" placeholder="请输入新密码 "/>
						<input type="text" placeholder="请再次确认密码 "/>
						<button class="quickly">确认修改</button>
					</div>
				</div>
				<div class="content-right">
					<div class="zhuce">
						<h3>想起来密码？</h3>
						<router-link to="/">返回登陆>></router-link>
						<img src="../assets/images/renwu.jpg">	
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
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
						.wrong {
							overflow: hidden;
							width: 282px;
							height: 20px;
							position: absolute;
							color: #fd0202;
							top: 40px;
							left: 0;
							font-size: 14px;
						}
						.wrong1 {
							overflow: hidden;
							width: 282px;
							height: 20px;
							position: absolute;
							color: #fd0202;
							top: 102px;
							left: 0;
							font-size: 14px;
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
							overflow: hidden;
							width: 282px;
							height: 37px;
							margin-bottom: 25px;
							input {
								height: 35px;
								width: 150px;
								float: left;
							}
							.yan-pic {
								float: right;
								width: 85px;
								height: 35px;
								background: #d8d8d2;
							}
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