<template>
  <div>
    <div class="all-order">
      <ul class="ul-number">
        <li class="li-number">
          <Select v-model="selected" placeholder="请选择">
            <Option
                v-for="item in listState"
                :key="item.id"
                :value="item.id"
                :label="item.state"
            >
            </Option>
          </Select>
          <Button type="primary" @click="checkList()" style="margin-left: 5px">筛选</Button>
        </li>
        <li class="li-number">
          <Input v-model="inputValue" placeholder="请输入订单号" style="width: 200px;margin-right: 5px"></Input>
          <Button type="primary" @click="selectList()">查找</Button>

        </li>

      </ul>
      <table  class="list-table">
        <tr class="row">
          <th>订单单号</th>
          <th>收货地址</th>
          <th>订单状态</th>
          <th>配送员</th>
          <th>订单日期</th>
          <th>订单金额/￥</th>
          <th>发货地</th>
          <th>收货人</th>
          <th>签收日期</th>
          <th>操作</th>
        </tr>
        <tr class="row" v-for="item in showList " :key=item.id >
          <td>{{item.id}}</td>
          <td>{{item.sendAddress}}</td>
          <td>{{item.state}}</td>
          <td>{{item.courier}}</td>
          <td>{{item.date}}</td>
          <td>{{item.price}}</td>
          <td>{{item.receiveAddress}}</td>
          <td>{{item.receiver}}</td>
          <td>{{item.receiveDate}}</td>
          <td>
            <el-button type="success" plain @click="showDetails(item)" size="mini" style="width: 70px;padding-left: 10px">查看详情</el-button>
            <Popconfirm
                confirm-button-text='是的'
                cancel-button-text='取消'
                icon="el-icon-info"
                icon-color="red"
                title="确定删除此订单嘛？"
                @confirm="deleteList(item.id)"
            >
              <Button slot="reference" size="mini" type="danger" plain style="width: 70px;padding-left: 10px;margin-left: 10px">删除订单</Button>
            </Popconfirm>
          </td>
        </tr>
      </table>
      <ListInfoDialog :currentItem="currentItem" ref="listInfoDialog"/>
    </div>
  </div>
</template>

<script>
import { Button, Input, Select, Option, Popconfirm } from 'element-ui';
import ListInfoDialog from "@/pages/components/ListInfoDialog";
export default {
  name:'allOrder',
  components: {ListInfoDialog, Button, Input,Select,Option,  Popconfirm},
  data(){
    return{
      selected:'00',
      listState:[
       {id:'00',state:'全部订单'},
       {id:'01',state:'待付款'},
       {id:'02',state:'待发货'},
       {id:'03',state:'待收货'},
       {id:'04',state:'已完成'}
     ],
      list:[
        {id:'98676751',sendAddress:'浙江省杭州市钱塘区',state:'待发货',courier:'张三',date:'2022-10-01',price: 120,receiveAddress:'浙江温州',receiver:'刘二',receiveDate:'',listDate:'2022-10-01 12:10',listUser:'Marry',goodsName:'运动鞋',goodsNumber:1,initialPrice:130,disCount:10,DetailAddress:'浙江省杭州市钱塘区下沙浙江理工大学生活一区',url:'https://img.alicdn.com/bao/uploaded/O1CN01bXnoAc1zkvSVECCG9_!!6000000006753-0-yinhe.jpg',},
        {id:'98676752',sendAddress:'浙江省杭州市西湖区',state:'待收货',courier:'王五',date:'2022-09-25',price: 34,receiveAddress:'广东广州',receiver:'大强',receiveDate:'',listDate:'2022-10-01 12:10',listUser:'Jenny',goodsName:'男士外套',goodsNumber:1,initialPrice:40,disCount:6,DetailAddress:'浙江省杭州市西湖区文一街道锦绣家园2幢',url:'https://img.alicdn.com/bao/uploaded/O1CN01qQ2s2x1P3ZesxSomY_!!6000000001785-0-yinhe.jpg'},
        {id:'98676753',sendAddress:'浙江省杭州市上城区',state:'已完成',courier:'张三',date:'2022-08-07',price: 78,receiveAddress:'浙江杭州',receiver:'小杨',receiveDate:'2022-08-12',listDate:'2022-10-01 12:10',listUser:'Haha',goodsName:'卫生纸',goodsNumber:1,initialPrice:80,disCount:2,DetailAddress:'浙江省杭州市上城区某某街道幸福小区',url:'https://img.alicdn.com/bao/uploaded/O1CN01JpC6qB1FXDHZ9JwGz_!!6000000000496-0-yinhe.jpg'},
        {id:'98676754',sendAddress:'浙江省杭州市钱塘区',state:'待发货',courier:'宋嵘榕',date:'2022-09-20',price: 36.8,receiveAddress:'浙江金华',receiver:'付其乐',receiveDate:'',listDate:'2022-10-01 12:10',listUser:'Marry',goodsName:'洗发水',goodsNumber:1,initialPrice:60,disCount:23.2,DetailAddress:'浙江省杭州市钱塘区下沙浙江理工大学生活一区',url:'https://img.alicdn.com/bao/uploaded/i3/1077697753/O1CN0122KS2C278vX5PwA6u_!!0-item_pic.jpg'},
        {id:'98676755',sendAddress:'浙江省宁波市',state:'待收货',courier:'高远',date:'2022-08-25',price: 100,receiveAddress:'湖北武汉',receiver:'许望',receiveDate:'',listDate:'2022-10-01 12:10',listUser:'刘洪秋',goodsName:'椅子',goodsNumber:1,initialPrice:100,disCount:0,DetailAddress:'湖北省武汉市江夏区景江大厦',url:'https://img.alicdn.com/bao/uploaded/O1CN01XnGDsm1LUMNC8Ilhg_!!6000000001302-0-yinhe.jpg'},
        {id:'98676756',sendAddress:'陕西省西安市碑林区',state:'已完成',courier:'周子迁',date:'2022-07-21',price: 80,receiveAddress:'浙江嘉兴',receiver:'季秋',receiveDate:'2022-07-27',listDate:'2022-10-01 12:10',listUser:'Marry',goodsName:'女凉鞋',goodsNumber:1,initialPrice:70,disCount:10,DetailAddress:'陕西省西安市高新区小寨村洪福街道',url:'https://img.alicdn.com/bao/uploaded/O1CN01e69OzK1v1LbC7AvyF_!!6000000006112-0-yinhe.jpg'},
        {id:'98676757',sendAddress:'浙江省杭州市钱塘区',state:'待发货',courier:'小张',date:'2022-08-29',price: 640.5,receiveAddress:'江苏南京',receiver:'王五',receiveDate:'',listDate:'2022-10-01 12:10',listUser:'何子星',goodsName:'项链',goodsNumber:1,initialPrice:650,disCount:10,DetailAddress:'浙江省杭州市钱塘区下沙浙江理工大学生活一区',url: 'https://img.alicdn.com/bao/uploaded/O1CN01dzNuxk225CDooYfHl_!!6000000007068-0-yinhe.jpg'},
        {id:'98676758',sendAddress:'浙江省杭州市拱墅区',state:'待发货',courier:'小李',date:'2022-09-18',price: 399,receiveAddress:'广东深圳',receiver:'李四',receiveDate:'',listDate:'2022-10-01 12:10',listUser:'Marry',goodsName:'短袖',goodsNumber:1,initialPrice:399,disCount:0,DetailAddress:'浙江省杭州市钱塘区下沙浙江理工大学生活一区',url:'https://img.alicdn.com/bao/uploaded/i3/2201314034117/O1CN01n7j3j11gHdQzJFTby_!!0-item_pic.jpg'},
        {id:'98676759',sendAddress:'浙江省杭州市钱塘区',state:'待付款',courier:'小李',date:'2022-09-18',price: 391,receiveAddress:'陕西西安',receiver:'何小莫',receiveDate:'',listDate:'2022-10-01 12:10',listUser:'Marry',goodsName:'水杯',goodsNumber:1,initialPrice:391,disCount:0,DetailAddress:'浙江省杭州市钱塘区下沙浙江理工大学生活一区',url:'https://img.alicdn.com/bao/uploaded/O1CN01sUM2wo1aiImKQECWn_!!6000000003363-0-yinhe.jpg'},
      ],
      showList:[],
      inputValue:'',
      dialogVisible:false,
      currentItem:{},
      dialogData:{},
      }
    },
  methods:{
    checkList(){
      console.log(this.selected)
      let currentState = this.listState.find( obj => {
        return obj.id === this.selected
      }).state
      this.showList=[]
      if(currentState === '全部订单'){
        this.showList=this.list
      }else {
        this.list.forEach((list)=>{
          if(list.state === currentState) {
            this.showList.push(list)
          }
        })
      }

    },
    selectList(){
      this.showList=[]
      this.list.forEach((item)=> {
        if(item.id === this.inputValue) {
          this.showList.push(item)
        }
      })
    },
    showDetails(item){
      this.$refs.listInfoDialog.dialogVisible=true
      this.currentItem = item;
    },
    deleteList(itemId){
     let index = this.showList.map(item => item.id).indexOf(itemId)
      this.showList.splice(index,1)
    }
  },
  mounted(){
    this.selected = this.listState[0].id
    this.showList=this.list
  },
}
</script>
<style scoped lang="less">
    .all-order{
        z-index: 1;
        position: absolute;
        float: left;
        width: 100vw;
        height: 800px;
        background-color: rgba(187, 187, 187, 0.8);
        border-right: 1px solid rgb(211, 211, 211);
        border-bottom: 1px solid rgb(211, 211, 211);
        margin-top: -800px;
        margin-left: 200px;
        .ul-number{
            width: 100vw;
            height: 100px;
            /* background-color: aquamarine; */
            .li-number{
                float: left;
                width: 300px;
                /* height:150px ; */
                line-height: 100px;
                margin-left: 20px;
                .btn-primary{
                    margin-left: 10px;
                }
                .list-state,#list-num{
                    border: none;
                    width: 200px;
                    height: 37px;
                    outline: 0;
                    line-height: 40px;
                    border-radius: 5px;
                    padding-left: 5px;
                }
            }

        }
    }
    .list-table{
        margin-left: 5px;
        border: none;
        border-right: 1px solid  rgb(129, 129, 129);
        border-bottom: 1px solid  rgb(129, 129, 129);
        // opacity: 0;
        background-color: rgba(235, 234, 234,0.1);
    }
    .list-table tr{
        height: 35px;
        th{
            text-align: center;
            border-left: 1px solid  rgb(129, 129, 129) ;
            border-top: 1px solid  rgb(129, 129, 129);
            height: 50px;
            width: 86px;

        }
        td{
            width: 86px;
            text-align: center;
            line-height: 30px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            a::after{
                content: '';
                margin-left: 10px;
            }

        }

    }
    .list-table tr td:nth-child(2),.list-table tr td:nth-child(10){
        width: 180px;
    }
    .list-table tr td:nth-child(10) a{
        color: #db860e;
    }
    .list-table tr th:nth-child(2),.list-table tr th:nth-child(10){
      width: 180px;
    }
    .list-table tr th:nth-child(10) a{
      color: #db860e;
    }
    .el-select-dropdown.el-popper{
      top:130px !important;
    }

</style>