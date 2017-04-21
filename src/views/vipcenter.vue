<template>
	<div >
		<div class="container">
			<div class="vip-information">
				<p>首页/<span>公司工商</span></p>
				<div class="personal">
					<span></span>
					<div class="personal-name">12345678901</div>
				</div>
				<ul class="zhanghu">
					<li class="active" @click="order"><span></span>我的订单</li>
					<li @click="pingjiaa"><span></span>用户评价</li>
					<li @click="setzh"><span></span>账户设置</li>
				</ul>
			</div>
			<div class="orders" v-show="orders">
				<div class="my-order"><p>我的订单</p></div>
				<div class="inputs">
					<div class="order-num">
						<label>订单号：</label>
						<input type="text" placeholder="请输入订单号搜索">
						<p>搜索</p>
					</div>
					<div class="order-time">
						<label>创建时间：</label>
						<input type="text">
						<input class="input-sec" type="text">
					</div>
				</div>
				<div class="list">
					<div class="list-head">
						<div class="good-name">商品名称</div>
						<div class="good-price">单价</div>
						<div class="good-number">数量</div>
						<div class="good-total">总金额</div>
						<div class="order-state">订单状态</div>
						<div class="order-opration">订单操作</div>
					</div>
					<div class="list-content">
						<div class="order-num-time">
							<p>订单号：<span>S347484929274490</span></p>
							<p>下单时间：<span>2017-04-01 01:23:32</span></p>
						</div>
						<div class="order-details">
							<div class="company">
								<img src="" alt="">
								<p>信达北京服务中心<br>注册分公司</p>
							</div>
							<div class="price">
								￥<span>800.00</span>
							</div>
							<div class="number">1</div>
							<div class="total">￥<span>800.00</span></div>
							<div class="state">等待买家付款</div>
							<div class="opration">
								<span>付款</span>
								<p>删除订单</p>
							</div>
						</div>
					</div>
					<div class="prev-next">
						<div>
							<span class="prev">上一页</span>
							<span class="page">1</span>
							<span class="next">下一页</span>
						</div>
					</div>
				</div>
			</div>
			<div class="pingjia" v-show="pingjias">
				<div class="my-order"><p>我的评价</p></div>
				<ul class="pingjia">
					<li :class="{toogle:active==index}" v-for="(item,index) in pingjia" @click="ping(index)">{{item}}</li>
				</ul>
				<div class="pingjia-content" v-if="pingjiashow">
					<div class="company-name">
						<div class="company-logo"><img src="" alt=""></div>
						<div class="company-dec">
							<h3>信达北京服务中心</h3>
							<p>服务单号：<span>B1823</span></p>
							<p>购买内容：<i>test</i></p>
						</div>
					</div>
					<div class="buy-time">
						购买时间：<span>2016-01-02 02:12:21</span>
					</div>
					<router-link to=''><div class="go-pingjia">
						去评价
					</div></router-link>
				</div>
				<div class="pingjia-content" v-else >
					<div class="company-name">
						<div class="company-logo"><img src="" alt=""></div>
						<div class="company-dec">
							<h3>信达北京服务中心</h3>
							<p>服务单号：<span>B1823</span></p>
							<p>购买内容：<i>test</i></p>
						</div>
					</div>
					<div class="buy-time">
						购买时间：<span>2016-01-02 02:12:21</span>
					</div>
					<div class="go-pingjia">
						已评价
					</div>
				</div>

				<div class="prev-next">
					<div>
						<span class="prev">上一页</span>
						<span class="page">1</span>
						<span class="next">下一页</span>
					</div>
				</div>
			</div>
			<div class="set" v-show="sets">
				<div class="my-order">
					<p :class="{setshow:flag==inde}" v-for="(item,inde) in zhanghu" @click="set(inde)">{{item}}</p>
				</div>
				<div class="personal" v-if="setshow">
					<div class="touxiang">
						<label for="">当前头像：</label>
						<img src="../assets/images/vip.png" >
					</div>
					<div class="name">
						<label for="">姓名：</label>
						<input type="text">
					</div>
					<div class="sex">
						<label for="">性别：</label>
						<input type="radio" checked="checked" value="男" name="1">男
						<input type="radio" value="女" name="1">女
					</div>
					<div class="mail">
						<label for="">邮箱：</label>
						<input type="text" placeholder="请输入邮箱">
					</div>
					<div class="area">
						<label for="">所在地区：</label>
						<v-distpicker>
							<select ></select>
							<select ></select>
							<select ></select>
						</v-distpicker>
					</div>
					<div class="save">
						<div>
							保存 
						</div>
					</div>
				</div>
				<div class="change-password" v-else>
					<div class="old-password">
						<label for="">旧密码：</label>
						<input type="text">
					</div>
					<div class="new-password">
						<label for="">新密码：</label>
						<input type="text">
					</div>
					<div class="again-password">
						<label for="">再次输入新密码：</label>
						<input type="text">
					</div>
					<div class="save">
						<div>
							保存 
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.container {
		width: 1200px;
		margin: 0 auto;
		overflow: hidden;
		box-sizing: border-box;
		.vip-information {
			float: left;
			p {
				font-size: 14px;
				line-height: 40px;
				height: 40px;
				margin-top: 13px;
			}
			// 
			.personal {
				width: 242px;
				height: 141px;
				background: #e9e9e9;
				padding: 9px 0;
				box-sizing: border-box;
				span {
					display: block;
					background: url("../assets/images/vip.png");
					height: 96px;
					width: 96px;
					margin: 0 auto;
				}
				.personal-name {
					text-align: center;
					padding-top: 11px;
				}
			}
			.zhanghu {
				width: 242px;
				height: 376px;
				margin-top: 9px;
				background: #f7f7f7;
				padding-left: 0;
				text-align: center;
				li {
					list-style: none;
					height: 50px;
					line-height: 50px;
					font-size: 18px;
				}
				.active {
					background: #e9e9e9;
				}
				
			}
		}
		.orders {
			width: 958px;
			float: left;
			padding-left: 23px;
			box-sizing: border-box;
			
			// 订单内容样式
			.my-order {
				width: 875px;
				height: 33px;
				margin-top: 52px;
				border-bottom: 2px solid #e9e9e9;
				p {
					width: 112px;
					text-align: center;
					margin-left: 10px;
					border-bottom: 2px solid #2693d4;
					font-size: 14px;
					color: #2693d4;
					line-height: 33px;
				}
			}
			.inputs {
				div {
					margin-top: 20px;
					font-size: 14px;
					overflow-y: hidden;
					label {
						width: 76px;
						display: block;
						float: left;
						line-height: 25px;
					}
					input {
						float: left;
						height: 23px;
						width: 263px;
						border: 1px solid #b0b0b0;
						padding-left: 6px;
					}
					p {
						float: left;
						margin: 0;
						height: 25px;
						border: 1px solid #2693d4;
						border-radius: 3px;
						width: 68px;
						text-align: center;
						line-height: 25px;
						margin-left: 12px;
						color: #2693d4;
					}
				}
				.order-time {
					label {
						margin-top: 6px;
					}
					input {
						width: 111px;
					}
					.input-sec {
						margin-left: 12px;
					}
				}
			}
			.list {
				width: 100%;
				margin-top: 20px;
				.list-head {
					height: 34px;
					background: #f7f7f7;
					overflow: hidden;
					font-weight: 700;
					line-height: 34px;
					font-size: 12px;
					div {
						float: left;
						text-align: center;
					}
					.good-name {
						box-sizing: border-box;
						width: 318px;
						padding-left: 38px;
						text-align: left;
					}
					.good-price {
						width: 113px;
					}
					.good-number {
						width: 103px;
					}
					.good-total {
						width: 139px;
					}
					.order-state {
						width: 143px;
					}
					.order-opration {
						width: 119px;
					}
				}
				.list-content {
					margin-top: 12px;
					.order-num-time {
						overflow: hidden;
						background: #f7f7f7;
						height: 37px;
						border: 1px solid #e8e8e8;
						p {
							float: left;
							padding-left: 24px;
							color: #3e3e3e;
							font-size: 12px;
							margin-top: 10px;
						}
					}
					.order-details {
						border-bottom: 1px solid #e8e8e8;
						overflow: hidden;
						height: 67px;
						
						line-height: 49px;
						box-sizing: border-box;
						color: #626262;
						div {
							text-align: center;
							float: left;
							font-size: 12px;
							padding: 9px 0;
							box-sizing: border-box;
						}
						.company {
							width: 318px;
							text-align: left;
							overflow: hidden;
							img {
								margin-left: 12px;
								width: 48px;
								height: 48px;
								float: left;
							}
							p {
								float: left;
								margin: 0;
								line-height: 24px;
								margin-left: 11px;
							}
						}
						.price {
							width: 113px; 
						}
						.number {
							width: 103px 
						}
						.total {
							width: 139px;
							color: #2693d4;
							border-left: 1px solid #e8e8e8;
						}
						.state {
							width: 143px;
							color: #2693d4;
							border-left: 1px solid #e8e8e8;
						}
						.opration {
							width: 119px;
							border-left: 1px solid #e8e8e8;
							span {
								border: 1px solid #2693d4;
								width: 54px;
								height: 21px;
								text-align: center;
								display: block;
								line-height: 21px;
								margin: 0 auto;
								border-radius: 3px;
								color: #2693d4
							}
							p {
								margin: 0;
								line-height: 24px;
								color: #ff4747;
							}
						}
					}
				}
				.prev-next {
					text-align: center;
					margin-top: 37px;
					div {
						// overflow: hidden;
						span {
							color: #ccc;
							font-size: 13px;
							// float: left;
							text-align: center;
							width: 66px;
							height: 34px;
							line-height: 34px;
							border: 1px solid #cccccc;
							margin-left: 6px;
							display: inline-block;
						}
						.page {
							width: 37px;
							border: 1px solid #2693d4;
							color: #2693d4;
						}
					}
					
				}
			}
		}
		.pingjia {
			width: 958px;
			float: left;
			padding-left: 23px;
			box-sizing: border-box;
			//评价区样式
			.my-order {
				width: 875px;
				height: 33px;
				margin-top: 52px;
				border-bottom: 2px solid #e9e9e9;
				p {
					width: 112px;
					text-align: center;
					margin-left: 10px;
					border-bottom: 2px solid #2693d4;
					font-size: 14px;
					color: #2693d4;
					line-height: 33px;
				}
			}
			.pingjia {
				box-sizing: border-box;
				width: 100%;
				background: #f7f7f7;
				height: 43px;
				border: 1px solid #cccccc;
				line-height: 43px;
				margin-top: 24px;
				// overflow: hidden;
				padding: 0;
				// clear: both;
				// content: "";
				// display: block;
				li {
					float: left;
					width: 107px;
					height: 41px;
					text-align: center;
					list-style: none;
					font-size: 14px;
					position: relative;
				}
				.toogle {
					background: #2693d4;
					color: #fff;
				}
				.toogle:after {
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
			.pingjia-content {
				overflow: hidden;
				box-sizing: border-box;
				margin-top: 1px;
				height: 151px;
				padding: 25px 30px 25px 8px;
				border: 1px solid #ccc;
				border-top: none;
				font-size: 14px;
				color: #242424;
				.company-name {
					float: left;
					overflow: hidden;
					.company-logo {
						float: left;
						width: 100px;
						height: 100px;
						border: 1px solid #cccccc;
					}
					.company-dec {
						float: left;
						margin-left: 12px;
						h3 {
							font-size: 16px;
						}
						p {
							margin-top: 25px;
							span {
								color: #ff5a5a;
							}
							i {
								font-style: normal;
							}
						}
					}
				}
				.buy-time {
					float: left;
					line-height: 101px;
					margin-left: 45px;
				}
				.go-pingjia {
					float: right;
					font-size: 18px;
					width: 112px;
					height: 35px;
					color: #2693d4;
					line-height: 35px;
					margin-top: 30px;
					border: 1px solid #2693d4;
					border-radius: 3px;
					text-align: center;
				}
			}
			.prev-next {
				text-align: center;
				margin-top: 37px;
				div {
					// overflow: hidden;
					span {
						color: #ccc;
						font-size: 13px;
						// float: left;
						text-align: center;
						width: 66px;
						height: 34px;
						line-height: 34px;
						border: 1px solid #cccccc;
						margin-left: 6px;
						display: inline-block;
					}
					.page {
						width: 37px;
						border: 1px solid #2693d4;
						color: #2693d4;
					}
				}
				
			}
			
		}
		.set {
			width: 958px;
			float: left;
			padding-left: 23px;
			box-sizing: border-box;
			.my-order {
				width: 875px;
				height: 33px;
				margin-top: 52px;
				border-bottom: 2px solid #e9e9e9;
				p {
					float: left;
					width: 112px;
					text-align: center;
					margin-left: 10px;
					font-size: 14px;
					line-height: 33px;
					cursor: pointer;
				}
				.setshow {
					color: #2693d4;
					border-bottom: 2px solid #2693d4;
				}
			}
			.personal {
				font-size: 14px;
				color: #676767;
				div {
					padding-left: 94px;
					// box-sizing: border-box;
					label {
						float: left;
						margin-left: -94px;
					}
					img {
						border-radius: 50%;
						display: block;
					}
				}
				.touxiang {
					line-height: 96px;
					margin-top: 25px;
					img {
						width: 96px;
						height: 96px;
					}
				}
				.name {
					margin-top: 27px;
					line-height: 25px;
					input {
						width: 180px;
						height: 23px;
						border: 1px solid #ccc;
						padding-left: 6px;
					}
				}
				.sex {
					margin-top: 27px;
				}
				.mail {
					margin-top: 24px;
					line-height: 25px;
					input {
						width: 180px;
						height: 23px;
						border: 1px solid #ccc;
						padding-left: 6px;
					}
				}
				.area {
					margin-top: 20px;
					line-height: 25px;
					>div {
						padding-left: 0;
						select {
							height: 23px;
							width: 75px;
							border: 1px solid #ccc;
						}
					}
					
				}
				.save {
					div {
						padding-left: 0;
						margin-left: 2px;
						margin-top: 45px;
						color: #2693d4;
						width: 68px;
						height: 24px;
						border:1px solid #2693d4;
						text-align: center;
						line-height: 24px;
						border-radius: 3px;
					}
					
				}
			}
			.change-password {
				font-size: 14px;
				color: #676767;
				div {
					padding-left: 143px;
					label {
						float: left;
						margin-left: -143px;
					}
					input {
						width: 180px;
						height: 23px;
						border: 1px solid #ccc;
						padding-left: 6px;
					}
				}
				.old-password {
					margin-top: 37px;
				}
				.new-password {
					margin-top: 20px;
				}
				.again-password {
					margin-top: 20px;
				}
				.save {
					div {
						padding-left: 0;
						margin-left: 2px;
						margin-top: 45px;
						color: #2693d4;
						width: 68px;
						height: 24px;
						border:1px solid #2693d4;
						text-align: center;
						line-height: 24px;
						border-radius: 3px;
					}
				}
			}
		}
	}
</style>
<script>
	import axios from 'axios'
	import Distpicker from 'v-distpicker'
	// import vue from 'vue'
	// import vuex from 'vuex'
	export default {
		created(){
			this.loader()
		},
		data (){
			return {
				show:true,
				pingjia:[
					"未评价","已评价"
				],
				active:0,
				flag:0,
				pingjiashow:true,
				zhanghu:[
					"账户设置","修改密码"
				],
				active:0,
				setshow:true,
				orders:true,
				pingjias:false,
				sets:false
			}
		},
		mounted(){

		},
		computed:{

		},
		methods:{
			loader() {
				axios.post("/xinda-api/business-order/grid",{
					businessNo:1,
					startTime:'2017-03-28',
					endTime:'2017-03-28',
					start:0
				}).then(res => {
					this.tax = res.data.data;
					console.log(res);
				})
			},
			ping(index){
				this.active = index;
				if (index==1) {
					this.pingjiashow = false
				}else {
					this.pingjiashow = true
				}
			},
			set(inde){
				this.flag = inde;
				if (inde==1) {
					this.setshow = false
				}else {
					this.setshow = true
				}
			},
			order(){
				this.orders = true;
				this.pingjias  = false;
				this.sets  = false;
			},
			pingjiaa(){
				this.orders = false
				this.pingjias  = true
				this.sets  = false
			},
			setzh(){
				this.orders = false
				this.pingjias  = false
				this.sets  = true
			}
		}
	}
</script>