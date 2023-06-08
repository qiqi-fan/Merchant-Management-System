<template>
  <div class="pro-list">
    <div >
      <Descriptions
          class="margin-top"
          title="处理维权订单"
          :column="3" border
          style="width: 70%; margin-left: 50px;position: relative;top: 30px"
      >
        <template slot="extra">
          <el-button type="primary" size="medium" @click="deal">审核申请</el-button>
        </template>
        <Descriptions-item>
          <template slot="label">
            <i class="el-icon-user"></i>
            订单号
          </template>
          {{currentApplyList.id}}
        </Descriptions-item>
        <Descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            订单状态
          </template>
          {{currentApplyList.state}}
        </Descriptions-item>
        <Descriptions-item>
          <template slot="label">
            <i class="el-icon-mobile-phone"></i>
            订单金额
          </template>
          {{currentApplyList.listMoney}}
        </Descriptions-item>
        <Descriptions-item>
          <template slot="label">
            <i class="el-icon-location-outline"></i>
            维权操作
          </template>
          苏州市
        </Descriptions-item>
        <Descriptions-item>
          <template slot="label">
            <i class="el-icon-tickets"></i>
            申请原因
          </template>
          <ELTag size="small" type="danger">{{currentApplyList.cause}}</ELTag>
        </Descriptions-item>
        <Descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            客户联系方式
          </template>
          {{currentApplyList.telephone}}
        </Descriptions-item>
        <Descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            维权商品
          </template>
            {{currentApplyList.commodity}}
        </Descriptions-item>
        <Descriptions-item>
          <template slot="label">
            <i class="el-icon-office-building"></i>
            审批状态
          </template>
          <ELTag plain type="success">
            {{currentApplyList.condition}}
          </ELTag>
        </Descriptions-item>
      </Descriptions>
      <Dialog title="审核售后申请" :visible.sync="dialogFormVisible">
        <Form :model="currentApplyList">
          <Form-item label="申请状态" :label-width="formLabelWidth">
            <Select v-model="currentApplyList.condition" placeholder="请选择活动区域">
              <Option v-for="item in dealState" :label="item.state" :value="item.state" :key="item.id"></Option>
            </Select>
          </Form-item>
          <Form-item label="审核原因" :label-width="formLabelWidth">
            <Input v-model="currentApplyList.deal" autocomplete="off"></Input>
          </Form-item>

        </Form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false" @confirm="dealApplyList">确 定</el-button>
        </div>
      </Dialog>

    </div>
    <h2 style="margin-top: 70px;margin-left: 430px">全部维权申请</h2>
    <table class="list-table" style="margin-left: 30px">
        <tr class="row" id="first-row">
            <th>订单单号</th>
            <th>买家</th>
            <th>订单状态</th>
            <th>订单日期</th>
            <th>订单金额</th>
            <th>订单详细信息</th>
            <th>处理状态</th>
            <th>申请原因</th>
        </tr>
        <tr
            class="row"
            v-for="item in ApplyLists"
            :key="item.id"
            @click="showInfo(item)"
        >
            <td >{{ item.id }}</td>
            <td >{{ item.listUser }}</td>
            <td >{{ item.state }}</td>
            <td >{{ item.listDate }}</td>
            <td >{{ item.listMoney }}</td>
            <td>
              <el-button type="success" plain @click="showDetails(item)" size="mini" style="width: 70px;padding-left: 10px">查看详情</el-button>
            </td>
            <td>
              <ELTag style="width: 70px" effect="dark" type="success" v-if="item.condition !== '未处理'"> {{ item.condition }}</ELTag>
              <ELTag style="width: 70px" effect="dark" type="danger" v-else> {{ item.condition }}</ELTag>

            </td>
            <td>{{ item.cause }}</td>
        </tr>

    </table>
    <ListInfoDialog :current-item="currentApplyList" ref="listInfoDialog"/>
  </div>
</template>

<script>
import {Descriptions,DescriptionsItem, Tag as ELTag,Dialog,Form,FormItem,Input,Select,Option} from "element-ui";
import ListInfoDialog from "@/pages/components/ListInfoDialog";

export default {
  components:{ListInfoDialog, Descriptions,DescriptionsItem,ELTag,Dialog,Form,FormItem,Input,Select,Option},
    data(){
        return{
          list:{
              id:'',
              userID:'',
              state:"",
              condition:"",
              date:'',
              money:0,

          },
          ApplyLists:[
              {id:'12345678',listUser:'0001',telephone:'122438483',commodity:'男士帆布鞋',state:'待发货',listDate:'2022-8-25',listMoney:100,condition:'未处理',applyDeal:'申请退货',sendAddress:'浙江杭州',receiveAddress:'陕西西安',cause:'不喜欢',deal:'',date:'2022-10-01',price: 120,receiver:'刘二',receiveDate:'',goodsName:'运动鞋',goodsNumber:1,initialPrice:130,disCount:10},
              {id:'12315679',listUser:'0002',telephone:'329389133',commodity:'便携电脑包',state:'待发货',listDate:'2022-8-27',listMoney:200,condition:'已通过',applyDeal:'申请退货',sendAddress:'浙江温州',receiveAddress:'江苏南京',cause:'不合适',deal:'',date:'2022-10-01',price: 120,receiver:'刘二',receiveDate:'',goodsName:'运动鞋',goodsNumber:1,initialPrice:130,disCount:10},
              {id:'12325610',listUser:'0003',telephone:'122438234',commodity:'SK2小样',state:'待发货',listDate:'2022-8-29',listMoney:300,condition:'拒绝退款',applyDeal:'申请退货',sendAddress:'浙江宁波',receiveAddress:'广东深圳',cause:'不合适',deal:'',date:'2022-10-01',price: 120,receiver:'刘二',receiveDate:'',goodsName:'运动鞋',goodsNumber:1,initialPrice:130,disCount:10},
              {id:'12335611',listUser:'0004',telephone:'122438322',commodity:'婴儿拖鞋',state:'待发货',listDate:'2022-8-21',listMoney:400,condition:'未处理',applyDeal:'申请退款',sendAddress:'浙江绍兴',receiveAddress:'甘肃兰州',cause:'商品破损',deal:'',date:'2022-10-01',price: 120,receiver:'刘二',receiveDate:'',goodsName:'运动鞋',goodsNumber:1,initialPrice:130,disCount:10}
          ],
          currentApplyList:{},
          selection:true,
          dialogFormVisible:false,
          formLabelWidth: '120px',
          dealState:[
            {id:1,state:'未处理'},
            {id:2,state:'拒绝申请'},
            {id:3,state:'同意申请'},
            {id:4,state:'与买家协调'}
          ]
        }
    },
    methods:{
      showDetails(){
        this.$refs.listInfoDialog.dialogVisible=true
      },
      showInfo(item){
            this.currentApplyList=item
        },
      checkList(id){
          console.log(id)
      },
      dealApplyList(){
        console.log(123)
        console.log(this.currentApplyList.condition)
      },
      deal(){
        if(this.currentApplyList.condition === '未处理'){
          this.dialogFormVisible = true
        }else{
          this.showWarn();
        }
      },
      showWarn() {
        this.$notify({
          title: '警告',
          message: '该申请已处理！不可重复处理',
          type: 'warning'
        });
      },
    },
  mounted() {
    this.currentApplyList = this.ApplyLists[0]
  }
}
</script>

<style scoped lang="less">

    .pro-list{
        width: 100vw;
        height: 800px;
        background-color: rgba(187, 187, 187, 0.8);
        margin-top: -800px;
        margin-left: 200px;
        padding-left: 10px;
        border-bottom: 1px solid rgb(189, 189, 189);
        border-right: 1px solid rgb(189, 189, 189);
    }
    //.list-ul{
    //  position: relative;
    //    top:30px;
    //    width: 70%;
    //    height: 260px;
    //    //background-color: rgba(141, 181, 184, 0.7);
    //  background-color: white;
    //    border: 1px solid rgb(199, 196, 196);
    //    box-shadow: 0 0 20px 1px rgb(191, 191, 191);
    //    padding-top: 20px;
    //    margin-left: 60px;
    //}

    tr:hover{
        background-color: rgba(186, 238, 170, 0.4);
    }
    td{
        width: 120px;
        text-align: center;
    }
    table tr td:nth-child(7){
        color:rgb(192, 74, 74);
        cursor: pointer;
    }
    table tr td:nth-child(8){
        width: 150px;
    }
    
    .row{
        padding-left: 20px;
    }
    #first-row{
        height: 56px;
    }
    .el-descriptions__item {
      background-color: #3d0e0e; /* 指定背景颜色 */
    }
    .el-descriptions-item__label.is-bordered-label{
      background-color: #b3f1c0;
    }

</style>