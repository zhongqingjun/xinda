<template>
	<div class="shoplist">
		<span>首页/店铺列表</span>
		<dl>
			<dt>服务区域</dt>
			<dd>
				<v-distpicker class="area">
					<select name="sheng"></select>
					<select name="shi" class="shi"></select>
					<select name="qu" class="qu"></select>
				</v-distpicker>
			</dd>
		</dl>
		<dl class="product-style">
			<dt>产品类型</dt>
			<dd>
				<ul>
					<li v-for="(items,index) in protypes" :class="{active:flag==index}" @click="toogle(index)">{{items}}</li>
				</ul>
			</dd>
		</dl>
		<dl class="sort-total">
			<div :class="{first:active==index}" v-for="(sort,index) in sorts" @click="show(index)">{{sort}}</div>
		</dl>
		<div class="company">
			<div class="company-left"  v-for="(company,key) in dat">
				<div class="left">
					<div class="left-top">
						<img src="http://115.182.107.203:8088/xinda/pic/2016/09/28/8c419db3f572418a80ff5a08397fb857">
					</div>
					<div class="left-bottom">
						<img src="../assets/images/store-01.png">
						<p>金牌服务商</p>
					</div>
				</div>
				<div class="right">
					<p>{{company.providerName}}</p>
					<p>信誉：<img src="../assets/images/store-02.png"><img src="../assets/images/store-03.png"></p>
					<p>{{company.regionName}}</p>
					<p>累计服务客户次数：{{company.orderNum}}  &nbsp;|&nbsp;  好评率：{{judge(company.goodJudge,company.totalJudge)}}</p>
					<ul>
						<li v-for='val in types[key]'>{{val}}</li>
					</ul>
					<div class="enter" @click="enter(company)">进入店铺</div>
				</div>
			</div>
		</div>
		<div class="bottom">
			<button>上一页</button>
			<button>1</button>
			<button>下一页</button>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import vue from "vue"
	import vuex from "vuex"
	import Distpicker from 'v-distpicker'
	export default {
		created(){
			
		},
		data() {
			return {
				dat:[],
				protypes:[
					"所有",
					"专利申请",
					"版权保护",
					"商标注册",
					"代理记账",
					"公司注册",
					"企业社保",
					"公司变更",
					"税务代办",
					"个人社保",
					"审计报告"
				],
				sorts:[
					"综合排序",
					"评价↿↾",
					"接单↿↾"
				],
				//默认进入状态下标为0
				flag:0,
				active:0,
				types:[],
				val:''
			}
		},
		mounted:function() {
			axios.post('http://115.182.107.203:8088/xinda/xinda-api/provider/grid',{
				start:0,
                limit:6,
				productTypeCode:10,
				regionId: 110102,
				sort:1
			}).then(
				res=>{
					this.dat = res.data.data;
					console.log(this.dat)
					var arr = [];
					for(let i = 0;i<this.dat.length;i++){
						this.types[i] =this.dat[i].productTypes.split(',');
					}
				},
				err=>{
					console.log(err)
				}
			)
		},
		methods: {
			type(TYPE){
				this.types = TYPE.split(",");
//				console.log(this.types)
			},
			judge(good,total){
				if(total!=0) {
					return good/total*100+"%";
				}else {
					return "暂无评论";
				}
			},
			enter(company) {
				this.$router.push({
					name: "jump2",
					params:	{
						id:company.id,
						name: company.regionName,
						detail: company.providerInfo
					}
				})
			},
			toogle(index){
				this.flag=index;
			},
			show(index){
				this.active=index;
			}
		}
	}
</script>

<style lang="less" scoped>
	.shoplist {
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		span {
			font-size: 14px;
			color: #696969;
			margin-bottom: 8px;
			display: inline-block;
		}
		dl {
			content: "";
			clear: both;
			display: block;
			width: 100%;
			border: 1px solid #E9E9E9;
			height: 45px;
			background: #f7f7f7;
			dt {
				float: left;
				border-right: 1px solid #E9E9E9;
				width: 100px;
				height: 100%;
				font-size: 18px;
				text-align: center;
				line-height: 45px;
				color: #000000;
			}
			dd {
				float: left;
				height: 100%;
				.area {
					select {
						border: 1px solid #ccc;
						width: 88px;
						margin: 10px 0 10px 12px;
						height: 27px;
						margin-bottom: 25px;
					}
				}
				
				ul {
					overflow: hidden;
					li {
						float: left;
						height: 25px;
						width: 80px;
						line-height: 25px;
						text-align: center;
						margin: 10px 0 10px 12px;
						font-size: 14px;
						cursor: pointer;
					}
					.active {
						background: #2693d4;
						border-radius: 5px;
						color: #fff;
					}
				}
			}
		}
		.sort-total {
			margin-top: 25px;
			position: relative;
			div {
				float: left;
				width: 107px;
				height: 100%;
				text-align: center;
				line-height: 45px;
				cursor: pointer;
			}
			.first {
				background: #2693d4;
				color: #fff;
				position: relative;
			}
			.first:after {
				content: "";
				width: 0;
				height: 0;
				border: 5px solid transparent;
				border-top-color: #2693d4;
				position: absolute;
				bottom: -10px;
				right: 50px;
			}
		}
		.company {
			overflow: hidden;
			width: 1198px;
			border: 1px solid #e9e9e9;
			border-top: none;
			.company-left {
				float: left;
				overflow: hidden;
				height: 250px;
				width: 567px;
				border: 1px solid #e9e9e9;
				margin: 14px;
				.left {
					float: left;
					width: 205px;
					height: 250px;
					.left-top {
						width: 100%;
						overflow: hidden;
						img {
							margin: 77px 27px 58px 36px;
							float: left;
						}
						p {
							float: left;
							margin: 90px 27px 45px -18px;
							font-size: 30px;
						}
					}
					.left-bottom {
						overflow: hidden;
						padding-left: 48px;
						img {
							float: left;
						}
						p {
							float: left;
							font-size: 14px;
							margin-left: 13px;
							margin-top: 10px; 
						}
					}
				}
				.right {
					text-align: left;
					margin-top: 25px; 
					p {
						font-size: 14px;
						margin-bottom: 10px;
					}
					.enter {
						background: #ff591b;
						display: inline-block;
						width: 102px;
						height: 33px;
						color: #fff;
						font-size: 14px;
						line-height: 33px;
						text-align: center;
						border-radius: 4px;
						cursor: pointer;
					}
					ul {
						overflow: hidden;
						height: 65px;
						li {
							float: left;
							background: #2693D4;
							color: #fff;
							width: 70px;
							height: 22px;
							border-radius: 5px;
							font-size: 14px;
							text-align: center;
							line-height: 22px;
							margin-right: 5px;
							margin-bottom: 10px;
						}
					}
				}
			}
		}
		.bottom {
			width: 1200px;
			margin: 0 auto;
			text-align: center;
			margin-top: 62px;
			button {
				width: 70px;
				height: 35px;
				border: 1px solid #676767;
				color: #676767;
				background: #fff;
				font-size: 14px;
			}
			button:nth-child(2) {
				width: 40px;
				color: #2693D4;
				border: 1px solid #2693D4;
			}
		}
	}
</style>
