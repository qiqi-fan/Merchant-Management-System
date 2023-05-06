<template>
    <div class="power-manege">
        <div class="model">
            <p>发票模板</p>
            <ul class="buyer">
                <li>购买方：</li>
                <li>购买方手机号：</li>
                <li>购买方地址：</li>
                <li>开户行及账号：</li>
            </ul>
            <ul class="seller">
                <li>销售方名称</li>
                <li>纳税人识别号：</li>
                <li>地址、电话：</li>
                <li>开户行及账号：</li>
            </ul>
            <table class="goods" border="1px solid "  >
                <tr>
                    <td>货物或应税劳务、服务名称</td>
                    <td>规格型号</td>
                    <td>单位</td>
                    <td>金额</td>
                    <td>税率</td>
                    <td>税额</td> 
                </tr>
                <tr>
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
                </tr>
                <tr>
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
                </tr>
                <tr>
                    <td>合计</td>
                    <td colspan="5"></td>
                </tr>
            </table>
            
            <ul class="ender">
                <li>收款人：</li>
                <li>复核：</li>
                <li>开票人：</li>
                <li>销售方：</li>
            </ul>
            <div class="bell-apply">
                <div>发票申请</div>
                <table class="apply-table">
                    <tr>
                        <td>订单号</td>
                        <td>买家ID</td>
                        <td>店铺名</td>
                        <td>商品ID</td>
                        <td>商品单价</td>
                        <td>购买数量</td>
                        <td>金额</td>
                        <td>申请时间</td>
                        <td>申请状态</td>
                        <td>审核员</td>

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
                        <td></td>
                    </tr>
                </table>
            </div>
        </div>     
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.power-manege{
    width: 1080px;
    height: 900px;
    /* background-color: rgb(206, 210, 214); */
    margin-top: -900px;
    margin-left: 199px;
    background-color: rgba(187, 187, 187, 0.8);
    border-right: 1px solid rgb(189, 189, 189);
    border-bottom: 1px solid rgb(189, 189, 189);
    padding-top: 30px;
    .model{
        width: 1000px;
        height:440px ;
        background-color:  rgb(245, 237, 213);
        border: 1px solid rgb(130, 130, 130);
        margin-left: 30px;
    }
}

.model p{
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 19px;
    display: block;
    border-bottom: 1px dashed rgb(152, 152, 152);
}
.model ul{
    float: left;
}
.buyer,.seller{
    width: 350px;
    height: 160px;
    /* background-color: aquamarine; */
    margin-left: 60px;
    /* border: 1px solid rgb(176, 176, 176); */
    border-radius: 20px;
}
.buyer li,.seller li{
    height: 40px;
    line-height: 40px;
    margin-left: 30px;
    /* border: 1px solid rgb(176, 176, 176); */
}
.goods{
    width: 800px;
    height: 180px;
    margin-left: 80px;
    border-right: 1px solid rgb(142, 146, 146) ;
    border-bottom: 1px solid rgb(142, 146, 146) ;
    border-collapse: collapse;
}
.goods tr td:nth-child(1){
    width: 200px;

}
.goods tr td{
    border-left: 1px solid rgb(142, 146, 146) ;
    border-top: 1px solid rgb(142, 146, 146) ;

    width: 100px;
    text-align: center;
    height: 30px;
}
.goods li:nth-child(6) td:nth-child(2){
    width:600px ;
}
.ender{
    width: 800px;
    height: 50px;
    margin-left: 20px;
}
.ender li{
    float: left;
    height: 40px;
    line-height: 40px;
    margin-left: 120px; 
}
.bell-apply{
    clear: both;
}
.bell-apply div{
    height: 60px;
    line-height: 80px;
    font-size: 20px;
    text-align: center;
}
.apply-table{
    width: 1000px;
    height: 240px;
    /* background-color: bisque; */
    border-right: 1px solid rgb(142, 146, 146) ;
    border-bottom: 1px solid rgb(142, 146, 146) ;
    border-collapse: collapse;
}
.apply-table tr td{
    border-left: 1px solid rgb(142, 146, 146) ;
    border-top: 1px solid rgb(142, 146, 146) ;
    text-align: center;
    height:40px ;
}
.apply-table tr:nth-child(1){
    background-color: aliceblue;
}
.apply-table tr td:nth-child(1){
    width: 160px;
}
</style>