import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

const listStore = new Vuex.Store({
    state:{
        goodsList:[
            {id:'23132412',name:'汉堡',score:1.5,status:'UNPUBLISH',price:50,total:10,img:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',describe:'这是一个美味的汉堡包，快来品尝吧！',type:'食品'},
            {id:'23132413',name:'压缩毛巾',score:3.5,status:'PUBLISHED',price:10,total:10,img:'https://gw.alicdn.com/bao/uploaded/O1CN01uKjOOF1wJUl8qhViS_!!6000000006287-0-yinhe.jpg_210x210q75.jpg_.webp',describe:'压缩毛巾洗脸巾一次性纯棉加厚加大揉面巾便携旅游洁面洗面巾吸水！',type:'生活用品'},
            {id:'23132414',name:'短袖',score:3.7,status:'CLOSED',price:70,total:100,img:'https://img.alicdn.com/bao/uploaded/O1CN01NoRsLZ1GCtKWXR3EV_!!6000000000587-0-yinhe.jpg',describe:'LOF夏新款打底U领白色短袖T恤女正肩打底衫棉显瘦基础款体恤上衣',type:'服饰'},
            {id:'23132415',name:'闺蜜卫衣',score:2.1,status:'SOLD',price:50,total:10,img:'https://img.alicdn.com/bao/uploaded/i1/188124207/O1CN01DuSFoL1gwr5uV0EpI_!!0-item_pic.jpg',describe:'夏贝尔2023夏季新款宽松圆领纯棉T恤衫女卡通休闲印花短袖上衣',type:'服饰'},
            {id:'23132416',name:'小面包',score:4.1,status:'PUBLISHED',price:50,total:10,img:'https://img.alicdn.com/bao/uploaded/O1CN01JEdheE1kUEnqaOgpq_!!6000000004686-0-yinhe.jpg',describe:'千丝菠萝小口袋面包整箱乳酸菌早餐健康休闲食品零食小吃解馋夜宵',type:'食品'},
            {id:'23132417',name:'鹌鹑蛋',score:3.5,status:'PUBLISHED',price:50,total:10,describe:'比比赞鹌鹑蛋盐焗卤蛋小包装铁蛋即食网红卤味小零食小吃休闲食品',img:'https://gw.alicdn.com/imgextra/O1CN01EL1Hk51fpEropTL19_!!0-item_pic.jpg_300x300q75.jpg_.webp',type:'食品'},
            {id:'23132418',name:'德芙',score:4.5,status:'PUBLISHED',price:50,total:10,img:'https://gw.alicdn.com/imgextra/i2/877104952/O1CN01y6n6fc1mS49hTlR83_!!0-item_pic.jpg_Q75.jpg_.webp',describe:'德芙巧克力排块84g袋装小巧粒分享零食黑巧丝滑牛奶零糖黑巧果香！',type:'食品'},
            {id:'23132419',name:'笔记本电脑',score:4.5,status:'PUBLISHED',price:50,total:10,img:'https://img.alicdn.com/bao/uploaded/O1CN01jHrXCP1sc2Th57u1v_!!6000000005786-0-yinhe.jpg',describe:'s1-4【2023官方旗舰新品电脑2TB大硬盘】笔记本电脑轻薄本15.6英寸轻薄便携指纹解锁大学生办公商务设计游戏',type:'电器'},
            {id:'23132422',name:'零食大礼包',score:1.5,status:'UNPUBLISH',price:139.8,total:100,img:'https://img.alicdn.com/imgextra/i1/1389320096/O1CN01sqLPtP1Ca0ryIyTu3_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',describe:'儿童节零食大礼包整箱送女友的生日礼物休闲小吃食品组合礼物ad钙',type:'食品'},
            {id:'23132423',name:'包臀裙',score:3.5,status:'PUBLISHED',price:150,total:10,img:'https://img.alicdn.com/imgextra/i2/527050082/O1CN01lbFo511CTbEjgWKWG_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',describe:'夏季性感一字肩泡泡袖包臀短裙子可甜可盐俏皮高级感波点连衣裙女！',type:'服饰'},
            {id:'23132424',name:'波点裙',score:3.7,status:'CLOSED',price:70,total:100,img:'https://img.alicdn.com/imgextra/i1/3648333809/O1CN01ch9UT51e0ZSezYvBZ_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',describe:'DT·LANDO法式波点吊带连衣裙2023夏款收腰显瘦仙女背带长裙子',type:'服饰'},
            {id:'23132425',name:'洗面奶',score:2.1,status:'SOLD',price:200,total:10,img:'https://img.alicdn.com/imgextra/i3/130550405/O1CN01J637YR1ErXFpHBun3_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',describe:'【2支装】悦诗风吟洗面奶innisfree氨基酸女洁面正品官方旗舰店乳',type:'生活用品'},
            {id:'23132426',name:'珂拉琪口号',score:4.1,status:'PUBLISHED',price:50,total:10,img:'https://img.alicdn.com/imgextra/i1/14223732/O1CN01dDqYVb1dRIrZodmZI_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',describe:'colorkey丝绒唇釉珂拉琪雾镜面口红女水雾唇露正品大牌官方旗舰店',type:'生活用品'},
            {id:'23132427',name:'扫地机器人',score:3.5,status:'PUBLISHED',price:6199,total:10,describe:'【立即加购】石头自清洁扫地机器人G20系列智能家用扫拖一体机',img:'https://img.alicdn.com/imgextra/i3/126691397/O1CN014kfWwH1MBs9NwyWl5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',type:'电器'},
            {id:'23132428',name:'蒸煮一体锅',score:4.5,status:'PUBLISHED',price:50,total:10,img:'https://img.alicdn.com/imgextra/i1/32276536/O1CN0144O3UE1y9XWVgMnvf_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',describe:'苏泊尔电磁炉火锅炒菜锅一体家用小型电池炉节能大功率多功能智能！',type:'电器'},
            {id:'23132429',name:'笔记本电脑',score:4.5,status:'PUBLISHED',price:259,total:10,img:'https://img.alicdn.com/bao/uploaded/O1CN01jHrXCP1sc2Th57u1v_!!6000000005786-0-yinhe.jpg',describe:'s1-4【2023官方旗舰新品电脑2TB大硬盘】笔记本电脑轻薄本15.6英寸轻薄便携指纹解锁大学生办公商务设计游戏',type:'电器'},
            {id:'23132432',name:'零食大礼包',score:1.5,status:'UNPUBLISH',price:139.8,total:100,img:'https://img.alicdn.com/imgextra/i1/1389320096/O1CN01sqLPtP1Ca0ryIyTu3_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',describe:'儿童节零食大礼包整箱送女友的生日礼物休闲小吃食品组合礼物ad钙',type:'食品'},
            {id:'23132433',name:'包臀裙',score:3.5,status:'PUBLISHED',price:150,total:10,img:'https://img.alicdn.com/imgextra/i2/527050082/O1CN01lbFo511CTbEjgWKWG_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',describe:'夏季性感一字肩泡泡袖包臀短裙子可甜可盐俏皮高级感波点连衣裙女！',type:'服饰'},
            {id:'23132434',name:'波点裙',score:3.7,status:'CLOSED',price:70,total:100,img:'https://img.alicdn.com/imgextra/i1/3648333809/O1CN01ch9UT51e0ZSezYvBZ_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',describe:'DT·LANDO法式波点吊带连衣裙2023夏款收腰显瘦仙女背带长裙子',type:'服饰'},
            {id:'23132435',name:'洗面奶',score:2.1,status:'SOLD',price:200,total:10,img:'https://img.alicdn.com/imgextra/i3/130550405/O1CN01J637YR1ErXFpHBun3_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',describe:'【2支装】悦诗风吟洗面奶innisfree氨基酸女洁面正品官方旗舰店乳',type:'生活用品'},
            {id:'23132436',name:'珂拉琪口号',score:4.1,status:'PUBLISHED',price:50,total:10,img:'https://img.alicdn.com/imgextra/i1/14223732/O1CN01dDqYVb1dRIrZodmZI_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',describe:'colorkey丝绒唇釉珂拉琪雾镜面口红女水雾唇露正品大牌官方旗舰店',type:'生活用品'},
            {id:'23132437',name:'扫地机器人',score:3.5,status:'PUBLISHED',price:6199,total:10,describe:'【立即加购】石头自清洁扫地机器人G20系列智能家用扫拖一体机',img:'https://img.alicdn.com/imgextra/i3/126691397/O1CN014kfWwH1MBs9NwyWl5_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',type:'电器'},
            {id:'23132438',name:'蒸煮一体锅',score:4.5,status:'PUBLISHED',price:50,total:10,img:'https://img.alicdn.com/imgextra/i1/32276536/O1CN0144O3UE1y9XWVgMnvf_!!0-saturn_solar.jpg_468x468q75.jpg_.webp',describe:'苏泊尔电磁炉火锅炒菜锅一体家用小型电池炉节能大功率多功能智能！',type:'电器'},
            {id:'23132439',name:'笔记本电脑',score:4.5,status:'PUBLISHED',price:259,total:10,img:'https://img.alicdn.com/bao/uploaded/O1CN01jHrXCP1sc2Th57u1v_!!6000000005786-0-yinhe.jpg',describe:'s1-4【2023官方旗舰新品电脑2TB大硬盘】笔记本电脑轻薄本15.6英寸轻薄便携指纹解锁大学生办公商务设计游戏',type:'电器'}
        ],
        goodsType:[
            {id:0,name:'全部'},
            {id:1,name:'食品',code:'FOOD'},
            {id:2,name:'服饰',code:'CLOTH'},
            {id:3,name:'电器',code:'TECH'},
            {id:4,name:'其它',code:'OTHERS'},

        ]
    },
    mutations:{
      setList(state, newList){
          state.list = newList
      }
    },
    actions:{
        updateList(context, newList){
            context.commit('setList',newList)
        }
    },
    getters:{
        getList(state){
            return state.goodsList
        }
    }
});

export default listStore;
