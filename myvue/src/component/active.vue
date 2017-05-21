<template id="active">
    <div id="yact">
        <router-link v-for="(item,i) in arr" :to="'/xiang/'+i">
            <img :src="item.img">
        </router-link>
    </div>
</template>

<script>
    export default{
        name:'active',
        data:function(){
            return{
                arr:''
            }
        },
        mounted:function(){
            var _this=this
            axios.get("./src/json/zaojiao2.json")
                .then(function(res){
                    _this.arr=res.data
                    console.log(_this.arr)
                })
        }
    }
</script>

<style>
    #yact img{
        width: 100vw;
        margin-bottom: 0.01rem;
    }
</style>