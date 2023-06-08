<template>
  <Dialog
      title="订单详情"
      :visible.sync="dialogVisible"
      min-width="30%"
      style="overflow: auto"
      :modal-append-to-body="false"
  >
        <span>
          <Descriptions class="margin-top" :column="2" size="small" border>
            <DescriptionsItem>
              <template slot="label">
                <i class="el-icon-user"></i>
                买家
              </template>
              {{currentItem.listUser}}
            </DescriptionsItem>
            <DescriptionsItem>
              <template slot="label">
                <i class="el-icon-time"></i>
                下单时间
              </template>
              {{currentItem.listDate}}
            </DescriptionsItem>
            <DescriptionsItem>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                商品名称
              </template>
              {{currentItem.goodsName}}
            </DescriptionsItem>
            <DescriptionsItem>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                购买数量
              </template>
              {{currentItem.goodsNumber}}
            </DescriptionsItem>
            <DescriptionsItem>
              <template slot="label">
                <i class="el-icon-shopping-bag-1"></i>
                商品原价
              </template>
             {{currentItem.initialPrice}}元
            </DescriptionsItem>
            <DescriptionsItem>
              <template slot="label">
                <svg class="iconfont">-->
                  <use xlink:href="#icon-zhekou"></use>
                </svg>
                优惠
              </template>
              <Tag size="small" type="danger">-{{currentItem.disCount}}元</Tag>
            </DescriptionsItem>
            <DescriptionsItem>
              <template slot="label">
                <svg class="iconfont">-->
                  <use xlink:href="#icon-jiage"></use>
                </svg>
                实付
              </template>
              {{currentItem.price}}元
            </DescriptionsItem>
            <DescriptionsItem>
              <template slot="label">
                <i class="el-icon-location-outline"></i>
                详细地址
              </template>
              {{currentItem.DetailAddress}}
            </DescriptionsItem>
            <DescriptionsItem>
              <template slot="label">
                <i class="el-icon-picture-outline"></i>
                商品图片
              </template>
              <ElImage
                  style="width: 100px; height: 100px"
                  :src="currentItem.url"
                  fit="cover">
                 <div slot="placeholder" class="image-slot">
                    加载中<span class="dot">...</span>
                  </div>
              </ElImage>
            </DescriptionsItem>
          </Descriptions>
        </span>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
  </Dialog>
</template>

<script>
import {Dialog,Descriptions,DescriptionsItem,Image as ElImage,Tag} from "element-ui";

export default {
  name: "ListInfoDialog",
  props:['currentItem'],
  components:{Dialog,Descriptions,DescriptionsItem,ElImage,Tag},
  data(){
    return{
      dialogVisible:false,
    }
  }
}
</script>

<style scoped>

</style>