<template>
    <div class="goods-info">
        <div class="picture">
            <img src="" alt="" class="big-picture">
        </div>

        <div class="text-info">
            <ul class="goods-intro">
                <li>商品名称：{{ commodity.name }}</li>
                <li>商品信息：{{ commodity.Info }}</li>
                <li class="price">价格：{{ commodity.price }}</li>
                <li class="size">型号
                    <button v-for="type1 in commodity.type" :key="type1.index">{{ type1 }}</button>
                </li>
                <li>数量
                    <a href=""><button class="num" @click="jian()">-</button></a> 
                    <input type="text" v-bind:value='num' class="number">
                    <a href=""><button class="num">+</button></a>
                    件
                </li>
                <li>
                    <button class="purchase">编辑</button>
    
                </li>
            </ul>
        </div>
    
        <div>
            <ul class="wrapper">
            <li>
                宝贝详情
            </li>
            <li>
                评价
            </li>
            </ul>
    
            <!-- 宝贝详情 -->
            <div class="information">
                <ul class="picture-show">
                <li class="li">细节图片展示:</li>
                <li class="li"><img src="" alt=""></li>
                <li class="li"><img src="" alt=""></li>
                <li class="plus-picture"><a href="">
                    <i id="plus" class="fas fa-plus"></i>
                    上传图片</a></li>
                </ul>  
                <div class="detail">
                <div>商品详情介绍：</div>
                <div><textarea name="" id="text" placeholder="请输入"></textarea></div>
                </div>     
            </div>
    
            <!-- 评价 -->
            <div>
    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            commodity:{
                name:'Nuneon美式高街麂皮绒宽松加绒连帽卫衣',
                Info:'领型: 连帽 颜色: 杏色 黑色 粉色 风格: 潮基础风格: 青春流行',
                price:99,
                type:['S','M','L','XL'],
                num:1
            }
        }
    }
}
</script>

<style scoped>
    .goods-info{
        width: 1078px;
        height: 898px;
        border: 1px solid rgb(211, 211, 211);
        margin-top: -902px;
        margin-left: 198px;
        background-color: rgba(187, 187, 187, 0.8);
    }
    .picture{
        width: 400px;
        height: 350px;
        /* background-color: red; */
        margin-top: 10px;
        margin-left: 30px;
        
    }
    .big-picture{
        width: 470px;
        height: 350px;
        margin-top: 0px;

    }
    .goods-intro>li{
        margin-top: 20px;
        margin-left: 20px;
    }
    .text-info{
        width: 470px;
        height: 350px;
        /* background-color: rgb(234, 209, 209); */
        float: right;
        position:relative;
        margin-top: -351px;
        margin-right: 30px;
        border: 1px solid rgb(103, 101, 101);

    }
    .price{
        /* background-color: #d89272 ; */
        width: 430px;
        height: 50px;
        line-height: 50px;
    }
    .number{
        width: 15px;
        margin-left: 20px;

    }
    .num{
        width: 25px;
        height: 20px;
        margin-left: 20px;

    }
    .size>button{
        margin-left: 20px;
        width: 35px;
        height: 20px;
    }
    .purchase{
        width: 200px;
        height: 50px;
        margin-top: 20px;
        font-size: 20px;
        border: none;
        background-color:#FF9502 ;
        cursor: pointer;
    }
    .wrapper{
        width: 1020px;
        height: 40px;
        /* background-color:  #7A9D96; */
        margin: 2px auto;
        border-bottom: 1px solid rgb(183, 183, 183);

    }
    .wrapper li{
        width: 200px;
        height: 40px;
        float: left;
        line-height: 40px;
        /* border-right: 1px solid rgb(183, 183, 183); */
        margin-left: 20px;
    }
    /* #three{
        border: none;
    } */
    .information{
        width: 1020px;
        height: 440px;
        margin: 0 auto;
        /* background-color:rgb(171, 211, 239); */
    }
    .picture-show{
        height: 200px;
        width: 100%;
        line-height: 200px;
    }
    .picture-show li{
        float: left;
        width: 160px;
        margin-left: 50px;
    }
    .picture-show li img{
        width: 150px;
        height: 150px;
        margin-top: 25px;
    } 
    .picture-show>.plus-picture{
        width: 150px;
        height: 150px;
        line-height: 150px;
        text-align: center;
        margin-top: 25px;
        border: 1px solid ;
        background-color: rgb(239, 236, 236);
        color:rgb(182, 183, 183) ;
    }
    .plus-picture a{
        color:rgb(189,190,190) ;

    }
    #plus{
        color: rgb(189,190,190);
    }
    .detail{
        position: absolute;
    margin-right: 200px;
    }
    .detail div{
        float: left;
        margin-left: 50px;
    }
    #text{
        margin-left: 50px;
        width: 500px;
        height: 200px;
        font-size: 18px;
        line-height: 24px;
    }

</style>