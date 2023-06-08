<template>
  <div id="app">
    <Topper></Topper>
    <leftList :getMenuCode="getMenuCode"></leftList>
    <router-view></router-view>
  </div>
</template>

<script>

import Topper from './components/Topper.vue'
import leftList from './components/LeftList.vue'


export default {
  name: 'App',
  components: {Topper,leftList},
  methods:{
    getMenuCode(router) {
      switch (router) {
        case 1 :
          this.$router.push('/listManage')
          break
        case 2:
          this.$router.push('/proList')
          break
        case 3:
          this.$router.push('/goodsList')
          break
        case 4:
          this.$router.push('/goodsClass')
          break
        case 5:
          this.$router.push('/goodsInfo')
          break
        case 6:
          this.$router.push('/addGoods')
          break
        case 7:
          this.$router.push('/customerInfo')
          break
        case 8:
          this.$router.push('/shopInfo')
          break
        case 9:
          this.$router.push('/powerManage')
          break
        case 10:
          this.$router.push('/shopNotice')
          break
        case 11:
          this.$router.push('/shopActivity')
          break
        case 12:
          this.$router.push('/saleAll')
          break
        case 13:
          this.$router.push('/moneyAll')
          break
      }
    }
  }
}
</script>

<style>

</style>
