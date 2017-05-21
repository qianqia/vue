<template id="xiang">
	<div id="yxia">
	
	<img :src="string.img">
	    <p>{{string.pro}}</p>
	    <p>活动详情</p>
	    <p>时间：{{string.date}}</p>
	    <p>地点：{{string.local}}</p>
	    <p>主办方：{{string.company}}</p>
	    <p>报名方式：{{string.way}}</p>
	    <p>注：{{string.zhu}}</p>
	
	
	</div>
</template>

<script>
    export default{
        name:'xiang',
        data(){
            return{
                msg:true,
                string:''
            }
        },
        mounted:function(){
            var _this=this
            this.$emit('to-parent',this.msg)
            
            var i=this.$route.params.id.match(/[0-9]/g).join('')
            axios.get('/src/json/zaojiao2.json')
                .then(function(res){
                    console.log(res.data[i])
                    _this.string=res.data[i]
                })
        }
    }
</script>

<style>
    #yxia img{
        width:6.4rem
    }
    #yxia p{
        color: #565555;
        line-height: 0.5rem;
        padding: 0.2rem 0.4rem; 
    }
</style>