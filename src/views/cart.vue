<template>
	<div class="cart">
		<div class="cart-top">首页/购物车</div>
		<div class="cart-text">	全部商品（1）</div>
		<ul class="">
			<li class="company">公司</li>
			<li>服务商品</li>
			<li>单价</li>
			<li>数量</li>
			<li>金额</li>
			<li class="operation">操作</li>
		</ul>
		<div class="cart-content">
			<div class="company-name">信达北京服务中心</div>
			<ul class="content-detail">
				<li class="logo"><img src="" alt=""></li>
				<li>注册分公司</li>
				<li>￥800</li>
				<li class="number">
					<div>
						<span @click="reduceCartNum"><img src="../assets/images/reduce.jpg"></span>
						<input type="text" v-model="number" >
						<span @click="addCartNum"><img src="../assets/images/add.jpg"></span>
					</div>
				</li>
				<li>￥{{number*800}}.00</li>
				<li class="operation">删除</li>
			</ul>
			<div class="pay-total">
				<dl>
					<dt>金额总计<span>￥{{number*800}}.00</span></dt>
					<dd>
						<div>去结算</div>
						<div>继续购物</div>
					</dd>
				</dl>
			</div>
		</div>
		<div class="cart-text">热门服务</div>
		<div class="service-content">
			<div>
				<h3>商标快速注册通道</h3>
				<img src="../assets/images/line.jpg">
				<p>工作日沙发哈哈哈付款</p>
				<p>销量：</p>
				<h1>￥&nbsp;&nbsp;1400.00</h1>
				<div>
					<div></div>
					<p>原价:￥2000.00</p><a href="">查看更多>>></a>
				</div>
			</div>
			<div>
				<h3>商标快速注册通道</h3>
				<img src="../assets/images/line.jpg">
				<p>工作日沙发哈哈哈付款</p>
				<p>销量：</p>
				<h1>￥&nbsp;&nbsp;1400.00</h1>
				<div>
					<div></div>
					<p>原价:￥2000.00</p><a href="">查看更多>>></a>
				</div>
			</div>
			<div>
				<h3>商标快速注册通道</h3>
				<img src="../assets/images/line.jpg">
				<p>工作日沙发哈哈哈付款</p>
				<p>销量：</p>
				<h1>￥&nbsp;&nbsp;1400.00</h1>
				<div>
					<div></div>
					<p>原价:￥2000.00</p><a href="">查看更多>>></a>
				</div>
			</div>
			<div>
				<h3>商标快速注册通道</h3>
				<img src="../assets/images/line.jpg">
				<p>工作日沙发哈哈哈付款</p>
				<p>销量：</p>
				<h1>￥&nbsp;&nbsp;1400.00</h1>
				<div>
					<div></div>
					<p>原价:￥2000.00</p><a href="">查看更多>>></a>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
	li {
		list-style: none;
	}
	.cart {
		width: 1200px;
		margin: 0 auto;
		font-size: 14px;
		.cart-top {
			padding-top: 25px;
		}
		.cart-text {
			margin-top: 25px;
			color: #2693d4;
			padding-left: 65px;
			height: 33px;
			border-bottom: 1px solid #ccc; 
		}
		>ul {
			margin-top: 11px;
			line-height: 44px;
			overflow: hidden;
			li {
				float: left;
				width: 16.6%;
				box-sizing: border-box;
				text-align: center;
			}
			.company {
				padding-left: 65px;
				text-align: left;
			}
			.operation {
				padding-right: 32px;
				text-align: right;
			}
		}
		.cart-content {
			.company-name {
				padding-left: 65px;
				padding-bottom: 38px;
			}
			.content-detail {
				overflow: hidden;
				background: #f7f7f7;
				line-height: 76px;
				li {
					float: left;
					width: 16.6%;
					box-sizing: border-box;
					text-align: center;
					div {
						margin: 28px auto;
						overflow: hidden;
						margin-left: 65px;
						span {
							float: left;
							img {
								display: block;
							}
						}
						input {
							float: left;
							height: 20px;
							width: 33px;
							text-align: center;
							outline: none;
						}
					}
				}
				.logo {
					padding: 16px 0 19px 25px;
					img {
						width: 41px;
						height: 41px;
						display: block;
					}
				}
				.operation {
					padding-right: 32px;
					text-align: right;
				}
			}
			.pay-total {
				overflow: hidden;
				padding-right: 20px;
				padding-bottom: 40px;
				dl {
					float: right;
					overflow: hidden;
					dt {
						font-size: 14px;
						margin-top: 24px;
						margin-left: 70px;
						span {
							font-size: 20px;
							font-weight: 700;
							color: #2693d4;
						}
					}
					dd {
						overflow: hidden;
						margin-top: 14px;
						div {
							width: 101px;
							height: 26px;
							border: 1px solid #2693d4;
							border-radius: 3px;
							line-height: 26px;
							text-align: center;
							color: #2693d4;
							float: right;
							margin-right: 6px;
						}
					}
				}
			}
		}
		.service-content {
			overflow: hidden;
			padding-top: 34px;
			>div {
				float: left;
				padding: 20px 19px 15px 14px;
				border: 1px solid #ccc;
				width: 265px;
				margin: 0 15px;
				box-sizing: border-box;
				h3 {
					font-size: 18px;
					// font-weight: 100;
					color: #000;
				}
				p {
					margin-top: 10px;
				}
				h1 {
					color: #2693d4;
					margin-top: 11px;
					font-size: 32px;
				}
				>div {
					position: relative;
					height: 30px;
					p {
						position: absolute;
						left: 0;
					}
					div {
						position: absolute;
						left: -3px;
						top: 17px;
						width: 118px;
						height: 1px;
						background: #6a423a;
					}
					a {
						position: absolute;
						right: 0;
						top: 10px;
						text-decoration: none;
						color: #2693d4;
					}
				}
			}
			
		}
	}
</style>
<script>
	export default {
	// 	created(){
			
	// 	},
		data (){
			return {
				number:1
			}
		},
	// 	mounted(){

	// 	},
	// 	computed:{

	// 	},
		methods:{
			addCartNum:function () {          
	            this.number++;
	            console.log(this.number);
	        },
	        reduceCartNum:function () {
	            if (this.number>1){
	            	this.number--;
	            }                 
	            
	        },
		}
	}
</script>