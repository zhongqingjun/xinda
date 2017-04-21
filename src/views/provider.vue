<template>
	<div class="body-provider">
		<div class="body-top"><p>首页/公司工商</p></div>
		<div class="body-left">
			<div class='product-title'>
				<div class="servetype">
					<div class="servetitle"><p>服务分类</p></div>
					<div class="typenum">
						<span :class="{'typenum-span':flag==index}" @click='typenumlist(typenum,index)' v-for='(typenum,index) in producttype'>{{typenum.name}}</span>
					</div>
				</div>
				<div class='typecontent'>
					<div class="servetitle"><p>类型</p></div>
					<div class="contentnum">
						<p  class="{'contentnum-span':active==ind}" @click='contentnumlist(ind)' v-for='(item,ind) in contentnum'>{{item.name}}</p>
					</div>
				</div>
				<div class='servearea'>
					<div class="servetitle"><p>服务区域</p></div>
					<div class="areaname">
						<div class="area">
							<select name="" id="">
								<option value="北京">北京</option>
							</select>
							<select name="" id="">
								<option value="北京市">北京市</option>
							</select>
							<select name="" id="">
								<option value="海淀区">海淀区</option>
							</select>
						</div>
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
						<span>商品</span><span>价格</span>
					</div>
				</div>
				<div class="merchandise" v-for='proone in productfind' @click='merchandiseone(proone)'>
					<div class="merchandise-img">
						<img src="" alt="" />
					</div>
					<div class="merchandise-text">
						<h4>{{proone.providerName}}</h4>
						<p>{{proone.productTypes}}</p>
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
	export default {
		created(){

		},
		data(){
			return{
				producttype:'',
				contentnum:'',
				flag:0,
				active:0,
				serviceName:'',
				productfind:'',

			}
		},
		mounted:function(){
			//产品类型
			axios.post('http://115.182.107.203:8088/xinda/xinda-api/product/style/list').then(res=>{
				this.producttype = res.data.data['5af629246fa34f6f8d49758c6a7b25f1'].itemList;
			},err=>{
				console.log(err)
			})
			//产品列表接口
			axios.post('http://115.182.107.203:8088/xinda/xinda-api/provider/search-grid',{
				start:0,
				limit:8,
				searchName:'大唐',
				sort:1,
				productTypeCode:7,
				regionId:110105	
			}).then(res=>{
				this.productfind = res.data.data;
				console.log(this.productfind)
			},err=>{
				console.log(err)
			})
		},
		methods:{
			//点击服务分类获取服务类型
			typenumlist(typenum,index){
				this.contentnum = typenum.itemList
				this.flag = index
			},
			contentnumlist(ind){
				this.active = ind
			},
			// merchandiseone(proone){
			// 	this.$router.push({
			// 		name:'jump1',
			// 		params:{
			// 			productID:proone.id
			// 		}
			// 	})
			// 	// console.log(proone)
			// }
			
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
					height: 100%;
					width: 98px;
					padding: 12px 0;
					text-align: center;
					font-size: 17px;
					font-weight: 600;
					width: 98px;
					float: left;
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
						border-left: 1px solid #ccc;
						padding: 12px 0;
						float: left;
						.typenum-span {
							background: #2693d4;
							border-radius:6px;
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
					
					border-right: 1px solid #ccc;
					.contentnum {
						padding: 12px;
						width: 823px;
						float: left;
						overflow: hidden;
						
						.contentnum-span {
							background: #2693d4;
							border-radius:6px;
							color: #fff;
							display: block;
							float: left;
							
						}
						p {
							float: left;
							margin: 0 17px 0 0;
							padding: 6px 12px;
							background: #2693d4;
							border-radius:6px;
							color: #fff;
							margin-top: 10px;
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
						.area {
							margin-left: 29px;
			
							select {
								height: 23px;
								width: 75px;
								border: 1px solid #ccc;
							}
						}
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







