<template>
	<div class="body">
		<div class="banner">
			<div class="banner-left">
				<!--<div class="imgicos">
					<div class="imgico">
						<img src="../assets/images/products-02.png" alt="" />
					</div>
					<div class="imgico">
						<img src="../assets/images/products-03.png" alt="" />
					</div>
					<div class="imgico">
						<img src="../assets/images/products-04.png" alt="" />
					</div>
					<div class="imgico">
						<img src="../assets/images/products-05.png" alt="" />
					</div>
				</div>-->
				<div class="texts">
					<div class="text" v-for="item in type">
						<img src="../assets/images/products-05.png" alt="" />
						<div class="typetitle">
							<p>{{item.name}}</p>	
						</div>
						<div class="productkinds">
							<span v-for='kind in item.itemList'>{{kind.name}}</span>
						</div>
						<div class="texthover">
							<div class="texthover-kind" v-for="kind in item.itemList">
								<span>{{kind.name}}></span>&nbsp;&nbsp;
								<span v-for="pro in kind.itemList">|&nbsp;{{pro.name.replace("（","(").slice(0,pro.name.indexOf("（"))}}&nbsp;</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="banner-right">
				<img src="../assets/images/products-01.png" alt="" />
			</div>
		</div>
		<div class="products">
			<div class="title">
				<h4>明星产品推荐</h4>
			</div>
			<div class="product">
				<div class="productone"  v-for='product in products'>
					<img :src='"http://115.182.107.203:8088/xinda/pic"+product.providerImg' alt="" />
					<h4>{{product.serviceName.replace("（","(").slice(0,product.serviceName.indexOf("（"))}}</h4>
					<p>{{product.serviceInfo}}</p>
					<p><span>{{product.price}}</span>{{product.unit}}/人</p>
				</div>
			</div>
		</div>
		<div class="enterprise">
			<div class="title">
				<h4>初创企业必备</h4>
			</div>
			<div class="essential">
				<div class="essentialone"  v-for='hq in hqs'>
					<img src="../assets/images/products-06.png" alt="" />
					<h4>{{hq.serviceName.replace("（","(").slice(0,hq.serviceName.indexOf("（"))}}</h4>
					<p>{{hq.serviceInfo}}</p>
					<p><span>{{hq.price}}</span>{{hq.unit}}/人</p>
				</div>
			</div>
		</div>
		
		
		
		<div class="knowledge ">
			<div class="title">
				<h4>知识产权</h4>
			</div>
			<div class="know-all">
				<div class="know-left">
					<img src="../assets/images/products-10.png" alt="" />
				</div>
				<div class="know-right">
					<div class="know-right1">
						<img src="../assets/images/products-11.png" alt="" />
					</div>
					<div class="know-right2">
						<img src="../assets/images/products-12.png" alt="" />
					</div>
					<div class="know-right-down">
						<img src="../assets/images/products-13.png" alt="" />
					</div>
				</div>
				
			</div>
		</div>
		
		
		
		<div class="serve">
			<div class="title">
				<h4>推荐服务商</h4>
			</div>
			<div class="service">
				<div class="serviceone"  v-for='hq in hqs'>
					<img src="../assets/images/products-06.png" alt="" />
					<h4>{{hq.serviceName}}</h4>
					<p>{{hq.serviceInfo}}</p>
					<p><span>{{hq.price}}</span>{{hq.unit}}/人</p>
				</div>
				<div class="serviceone"  v-for='hq in hqs'>
					<img src="../assets/images/products-06.png" alt="" />
					<h4>{{hq.serviceName}}</h4>
					<p>{{hq.serviceInfo}}</p>
					<p><span>{{hq.price}}</span>{{hq.unit}}/人</p>
				</div>
			</div>
		</div>
		
		<div class="cooperate">
			<div class="title">
				<h4>合作伙伴</h4>
			</div>
			<div class="cooperators">
				<img src="../assets/images/products-15.png" alt="" />
			</div>
		</div>
		
		
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	export default {
		created(){
			
		},
		data(){
			return{
				type:[],
				products:[],
				hqs:[],
			}
		},
		
		mounted:function(){
			//产品类型
			axios.post('http://115.182.107.203:8088/xinda/xinda-api/product/style/list').then(res=>{
				this.type = res.data.data;
				console.log(this.type)
			},err=>{
				console.log(err)
			})
			//推荐
			axios.post('http://115.182.107.203:8088/xinda/xinda-api/recommend/list').then(res=>{
				//产品推荐
				this.products = res.data.data.product;
//				console.log(this.products)
				//服务商推荐
				this.hqs = res.data.data.hq;
//				console.log(this.hqs)
			},err=>{
				console.log(err)
			})
		},
		methods:{
			
		}
	}
</script>





<style lang='less' scoped>
	.body {
		.title {
			width: 100%;
			border-bottom: 2px solid #1ABCFF;
			font-size: 15px;
			padding-bottom: 8px;
			h4 {
				padding-left: 10px;
			}
		}
		width: 1200px;
		margin: 0 auto;
		.banner {
			width: 100%;
			overflow: hidden;
			.banner-left {
				color: #fff;
				float: left;
				width: 200px;
				background: #122235;
				height: 400px;
				.texts{
					position: relative;
					img {
						position: absolute;
						top: 17px; 
						left: 14px;
					}
					.text {
						width: 200px;
						float: left;
						font-size: 14px;
						padding-bottom: 15px;
						position: relative;
						&:hover{
							background: #2694d4;
						} 
						.texthover {
							font-size: 13px;
							position: absolute;
							background: rgba(255,255,255,.5);
							color: #fff;
							top: 0;
							left: 200px;
							width: 1000px;
							height: 100%;
							display: none;
							.texthover-kind {
								margin-left: 16px;
								margin-top: 13px;
								.texthover-kind-pro {
									overflow: hidden;
									span {
										margin-left: 10px;
									}
								}
							}
							p {
								margin-left: 10px;
							}
						}
						&:hover .texthover{
							display: block;
						} 
						.typetitle {
							margin-top: 22px;
							padding-left: 49px;
						}
						.productkinds{
							width: 150px;
							padding-left: 49px;
							overflow: hidden;
							span {
								margin-top: 15px;
								margin-right: 19px;
								display: inline-block;
							}
						}
					}
				}
			}
			.banner-right {
				float: left;
			}
		}
		.products {
			margin-top: 53px;
			.product {
				width: 100%;
				overflow: hidden;
				.productone {
					float: left;
					width: 260px;
					height: 398px;
					background: #fafafa;
					margin: 50px 20px 0;
					text-align: center;
					img {
						width: 124px;
						padding: 64px 0 20px 0;
					}
					p {
						font-size: 14px;
						color: #656565;
						margin-top: 24px;
						span {
							font-size: 23px;
							color: #1ABCFF;
						}
					}
					span {
						font-size: 14px;
						color: #656565;
						margin-bottom: 64px;
						p {
							font-size: 23px;
							color: #1ABCFF;
						}
					}
				}
			}
		}
		.enterprise {
			margin-top: 53px;
			.essential {
				width: 100%;
				overflow: hidden;
				.essentialone {
					float: left;
					width: 260px;
					height: 398px;
					margin: 50px 20px 0;
					text-align: center;
					img {
						width: 124px;
						padding: 64px 0 20px 0;
					}
					p {
						font-size: 14px;
						color: #656565;
						margin-top: 24px;
						span {
							font-size: 23px;
							color: #1ABCFF;
						}
					}
					span {
						font-size: 14px;
						color: #656565;
						margin-bottom: 64px;
						p {
							font-size: 23px;
							color: #1ABCFF;
						}
					}
				}
			}
		}
		.knowledge {
			margin-top: 53px;
			.know-all {
				margin-top: 36px;
				overflow: hidden;
				.know-left {
					float: left;
				}
				.know-right {
					float: left;
					margin-left: 23px;
					overflow: hidden;
					.know-right1 {
						float: left;
					}
					.know-right2 {
						margin-left: 22px;
						float: left;
					}
					.know-right-down {
						margin-top: 252px;
					}
				}
			}
			
		}
		.serve {
			margin-top: 53px;
			.service{
				width: 100%;
				overflow: hidden;
				.serviceone {
					float: left;
					width: 190px;
					height: 398px;
					margin: 50px 25px 0;
					text-align: center;
				}
			}
		}
		.cooperate {
			width: 100%;
			margin-top: 53px;
			.cooperators {
				img {
					border: 1px solid #ececec;
				}
				width: 100%;
				overflow: hidden;
				margin: 66px 0;
			}
		}
	}
</style>