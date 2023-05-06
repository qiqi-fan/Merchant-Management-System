<template>
    <div class="all-order">
        <ul class="ul-number">
            <li class="li-number">             
                <select ref="state" @change="choosestate($event)" class="list-state number" v-model="selected">
                    <option v-for="state in liststate" :key="state.id">{{ state.state }}</option>
                </select>
                <button type="button" class="btn btn-primary" @click="checkList">筛选</button>
            </li>
            <li class="li-number">
                <input type="number" id="list-num" class="number" placeholder="请输入订单号">
                <button type="button" class="btn btn-primary">查找</button>

            </li>

        </ul>
        <table  class="list-table" cellspacing="0" cellpadding="0">
                <tr class="row">
                    <th>订单单号</th>
                    <th>收货地址</th>
                    <th>订单状态</th>
                    <th>配送员</th>
                    <th>订单日期</th>
                    <th>订单金额/￥</th>
                    <th>发货地</th>
                    <th>收货人</th>
                    <th>签收日期</th>
                    <th>操作</th>
                </tr>
                <tr class="row">
                    <td>98676751</td>
                    <td>浙江省杭州市钱塘区</td>
                    <td>待发货</td>
                    <td>张三</td>
                    <td>2022-10-01</td>
                    <td>120</td>
                    <td>浙江温州</td>
                    <td>刘二</td>
                    <td></td>
                    <td>
                        <a id="btn101" href="javascript:;">查看详情</a>
                        <a class="list-operate" href="javascript:;">删除订单</a>
                    </td>
                </tr>
                <tr class="row">
                    <td>98212132</td>
                    <td>浙江省杭州市西湖区</td>
                    <td>待收货</td>
                    <td>王五</td>
                    <td>2022-09-25</td>
                    <td>34</td>
                    <td>广东广州</td>
                    <td>大强</td>
                    <td></td>
                    <td>
                        <a href="javascript:;">查看详情</a>
                        <a class="list-operate" href="javascript:;">删除订单</a>
                    </td>
                </tr>
                <tr class="row">
                    <td>98454571</td>
                    <td>浙江省杭州市江干区</td>
                    <td>已完成</td>
                    <td>张三</td>
                    <td>2022-08-07</td>
                    <td>78</td>
                    <td>浙江杭州</td>
                    <td>小杨</td>
                    <td>2022-08-11</td>
                    <td>
                        <a id="btn12" href="javascript:;">查看详情</a>
                        <a class="list-operate" href="javascript:;">删除订单</a>


                    </td>
                </tr>
                <tr class="row">
                    <td>29094399</td>
                    <td>浙江省杭州市钱塘区</td>
                    <td>待发货</td>
                    <td>宋绒绒</td>
                    <td>2022-9-20</td>
                    <td>36.8</td>
                    <td>浙江金华</td>
                    <td>傅其乐</td>
                    <td></td>
                    <td>
                        <a href="javascript:;">查看详情</a>
                        <a class="list-operate" href="javascript:;">删除订单</a>


                    </td>
                </tr>
                <tr class="row">
                    <td>29092889</td>
                    <td>浙江省宁波市</td>
                    <td>待收货</td>
                    <td>高远</td>
                    <td>2022-8-25</td>
                    <td>100</td>
                    <td>湖北武汉</td>
                    <td>许望</td>
                    <td></td>
                    <td>
                        <a href="javascript:;">查看详情</a>
                        <a class="list-operate" href="javascript:;">删除订单</a>


                    </td>
                </tr>
                <tr class="row">
                    <td>29004920</td>
                    <td>陕西省西安市碑林区</td>
                    <td>已完成</td>
                    <td>周子谦</td>
                    <td>2022-07-12</td>
                    <td>80</td>
                    <td>浙江嘉兴</td>
                    <td>季秋</td>
                    <td>2022-09-28</td>
                    <td>
                        <a href="javascript:;">查看详情</a>
                        <a class="list-operate" href="javascript:;">删除订单</a>


                    </td>
                </tr>
                <tr class="row">
                    <td>34552411</td>
                    <td>浙江省杭州市钱塘区</td>
                    <td>待发货</td>
                    <td>小张</td>
                    <td>2022-08-29</td>
                    <td>648.00</td>
                    <td>江苏南京</td>
                    <td>王五</td>
                    <td></td>
                    <td>
                        <a href="javascript:;">查看详情</a>
                        <a class="list-operate" href="javascript:;">删除订单</a>


                    </td>
                </tr>
                <tr class="row">
                    <td>26478891</td>
                    <td>浙江省杭州市上城区</td>
                    <td>待发货</td>
                    <td>小李</td>
                    <td>2022-09-18</td>
                    <td>399.00</td>
                    <td>广东深圳</td>
                    <td>王五</td>
                    <td></td>
                    <td>
                        <a href="javascript:;">查看详情</a>
                        <a class="list-operate" href="javascript:;">删除订单</a>

                    </td>
                </tr>
                <tr class="row">
                    <td>26478891</td>
                    <td>浙江省杭州市钱塘区</td>
                    <td>待付款</td>
                    <td>小李</td>
                    <td>2022-09-18</td>
                    <td>399.00</td>
                    <td>广东深圳</td>
                    <td>王五</td>
                    <td></td>
                    <td>
                        <a href="javascript:;">查看详情</a>
                        <a class="list-operate" href="javascript:;">删除订单</a>

                    </td>
                </tr>
        </table>

        <!-- 遮罩层 -->
        <div id="cover" style="background-color: black;"></div>
        <!-- 弹出层1 -->
        <!-- <div class="order-list-div1">
            <div class="title">
                订单详情
                <i id="times1" class="fas fa-times"></i>

            </div>
            <div class="tanchu-goods">
                <p>商品详情</p>
                <br>
                <img src="" alt="" height="100px" width="140px" style="margin-left: 50px;">
                <ul>
                    <li>商品ID:0014</li>
                    <li>商品购买数量:1件</li>
                    <li>商品规格：家用型号</li>
                </ul>
            </div>
            <div class="list-content">
                <p>客户详情</p>
                <ul>
                    <li>客户ID：0006</li>
                    <li>客户在本店铺消费次数：1</li>
                    <li>身份：VIP客户</li>
                    <li>联系方式：19817656512</li>
                </ul>
            </div>
        </div> -->
        <!-- <div class="order-list-div2">
                <div class="title">
                    订单详情
                    <i id="times2" class="fas fa-times"></i>

                </div>


                <div class="tanchu-goods">
                    <p>商品详情</p>
                    <br>
                    <img src="" alt="" height="100px" width="140px" style="margin-left: 50px;">
                    <ul>
                        <li>商品ID:0021</li>
                        <li>商品购买数量:1件</li>
                        <li>商品规格：粉色 L</li>
                    </ul>
                </div>
                <div class="list-content">
                    <p>客户详情</p>
                    <ul>
                        <li>客户ID：0011</li>
                        <li>客户在本店铺消费次数：3</li>
                        <li>身份：VIP客户</li>
                        <li>联系方式：19181121232</li>
                    </ul>
                </div>
            </div> -->
    </div>
</template>

<script>
import header from './components/header.vue'
export default {
    name:'allOrder',
    components:header,
    data(){
        return{
            selected:'',
           liststate:[{id:'00',state:'全部订单'},{id:'01',state:'待付款'},{id:'02',state:'待发货'},{id:'03',state:'待收货'},{id:'04',state:'已完成'}] 
        }
    },
    methods:{
        checkList(){
            
        },
        choosestate(e){
            console.log(e.target.value)
            this.selected = e.target.value
        }
    },
    mounted(){
        this.selected = this.liststate[0].id
    },
}   
</script>

<style scoped lang="less">
    .all-order{
        z-index: 1;
        position: absolute;
        float: left;
        width: 1080px;
        height: 900px;
        background-color: rgba(187, 187, 187, 0.8);
        border-right: 1px solid rgb(211, 211, 211);
        border-bottom: 1px solid rgb(211, 211, 211);
        margin-top: -900px;
        margin-left: 200px;
        .ul-number{
            width: 1080px;
            height: 100px;
            /* background-color: aquamarine; */
            .li-number{
                float: left;
                width: 300px;
                /* height:150px ; */
                line-height: 100px;
                margin-left: 20px;  
                .btn-primary{
                    margin-left: 10px;
                } 
                .list-state,#list-num{
                    border: none;
                    width: 200px;
                    height: 37px;
                    outline: 0;
                    line-height: 40px;
                    border-radius: 5px;
                    padding-left: 5px;
                }           
            }

        }
    }

    .list-table{
        margin-left: 5px;
        border: none;
        border-right: 1px solid  rgb(129, 129, 129);
        border-bottom: 1px solid  rgb(129, 129, 129);
        // opacity: 0;
        background-color: rgba(235, 234, 234,0.1);
    }
    .list-table tr{
        height: 35px;
        th{
            text-align: center;
            border-left: 1px solid  rgb(129, 129, 129) ;
            border-top: 1px solid  rgb(129, 129, 129);
            height: 50px;
        }
        td{
            width: 86px;
            text-align: center;
            line-height: 30px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            a::after{
                content: '';
                margin-left: 10px;
            }

        }
        
    }
    .list-table tr td:nth-child(2),.list-table tr td:nth-child(10){
        width: 180px;
    }
    .list-table tr td:nth-child(10) a{
        color: #db860e;
    }

    // /* 弹出层 */
    // .order-list-div1,.order-list-div2,.list-operate-div{
    //     position: relative;
    //     width: 600px;
    //     height: 350px;
    //     background-color: rgb(235, 234, 234);
    //     border: 1px solid rgb(152, 151, 151);
    //     z-index: 999;
    //     margin-left: 200px;
    //     margin-top: -300px;
    //     /* float: left; */
    // }
    // .list-operate-div{
    //     height: 130px;
    //     // background-color: rgb(255, 255, 255);

    // }
    // .list-operate-div button{
    //     text-align: center;
    //     height: 40px;
    //     width: 80px;
    //     margin-top: 20px;
    //     margin-left: 130px;
    //     /* line-height: 100px; */
    // }
    // .order-list-div1>.title ,.list-operate-div>.title,.order-list-div2>.title{
    //     line-height: 40px;
    //     // border-bottom: 1px solid rgb(152, 151, 151);
    //     text-align: center;
    //     // background-color: rgb(210, 211, 211);
    //     font-size: 20px;

    // }
    // .title i{
    //     color: #0c0c0c;
    //     margin-left: 470px;
    //     font-size: 25px;
    //     cursor: pointer;
    // }
    // .tanchu-goods,.list-content{
    //     margin-top: 5px;
    //     margin-left: 30px;
    //     width: 250px;
    //     float: left;
    //     line-height: 30px;
    // }
    // .tanchu-goods p,.list-content p{
    //     line-height: 20px;
    //     text-align: center;
    //     color: #FF9502;
    // }
    // .list-content{
    //     width: 200px;
    //     height: 200px;
    //     /* background-color:pink; */
    // }
    // .list-content ul li{
    //     line-height: 30px;
    // }
    // /* 遮罩层 */
    // #cover{
    //     background: #000; 
    //     position: absolute; 
    //     left: 0px; 
    //     top: 0px;  
    //     height: 1000px;
    //     width: 1300px;
    //     filter: alpha(opacity=30); 
    //     opacity: 0.3; 
    //     display: none; 
    //     z-index: 200;
    // }
</style>