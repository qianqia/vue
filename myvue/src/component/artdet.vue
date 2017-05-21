<template id="artdet">
	<div id="yarticle">
	    <p>{{string.title}}</p>
	    <div>
	        <img :src="string.cimg[0]">
	        <div style="width: 5.8rem;margin: 0 auto;">{{string.product[0]}}</div>
	    </div>
	    <div>
	        <img :src="string.cimg[1]">
	        <div style="width: 5.8rem;margin: 0 auto;">{{string.product[1]}}</div>
	    </div>
	    <div>
	        <img :src="string.cimg[2]">
	        <div style="width: 5.8rem;margin: 0 auto;">{{string.product[2]}}</div>
	    </div>
	    <div>
	        <img :src="string.cimg[3]">
	        <div style="width: 5.8rem;margin: 0 auto;">{{string.product[3]}}</div>
	    </div>
	</div>
</template>

<script>
    export default{
        name:'artdet',
        data(){
            return{
                msg:false,
                arr:[],
                string:null
            }
        },
        mounted:function(){
            var _this=this
            this.$emit('to-parent',this.msg)
            var i=this.$route.params.id.match(/[0-9]/g).join('')
            console.log(i)
            axios.get('/src/json/zaojiao.json')
                .then(function(res){
                    console.log(res.data[i])
                    _this.string=res.data[i]

                    _this.arr=res.data[i].cimg
                    console.log(_this.arr)
                })

        }
    }
</script>

<style>
    #yarticle{
        margin-top: 40px;
        text-align: center;line-height: 0.45rem;
    }
    #yarticle img{
        width: 5.8rem;
        display: block;
        margin:0.1rem auto;
    }
    #yarticle p{
        margin: 0.2rem 0;
        margin-top: 1rem;
        font-size: 0.3rem;
    }
</style>