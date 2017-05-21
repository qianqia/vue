<template id="artical">
    <div id="ycolor">
        <router-link v-for="(item,i) in arr" :to="'/artdet'+i">
            <div id="ytitle">
                <img :src="item.img">
                <p>{{item.title}}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
    import axios from 'axios'

    export default{
        name:'artical',
        data:function(){
            return{
                arr:''
            }
        },
        mounted:function(){
            var _this=this
            axios.get("./src/json/zaojiao.json")
                .then(function(res){
                    _this.arr=res.data
                })
        }
    }
</script>

<style>
    #ytitle{
        text-align: center;
    }
    #ytitle img{
        width: 5.8rem;
        display: block;
        margin:0.1rem auto
    }
    #ycolor a{
        color: #000;
    }
</style>