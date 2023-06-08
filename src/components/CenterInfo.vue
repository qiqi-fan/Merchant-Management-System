<!--<template>-->
<!--  <div id="center">-->
<!--    <div class="index" v-show="index">-->
<!--    </div>-->
<!--    <allOrder v-show="(listNum==='01')&&(ulNum==='01')"></allOrder>-->
<!--    <proList v-show="(listNum==='02')&&(ulNum==='01')"></proList>-->
<!--    <goodsList v-show="(listNum==='01')&&(ulNum==='02')"></goodsList>-->
<!--    <goodsClass v-show="(listNum==='02')&&(ulNum==='02')"></goodsClass>-->
<!--    <goodsInfo v-show="(listNum==='03')&&(ulNum==='02')"></goodsInfo>-->
<!--    <addGoods v-show="(listNum==='04')&&(ulNum==='02')"></addGoods>-->
<!--    <customerInfo v-show="(listNum==='01')&&(ulNum==='03')"></customerInfo>-->
<!--    <shopInfo v-show="(listNum==='01')&&(ulNum==='04')"></shopInfo>-->
<!--    <powerManage v-show="(listNum==='02')&&(ulNum==='04')"></powerManage>-->
<!--    <shopNotice v-show="(listNum==='01')&&(ulNum==='05')"></shopNotice>-->
<!--    <shopActivity v-show="(listNum==='02')&&(ulNum==='05')"></shopActivity>-->
<!--    <saleAll v-show="(listNum==='01')&&(ulNum==='06')"></saleAll>-->
<!--    <moneyAll v-show="(listNum==='02')&&(ulNum==='06')"></moneyAll>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import allOrder from '@/pages/AllOrder.vue';-->
<!--import proList from '@/pages/ProList.vue';-->
<!--import goodsList from '../pages/goodsList'-->
<!--import goodsClass from '../pages/goodsClass'-->
<!--import goodsInfo from '../pages/goodsInfo'-->
<!--import addGoods from '../pages/addGoods'-->
<!--import customerInfo from '@/pages/customerInfo.vue';-->
<!--import shopInfo from '@/pages/shopInfo.vue';-->
<!--import powerManage from '../pages/powerManage';-->
<!--import shopNotice from '../pages/shopNotice';-->
<!--import shopActivity from '../pages/shopActivity'-->
<!--import saleAll from '../pages/saleAll'-->
<!--import moneyAll from '../pages/moneyAll'-->


<!--export default {-->
<!--    // name:'CenterInfo',-->
<!--    components:{-->
<!--      allOrder,-->
<!--      proList,-->
<!--      goodsList,-->
<!--      goodsClass,-->
<!--      goodsInfo,-->
<!--      addGoods,-->
<!--      customerInfo,-->
<!--      shopInfo,-->
<!--      powerManage,-->
<!--      shopNotice,-->
<!--      shopActivity,-->
<!--      saleAll,-->
<!--      moneyAll-->
<!--    },-->
<!--    data(){-->
<!--      return{-->
<!--        ulNum:'',-->
<!--        listNum:'',-->
<!--        index:true-->
<!--      }-->
<!--    },-->
<!--    created(){-->
<!--      this.$bus.$on('ClickUlId',res=>{-->
<!--        this.ulNum=res-->
<!--        this.index=false-->
<!--        // console.log('ulNum'+this.ulNum)-->
<!--      })-->
<!--      this.$bus.$on('ClickListId',res=>{-->
<!--        this.listNum=res-->
<!--        // console.log('listNum'+this.listNum)-->
<!--      })-->
<!--    }-->
<!--}-->
<!--</script>-->

<!--<style lang="less">-->
<!--  .index{-->
<!--        position: relative;-->
<!--        float: left;-->
<!--        width: 100vw;-->
<!--        height: 900px;-->
<!--        background-color: rgba(187, 187, 187, 0.8);-->
<!--        border-right: 1px solid rgb(155, 67, 67);-->
<!--        border-bottom: 1px solid rgb(211, 211, 211);-->
<!--        margin-top: -900px;-->
<!--        margin-left: 200px;-->
<!--        font-size: 80px;-->
<!--        text-align: center;-->
<!--        color: rgba(42, 136, 190, 0.575);-->
<!--        img{-->
<!--          width: 400px;-->
<!--          opacity: 0.7;-->
<!--        }-->
<!--    }-->
<!--</style>-->