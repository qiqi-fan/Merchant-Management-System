<template>
    <div class="goods-list">
            <ul class="sell-state">
                <li @click="change(1)">待上架</li>
                <li @click="change(2)">已发布</li>
                <li @click="change(3)">已下架</li>
                <li @click="change(4)">已售空</li>
            </ul>
            <div class="allimg">
                <div class="wait-sell" v-show="num==1 ? true : false">
                    <img src="" alt="">
                </div>
                <div class="released" v-show="num==2 ? true : false">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
                <div class="off-the-shelf" v-show="num==3 ? true : false">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
                <div class="sell-short" v-show="num==4 ? true : false">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </div>
            
    </div>
</template>

<script>
export default {
    name:'goodsList',
    data(){
        return{
            num:1,
        }
    },
    methods:{
        change(n){
            this.num=n;
        }
    }
}
</script>

<style scoped lang="less">
    .goods-list{
        z-index: 1;
        width: 1080px;
        height: 900px;
        /* background-color: antiquewhite; */
        margin-top: -900px;
        margin-left: 199px;
        border-right: 1px solid rgb(189, 189, 189);
        border-bottom: 1px solid rgb(189, 189, 189);
        background-color: rgba(187, 187, 187, 0.8);
        position: absolute;
    }
    .sell-state{
        width: 1080px;
        height: 50px;
        line-height: 50px;
        border: 1px solid rgb(161, 160, 160);
        background-color: rgba(106, 195, 207, 0.5);
        li{
            float: left;
            width: 269px;
            /* padding-left:80px; */
            border-left: 1px solid rgb(129, 128, 128);
            text-align: center;
            cursor: pointer;
            position: relative;
            font-size: 17px;
            height: 99%;
        }
        li:hover{
        background-color: rgba(85, 143, 151, 0.5);
        }
    }

    .wait-sell,.released,.off-the-shelf,.sell-short{
        width: 1080px;
        /* background-color: aquamarine; */
        height: 808px;
        /* float: left; */
    }
    .wait-sell>img,.released>img,.off-the-shelf>img,.sell-short>img{
        width: 200px;
        height: 240px;
        margin-left: 50px;
        margin-top: 20px;
    }
    .allimg img:hover{
        border-image: 1px solid rgb(208, 191, 191);
        box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, .3);
    }
    .allimg{
        margin: 0px;
        /* width: 1070px; */
        height: 806px;
        /* background-color: aqua; */
        overflow-y: auto;   
    }
    .wait-sell{
        background-color: rgb(211, 204, 217); 
    }
    .released{
        background-color: antiquewhite;
    }
    .off-the-shelf{
        background-color: rgb(248, 204, 204); 
    }
    .sell-short{
        background-color: rgb(207, 234, 234); 
    }

</style>