<template>
	<div class="pay">
		<div class="pay-top">首页/支付</div>
		<div class="pay-seccess">支付成功</div>
		<div class="pay-dec">
			<div><img src="../assets/images/success-01.png"></div>
			<div>
				<h3>支付成功！</h3>
				<p>我们将尽快确认您的（订单号：<span></span>）付款信息。</p>
				<p><i>如有问题，请联系客服：</i><b>010-83421842</b></p>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
	.pay {
		width: 1200px;
		margin: 0 auto;
		.pay-top {
			font-size: 14px;
			margin-top: 25px;
		}
		.pay-seccess {
			margin-top: 25px;
			color: #2693d4;
			height: 33px;
			border-bottom: 1px solid #ccc;
		}
		.pay-dec {
			margin-top: 12px;
			overflow: hidden;
			height: 380px;
			background: #f7f7f7;
			padding-top: 126px;
			padding-left: 194px;
			box-sizing: border-box;
			div {
				float: left;
				margin-left: 80px;
				img {
					width: 128px;
				}
				h3 {
					color: #2693d4;
					font-size: 30px;
				}
				p {
					margin-top: 27px;
					font-size: 18px;
					color: #010101;
					i {
						font-style: normal;
						font-size: 14px;
					}
				}
			}
		}
	}
</style>
<script>
	export default {
	// 	data() {
	// 		return {
	// 			show:true,
	// 		}
	// 	},
	// 	method: {
	// 		ping(){
	// 			this.show = true
	// 		},
	// 		pinged(){
	// 			this.show = false
	// 		}
	// 	}
	}
</script>