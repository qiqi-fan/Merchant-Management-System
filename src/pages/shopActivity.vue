<template>
   <div class="shop-activity">
        <h2></h2>
        <ul class="activity-ul">
            <li>促销活动</li>
            <li>周年活动</li>
            <li>新增活动</li>
            <li>活动详情</li>
        </ul>
        <ul class="activity-ul2">
            <li>
                生效日期：
                <input type="date">
            </li>
            <li>
                促销店铺：
                <select name="" id="">
                    <option value="">全部店铺</option>
                    <option value="">店铺1</option>
                    <option value="">店铺2</option>
                    <option value="">店铺3</option>
                </select>
            </li>
            <li>
                截止日期：
                <input type="date">
            </li>
            <li>
                活动名称：
                <input type="text" name="" id="">
            </li>
        </ul>

        <div class="">
            <table class="activity-table1" border="1px solid " style="border-collapse: separate; border-left-spacing: 10px;">
                <tr>
                    <td>活动编号</td>
                    <td>活动名称</td>
                    <td>活动类型</td>
                    <td>开始时间</td>
                    <td>结束时间</td>
                    <td>活动状态</td>
                    <td>发起人</td>
                    <td>审核人</td>
                    <td>审核时间</td>
                </tr>
                <tr>
                    <td>12345678</td>
                    <td>部分促销</td>
                    <td>满减优惠</td>
                    <td>2022-01-01</td>
                    <td>2022-02-02</td>
                    <td><a href="">待审核</a></td>
                    <td>张三</td>
                    <td>李四</td>
                    <td>2022-01-01</td>
                </tr>
                <tr>
                    <td>12345678</td>
                    <td>部分促销</td>
                    <td>满减优惠</td>
                    <td>2022-01-01</td>
                    <td>2022-02-02</td>
                    <td><a href="">待审核</a></td>
                    <td>张三</td>
                    <td>李四</td>
                    <td>2022-01-01</td>
                </tr>
                <tr>
                    <td>12345678</td>
                    <td>部分促销</td>
                    <td>满减优惠</td>
                    <td>2022-01-01</td>
                    <td>2022-02-02</td>
                    <td><a href="">待审核</a></td>
                    <td>张三</td>
                    <td>李四</td>
                    <td>2022-01-01</td>
                </tr>
                <tr>
                    <td>12345678</td>
                    <td>部分促销</td>
                    <td>满减优惠</td>
                    <td>2022-01-01</td>
                    <td>2022-02-02</td>
                    <td><a href="">待审核</a></td>
                    <td>张三</td>
                    <td>李四</td>
                    <td>2022-01-01</td>
                </tr>
            </table>
        </div>
        <div>
            <table class="activity-table2" border="1px solid " style="border-collapse: separate; border-left-spacing: 10px;">
                <tr>
                    <td>商品编号</td>
                    <td>工厂码</td>
                    <td>商品名</td>
                    <td>规格</td>
                    <td>分类</td>
                    <td>零售价</td>
                    <td>销量</td>
                    <td>销售额</td>
                    <td>优惠</td>
                </tr>
                <tr>
                    <td>111111</td>
                    <td>XXXXXX</td>
                    <td>XXX</td>
                    <td>8</td>
                    <td>类别一</td>
                    <td>110</td>
                    <td>1000</td>
                    <td>0999</td>
                    <td><a href="">优惠详情</a></td>
                </tr>
                <tr>
                    <td>111111</td>
                    <td>XXXXXX</td>
                    <td>XXX</td>
                    <td>8</td>
                    <td>类别一</td>
                    <td>110</td>
                    <td>1000</td>
                    <td>0999</td>
                    <td><a href="">优惠详情</a></td>
                </tr>
                <tr>
                    <td>111111</td>
                    <td>XXXXXX</td>
                    <td>XXX</td>
                    <td>8</td>
                    <td>类别一</td>
                    <td>110</td>
                    <td>1000</td>
                    <td>0999</td>
                    <td><a href="">优惠详情</a></td>
                </tr>
                <tr>
                    <td>111111</td>
                    <td>XXXXXX</td>
                    <td>XXX</td>
                    <td>8</td>
                    <td>类别一</td>
                    <td>110</td>
                    <td>1000</td>
                    <td>0999</td>
                    <td><a href="">优惠详情</a></td>
                </tr>
                <tr>
                    <td>111111</td>
                    <td>XXXXXX</td>
                    <td>XXX</td>
                    <td>8</td>
                    <td>类别一</td>
                    <td>110</td>
                    <td>1000</td>
                    <td>0999</td>
                    <td><a href="">优惠详情</a></td>
                </tr>
            </table>
        </div>
        <div class="activity-content">
            <p>活动内容详情</p>
            <ul class="activity-content-ul">
                <li>
                    促销类型
                    <input type="checkbox" name="" id="">单品优惠
                    <input type="checkbox" name="" id="">清仓促销
                    <input type="checkbox" name="" id="">搭售
                    <input type="checkbox" name="" id="">满减优惠
                    <input type="checkbox" name="" id="">节日促销

                </li>
                <li>
                    计算规则
                    <input type="checkbox" name="" id="">活动商品
                    <input type="checkbox" name="" id="">整单
                </li>
                <li>
                    促销规则
                    <input type="checkbox" name="" id="">活动商品满<input type="text">元 打<input type="text">折扣<br>
                    <input style="margin-left: 88px;" type="checkbox" name="" id="">活动商品满<input type="text">件 打<input type="text">折扣
                </li>
                <li></li>
                <li>
                    活动商品
                    <a class="activity-content-a" href=""><i style="color:#FF9502 ;" class="fas fa-plus-circle"></i>点击批量新增活动商品</a>
                    <div class="plus-activity-goods">
                        <textarea readonly name="" id="" cols="30" rows="10"></textarea>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.shop-activity{
    width: 100vw;
    height: 900px;
    background-color: rgba(187, 187, 187, 0.8);
    border-right: 1px solid rgb(211, 211, 211);
    border-bottom: 1px solid rgb(211, 211, 211);
    margin-top: -900px;
    margin-left: 198px;
    overflow-y: auto;
    /* overflow-x: hidden; */
    
}
.activity-ul{
    height: 50px;
    width: 100%;
    /* background-color: #FF9502; */
    border-bottom: 1px solid rgb(211, 211, 211);

}
.activity-ul li{
    float: left;
    width: 120px;
    height: 40px;
    line-height: 40px;
    margin-left: 50px;
    text-align: center;
    cursor: pointer;
    color: rgb(0, 0, 0);
    font-size: 19;
    background-color: rgba(255, 153, 0,0.7);
    border: 1px solid;
}
.activity-ul2{
    width: 100%;
    height: 100px;
    /* background-color: #e7eac0; */
}
.activity-ul2 li{
    width: 400px;
    float: left;
    height: 50px;
    line-height: 50px;
    margin-left: 100px;
    input{
        width: 150px;
        height: 25px;
        padding-left: 5px;
    }
    select{
        height: 25px;
    }
}
.activity-table1,.activity-table2{
    border: none;
    margin-top: 30px;
}
.activity-table1 tr,.activity-table1 tr{
    height: 35px;
}
.activity-table1 tr td{
    width: 116px;
    text-align: center;
}
.activity-table2 tr td{
    width: 110px;
    text-align: center;
}
.activity-table1 tr:nth-child(1),.activity-table2 tr:nth-child(1){
    background-color: #e8e8e5;
}
.activity-content{
    margin-top: 30px;
    width: 1030px;
    border-top: 1px solid rgb(176, 171, 171);
    /* background-color: #e7eac0; */
}
.activity-content p{
    font-size: 20px;
    display: block;
    /* margin-left: 40px; */
    line-height: 40px;
    

}
.activity-content ul{
    width: 90%;
    /* height: 280px; */
    margin-left: 40px;
}
.activity-content ul li{
    height: 40px;
    line-height: 40px;
}
.activity-content ul li input,.activity-content ul li a{
    margin-left: 20px;
}
/* .activity-content ul li:last-child{
    display: block;
} */

/* .activity-content-a{
    display: block;
   margin-top: 100px;
} */
.plus-activity-goods{
    width: 500px;
    height: 150px;
    /* border: 1px solid; */
    margin-left: 100px;
}
.plus-activity-goods textarea{
    width: 500px;
    height: 150px;

}
</style>