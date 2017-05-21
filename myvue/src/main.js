import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import axios from 'axios'
Vue.use(Mint);
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(axios)

import lun from './component/lun.vue'
    import artical from './component/artical.vue'
    import artdet from './component/artdet.vue'

    import round from './component/round.vue'
    import rdetail from './component/rdetail.vue'

import active from './component/active.vue'
import xiang from './component/xiang.vue'

import liuyan from './component/liuyan.vue'

import my from './component/my.vue'

import  login from './component/login.vue'
import register from './component/register.vue'
import car from './component/car.vue'


var route=[
    {path:'/',component:lun,
        "children":[
         {path:"/artical",component:artical},
         {path:"/round",component:round},

            {path:"/",redirect:"/artical"}
         ]
    },

    {path:"/my",component:my},
    {path:"/login",component:login},
    {path:'/register',component:register},
    {path:'/car',component:car},

    {path:'/active',component:active},
    {path:'/liuyan',component:liuyan},
    {path:'/my',component:my},
    {path:'/xiang/:id',component:xiang},
    {path:'/rdetail/:id',component:rdetail},
    {path:'/:id',component:artdet},





]

var router=new VueRouter({
    routes:route
})

new Vue({
  el: '#app',
    router:router,
  render: h => h(App)
})
