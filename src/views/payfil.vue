<template>
	<div class="pay">
		<div class="pay-top">首页/支付</div>
		<div class="pay-seccess">支付失败</div>
		<div class="pay-dec">
			<div><img src="../assets/images/fail-01.png"></div>
			<div>
				<h3>支付失败！</h3>
				<p>支付未成功：让我们再试一次吧！<span>返回支付页</span></p>
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
					color: #000;
					span {
						padding-left: 15px;
						width: 107px;
						height: 32px;
						display: inline-block;
						border: 1px solid #2693d4;
						color: #2693d4;
						border-radius: 3px;
						line-height: 32px;
						font-size: 14px;
					}
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
	// // 	data() {
	// // 		return {
	// // 			show:true,
	// // 		}
	// // 	},
	// // 	method: {
	// // 		ping(){
	// // 			this.show = true
	// // 		},
	// // 		pinged(){
	// // 			this.show = false
	// // 		}
	// // 	}
	}
</script>