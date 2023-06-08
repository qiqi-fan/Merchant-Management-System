<template>
   <div class="sale-all">
        <h2></h2>         
            <div class="income">
            <p>收入详情</p>
                <ul>
                    
                    <li>分布概况</li>
                    <li>共计收入：<a href="">1234￥</a></li>
                    <li>平均每日收入：<a href="">1234￥</a></li>
                    <li>共计销售量：<a href="">1111件</a></li>
                    <li>收入主要类型：</li>
                </ul>
                <img src="" alt="">
            </div>
        
            <div class="shop-sale">
                <div>店铺销售情况</div>
                <ul class="ul-sale">    
                    <!-- <li class="li-sale">
                        <select name="" id="number">
                            <option value="">0000001</option>
                            <option value="">0000002</option>
                            <option value="">0000003</option>
            
                        </select>
                    </li> -->
                    <li class="li-sale">
                        <select name="" id="number">
                            <option value="">销售量</option>
                            <option value="">销售额</option>
                            <option value="">日期</option>
            
                        </select>
                        <input id="put1" type="submit" value="筛选">
                    </li>
                    <li class="li-sale">
                        <input type="text" name="" id="goods-ID" placeholder="输入商品ID">
                        <input id="put2" type="submit" value="搜索">
                    </li>       
                    
                </ul>
                <table class="goods-sale">
                    <tr>
                        <td>商品ID</td>
                        <td>商品名</td>
                        <td>商品类型</td>
                        <td>销售量</td>
                        <td>销售总额</td>
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
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
                    </tr>
                    <tr>
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
                    </tr>
                </table>
            </div>                   
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sale-all{
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
h2{
    margin-left: 30px;
    /* margin-top: 30px; */

    display: block;
    height: 50px;
    line-height: 50px;
}
.sale-all p{
    margin-left: 440px;

}
.income ul,.income img{
    float: left;
}
.income ul{
    width: 300px;
    height: 200px;
    margin-left: 40px;
    border: 1px dashed;
    background-color: antiquewhite;
}
.income ul li{
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    padding-left: 30px;
}
.income img{
    width: 400px;
    height: 200px;
    margin-left: 150px;
}
.shop-sale{
    clear: both;
    /* overflow: auto; */
}
.shop-sale div{
    height: 60px;
    line-height: 80px;
    text-align: center;
    font-size: 20px;
}
.goods-sale{
    width: 800px;
    height: 180px;
    margin-left: 100px;
    border-right: 1px solid rgb(142, 146, 146) ;
    border-bottom: 1px solid rgb(142, 146, 146) ;
    border-collapse: collapse;
}
.goods-sale tr td{
    border-left: 1px solid rgb(142, 146, 146) ;
    border-top: 1px solid rgb(142, 146, 146) ;
    width: 100px;
    text-align: center;
    height: 30px;
}
.ul-sale{
    /* clear: both; */
    width: 100vw;
    height: 60px;
    /* margin-left: 40px; */
    /* background-color: aquamarine; */
}
.li-sale{
    float: left;
    width: 300px;
    height:60px ;
    line-height: 60px;
    margin-left: 140px;
    
}
#number{
    width: 200px;
    height: 30px;
    outline: 0;
    margin-left: 30px;
}
#goods-ID{
    width: 170px;
    height: 26px;
}
#put1,#put2{
    
    width: 52px;
    height:29px ;
    margin-top:20px; 
    background-color: #FF9502;
}
#put2{
    height: 28px;
}
</style>