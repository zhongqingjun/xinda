<template>
	<div class='index'>
		<div class="message">
			<div class="container">
				<p class="topmsg-left">欢迎来到信达！<span class="landbtn">登录</span><span class="registerbtn">快速注册</span></p>
				<div class="topmsg-right">
					<img src="../assets/images/cart.png" alt="cartico" />
					<span class="cart">购物车<span class="cartnum">0</span>件<router-link to='./index'>服务商入口</router-link></span>
				</div>
			</div>
		</div>
		<div class='header'>
			<div class="head-float">
				<div class="logo">
					<img src="../assets/images/logo.png" alt="信达logo" />
					<span>信达</span>
				</div>
				<div class="address">
					<p>城市</p>
					<p class="changecity">[切换城市]</p>
				</div>
				<div class="search">
					<div class="kinds">
						<dd :class={blue:show} @click='products(a)'>产品</dd>&nbsp;<span>|</span>&nbsp;
						<dt :class={blue:show} @click='serviers'>服务商</dt>
					</div>
					<div>
						<input type="text" ref='input' v-model="serveing" placeholder="搜索您需要的服务或服务商"/>
						<div class="searchimg" @click="search()">
							<img src="../assets/images/search.png" alt="" />
						</div>
					</div>
					<p>热门服务：<span>社保开户</span><span>公司注册</span></p>
				</div>
				<div class="phone">
					<img src="../assets/images/phone.png" alt="" />
					<span>010-83421842</span>
				</div>
			</div>	
			<div class="navtop">
				<div>全部产品</div>
				<router-link to='/product'><div>财税服务</div></router-link>	 
				<router-link to='/provider'><div>公司工商</div></router-link>
				<router-link to='/joinus'><div>加盟我们</div></router-link>
				<router-link to='/shoplist'><div>店铺</div></router-link>
			</div>
		</div>
		
		<router-view>
			
		</router-view>
		<div class="aboutus">
			<div class="container">
				<div class="text">
					<h4>关于我们</h4>
					<div>
						<p>联系我们：contact@xinkeher.com</p>
						<p>公司地址：北京朝阳区大望路soho现代城</p>
						<p>客服官方电话：010-83421842</p>
					</div>
				</div>
			</div>
		</div>
		<div class="bottom">
			<p>©Copyright 2016北京信达科技有限公司  京ICP备  16011621号</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	import axios from "axios"
	export default {
		created(){
			
		},
		data(){
			return {
				serveing:'',
				show:"true"
			}
		},
		methods:{
			search(){
//				if(this.show == true&&){
//					
//				}
				console.log()
			},
			products(a){
				console.log(a)
				
			 	this.show = true
			 },
			serviers(){
			 	this.show = false
			}
		},
		mounted:function(){
			
		}
	}
</script>

<style lang='less' scope>
	.index {
		width: 100%;
		height: 182px;
		border-bottom: 1px solid #2693d4;
		.message {
			width: 100%;
			height: 35px;
			background: #f2f2f2;
			.container {
				width: 1200px;
				margin: 0 auto;
				overflow: hidden;
				.topmsg-left {
					float: left;
					line-height: 35px;
					font-size: 14px;
					span {
						margin-left: 10px;
						color: #1abcff;
					}
				}
				.topmsg-right {
					float: right;
					line-height: 35px;
					font-size: 14px;
					span {
						.cartnum {
							color: #1abcff; 
						}
					}
					a {
						margin-left: 10px;
						color: #1abcff;
					}
				}
			}
		}
		.header {
			width: 1200px;
			margin: 0 auto;
			
			.head-float {
				overflow: hidden;

			
				.logo {
					margin-top: 39px;
					font-size: 28px;
					font-weight: bold;
					float: left;
					width: 124px;
					height: 56px;
					overflow: hidden;
					img {
						float: left;
					}
					span {
						float: left;
						margin-left: 12px;
						line-height: 56px;
					}
				}
				.address {
					margin-top: 52px;
					font-size: 14px;
					margin-left: 26px;
					float: left;
					width: 65px;
					.changecity {
						margin-top: 7px;
						color: #1abcff;	
					}
				}
				.search {
					margin-top: 24px;
					margin-left: 108px;
					float: left;
					width: 586px;
					overflow: hidden;
					font-size: 14px;
					p {
						font-size: 11px;
						color: #a3a3a3;
						margin-left: 10px;
						margin-top: 7px;
						span {
							margin-left: 10px;
						}
					}
					.kinds {
						overflow: hidden;
						color: #1abcff;
						dd {
							float: left;
							color: #000000;
							cursor: pointer;
						}
						dd.blue {
							color: #1abcff;
						}
						span {
							margin: 0 5px;
							float: left;
						}
						dt {
							float: left;
							cursor: pointer;
							color: #1abcff;
						}
						dt.blue {
							color: #000000;
						}
					}
					>div {
						margin: 5px 0;
						overflow: hidden;
						input {
							padding-left: 10px;
							float: left;
							width: 471px;
							height: 37px;
							border: 2px solid #2693d4;
						}
						.searchimg {
							float: left;
							width: 101px;
							height: 41px;
							background: #2693d4;
							text-align: center;
							line-height: 52px;
						}
					}
				}
				.phone {
					float: left;
					width: 180px;
					margin-left: 110px;
					margin-top: 35px;
					color: #a3a3a3;
					overflow: hidden;
					img {
						float: left;
					}
					span {
						float: left;
						font-weight: 600;
						margin-left: 5px;
						font-size: 15px;
						line-height: 40px;
					}
				}
			}
			.navtop {
				/*margin-top: /*121px*/
				margin-left: 61px;
				overflow: hidden;
				font-size: 18px;
				div {
					text-align: center;
					margin-left: 127px;
					width: 77px;
					float: left;
					padding-bottom: 4px;
					border-bottom: 3px solid #1ABCFF;
					color: #1ABCFF;
				}
			}
		}
		.aboutus {
			width: 100%;
			height: 201px;
			font-size: 16px;
			width: 100%;
			background: #f8f8f8;
			margin-top: 100px;
			.container {
				width: 1200px;
				margin: 0 auto;
				.text {
					padding-left: 24px;
					padding-top: 38px;
					h3 {
						font-size: 16px;
					}
					div {
						font-weight: 600;
						font-size: 14px;
						margin-left: 3px;
						margin-top: 35px;
						p {
							margin-top: 12px;
						}
					}
				}
			}
		}
		.bottom {
			width: 100%;
			height: 45px;
			font-size: 14px;
			background: #cbcccc;
			text-align: center;
			line-height: 45px;
		}
	}
</style>