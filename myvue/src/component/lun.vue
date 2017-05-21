<template id="lun">
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="http://img.weiye.me/zcimgdir/album/file_58ad5faf6a606.png">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="http://img.weiye.me/zcimgdir/album/file_58ad5f9ce6380.png">
            </mt-swipe-item>
        </mt-swipe>
        <mt-navbar id="ynav">
            <router-link to="/artical" class="yarc">热门文章</router-link>
            <router-link to="/round" >热门周边</router-link>
        </mt-navbar>
        <router-view style="margin-bottom: 1.2rem;height: 12.5rem">

        </router-view>
    </div>
</template>

<script>
    export default{
        name:'lun',
        mounted:function(){
            var ynav=document.getElementById("ynav")
            var yarc=ynav.getElementsByTagName("a")
            console.log(yarc.length)
            for(var i=0;i<yarc.length;i++){
                yarc[i].onclick=function(){
                    for(var j=0;j<yarc.length;j++){
                        yarc[j].className=''
                    }
                    this.className="yarc"
                }
            }
        }
    }
</script>

<style>
    .mint-swipe img{
        height: 2.6rem;
        width:100%
    }
    .mint-navbar{
        height: 0.7rem;
        line-height: 0.7rem;
        font-size: 0.3rem;
        box-shadow: 0 0 5px #c5c2c2;
    }
    .mint-swipe{
        height: 2.6rem;
    }
    .mint-navbar a{
        margin: 0 1rem;color: #3c3838;
    }
    #ynav .yarc{
        color: #f00;
    }
    #ynav a{
        width:50%;
    }
</style>