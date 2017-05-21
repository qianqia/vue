<template id='my'>
	<div>
		<div class="myTop">
			<img src="../assets/user.jpg" alt="" />
			{{a}}
			<router-link to='/login'  class='loginimg'></router-link>
		</div>
		<div>
			<mt-cell title="收获地址" >
			  <img slot="icon" src="../assets/map.jpg" width="24" height="24">
			</mt-cell>
			<mt-cell title="我的订单" >
			  <img slot="icon" src="../assets/book.jpg" width="24" height="24">
			</mt-cell>
			<router-link to="/car">
				<mt-cell title="购物车" style="color:#000">
					
				  	<img slot="icon" src="../assets/car.jpg" width="24" height="24">
				  	
				</mt-cell>
			</router-link>
			<mt-cell title="系统通知" >
			  <img slot="icon" src="../assets/news.jpg" width="24" height="24">
			</mt-cell>
		</div>
		<mt-button size="small" class='danger' style='margin: 0.3rem auto;display: block;background:#11C1F3;' v-on:click='tap'>退出</mt-button>
	</div>
</template>

<script>
	export default{
		name:'my',
		data(){
			return{
				a:''
			}
		},
		 methods:{
			tap:function(){
				 localStorage.removeItem('userID')
				 this.a='请先登录'
				 alert('您已退出登录')
			}
		},
		mounted(){
			
			console.log(localStorage.getItem('userID'));
			if(localStorage.getItem('userID')!=null){
				this.a=localStorage.getItem('userID')
			}else{
				this.a='请先登录'
			}
			
		}
	}
</script>

<style >
	*{
		margin:0;padding: 0;
	}
	.myTop{
		height: 2rem;background: url(../assets/top_bg.jpg) no-repeat ;background-size:100% 2rem;
		line-height: 2rem;position: relative;font-size:0.48rem;color:#fff;text-align: center;
	}
	.myTop img{
		border: 0;
		position: absolute;
	    width: 1.0rem;
	    height: 1rem;
	    margin-right: 0.5rem;
	    border-radius: 50%;
	   	top:0.5rem ;left: 0.4rem;float: left;
    }
    .myTop .loginimg{
		position: absolute;
		right: 0.05rem;
		top: 50%;
		margin-top: -0.3rem;
		width: 1.95rem;
		height: 1.1rem;
		line-height: 0.6rem;
		font-size: 0.4rem;
	    background:url("/src/assets/jiantou.png");
    }
    
</style>