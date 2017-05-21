<template id="ymain">
    <div>
        <mt-header fixed title="">
            <router-link to="/" slot="left" @click.native="tap" id="back">
                <mt-button icon="back" class='ba'>返回</mt-button>
            </router-link>
            <mt-button icon="more" slot="right"></mt-button>
        </mt-header>

        <router-view style="margin-top:40px;margin-bottom: 1.2rem " @to-parent="getdata">

        </router-view>
        <div id="yfoot" v-if="isShow">
            <router-link to="/">
                <dl>
                    <dt><img src="http://img.weiye.me/zcimgdir/album/file_58ad5fae5c9c1.png"></dt>
                    <dd class="addcolor">主页</dd>
                </dl>
            </router-link>
            <router-link to="/active">
                <dl>
                    <dt><img src="http://img.weiye.me/zcimgdir/album/file_58ad5fae165ae.png"></dt>
                    <dd>活动</dd>
                </dl>
            </router-link>
            <router-link to="/liuyan">
                <dl>
                    <dt><img src="http://img.weiye.me/zcimgdir/album/file_58ad5fae2586c.png"></dt>
                    <dd>留言</dd>
                </dl>
            </router-link>
            <router-link to="/my">
                <dl>
                    <dt><img src="http://img.weiye.me/zcimgdir/album/file_58ad5fae6a8e0.png"></dt>
                    <dd>我的</dd>
                </dl>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default{
        name:'ymain',
        data(){
            return{
                isShow:true
            }
        },
        methods:{
            getdata:function(res){
                this.isShow=res
            },
            tap:function(){
                this.isShow=true
            }
        },
        mounted:function(){
            var yfoot=document.getElementById("yfoot")
            var ydl=yfoot.getElementsByTagName("dl")
            var ydd=yfoot.getElementsByTagName("dd")
            for(var i=0;i<ydd.length;i++){
                ydl[i].index=i;
                ydl[i].onclick=function(){
                    for(var j=0;j<ydd.length;j++){
                        ydd[j].className=''
                    }
                    ydd[this.index].className="addcolor"
                }
            }
        }
    }
</script>

<style>
	.ba{color:#000000}
    .mint-header{
        background-color: #4a4646;
    }
    #yfoot{
        position: fixed;
        width:100%;
        bottom: 0;
        background-color: #fff;
    }
    #yfoot a{
        color: #000;
    }
    #yfoot .addcolor{
        color: #c11a1a;
        font-weight: 700;
        font-size: 0.25rem;
    }
    #yfoot dl{
        float: left;width:25%;text-align: center;
    }
    #yfoot img{
        border: 0;
        width: 0.65rem;
    }

</style>