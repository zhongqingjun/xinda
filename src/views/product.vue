<template>
	<div class="body">
		<div class="body-top">
			<p>首页/财税服务</p>
		</div>
		<div class="body-left">
			<div class='product-title'>
				<div class="servetype">
					<div class="servetitle">
						<p>服务分类</p>
					</div>
					<div class="typenum">
						<span :class="{'typenum-span':flag==index}" @click='typenumlist(typenum,index)' v-for='(typenum,index) in producttype'>{{typenum.name}}</span>
					</div>
				</div>
				<div class='typecontent'>
					<div class="servetitle">
						<p>类型</p>
					</div>
					<div class="contentnum">
						<span class="{'contentnum-span':active==ind}" @click='contentnumlist(ind)' v-for='(item,ind) in contentnum'>{{item.name}}</span>
					</div>
				</div>
				<div class='servearea'>
					<div class="servetitle">
						<p>服务区域</p>
					</div>
					<div class="areaname">
						<v-distpicker class="area">
							<select></select>
							<select></select>
							<select></select>
						</v-distpicker>
					</div>
				</div>
			</div>
			<div class="product-content">
				<div class="column">
					<div class="column-menu">
						<dd>综合排序</dd>
						<dt>价格</dt>
					</div>
					<div class="column-product">
						<span class="shangpin">商品</span><span class="jiage">价格</span>
					</div>
				</div>
				<div class="merchandise" v-for='proone in productfind' @click='merchandiseone(proone)'>
					<div class="merchandise-img">
						<img :src='"http://115.182.107.203:8088/xinda/pic"+proone.providerImg+".png"'>
					</div>
					<div class="merchandise-text">
						<h4>{{proone.serviceName}}</h4>
						<p>{{proone.serviceInfo}}</p>
						<span>{{proone.providerName}}</span>
						<span>{{proone.regionName}}</span>
					</div>
					<div class="merchandise-price">
						<p>￥{{proone.price}}</p>
						<div>
							<span class="fastbuy">立即购买</span>
							<span class="addcart">加入购物车</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="body-right">q</div>

	</div>
</template>

<script type="text/javascript">
	import axios from 'axios'
	import Distpicker from 'v-distpicker'
	export default {
		created() {

			},
			data() {
				return {
					producttype: '',
					contentnum: '',
					flag: 0,
					active: 0,
					serviceName: '',
					productfind: ''
				}
			},
			mounted: function() {
				//产品类型
				axios.post('http://115.182.107.203:8088/xinda/xinda-api/product/style/list').then(res => {
						this.producttype = res.data.data['2e110f0df53243c197fede52fba8e5d0'].itemList;
					}, err => {
						console.log(err)
					})
					//产品列表接口
					//			axios.post('http://115.182.107.203:8088/xinda/xinda-api/product/package/search-grid',{
					//				start:0,
					//				limit:8,
					//				searchName:'代理',
					//				sort:2
					//			}).then(res=>{
					//				this.productfind = res.data.data;
					//				console.log(this.productfind)
					//			},err=>{
					//				console.log(err)
					//			})
				axios.post('http://115.182.107.203:8088/xinda/xinda-api/product/package/grid', {
					start: 0,
					limit: 8,
					productTypeCode: "1",
					productId: "8a82f52b674543e298d2e5f685946e6e",
					sort: 2
				}).then(res => {
					this.productfind = res.data.data;
					console.log(this.productfind)
				}, err => {
					console.log(err)
				})
			},
			methods: {
				//点击服务分类获取服务类型
				typenumlist(typenum, index) {
					this.contentnum = typenum.itemList
					this.flag = index
				},
				contentnumlist(ind) {
					this.active = ind
				},
				merchandiseone(proone) {
					this.$router.push({
							name: 'jump1',
							params: {
								productID: proone.id
							}
						})
						// console.log(proone)
				}
			}
	}
</script>
<style lang='less' scoped>
	.body {
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		.body-top {
			margin-top: 26px;
			margin-bottom: 7px;
			width: 100%;
			font-size: 14px;
		}
		.body-left {
			float: left;
			width: 948px;
			.product-title {
				background: #f7f7f7;
				.servetitle {
					padding: 12px 0;
					text-align: center;
					font-size: 17px;
					font-weight: 600;
					width: 98px;
					float: left;
					/*border-right: 1px solid #ccc;*/
				}
				.servetype {
					font-size: 14px;
					overflow: hidden;
					border: 1px solid #ccc;
					margin: auto;
					.typenum {
						padding: 14px 0;
						float: left;
						border-left: 1px solid #ccc;
						.typenum-span {
							background: #2693d4;
							border-radius: 6px;
							color: #fff;
							cursor: pointer;
						}
						span {
							margin-left: 17px;
							padding: 6px 12px;
							cursor: pointer;
						}
					}
				}
				.typecontent {
					font-size: 14px;
					overflow: hidden;
					.contentnum {
						padding: 14px;
						width: 818px;
						float: left;
						overflow: hidden;
						border-left: 1px solid #ccc;
						.contentnum-span {
							background: #2693d4;
							border-radius:6px;
							color: #fff;
							display: block;
							float: left;
						}
						span {
							float: left;
							margin: 0 17px 0 0;
							padding: 6px 12px;
							background: #2693d4;
							border-radius:6px;
							color: #fff;
						}
					}
				}
				.servearea {
					font-size: 14px;
					overflow: hidden;
					border: 1px solid #ccc;
					.areaname {
						padding: 14px 0;
						float: left;
						border-left: 1px solid #ccc;
						.area {
							margin-left: 29px;
							select {
								height: 23px;
								/*width: 75px;*/
								border: 1px solid #ccc;
								padding: 0;
							}
						}
					}
				}
			}
			.product-content {
				margin-top: 25px;
				border: 1px solid #CCC;
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
						font-size: 14px;
						color: #696969;
						.shangpin {
							display: inline-block;
							width: 95px;
							text-align: center;
							float: left;
						}
						.jiage {
							float: right;
							width: 180px;
							text-align: center;
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
						h4 {
							display: block;
							font-size: 16px;
							height: 36px;
							line-height: 36px;
							color: #333;
						}
						p {
							font-size: 14px;
							color: #999;
							width: 620px;
							height: 30px;
							line-height: 30px;
							overflow: hidden;
						}
						span {
							font-weight: normal;
							margin-top: 10px;
							display: inline-block;
							margin-right: 50px;
							font-size: 14px;
						}
					}
					.merchandise-price {
						float: left;
						overflow: hidden;
						p {
							height: 40px;
							line-height: 40px;
							color: #ff3e3e;
							font-size: 30px;
							text-align: center;
						}
						div {
							float: left;
							span {
								display: inline-block;
								cursor: pointer;
								width: 86px;
								height: 24px;
								line-height: 24px;
								text-align: center;
								background-color: #39a4dd;
								margin-top: 15px;
								color: #fff;
								border-radius: 2px;
								font-size: 14px;
							}
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