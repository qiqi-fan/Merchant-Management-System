import VueRouter from "vue-router";
import allOrder from '../pages/allOrder'
import proList from '../pages/proList'

export default new VueRouter({
    routes:[
        {
            path:'/listManage',
            component:allOrder
        },
        {
            path:'/proList',
            component:proList
        }
    ]
})