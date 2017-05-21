<template id="register">
	<div class="register">
		<input type="text" placeholder="请输入手机号"  id="name"/>
		<input type="text" placeholder="请输入密码" id='pwd'/>
		<input type="text" placeholder="请输入密码" id='pwds'/>
		<div>
			<a class="btn"  @click="tap()">确认注册</a>
		</div>
          	      
	</div>
</template>

<script>
	export default{
		name:'register',
		data(){
			return{
				str:false
			}
		},
		methods:{
			tap(){
				var _this=this;
				var reg=/^1[34578]\d{9}$/g;
				if($("#pwd").val()==$("#pwds").val()){
					if(reg.test($("#name").val())){
					$.ajax({
						type:"get",
						url:"  http://datainfo.duapp.com/shopdata/userinfo.php",
						data:{
							status:'register',
							userID:$('#name').val(),
							password:$("#pwd").val()
							},
						dataType:'json',
						success:function(data){
							if(data==0){
								alert('该账号已注册');
							}else if(data==1){
								
								_this.$router.push('/login')
								
								alert('注册成功请前往登陆页面');
								$('#name')[0].value='';
								$("#pwd")[0].value='';
							}else if(data==2){
								console.log('数据库错误');
							}
						}
					});
					}else{
						alert('输入手机号不正确')
					}
				}else{
				    alert('两次输入密码不一致')
				}
			}
		},
		mounted(){
			this.$emit('to-parent',this.str)
		}
	}
</script>

<style>
	.register{margin-top: 80px !important;}
	.register input{
		margin:0 auto;
		margin-top: 0.4rem;width: 5.8rem;height: 0.86rem;
		border:none;background: #fff;color:#b4b4b4;
		text-indent: 0.3rem;font: 0.26rem/0.86rem "微软雅黑";
		border-radius: 0.1rem;display: block;border:1px solid #ccc
	}
	.btn,.btns{
		margin:0 auto;margin-top: 0.5rem;width: 5.49rem;
		height: 0.84rem;width: 5.47rem;color:#fff;
		text-align: center;border-radius: 0.1rem;
		font:0.36rem/0.84rem "微软雅黑";display: block;text-decoration: none;display: block;
		background: #5d5d5d;border:1px solid #000;margin-top: 0.6rem;
	}
</style>