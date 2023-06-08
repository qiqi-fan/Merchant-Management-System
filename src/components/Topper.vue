<template>
    <div class="topper">
        <nav>{{name }}</nav>
            <ul class="topper-right">
                <li class="topper-li shownav" >
                    <img   
                        src="" 
                        alt="" 
                        class="head" 
                        id="headimg" 
                    >
                    <div id="contentqqq"> 
                        <ul class="nav">
                            <li class="nav-li1" v-for="navli in navlis" :key="navli.id">{{ navli.name }}</li>
                        </ul>
                    </div>
                </li>
                <li class="topper-li"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></li>
                <li class="topper-li"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span></li>
                <li class="topper-li"><span class="glyphicon glyphicon-bell" aria-hidden="true"></span></li>
            </ul>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Tooper',
    data(){
        return{
            name:'商家管理平台',
            navlis:[
                {name:'我的信息',id:'01'},
                {name:'平台通知',id:'02'},
                {name:'退出登录',id:'03'},
            ],
            showNav:false,
        }
    },
    methods:{
        dispalyNav(){
            this.showNav=true
        },
        hiddenNav(){
            this.showNav=false 
        }
    }
}
</script>

<style scoped lang="less">

    /* 顶部导航条 */
    .topper{
      position: fixed;
        margin-top: -80px;
        width: 100vw;
        // width: 100%;
        height: 80px;
        background-color:rgba(20, 49, 87, 0.8);
        // border-bottom: rgb(243, 243, 243) 1px solid;
        z-index: 100;
        nav{
            float: left;
            color:white;
            font-size: 25px;
            margin-left: 70px;
            line-height: 80px;
            font-family:'黑体',serif;
            font-weight: 400;
        }
        li{
            float: right;
            margin-left: 30px;
            line-height: 70px;
        img{
            margin-right: 90px;
            margin-top: 10px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        span{
            color: aliceblue;
            font-size: 15px;
        }
    }
    }
/* 显示悬浮框 */
    .shownav:hover #contentqqq{
        display: block;
        
    }
    /* 悬浮框 */
    #contentqqq{
        z-index: 999;
        display: none;     
        position: relative;
        width: 111px;
        margin-left: -35px;
        margin-top: 9px;
        border: 1px solid rgb(179, 177, 177);
        .nav-li1{
            height: 50px;
            line-height: 50px;
            width: 100%;
            padding-left: 23px;
            background-color: rgba(72, 96, 128, 70%);
            border-bottom: 1px solid rgb(179, 177, 177);   
            margin-left: 0; 
        }
        .nav-li1:hover{
            background-color: #486080;
        }
    } 
</style>