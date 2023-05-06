<template>
  <div id="center">
    <div class="index" v-show="index">
      <p>欢迎登录！</p>
      <img src="../assets/picture.png" alt="">
    </div>
    <allOrder v-show="(listNum==='01' ? true : false)&&(ulNum==='01' ? true : false)"></allOrder>
    <proList v-show="(listNum==='02' ? true : false)&&(ulNum==='01' ? true : false)"></proList>
    <goodsList v-show="(listNum==='01' ? true : false)&&(ulNum==='02' ? true : false)"></goodsList>
    <goodsClass v-show="(listNum==='02' ? true : false)&&(ulNum==='02' ? true : false)"></goodsClass>
    <goodsInfo v-show="(listNum==='03' ? true : false)&&(ulNum==='02' ? true : false)"></goodsInfo>
    <addGoods v-show="(listNum==='04' ? true : false)&&(ulNum==='02' ? true : false)"></addGoods>
    <customerInfo v-show="(listNum==='01' ? true : false)&&(ulNum==='03' ? true : false)"></customerInfo>
    <shopInfo v-show="(listNum==='01' ? true : false)&&(ulNum==='04' ? true : false)"></shopInfo>
    <powerManage v-show="(listNum==='02' ? true : false)&&(ulNum==='04' ? true : false)"></powerManage>
    <shopNotice v-show="(listNum==='01' ? true : false)&&(ulNum==='05' ? true : false)"></shopNotice>
    <shopActivity v-show="(listNum==='02' ? true : false)&&(ulNum==='05' ? true : false)"></shopActivity>
    <saleAll v-show="(listNum==='01' ? true : false)&&(ulNum==='06' ? true : false)"></saleAll>
    <moneyAll v-show="(listNum==='02' ? true : false)&&(ulNum==='06' ? true : false)"></moneyAll>
    <!-- <allOrder></allOrder> -->
    <!-- <proList></proList> -->
     <!-- <goodsInfo></goodsInfo> -->
     <!-- <addGoods></addGoods> -->
     <!-- <customerInfo></customerInfo> -->
     <!-- <shopInfo></shopInfo> -->
     <!-- <powerManage></powerManage> -->
     <!-- <shopNotice></shopNotice> -->
     <!-- <shopActivity></shopActivity> -->
     <!-- <saleAll></saleAll> -->
     <!-- <moneyAll></moneyAll> -->
  </div>
</template>

<script>
import allOrder from '@/pages/allOrder.vue';
import proList from '@/pages/proList.vue';
import goodsList from '../pages/goodsList'
import goodsClass from '../pages/goodsClass'
import goodsInfo from '../pages/goodsInfo'
import addGoods from '../pages/addGoods'
import customerInfo from '@/pages/customerInfo.vue';
import shopInfo from '@/pages/shopInfo.vue';
import powerManage from '../pages/powerManage';
import shopNotice from '../pages/shopNotice';
import shopActivity from '../pages/shopActivity'
import saleAll from '../pages/saleAll'
import moneyAll from '../pages/moneyAll'


export default {
    // name:'CenterInfo',
    components:{
      allOrder,
      proList,
      goodsList,
      goodsClass,
      goodsInfo,
      addGoods,
      customerInfo,
      shopInfo,
      powerManage,
      shopNotice,
      shopActivity,
      saleAll,
      moneyAll
    },
    data(){
      return{
        ulNum:'',
        listNum:'',
        index:true
      }
    },
    created(){
      this.$bus.$on('clickulid',res=>{
        this.ulNum=res
        this.index=false
        // console.log('ulNum'+this.ulNum)
      })
      this.$bus.$on('clicklistid',res=>{
        this.listNum=res
        // console.log('listNum'+this.listNum)
      })
    }
}
</script>

<style lang="less">
  .index{
        position: relative;
        float: left;
        width: 1080px;
        height: 900px;
        background-color: rgba(187, 187, 187, 0.8);
        border-right: 1px solid rgb(155, 67, 67);
        border-bottom: 1px solid rgb(211, 211, 211);
        margin-top: -900px;
        margin-left: 200px;
        font-size: 80px;
        text-align: center;
        color: rgba(42, 136, 190, 0.575);
        img{
          width: 400px;
          opacity: 0.7;
        }
    }
</style>