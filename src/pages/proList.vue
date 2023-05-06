<template>
  <div class="pro-list">
        
        <!-- <h2>当前处理的维权订单基本信息</h2> -->
        <ul class="ul-btn">
            <li class="li-btn"><button class="btn01 btn btn-primary">通过申请</button></li>
            <li class="li-btn"><button class="btn btn-primary">拒绝申请</button></li>
        </ul>
        <ul class="list-ul">
            <li>订单单号：{{ list.id }}</li>
            <li>买家ID：{{ list.userID }}</li>
            <li>订单状态：{{ list.state }}</li>
            <li>订单日期：{{ list.date }}</li>
            <li>购买金额：{{ list.money }}元</li>
            <li>申请原因：{{ list.cause }}</li>
            <li>处理状态：{{ list.condition }}</li>
            <li>
                回复买家：
                <input type="text" placeholder="">
            </li>
        </ul>
        <h2>全部维权申请</h2>
        <table class="list-table">
            <tr class="row" id="first-row">
                <th>订单单号</th>
                <th>买家ID</th>
                <th>订单状态</th>
                <th>订单日期</th>
                <th>订单金额</th>
                <th>订单详细信息</th>
                <th>处理状态</th>
                <th>申请原因</th>
            </tr>
            <tr 
                class="row" 
                v-for="applylist in ApplyLists" 
                :key="applylist.id" 
                @click="showInfo(applylist.id)"
                :style="backgroundColor=red"
            >
                <td >{{ applylist.id }}</td>
                <td >{{ applylist.userID }}</td>
                <td >{{ applylist.state }}</td>
                <td >{{ applylist.listDate }}</td>
                <td >{{ applylist.listMoney }}</td>
                <td><a href="#">查看详情</a></td>
                <td>{{ applylist.condition }}</td>
                <td>{{ applylist.cause }}</td>
            </tr>
            
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:{
                id:'',
                userID:'',
                state:"",
                condition:"",
                date:'',
                money:0,
                
            },
            ApplyLists:[
                {id:'12345678',userID:'0001',state:'待发货',listDate:'2022-8-25',listMoney:'100',condition:'未处理',Info:{Gadress:'浙江杭州',Cadress:'陕西西安',},cause:'不喜欢'},
                {id:'12315678',userID:'0002',state:'待发货',listDate:'2022-8-27',listMoney:'200',condition:'已通过',Info:{Gadress:'浙江温州',Cadress:'江苏南京',},cause:'不合适'},
                {id:'12325678',userID:'0003',state:'待发货',listDate:'2022-8-29',listMoney:'300',condition:'拒绝退款',Info:{Gadress:'浙江宁波',Cadress:'广东深圳',},cause:'不合适'},
                {id:'12335678',userID:'0004',state:'待发货',listDate:'2022-8-21',listMoney:'400',condition:'未处理',Info:{Gadress:'浙江绍兴',Cadress:'甘肃兰州',},cause:'商品破损'}
            ],
            selection:true,
        }
    },
    methods:{
        showInfo(id){
            console.log(id)
            this.ApplyLists.forEach((applylist)=>{
                if(applylist.id == id){                   
                    this.list.id = applylist.id;
                    this.list.userID = applylist.userID;
                    this.list.state = applylist.state;
                    this.list.condition = applylist.condition;
                    this.list.date = applylist.listDate;
                    this.list.money = applylist.listMoney;
                    this.list.cause = applylist.cause
                }
            })
        }
    }
}
</script>

<style scoped lang="less">

    .pro-list{
        width: 1080px;
        height: 900px;
        background-color: rgba(187, 187, 187, 0.8);
        margin-top: -900px;
        margin-left: 200px;
        padding-left: 10px;
        border-bottom: 1px solid rgb(189, 189, 189);
        border-right: 1px solid rgb(189, 189, 189);


    }
    .ul-btn{
        height: 50px;
        width: 100%;
        // border-top: 1px solid rgb(71, 71, 71);
        // background-color: antiquewhite; 
        
        .li-btn{
            float: left;
            height: 50px;
            line-height: 50px;
            margin-left: 100px;
            button{
                color: rgb(48, 48, 48);
                height: 35px;
                width: 97px;
                border: none;
                background-color: rgba(255, 156, 8, 0.5);
            }
            button:hover{
                scale: 1.1;
            }
        }
    }

    .list-ul{
        width: 95%;
        height: 160px;
        background-color: rgba(141, 181, 184, 0.7); 
        border: 1px solid rgb(199, 196, 196);
        box-shadow: 0 0 20px 1px rgb(191, 191, 191);
        padding-top: 20px;
        
        li{
            height: 40px;
            float: left;
            width: 300px;
            line-height: 40px;
            margin-left: 30px;
            font-size: 16px;
            input {
                height: 30px;
                width: 300PX;
                border:1px solid rgb(105, 104, 104);
                outline: none;
                border-radius: 5px;
            }
            
        }

    }
    .list-ul li:nth-child(8){
        width: 500px;
    }
    tr:hover{
        background-color: rgba(186, 238, 170, 0.4);
    }
    td{
        width: 120px;
        text-align: center;
    }
    table tr td:nth-child(7){
        color:rgb(192, 74, 74);
        cursor: pointer;
    }
    table tr td:nth-child(8){
        width: 150px;
    }
    
    .row{
        padding-left: 20px;
    }
    #first-row{
        height: 56px;
    }
</style>