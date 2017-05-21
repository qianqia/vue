<template id='car'>
	<div class="car">
		<table>
			<tr style="height: 0.8rem;">
				<th class="show" style="width:36vw;text-align: center;">产品展示</th>
				<th style="width:21vw;text-align: center;">产品名称</th>
				<th style="width:17vw;text-align: center;">产品单价</th>
				<th style="width:26vw;text-align: center;">产品数量</th>
			</tr>
			<tr v-for='(item,i) in str' style="hieght:1.5rem">
				<td><img :src="item.img" alt="" style="width: 30vw;height: 1rem;margin:0 3vw"  /></td>
				<td style="text-align: center;"><p>{{item.title}}</p></td>
				<td style="text-align: center;"><p class="price">{{item.price}}</p></td>
				<td style="text-align: center;"><span class="jan"  style="display: inline-block;border:1px solid #F1F1F1;padding:0.1rem 0.15rem">-</span><input type="number" :value="num[i]" style="width:10vw;text-align: center;border:none;" class="ipt" /><span class="add" style="display: inline-block;border:1px solid #F1F1F1;padding:0.1rem 0.15rem">+</span></td>
			</tr>
		</table>
		<p style="float:right;padding: 0.3rem;font-size: 0.3rem;">总计：<b style="color:red">{{a}}元</b></p>
	</div>
</template>

<script>
	export default{
		name:'car',
		data(){
			return{
				str:[],
				num:[],
				a:0
			}
		},
		mounted(){
			var goodsId=localStorage.getItem('pro').split(',');
			var goods=localStorage.getItem('num').split(',')
			this.num=goods;
			var _this=this
            axios.get("./src/json/zaojiao1.json")
                .then(function(res){
                	var c=0;
                	console.log(res.data[goodsId[0]]);
                	for(var i=0;i<goodsId.length;i++){
                		_this.str.push(res.data[goodsId[i]])
                		c+=res.data[goodsId[i]].price*_this.num[i]
                		
                	}
						_this.a=c.toFixed(2)
                   console.log(_this.a)
            	})
		},
		updated(){
			var _this=this;
           $(".jan").on("click",function(){
               	if($(this).next()[0].value<=0){
               		$(this).next()[0].value==0
               	}else{
               		$(this).next()[0].value--
               	}	
            })
           $(".add").on("click",function(){
            	$(this).prev()[0].value++
            })
                   
		}
		
	}
</script>

<style>
	
</style>