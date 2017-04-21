<template>
	<div class="order">
		<div class="order-top">首页/支付</div>
		<div class="order-text">订单详情</div>
		<div class="order-dec">
			<div class="order-content">
				<ul>
					<li class="order-num">订单编号：<span>1454585486456</span></li>
					<li>创建时间：2017-07-01 01：12：21</li>
					<li>订单金额：<span>￥2000.00</span>元
						<p>订单明细&nbsp;&nbsp;<span></span></p>
					</li>
				</ul>
				<div>
					<div class="service-name">服务名称：注册分公司</div>
					<div>单价：<span>￥800.00元</span></div>
					<div>数量：<span>1</span></div>
					<div class="service-total">服务总额：<span>￥800.00元</span></div>
				</div>
				<div>
					<div class="service-name">服务名称：代理记账</div>
					<div>单价：<span>￥1800.00元</span></div>
					<div>数量：<span>1</span></div>
					<div class="service-total">服务总额：<span>￥1800.00元</span></div>
				</div>
			</div>
		</div>
		<div class="order-text">支付方式</div>
		<div class="pay-style">
			<p>非网银支付</p>
			<div class="ChinaPay">
				<input type="radio" name="pay">
				<img src="../assets/images/order-01.jpg">
			</div>
			<p class="pt-pay">平台支付</p>
			<div class="pingtai-pay">
				<div class="ChinaPay fl">
					<input type="radio" name="pay">
					<img src="../assets/images/order-02.jpg">
					<p>微信支付</p>
				</div>
				<div class="ChinaPay fl">
					<input type="radio" name="pay">
					<img src="../assets/images/order-03.jpg">
					<p>微信支付</p>
				</div>
			</div>
			<p class="pt-pay">自助转账&nbsp;&nbsp;&nbsp;&nbsp;<span>因限额不能支付时，建议使用自助转账</span></p>
			<div class="bank-pay">
				<input type="radio" name="pay">
				<div class="bank-logo">
					<img src="../assets/images/order-04.jpg">
				</div>
				<div>
					<p>开户账号：<span>515154785415615</span></p>
					<p>开户名：<span>北京爱蓝领网络科技有限公司</span></p>
					<p>开户行：<span>招商银行股份有限公司北京东三环支行</span></p>
				</div>
			</div>
			<div class="pay-tip">注：转账时请将订单编号备在付款信息里：转账完成后请通知客服</div>
			<div class="pay-total">
				<div>
					<p>金额总计<span>￥800.00</span></p>
					<div>去结算</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.order {
		width: 1200px;
		margin: 0 auto;
		.order-top {
			font-size: 14px;
			padding-top: 25px;
		}
		.order-text {
			margin-top: 25px;
			color: #2693d4;
			height: 33px;
			border-bottom: 1px solid #ccc;
		}
		.order-dec {
			padding: 36px 0 21px;
			.order-content {
				background: #f7f7f7;
				border: 1px solid #b6b6b6;
				border-bottom: none; 
				ul {
					overflow: hidden;
					height: 73px;
					line-height: 73px;
					border-bottom: 1px solid #b6b6b6;
					li {
						float: left;
						list-style: none;
						width: 33.3%;
						box-sizing: border-box;
						padding-left: 36px;
						text-align: center;
						position: relative;
						>span {
							color: #2693d4;
						}
						p {
							 position: absolute;
							 top: 24px;
							 left: 185px;
							 color: #fd6363;
							 span {
							 	width: 0;
								height: 0;
								position: absolute;
								top: 28px;
								border: 5px solid transparent;
								border-bottom-color: #fd6363;
							 }
						}
					}
					.order-num {
						text-align: left;
					}
				}
				>div {
					overflow: hidden;
					height: 73px;
					line-height: 73px;
					border-bottom: 1px solid #b6b6b6;
					>div {
						text-align: center;
						float: left;
						width: 25%;
						box-sizing: border-box;
						padding-left: 36px;
						span {
							color: #2693d4; 
						}
					}
					.service-name {
						text-align: left;
					}
					.service-total {
						text-align: left;
					}
				}
			}
		}
		.pt-pay {
			margin-top: 21px;
			color: #676767;
			span {
				font-size: 12px;
			}
		}
		.pay-style {
			p {
				line-height: 58px;
				color: #676767;
			}
			.ChinaPay {
				margin-top: 6px;
				height: 50px;
				line-height: 50px;
				width: 205px;
				border: 1px solid #ccc;
				input {
					margin-left: 5px;
					margin-top: 20px;
					float: left;
				}
				img {
					float: left;
					margin-top: 7px;
					margin-left: 30px;
				}
			}
			.pingtai-pay {
				overflow: hidden;
				.fl {
					float: left;
					margin-right: 5px;
					img {
						margin-top: 10px;
					}
					p {
						float: left;
						font-size: 12px;
						line-height: 50px;
						margin-left: 14px;
					}
				}
			}
			.bank-pay {
				overflow: hidden;
				height: 70px;
				width: 424px;
				box-sizing: border-box;
				border: 1px solid #ccc;
				padding: 0 5px;
				input {
					float: left;
					margin-top: 30px;
				}
				.bank-logo {
					padding: 20px 0;
					margin-left: 30px;
				}
				div {
					float: left;
					margin-left: 3px;
					padding: 10px 0;
					p {
						line-height: 17px;
						font-size: 12px;
						span {
							color: #000;
						}
					}
				}
			}
			.pay-tip {
				line-height: 42px;
				font-size: 12px;
				color: #ff6767;
			}
			.pay-total {
				overflow: hidden;
				padding-right: 20px;
				padding-bottom: 160px;
				>div {
					float: right;
					p {
						font-size: 14px;
						span {
							font-size: 20px;
							font-weight: 700;
							color: #2693d4;
						}
					}
					>div {
						width: 101px;
						height: 26px;
						border: 1px solid #2693d4;
						border-radius: 3px;
						line-height: 26px;
						text-align: center;
						color: #2693d4;
						float: right;
					}
				}
			}
		}
	}
</style>