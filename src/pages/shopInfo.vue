<template>
  <div class="basic-info">
        <div class="info-btn">
            <button class="btn btn-primary">修改店铺装修</button>
            <button class="btn btn-primary">关闭店铺</button>
        </div>
        <div>
            <ul class="basic-info-ul">
                <li>
                    店铺名称
                    <input readonly type="text" value="">
                </li>
                <li>
                    类别
                    <select name="" id="">
                        <option value="">服装类</option>
                        <option value="">电器类</option>
                        <option value="">生活用品类</option>
                        <option value="">食品类</option>
                    </select>
                </li>
                <li>
                    店铺管理员
                    <input type="text" id="shop-manager" value="小F; 小Q;">
                </li>
                <li class="shop-head">
                    店铺头像
                    <img src="" alt="">
                </li>
                <li>
                    店铺装修
                    <input type="text" value="简约" id="shop-decorate">
                    <button class="btn btn-primary">修改</button>
                </li>
                <li class="pay">
                    店铺支付设置
                    <input type="checkbox" name="" id="" checked>支付宝
                    <input type="checkbox" name="" id="">微信
                    <input type="checkbox" name="" id="" checked>员工卡
                    <input type="checkbox" name="" id="">银行卡
    
    
                </li>
            </ul>
        </div>
        <div id="cover1" style="background-color: black;"></div>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.basic-info{
    width: 1078px;
    height: 898px;
    background-color: rgba(187, 187, 187, 0.8);
    border: 1px solid rgb(211, 211, 211);
    margin-top: -902px;
    margin-left: 198px;
    .info-btn {
        height: 100px;
        line-height: 100px;
        button{
            width: 100px;
            height: 40px;
            margin-left: 40px;
            border: 0;
            color: white;
        }
    }
    .basic-info-ul{
        height: 300px;
        width: 100%;
        background-color: rgba(199, 181, 163, 0.5);
        border-top: 1px solid rgb(193, 192, 192);
        li{
            width: 440px;
            height: 100px;
            float: left;
            line-height: 100px;
            margin-left: 60px;
            select{
                width: 90px;
                height: 30px;
                margin-left: 10px;
            }
            input{
                height: 30px;
            }
        }
    }
}


.shop-head img{
    width: 100px;
    height: 100px;
    /* line-height: 100px; */
    margin-left: 20px;
}


</style>