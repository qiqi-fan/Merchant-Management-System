import VueRouter from "vue-router";
import allOrder from '../pages/AllOrder'
import proList from '../pages/ProList'
import goodsList from "@/pages/GoodsList";
import goodsClass from "@/pages/goodsClass";
import goodsInfo from "@/pages/goodsInfo";
import addGoods from "@/pages/addGoods";
import customerInfo from "@/pages/customerInfo";
import shopInfo from "@/pages/shopInfo";
import shopActivity from "@/pages/shopActivity";
import shopNotice from "@/pages/shopNotice";
import powerManage from "@/pages/powerManage";
import moneyAll from "@/pages/moneyAll";
import saleAll from "@/pages/saleAll";

export default new VueRouter({
    routes:[
        {
            path:'/listManage',
            component:allOrder
        },
        {
            path:'/proList',
            component:proList
        },
        {
            path:'/goodsList',
            component:goodsList
        },
        {
            path:'/goodsClass',
            component:goodsClass,
        },
        {
            path:'/goodsInfo',
            component:goodsInfo,
        },
        {
            path:'/addGoods',
            component:addGoods,
        },
        {
            path:'/customerInfo',
            component:customerInfo,
        },
        {
            path:'/shopInfo',
            component:shopInfo,
        },
        {
            path:'/shopNotice',
            component:shopNotice,
        },
        {
            path:'/shopActivity',
            component:shopActivity,
        },
        {
            path:'/powerManage',
            component:powerManage,
        },
        {
            path:'/moneyAll',
            component:moneyAll,
        },
        {
            path:'/saleAll',
            component:saleAll,
        }
    ]
})