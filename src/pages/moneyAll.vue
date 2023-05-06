<template>
  <div class="money-all">
        <h2></h2>
        <!-- <ul class="money-ul">
            <li>
                <select name="" id="">
                    <option value="">交易类型1</option>
                    <option value="">交易类型2</option>
                    <option value="">交易类型3</option>
                </select>
                <button class="btn btn-primary">筛选</button>
            </li>
            <li>
                <input type="text" placeholder="请选择交易时间">
                <button class="btn btn-primary">查找</button>

            </li>
            <li>
                <input type="text" name="" id="" placeholder="店铺名查询">
                <button class="btn btn-primary"></button>

            </li>
            <li>
                <button value="一键导出" id="out">
                    一键导出
                     <select name="" id="">
                        <option value="">excel</option>
                    </select>
                </button>

            </li>
        </ul> -->
        <table class="out-table">
            <tr>
                <td>编号</td>
                <td>订单号</td>
                <td>交易类型</td>
                <td>订单金额</td>
                <td>优惠券金额</td>
                <td>支付金额</td>
                <td>支付方式</td>
                <td>支付时间</td>
                <td>店铺</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
        <div class="money-img">
            <img src="" alt="">
            <img src="" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.money-all{
    width: 1080px;
    height: 900px;
    background-color: rgba(187, 187, 187, 0.8);
    border-right: 1px solid rgb(211, 211, 211);
    border-bottom: 1px solid rgb(211, 211, 211);
    margin-top: -900px;
    margin-left: 198px;
    overflow-y: auto;
    /* overflow-x: hidden; */
    
}
.money-ul{
    width: 1080px;
    height: 60px;
    /* background-color: #FF9502; */
}
.money-ul li{
    width: 220px;
    height: 60px;
    line-height: 60px;
    float: left;
    margin-left: 40px;
}
.money-ul li input,.money-ul li select,.money-ul li button{
    height: 30px;
}
.money-ul li button{
    width: 40px;
    /* margin-left: 10px; */
}
#out{
    width: 80px;
    margin-left: 80px;
    background-color: #FF9502;
}
.out-table{
    border-right: 1px solid rgb(142, 146, 146) ;
    border-bottom: 1px solid rgb(142, 146, 146) ;
    border-collapse: collapse;
    background-color: #f5ede1;
    height: 400px;
    /* overflow-y: auto; */
}
.out-table tr td{
    width: 140px;
    height: 30px;
    text-align: center;
    /* overflow: hidden; */
    border-left: 1px solid rgb(142, 146, 146) ;
    border-top: 1px solid rgb(142, 146, 146) ;
}
.money-img img{
    width: 400px;
    height: 300px;
    margin-left: 100px;
    margin-top: 40px;
    
}
</style>