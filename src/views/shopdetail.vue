<template>
	<div class="shop">
		<div class="shop-top">
			<img src="../assets/images/logo.png">
			<div class="top-right">
				<b>信达北京服务中心</b>
				<p>{{name}}</p>
			</div>
		</div>
		<div class="shop-center">
			<dl>
				<dt>
					<h3>公司介绍</h3>
					<p>{{detail}}</p>
				</dt>
				<dd>
					<div class="pic">
						<img src="../assets/images/homeshop-01.png">
						<p>平台担保</p>
					</div>
					<div class="pic">
						<img src="../assets/images/homeshop-02.png">
						<p>优质服务</p>
					</div>
					<div class="pic">
						<img src="../assets/images/homeshop-03.png">
						<p>过程监督</p>
					</div>
					<div class="pic">
						<img src="../assets/images/homeshop-04.png">
						<p>增值服务</p>
					</div>
				</dd>
			</dl>
			<div class="center-right">
				<ul>
					<li v-for="(item,index) in service" :class="{active:flag==index}" @click="show(index)">{{item}}</li>
				</ul>
				<p class="content">服务内容</p>
				<div class="service" v-show="yi">
					<h4>商标快速注册通道(5个小时...</h4>
					<img src="../assets/images/homeshop-05.png">
					<p>工作日内5个小时提交申报，次日拿到销量：</p>
					<b>￥ 1400.00</b>
					<p class="money">原价：￥2000.00</p>
					<router-link to="">查看详情>></router-link>
				</div>
				<div class="customer" v-show="er">
					<p>工作时间：周一到周五</p>
					<p class="zixun">微信咨询</p>
					<img src="../assets/images/order-02.jpg">
				</div>
				<div class="zhengshu" v-show="san">
				</div>
			</div>
		</div>
		<div class="shop-bottom">
			<button class="first">首页</button>	
			<button class="pre">上一页</button>	
			<button class="num">1</button>	
			<button class="lastnum">2</button>	
			<button class="pre">下一页</button>	
			<button class="first">尾页</button>	
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import vue from "vue"
	import vuex from "vuex"
	export default {
		data() {
			return {
				dat:[],
				id:this.$route.params.id,
				name:this.$route.params.name,
				detail:this.$route.params.detail,
				service:[
					"服务产品",
					"客服",
					"资质证书"
				],
				flag:0,
				yi: true,
				er: false,
				san: false
			}
		},
		mounted: function() {
			console.log(this.id)
			axios.post('http://115.182.107.203:8088/xinda/xinda-api/provider/grid',{
				id: this.id
			}).then(
				res=>{
					this.dat = res.data.data;
					console.log(this.dat)
				},
				err=>{
					console.log(err)
				}
			)
		},
		methods: {
			show(index){
				this.flag=index;
				if(index==0) {
					this.yi=true;
					this.er=false;
					this.san=false;
				}else if(index==1){
					this.yi=false;
					this.er=true;
					this.san=false;
				}else if(index==2){
					this.yi=false;
					this.er=false;
					this.san=true;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.shop-top {
		width: 1200px;
		margin: 0 auto;
		height: 180px;
		border: 1px solid #e9e9e9;
		img {
			float: left;
			margin: 43px 31px 54px 63px;
			width: 77px;
			height: 83px;
		}
		.top-right {
			float: left;
			margin-top: 52px;
			b {
				font-size: 35px;
				color: #000;
			}
			p {
				font-size: 13px;
				color: #6B6B6B;
				margin-top: 16px;
			}
		}
	}
	.shop-center {
		width: 1200px;
		margin: 0 auto;
		margin-top: 25px;
		overflow: hidden;
		dl {
			width: 302px;
			float: left;
			dt {
				border: 1px solid #e9e9e9;
				width: 300px;
				height: 332px;
				line-height: 25px;
				h3 {
					font-size: 23px;
					margin: 15px 0 40px 10px;
				}
				p {
					font-size: 14px;
					padding: 0 25px;
				}
			}
			dd {
				border: 1px solid #e9e9e9;
				width: 300px;
				height: 253px;
				.pic {
					width: 50%;
					float: left;
					margin-bottom: 20px;
					img {
						margin: 20px 48px 15px 64px;
						width: 40px;
						height: 50px;
					}
					p {
						margin-left: 55px;
						font-size: 14px;
					}
				}
			}
		}
		.center-right {
			float: left;
			width: 874px;
			margin-left: 22px;
			border: 1px solid #E9E9E9;
			ul {
				width: 100%;
				height: 40px;
				border-bottom: 1px solid #E9E9E9;
				margin-top: -1px -1px;
				li {
					float: left;
					width: 100px;
					text-align: center;
					line-height: 39px;
					margin:  0 10px;
					cursor: pointer;
				}
				.active {
					border-bottom: 2px solid #409CD7;
				}
			}
			.content {
				width: 100%;
				color: #409CD7;
				font-size: 30px;
				height: 95px;
				line-height: 95px;
				text-align: center;
				border: 1px solid #E9E9E9;
				margin-top: -1px -1px;
			}
			.service {
				width: 267px;
				height: 190px;
				border: 1px solid #E9E9E9;
				margin: -1px -1px;
				overflow: hidden;
				h4 {
					font-size: 18px;
					color: #676767;
				}
				p {
					font-size: 14px;
					color: #676767;
				}
				b {
					font-size: 33px;
					color: #409CD7;
				}
				.money {
					float: left;
				}
				a {
					float: left;
					color: #2693D4;
					margin-left: 25px;
					font-size: 14px;
				}
			}
			.customer {
				p {
					font-weight: 700;
				}
				img {
					float: left;
				}
				.zixun {
					float: left;
				}
			}
			.zhengshu {
				width: 100px;
				height: 140px;
				background: #2693D4;
			}
		}
	}
	.shop-bottom {
		width: 1200px;
		margin: 0 auto;
		text-align: center;
		button {
			border: 1px solid #b0b0b0;
			color: #b0b0b0;
			background: #f4f4f4;
			height: 35px;
			font-size: 14px;
		}
		.first {
			width: 58px;
			margin-right: 14px;
			margin-left: 14px;
		}
		.prev {
			width: 68px;
		}
		.num {
			width: 40px;
			margin: 0 6px;
		}
		.lastnum {
			margin-right: 6px;
			width: 40px;
		}
	}	
</style>
