<template>
    <div class="goods-list">
      <template>
        <Tabs v-model="activeName" type="card" @tab-click="handleClick" style="width: 80%;height: 80%">
          <Tab-pane v-for="item in goodsStatus" :label="item.value" :name="item.name" :key="item.id" >
              <Card style="width: 200px;height:260px;margin-right:15px;margin-top:10px;float: left" v-for="goods in ShowList" :key="goods.id" >
                <img :src="goods.img" class="image">
                <div style="padding: 10px;">
                  <span style="font-weight: bold">
                    {{goods.name}}
                  </span>
                  <span>
                    <ElTag type="danger" style="height: 25px;line-height: 25px;float: right">￥{{goods.price}}</ElTag>
                  </span>
                  <div class="bottom">
                    <span>{{goods.describe}}</span>
                  </div>
                </div>
              </Card>
          </Tab-pane>
        </Tabs>
      </template>
    </div>
</template>

<script>
import {Tabs,TabPane,Card,Tag as ElTag} from 'element-ui'
export default {
  name:'goodsList',
  components:{Tabs,TabPane,Card,ElTag},
  data(){
      return{
        num:1,
        activeName:'UNPUBLISH',
        currentDate: new Date(),
        goodsList:[
          {id:'23132412',name:'汉堡',status:'UNPUBLISH',price:50,total:10,img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',describe:'这是一个美味的汉堡包，快来品尝吧！',type:'FOOD'},
          {id:'23132413',name:'压缩毛巾',status:'PUBLISHED',price:10,total:10,img:'https://gw.alicdn.com/bao/uploaded/O1CN01uKjOOF1wJUl8qhViS_!!6000000006287-0-yinhe.jpg_210x210q75.jpg_.webp',describe:'压缩毛巾洗脸巾一次性纯棉加厚加大揉面巾便携旅游洁面洗面巾吸水！',type:'LIFE'},
          {id:'23132414',name:'短袖',status:'CLOSED',price:70,total:100,img:'https://img.alicdn.com/bao/uploaded/O1CN01NoRsLZ1GCtKWXR3EV_!!6000000000587-0-yinhe.jpg',describe:'LOF夏新款打底U领白色短袖T恤女正肩打底衫棉显瘦基础款体恤上衣',type:'CLOTH'},
          {id:'23132415',name:'闺蜜卫衣',status:'SOLD',price:50,total:10,img:'https://img.alicdn.com/bao/uploaded/i1/188124207/O1CN01DuSFoL1gwr5uV0EpI_!!0-item_pic.jpg',describe:'夏贝尔2023夏季新款宽松圆领纯棉T恤衫女卡通休闲印花短袖上衣',type:'CLOTH'},
          {id:'23132416',name:'小面包',status:'PUBLISHED',price:50,total:10,img:'https://img.alicdn.com/bao/uploaded/O1CN01JEdheE1kUEnqaOgpq_!!6000000004686-0-yinhe.jpg',describe:'千丝菠萝小口袋面包整箱乳酸菌早餐健康休闲食品零食小吃解馋夜宵',type:'FOOD'},
          {id:'23132417',name:'鹌鹑蛋',status:'PUBLISHED',price:50,total:10,describe:'比比赞鹌鹑蛋盐焗卤蛋小包装铁蛋即食网红卤味小零食小吃休闲食品',img:'https://gw.alicdn.com/imgextra/O1CN01EL1Hk51fpEropTL19_!!0-item_pic.jpg_300x300q75.jpg_.webp',type:'FOOD'},
          {id:'23132418',name:'德芙',status:'PUBLISHED',price:50,total:10,img:'https://gw.alicdn.com/imgextra/i2/877104952/O1CN01y6n6fc1mS49hTlR83_!!0-item_pic.jpg_Q75.jpg_.webp',describe:'德芙巧克力排块84g袋装小巧粒分享零食黑巧丝滑牛奶零糖黑巧果香！',type:'FOOD'},
          {id:'23132419',name:'笔记本电脑',status:'PUBLISHED',price:50,total:10,img:'https://img.alicdn.com/bao/uploaded/O1CN01jHrXCP1sc2Th57u1v_!!6000000005786-0-yinhe.jpg',describe:'s1-4【2023官方旗舰新品电脑2TB大硬盘】笔记本电脑轻薄本15.6英寸轻薄便携指纹解锁大学生办公商务设计游戏',type:'TECH'}
        ],
        goodsStatus:[
          {name:'UNPUBLISH',value:'未上架',id:'1'},
          {name:'PUBLISHED',value:'已上架',id:'2'},
          {name:'CLOSED',value:'已下架',id:'3'},
          {name:'SOLD',value:'已售空',id:'4'},
        ]
      }
  },
  computed:{
    ShowList(){
      return this.goodsList.filter((item) => item.status===this.activeName)
    }
  },
  methods:{
      change(n){
          this.num=n;
      },
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style scoped lang="less">
    .goods-list{
      z-index: 1;
      width: 100vw;
      height: 800px;
      margin-top: -800px;
      margin-left: 199px;
      border-right: 1px solid rgb(189, 189, 189);
      border-bottom: 1px solid rgb(189, 189, 189);
      background-color: rgba(187, 187, 187, 0.8);
      position: absolute;
      padding:40px 100px 100px 100px

    }
    .el-tabs--card>.el-tabs__header .el-tabs__nav{
      background-color: red;
    }
    .time {
      font-size: 13px;
      color: #999;
    }

    .bottom {
      width: 150px;
      margin-top: 13px;
      line-height: 12px;
      font-size: 11px;
      color: #737171;
      display: inline-block;
      white-space:nowrap ;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .button {
      padding: 0;
      float: right;
    }

    .image {
      width: 100%;
      display: block;
    }

</style>