<template>
	<div class="body-provider">
		<div class="body-top">
			<p>首页/公司工商</p>
		</div>
		<div class="detailone">
			<div class="detailone-img">
				<img :src='"http://115.182.107.203:8088/xinda/pic"+data.product.img'>
			</div>
			
			<div class="detailone-text">
				<div class="servetypes">
					<h3>{{itemname.serviceName}}</h3>
					<p>{{itemname.serviceInfo}}</p>
				</div>
				<div class="price">
					<p>市场价：￥{{data.product.marketPrice}}</p>
					<p>价格：<span>{{itemname.price}}{{itemname.unit}}</span></p>
				</div>
				<div class="circlename">
					<p>类型：</p>
					<div class="circle">
						<div class="typenames" v-for="item in data.serviceList" >
							<p @click="serviceName(item)">{{item.serviceName}}</p>
						</div>
					</div>	
				</div>
					
				<div class="detailone-area">
					<p>地区：{{data.providerRegionText}}</p>
				</div>
				<div class="buynum">
					购买数量：
					<input type="text" name="" id="" value="" />
				</div>
				<div class="buybutton">
					<router-link to=''>立即购买</router-link>
					<router-link to=''>加入购物车</router-link>
				</div>
			</div>
			<div class="online">
				
			</div>
		</div>
		
		<div class="staticimg">
			<img src="../assets/images/ad-banner.png" >
		</div>
		<div class="column">
			<div class="column-menu">
				<dd>服务内容</dd>
				<dd>商品评价</dd>
			</div>
			<div class="severcontent" v-html='itemname.serviceContent'>{{itemname.serviceContent}}</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	export default {
		created() {
			// serviceName0()
		},
		data() {
			return {
				productdetail: '',
				dat:'',
				data:'',
				ty:'',
				itemname:'',
				ID:this.$route.params.productID
			}
		},
		mounted: function() {
	
			let that = this
			// console.log(that.data)
			//商品详情接口
			// this.serviceName0()
			var postData = {
				sId: this.ID
			}
			postData = (function(obj) { // 转成post需要的字符串.
				var str = "";

				for(var prop in obj) {
					str += prop + "=" + obj[prop] + "&"
				}
				return str;
			})(postData)

			var xhr = new XMLHttpRequest()
			xhr.open('POST','http://115.182.107.203:8088/xinda/xinda-api/product/package/detail',true)
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.onreadystatechange = function() {
				if(xhr.status == 200 && xhr.readyState == 4) {
					that.data  = JSON.parse(xhr.responseText).data
					console.log(that.data)
					// that.ty = JSON.parse(xhr.responseText).data.serviceList[0]
				}
			}
			xhr.send(postData)
			 // console.log(this.ID)
				// axios.post('/xinda-api/product/package/detail',{
				// 	sId:this.ID
				// }).then(res=>{ 
				// 	console.log(res)
				// },err=>{
				// 	console.log(err)
				// })
		},
		methods: {
			
			serviceName(itname){
				this.itemname = itname
				console.log(this.itemname)
			}
		}
	}
</script>

<style lang='less' scope>
	.body-provider {
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.body-top {
			margin-top: 26px;
			width: 100%;
			font-size: 14px;
		}
		.detailone {
			padding: 7px 0;
			overflow: hidden;
			.detailone-img {
				float: left;
				
				/*background: #000;*/
				img {
					width: 526px;
					height: 396px;
				}
			}
			.detailone-text {
				float: left;
				width: 387px;
				margin-left: 32px;
				.servetypes {
					h3 {
						font-size: 24px;
					}	
					p {
						margin-top: 22px;
						font-size: 14px;
					}
				}
				.price {
					margin-top: 18px;
					background: #f7f7f7;
					padding: 13px 6px;
					p {
						padding: 3px 0;
					}
				}
				.circlename {
					margin-top: 18px;
					margin-left: 6px;
					overflow: hidden;
					font-size: 12px;
					p {
						float: left;
					}
					.circle {
						float: left;
						.typenames {
							
							p {
								cursor: pointer;
								margin-bottom: 5px;
								border: 1px solid #2693D4;
								color: #2693D4;
								padding: 4px 3px;
							}
						}
					}
				}
				.detailone-area {
					margin-top: 18px;
					padding-left: 6px;
				}
				.buynum {
					margin-top: 18px;
					padding-left: 6px;
				}
				.buybutton {
					width: 100%;
					margin-top: 18px;
					padding-left: 6px;
					justify-content: center;
					a {
						
						margin: 0 auto;
						border: 1px solid #2693D4;
						border-radius: 5px;
						padding: 7px 21px;
						color: #2693D4; 
						&:active {
							background: #2693D4;
							color: #fff;
						}
					}
				}
			}
			.online {
				float: left;
				width: 197px;
				height: 235px;
				margin-left: 56px;
				border: 1px solid;
			}
		}
		.staticimg {
			margin-top: 38px;
		}
		.column {
			margin-top: 38px;
			border: 1px solid #ccc;
			.column-menu {
				border-bottom: 1px solid #ccc;
				overflow: hidden;
				background: #f7f7f7;
				dd {
					float: left;
					padding: 15px 25px;
					border-right: 1px solid #ccc;
				}
				dt {
					float: left;
					padding: 15px 25px;
				}
			}
			.column-product {
				overflow: hidden;
				padding: 15px;
				span {
					padding: 0 40px;
					justify-content: space-between;
				}
			}
			.severcontent {
				padding: 20px;
				p {
					padding: 3px;
				}
			}
		}
		.body-left {
			float: left;
			width: 948px;
			.product-title {
				background: #f7f7f7;
				.servetitle {
					height: 100%;
					width: 98px;
					padding: 12px 0;
					text-align: center;
					font-size: 17px;
					font-weight: 600;
					width: 98px;
					float: left;
					border-right: 1px solid #ccc;
					p {
						margin: auto;
					}
				}
				.servetype {
					font-size: 14px;
					overflow: hidden;
					border: 1px solid #ccc;
					margin: auto;
					.typenum {
						padding: 12px 0;
						float: left;
						.typenum-span {
							background: #2693d4;
							border-radius: 6px;
							color: #fff;
						}
						span {
							margin-left: 17px;
							padding: 6px 12px;
						}
					}
				}
				.typecontent {
					font-size: 14px;
					overflow: hidden;
					border-left: 1px solid #ccc;
					border-right: 1px solid #ccc;
					.contentnum {
						padding: 12px;
						width: 823px;
						float: left;
						.contentnum-span {
							background: #2693d4;
							border-radius: 6px;
							color: #fff;
						}
						span {
							margin: 0 17px 0 0;
							padding: 6px 12px;
							background: #2693d4;
							border-radius: 6px;
							color: #fff;
						}
					}
				}
				.servearea {
					font-size: 14px;
					overflow: hidden;
					border: 1px solid #ccc;
					.areaname {
						padding: 12px 0;
						float: left;
					}
				}
			}
			.product-content {
				margin-top: 25px;
				border: 1px solid #CCCCCC;
				.column {
					.column-menu {
						border-bottom: 1px solid #ccc;
						overflow: hidden;
						background: #f7f7f7;
						dd {
							float: left;
							padding: 15px 25px;
							border-right: 1px solid #ccc;
						}
						dt {
							float: left;
							padding: 15px 25px;
						}
					}
					.column-product {
						overflow: hidden;
						padding: 15px;
						span {
							padding: 0 40px;
							justify-content: space-between;
						}
					}
				}
				.merchandise {
					margin: 0 8px 11px;
					border-top: 1px solid #ccc;
					overflow: hidden;
					.merchandise-img {
						float: left;
						margin-top: 11px;
						img {
							width: 98px;
							height: 98px;
						}
					}
					.merchandise-text {
						width: 630px;
						float: left;
						margin-left: 11px;
					}
					.merchandise-price {
						float: left;
						overflow: hidden;
						div {
							float: left;
						}
					}
				}
			}
		}
		.body-right {
			/*border: 1px solid #ccc;*/
			margin-left: 10px;
			float: left;
			width: 238px;
		}
	}
</style>