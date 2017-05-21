<template id="liuyan">
	<div id="yliuyan">
	    <img src="http://img.weiye.me/zcimgdir/album/file_58aea2a501bac.jpg">
	    <textarea  v-model="ipt"></textarea>
	    <button @click="tap">发布</button>
	    <div id="ynei" v-for="(item,i) in arr">
	        <p id="pfirst">{{i+1}}楼</p>
	        <p id="ptwo">{{item}}</p>
	    </div>
	</div>
</template>


<script>
    export default{
        name:'liuyan',
        data(){
            return{
                arr:[],
                ipt:''
            }
        },
        methods:{
            tap:function(){
                this.arr.push(this.ipt)
                this.ipt='';
            }
        }
    }
</script>

<style>
    #yliuyan img{
        display: block;
        width:6.4rem;
    }
    #yliuyan textarea{
        display: block;margin:0.3rem auto;
        width: 5rem;
        height: 1.5rem;
    }
    #yliuyan button{
        background: none;border:none;background-color: #689fc7;
        width: 2rem;height: 0.5rem;color: #fff;text-align: center;
        line-height: 0.5rem;display: block;margin: 0.2rem auto;outline: none;

    }
    #ynei{
       
        font-size: 0.3rem;
        text-align: center;
        margin: 0.2rem auto;
        width: 100%;
        border-top: 1px solid #eee;
    }
    #pfirst{
        font-weight: 700;text-align: left;color: #bd6767;width: 5rem;margin: 0.1rem auto;
    }
    #ptwo{
        width: 5rem;
	    margin: 0.2rem auto;
	    text-align: left;
	    color: #6d6868;
        font-size: 0.4rem;
    }
</style>