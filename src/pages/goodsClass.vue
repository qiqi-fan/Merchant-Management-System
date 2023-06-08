<template>
    <div class="goods-class">
      <div class="top">
          <Select v-model="typeValue" placeholder="请选择商品类别" style="margin-left: 30px">
            <Option
                v-for="item in goodsType"
                :key="item.id"
                :label="item.name"
                :value="item.name">
            </Option>
          </Select>
            <button class="btn btn-primary" @click="selectType()">筛选</button>
            <Input v-model="inputValue" placeholder="请输入商品名称" style="width: 200px;margin-left: 90px"/>
            <button class="btn btn-primary" @click="searchGoods" @keydown.enter="searchGoods">搜索</button>
            <button class="btn btn-primary last">新增商品</button>
        </div>
      <div class="table-div">
        <table class="goods-table" >
                <tr>
                    <td>商品名称</td>
                    <td>图片</td>
                    <td>商品类别</td>
                    <td>单价</td>
                    <td>库存（SKU）</td>
                    <td>评分</td>
                    <td>是否上架</td>
                    <td>商品详情</td>
                </tr>
                <tr v-for="item in showGoods" :key="item.id">
                    <td>{{item.name}}</td>
                    <td><img :src="item.img" alt=""></td>
                    <td>{{item.type}}</td>
                  <td><ElTag type="warning">￥{{item.price}}</ElTag></td>
                    <td>{{item.total}}</td>
                    <td>
                      <Rate
                          v-model="item.score"
                          disabled
                          show-score
                          text-color="#ff9900"
                          :score-template="item.value">
                      </Rate>
                    </td>
                    <td>
                      <ElSwitch
                         v-model="switchValue[item.id]"
                         @change="(val) => goodsChange(val,item)"
                      ></ElSwitch>
                    </td>
                    <td><a href="#">查看详情</a></td>
                </tr>

            </table>
      </div>
      <Pagination
          background
          :current-page="currentPage"
          layout="prev, pager, next"
          style="margin-left: 22%;margin-top: 10px"
          :total="goodsCount"
          @current-change="changeShowGoods"
      >
      </Pagination>

    </div>
</template>

<script>
import {Rate,Tag as ElTag,Switch as ElSwitch, Select, Option, Input,Pagination} from 'element-ui'
import {debounce} from "@/assets/utils";
let that=null
export default {
  components:{Rate,ElTag,ElSwitch,Select,Option, Input,Pagination},
  data(){
    return{
      goodsList: this.$store.state.goodsList,
      showList:[],
      published:true,
      goodsType: this.$store.state.goodsType,
      typeValue:'全部',
      switchValue:{},
      inputValue:'',
      getGoods:null,
      goodsCount:10,
      currentPage:1,
    }
  },
  methods:{
    init(){
      this.goodsCount=this.showList.length
    },
    goodsStatus(currentItem) {
      const index = this.goodsList.findIndex((item)=>item===currentItem)
      return this.statusList[index]
    },
    goodsChange(val, currentItem) {
      const index = this.goodsList.findIndex((item)=>(item===currentItem))
        if(val){
          this.goodsList[index].status = 'PUBLISHED'
          this.$message({
            message: '已上架该商品！',
            type: 'success'
          });
        }else{
          this.goodsList[index].status = 'UNPUBLISHED'
          this.$message('已下架该商品！');
        }
    },
    selectType() {
      this.inputValue=''
      if (this.typeValue === '全部') {
        this.showList = this.goodsList
      } else {
        this.showList = []
        this.goodsList.forEach((item) => {
          if (item.type === this.typeValue) {
            this.showList.push(item)
          }
        })
      }
      if (this.showList.length === 0) {
        this.debounce(() => {
          this.showInfo('暂无此类商品！')
        }, 200)
      }
      this.goodsCount=this.showList.length

    },
    searchGoods(){
      this.typeValue='全部'
      this.showList=[]
      if(this.inputValue ===''){
        this.showList=this.goodsList
          this.showInfo('请输入想要查询的商品名称！')

      }else{
        this.goodsList.forEach(item => {
          if(item.name.includes(this.inputValue)){
            this.showList.push(item)
          }
        })
      }

      if(this.showList.length === 0){
        this.showInfo('暂无此商品');
      }
      this.goodsCount=this.showList.length

    },
    showInfo(message){
      this.$notify({
        title: '提示',
        message: message,
        type: 'warning'
      });
    },
    changeShowGoods(val){
      this.currentPage=val
      console.log(val)
      console.log(this.currentPage)
    }
  },
  computed:{
    statusList(){
      return this.goodsList.map((item) => item.status === 'PUBLISHED')
    },
    showGoods(){
      console.log(1)
      let array = []
      array = this.showList.slice((this.currentPage-1)*10,this.currentPage*10)
      return array
    }
  },
  created() {
    this.$nextTick(()=>{
      this.goodsList.forEach((item) => {
        this.$set(this.switchValue, item.id, item.status === 'PUBLISHED');
      });
      this.showList=this.goodsList;
    })

  },
  mounted() {
    that=this
    console.log(that)
    console.log(typeof (debounce()))
    this.goodsCount=this.goodsList.length
  },
  beforeDestroy() {
    that=null
  }
}
</script>

<style scoped lang="less">


.goods-class{
    width: 100vw;
    height: 800px;
    background-color: rgba(187, 187, 187, 0.8);
    border-right: 1px solid rgb(211, 211, 211);
    border-bottom: 1px solid rgb(211, 211, 211);
    margin-top: -800px;
    margin-left: 200px;
    position: absolute;

}
.top{
    width: 100vw;
    height: 100px;
    line-height: 100px;
    box-shadow: 0px 2px 4px 1px rgb(102, 102, 102);
    select,input{
      width: 180px;
      height: 36px;
      margin-left: 30px;
      border-radius: 5px;
      border: 1px solid ;
      outline: none;
      padding-left: 5px;
    }
    button{
      height: 36px;
      width: 60px;
      color: white;
      border: rgba(54, 33, 1, 0.7);
      outline: none;
      background-color: rgba(248, 157, 20, 0.7);
      margin-left: 5px;
      border-radius: 5px;
    }
    .last{
      margin-left: 60px;
      width: 80px;
      background-color: rgba(10, 89, 155,0.7);
    }
}
/* 增加滚动条 */
.table-div{
    height: 620px;
    width: 80%;
    /* background-color: #FF9502; */
    position: relative;
    overflow: auto;
  margin-top: 10px;
   margin-left: 20px;
}
.goods-table{
    border-right: 1px solid rgb(142, 146, 146) ;
    border-bottom: 1px solid rgb(142, 146, 146) ;
    border-collapse: collapse;
    margin-bottom: 10px;
    font-size: 14px;
    tr:nth-child(1){
        height: 20px;
    }
    tr{
        height: 80px;
        td{
            width: 250px;
            text-align: center;
            overflow: hidden;
            border-left: 1px solid rgb(142, 146, 146) ;
            border-top: 1px solid rgb(142, 146, 146) ;
            img{
            width: 110px;
            height: 95px;
            margin-top: 5px;
            margin-bottom: 5px;
            /* background-color: #b1d9e5; */
        }
    } 
    

    }
    tr td:nth-child(2){
        width: 260px;
        /* height: 200px; */
    }
  tr td:nth-child(6){
    width: 400px;
    /* height: 200px; */
  }
    tr:nth-child(2n-1){
        background-color:rgba(114, 176, 184, 0.5) ;
    }
}

//设置滚动条的样式
::-webkit-scrollbar {

  width: 10px;

  height: 10px;

  background-color: #f5f5f5;

  border-radius: 5px;

}

/* 设置滚动条滑块的背景色和圆角 */

::-webkit-scrollbar-thumb {

  background-color: #ccc;

  border-radius: 5px;

}

/* 设置滚动条滑块在悬停状态下的背景色和圆角 */

::-webkit-scrollbar-thumb:hover {

  background-color: #999;

  border-radius: 5px;

}

/* 设置滚动条轨道的背景色和圆角 */

::-webkit-scrollbar-track {

  background-color: #f5f5f5;

  border-radius: 5px;

}

/* 设置滚动条轨道在悬停状态下的背景色和圆角 */

::-webkit-scrollbar-track:hover {

  background-color: #ccc;

  border-radius: 5px;

}
.el-select-dropdown.el-popper{
  margin-top:140px !important;
}
</style>