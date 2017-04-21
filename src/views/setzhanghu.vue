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
					<li ><span></span>账户设置</li>
					<li ><span></span>用户评价</li>
					<li class="active"><span></span>账户设置</li>
				</ul>
			</div>
			<div class="orders">
				<div class="my-order">
					<p :class="{show:active==index}" v-for="(item,index) in zhanghu" @click="set(index)">{{item}}</p>
				</div>
				<div class="personal" v-if="show">
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
				.show {
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
					select {
						height: 23px;
						width: 75px;
						border: 1px solid #ccc;
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
	export default {
	// 	created(){
			
	// 	},
		data (){
			return {
				zhanghu:[
					"账户设置","修改密码"
				],
				active:0,
				show:true
			}
		},
	// 	mounted(){

	// 	},
	// 	computed:{

	// 	},
		methods:{
			set(index){
				this.active = index;
				if (index==1) {
					this.show = false
				}else {
					this.show = true
				}
			}
		}
	}
</script>