<template>
  <div class="left">  
    <ul v-for="ul in uls" :key="ul.id" >
        
        <li class="left-title" @click="showList(ul.id)">{{ ul.name }}</li>
        <!-- 动画标签 -->
        <transition-group name="listShow">
            <li 
                class="left-li" 
                v-show="ul.show" 
                v-for="list in ul.lists" 
                :key="list.id"
                @click="changeContent(ul.id,list.id)"
                :style="{color:list.color}"
            >
                {{ list.name }}
            </li>
        </transition-group>      
    </ul>
</div>
</template>

<script>
export default {
    name:'leftList',
    data(){
        return{
            uls:[
                {name:'订单管理',show:false,id:'01',lists:[{id:'01',name:'订单管理',color:'white'},{id:'02',name:'维权订单',color:'white'}]},
                {name:'商品管理',show:false,id:'02',lists:[{id:'01',name:'商品列表',color:'white'},{id:'02',name:'商品分类',color:'white'},{id:'03',name:'商品详情',color:'white'},{id:'04',name:'新增商品',color:'white'}]},
                {name:'客户管理',show:false,id:'03',lists:[{id:'01',name:'客户管理',color:'white'}]},
                {name:'我的店铺',show:false,id:'04',lists:[{id:'01',name:'基本信息',color:'white'},{id:'02',name:'发票管理',color:'white'}]},
                {name:'运营管理',show:false,id:'05',lists:[{id:'01',name:'店铺公告',color:'white'},{id:'02',name:'店铺活动',color:'white'}]},
                {name:'数据统计',show:false,id:'06',lists:[{id:'01',name:'数据统计',color:'white'},{id:'02',name:'资金统计',color:'white'}]},
            ],
        }
    },
    methods:{
        showList(a){
            this.uls.forEach((ul)=>{
                if(ul.id == a){
                    ul.show = ! ul.show
                }
            })
        },
        changeContent(a,b){
            // 改变侧边栏颜色

          
            this.uls.forEach((ul)=>{
                if(ul.id == a){
                    // console.log("ul的id是"+a)
                    this.$bus.$emit('clickulid',a)
                    var arrs=ul.lists
                    arrs.forEach((arr)=>{
                        if(arr.id==b){
                            // console.log('list的id是:',b)
                            this.$bus.$emit('clicklistid',b)
                            if(a=='01'&&b=='01'){
                                this.$axios.get('http://localhost:8081/list').then(res=>{
                                    console.log(res)
                                })
                            }
                        }
                    })
                }
                
            })
        }
    }
}
</script>

<style scoped lang="less">
    /* 左侧导航 */
    .left{
        width: 200px;
        height:900px;
        // background-color: #486080;
        background-color:rgba(20, 49, 87, 0.8);
        border-right: rgb(215, 227, 242) 1px solid ;
        ul{
            margin: 0px;
        }
        ul li{
            height: 60px;
            padding-left: 30px;
            color: aliceblue;
            // border-bottom: 0px solid;
            cursor: pointer;
        } 
        .left-title{       
            line-height: 70px;
            height: 70px;
            margin-top: 0px;
            display: block;
            font-size: 18px;
        }
        .left-li{
            line-height: 60px;
            padding-left: 0px;
            display: block;
            background-color:rgba(32, 114, 229, 0.2);
            text-align: center;
            font-size: 16px;
        }  
    } 
    // 动画效果
    .listShow-leave-active,.listShow-enter-active{
        transition: all 0.3s linear;
    }
    .listShow-leave-active,.listShow-enter{
        height: 0px !important;
    }
    内容区
    .content{  
        position: relative;;
        // background-color: rgb(237, 171, 100);
        width: 100%;
        height: 100%;
        top:100px;
        
    }

</style>