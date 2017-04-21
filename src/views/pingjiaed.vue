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
					<li ><span></span>我的订单</li>
					<li class="active"><span></span>用户评价</li>
					<li><span></span>账户设置</li>
				</ul>
			</div>
			<div class="orders">
				<div class="my-order"><p>我的评价</p></div>
				<ul class="pingjia">
					<li :class="{toogle:active==index}" v-for="(item,index) in pingjia" @click="ping(index)">{{item}}</li>
				</ul>
				<div class="pingjia-content" v-if="show">
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
				<div class="pingjia-content" v-else>
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
		</div>
	</div>
</template>
<style lang="less" scoped>
	*{
	    margin: 0;
	    border: 0;
	    padding: 0;
	  }
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
	}
</style>
<script>
	export default {
		data() {
			return {
				show:true,
				pingjia:[
					"已评价","未评价"
				],
				active:0,
				show:false
			}
		},
		methods: {
			ping(index){
				this.active = index;
				if (index==1) {
					this.show = true
				}else {
					this.show = false
				}
			}
		}
	}
</script>