<template id="round">
    <div>
        <ul id="ylist">
            <router-link v-for="(item,i) in arr" :to="'/rdetail/'+i">
                <li>
                    <img :src="item.img">
                    <p>{{item.title}}</p>
                    <span class="ypri">￥{{item.price}}</span>
                    <span class="yxiao">销量：{{item.xliang}}</span>
                </li>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default{
        name:'round',
        data:function(){
            return{
                arr:''
            }
        },
        mounted:function(){
            var _this=this
            axios.get("./src/json/zaojiao1.json")
                .then(function(res){
                    _this.arr=res.data
                })
        }
    }
</script>

<style>
    #ylist li{
        float: left;width:50%;height: 4.24rem;text-align: center;
    }
    #ylist li img{
        width: 3.15rem;
        display: block;
        margin: 0 auto;    margin-bottom: 0.1rem;
    }
    #ylist p{
        font-size: 0.25rem;
        color: #696565;
        margin-bottom: 0.1rem;
    }
    #ylist .ypri{
        font-size: 0.25rem;
        color: #e26a2f;
        font-weight: 600;    margin-right: 0.2rem;
    }
    #ylist .yxiao{
        color: #888585;
    }
</style>