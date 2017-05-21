<template id="rdetail">
	<div>
        <router-link to='/car' class='mycar'>购物车></router-link>
        <div>
        	<img :src="string.img" alt="" class="rdatailImg"/>
        	<div class="detail">
        		
        		<p class="goodName">{{string.title}}</p>
        		<p class="goodsPrice">￥<b>{{string.price}}</b></p>
    			<p class="goodsKc">库存：<b>{{string.kucun}}</b></p>
    			<p class="goodYf">运费：<b>免运费</b></p>
        	</div>
        	
        </div>
        <div class="enter">
        		<p><b>学前教育</b><router-link to='/' class='enterYy'>进入应用></router-link></p>
        </div>
        <div style="padding: 0 0.4rem;">
        	<p style="height: 0.6rem;font:0.3rem/0.6rem '微软雅黑' ;color: 666;">宝贝评价（0）</p>
        	<div class="group">
        		<span>有图0</span>
        		<span>好评0</span>
        		<span>差评0</span>
        		<span>中评0</span>
        	</div>
        </div>
       <div style="width: 100vw;position: fixed;height: 1.0rem;left: 0;border-top: 1px solid #ccc;bottom:0;background:#fff">
       		<p  id='addCar' @click='tap3'>加入购物车</p>
       </div>
    </div>
</template>

<script>
    export default{
        name:'rdetail',
        data(){
            return{
                msg:false,
                arr:[],
                string:null,
                x:1
            }
        },
        methods:{
        	tap3:function(){
        		
        		var user=localStorage.getItem("userID");
        		var id=this.$route.params.id
        		
        		
        		if(user!=null){
			        if(localStorage.getItem("pro")!=null){
					var arr=localStorage.getItem("pro").split(",");
						
					}else{
						var arr=[];
						
					}
					if(localStorage.getItem("num")!=null){
						var arrNum=localStorage.getItem("num").split(",");
					}else{
						var arrNum=[];
					}
					console.log(arr)
					if(arr.indexOf(id)==-1){
						arr.push(id);
						arrNum.push(this.x)
						console.log(0)
					}else{
						this.x++;
						arrNum.splice(arr.indexOf(id),1,this.x)
						console.log(this.x)
					}
					localStorage.setItem("pro",arr)
					localStorage.setItem("num",arrNum)
					alert("加入购物车成功~")
        		}else{
        			alert('请先登录')
        		}
        	}
        },
        mounted:function(){
            var _this=this
            this.$emit('to-parent',this.msg)
            var i=this.$route.params.id
           
            axios.get('/src/json/zaojiao1.json')
                .then(function(res){
                
                    _this.string=res.data[i]
                })
        }
    }
</script>

<style>
	.mycar{text-align:right;font-size:0.4rem;display: block;height: 0.6rem;line-height: 0.6rem;padding-right:0.3rem}
	.rdatailImg{height: 5.0rem;width:100vw}
	.detail{padding:0  0.4rem;}
	.goodName{height: 0.6rem;line-height: 0.6rem;font-size: 0.35rem;}
	.goodsPrice{height: 0.6rem;line-height: 0.6rem;font-size: 0.25rem;color:red;border-bottom:1px solid #C5C2C2}
	.goodsPrice b{font-size: 0.4rem;padding-left:0.1rem;} 
	.goodsKc,.goodYf{height: 0.6rem;line-height: 0.6rem;font-size: 0.25rem;color: #ccc;}
	.goodsKc b,.goodYf b{color:#000}
	.enter{padding:0.2rem  0;background: #ccc;}
	.enter p{height: 0.8rem;background:#fff;padding:0 0.4rem;line-height: 0.8rem;font-size: 0.3rem;}
	.enter p b:first-child{float: left;color:#ccc}
	.enterYy {float: right;color:#ccc}
	.group{margin-bottom: 1.5rem;}
	.group span{display: inline-block;height: 0.4rem;width: 0.8rem;background:pink;text-align: center;
				line-height: 0.4rem;font-size: 0.2rem;color:#666;margin-right: 0.3rem;
			}
	#addCar{height:0.6rem;padding:0 0.4rem;font:0.35rem/0.6rem '微软雅黑';margin:0 auto;width: 2.0rem;
    border: 1px solid #f1f1f1; text-align: center;margin-top:0.2rem;border-radius: 0.1rem;}
</style>