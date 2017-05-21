<template id='login'>
	<div class='login'>
		<input type="text" placeholder="请输入手机号" id='loginName'>
		<input type="text" placeholder="请输入密码" id='loginPwd'>
		
		<div class="loginBtns">
			<a class="longinBtn" @click='tap()'>登录</a>
			<router-link class="registerBtn" to='/register'>注册</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'login',
		data(){
			return{
				str:'/my'
			}
			
		},
		methods:{
			
			tap:function(){
				var _this=this;
				if(localStorage.getItem('userID')==null&&$("#loginPwd").val()!=null){
					$.ajax({
					type:"get",
					url:"  http://datainfo.duapp.com/shopdata/userinfo.php",
					data:{
						status:'login',
						userID:$('#loginName').val(),
						password:$("#loginPwd").val()
						},
					dataType:'json',
					success:function(data){
						console.log(data)
						if(data==0){
							alert('用户不存在');
						}else if(data==2){
							alert('用户密码不符合');
						}else{
							console.log('登陆成功');
							alert('登陆成功')
							console.log($('#loginName').val());
							_this.$router.push('/my')
							localStorage.setItem('userID',$('#loginName').val());
							$('#loginName')[0].value=''
							$('#loginPwd')[0].value=''
						
						}
					}
				});
				}else{
					alert('请先退出再登录')
					_this.$router.push('/my')
				}
			}
		}
	}
</script>

<style>
	.login{margin-top:80px !important;}
	.login input{
		margin:0 auto;
		margin-top: 0.4rem;width: 5.8rem;height: 0.86rem;
		border:none;background: #fff;color:#b4b4b4;
		text-indent: 0.3rem;font: 0.26rem/0.86rem "微软雅黑";
		border-radius: 0.1rem;display: block;border:1px solid #ccc
	}
	.loginBtns{
		margin:0 auto;margin-top: 0.5rem;width: 5.49rem; ;
	}
	.longinBtn,.registerBtn{
		height: 0.84rem;width: 5.47rem;color: #fff;
		text-align: center;border-radius: 0.1rem;
		font:0.36rem/0.84rem "微软雅黑";display: block;text-decoration: none;
	}
	.longinBtn {
		background: #b40607;border:1px solid #820000;
	}
	.registerBtn {
		background: #5d5d5d;border:1px solid #000;margin-top: 0.2rem;
	}
</style>