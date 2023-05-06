<template>
    <div class="new-plus">
        <ul class="plus-ul">
            <li>
                商品名称：
                <input type="text" placeholder="请输入">
            </li>
            <li>
                商品分类：
                <select name="" id="select"> 
                    <option value="">服装</option>
                    <option value="">食品</option>
                    <option value="">生活用品</option>
                </select>
            </li>
            <li>
                商品价格：
                <input type="text" placeholder="请输入">
            </li>
            <li>
                <p>规格：</p>
                <div class="box">
                    <input type="text" placeholder="规格名1">
                    <input type="text" placeholder="规格名2">
                    <input type="text" placeholder="规格名3">
                    <input type="text" placeholder="规格名4">
                </div>
            </li>
            <li class="instruction">
                商品说明：<br>
                <textarea placeholder="请输入" style="height:100px; width:330px;margin-left: 85px;"></textarea>
            </li>
            <li >
                图片：    
                    <div class="plus-picture">
                    上传图片
                    </div>
                    
            </li>
        </ul>
        <button class="btn btn-primary">清空</button>
        <button class="btn btn-primary">添加</button>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.new-plus{
    width: 1080px;
    height: 900px;
    /* background-color: antiquewhite; */
    margin-top: -900px;
    margin-left: 200px;
    background-color: rgba(187, 187, 187, 0.8);
    border-bottom: 1px solid rgb(189, 189, 189);
    border-right: 1px solid rgb(189, 189, 189);
    ul{
        height: 670px;
        width: 800px;
        /* background-color: aquamarine; */
        margin: 0 auto;
        padding-top: 50px;
        li{
            height: 40px;
            line-height: 40px;
            margin-left:170px ;
            margin-top: 10px;
            input{
                width: 330px;
                height: 30px;
            }
            .box{
                margin-left: 85px;
                margin-top: -30px;
                input{
                    width: 70px;
                    margin-left: 5px;
                }
            }

        }
        .instruction{
            margin-top: 40px;
        }
        .plus-picture{
            width: 150px;
            height: 150px;
            background-color: rgb(241, 241, 241);
            color:rgb(189,190,190) ;
            border: 1px solid ;
            margin-left: 90px;
            line-height: 150px;
            text-align: center;
            margin-top: -20px;

        }
    }
    ul li:nth-child(6){
        margin-top: 140px;
    }
}
.btn{
    width: 120px;
    height: 40px;
    border: none;
    background-color: #FF9502 ;
    color: white;
    margin-left: 24%;
}
</style>