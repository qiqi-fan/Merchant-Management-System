<template>
  <div class="custome-info">
        <ul>    
            <li >
                <select class="info">
                    <option value="">会员</option>
                    <option value="">非会员</option>
                </select>
                <button class="btn btn-primary">筛选</button>

            </li>
            <li >
                <select class="info">
                    <option value="">购买次数</option>
                    <option value="">购买金额</option>
                    <option value="">购买日期</option>
    
                </select>
                <button class="btn btn-primary">排序</button>
            </li>
            <li >
                <input  type="text" class="info" placeholder="请输入客户手机号">
                <button class="btn btn-primary">搜索</button>

            </li>                   
        </ul>
    
        <table class="table">
            <tr>
                <th>客户ID</th>
                <th>会员（是/否）</th>
                <th>购买次数</th>
                <th>收货地址</th>
                <th>订单日期</th>
                <th>总消费金额</th>
                <th>消费订单</th>
                <th>操作</th>
            </tr>
            <tr>
            <td>XXX</td>
            <td>是</td>
            <td>10</td>
            <td>x省x市x区<br>
                <a href="">更多</a>
            </td>
            <td>2022-02-02</td>
            <td>￥100</td>
            <td>查看详情</td>
            <td>
                <a href="javascript:;">发放优惠券</a>
                <a href="javascript:;">拉入黑名单</a>
                <a href="javascript:;">私信</a>
            </td>
            </tr>
            <tr>
            <td>XXX</td>
            <td>是</td>
            <td>10</td>
            <td>x省x市x区<br>
                <a href="">更多</a>
            </td>
            <td>2022-02-02</td>
            <td>￥100</td>
            <td>查看详情</td>
            <td>
                <a href="">发放优惠券</a>
                <a href="">拉入黑名单</a>
                <a href="">私信</a>
            </td>
            </tr>
            <tr>
            <td>XXX</td>
            <td>是</td>
            <td>10</td>
            <td>x省x市x区<br>
                <a href="">更多</a>
            </td>
            <td>2022-02-02</td>
            <td>￥100</td>
            <td>查看详情</td>
            <td>
                <a href="">发放优惠券</a>
                <a href="">拉入黑名单</a>
                <a href="">私信</a>
            </td>
            </tr>
            <tr>
            <td>XXX</td>
            <td>是</td>
            <td>10</td>
            <td>x省x市x区<br>
                <a href="">更多</a>
            </td>
            <td>2022-02-02</td>
            <td>￥100</td>
            <td>查看详情</td>
            <td>
                <a href="">发放优惠券</a>
                <a href="">拉入黑名单</a>
                <a href="">私信</a>
            </td>
            </tr>
            <tr>
            <td>XXX</td>
            <td>是</td>
            <td>10</td>
            <td>x省x市x区<br>
                <a href="">更多</a>
            </td>
            <td>2022-02-02</td>
            <td>￥100</td>
            <td>查看详情</td>
            <td>
                <a href="">发放优惠券</a>
                <a href="">拉入黑名单</a>
                <a href="">私信</a>
            </td>
            </tr>
            
        </table>
        </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.custome-info{
    position: absolute;
    width: 100vw;
    height: 900px;
    background-color: rgba(187, 187, 187, 0.8);
    border-right: 1px solid rgb(211, 211, 211);
    border-bottom: 1px solid rgb(211, 211, 211);
    margin-top: -900px;
    margin-left: 198px;
    ul{
        height: 80px;
        line-height: 100px;
        position: relative;
        li{
            float: left;
            margin-left: 50px;
            .info{
                height: 35px;
                width: 200px;
            }
            button{
                margin-top: -4px;
                margin-left: 5px;
            }
        }
    }
    
}
h2{
    margin-left: 30px;
}


.table{
    border: none;
    tr{
        height: 30px;
        td{
            width: 86px;
            text-align: center;
            line-height: 30px;
            overflow: hidden;
            text-overflow:ellipsis;   
            white-space: nowrap;
        }
}
}
.custome-table tr td:nth-child(1){
        width: 150px;
}
.custome-table tr td:nth-child(4),.custome-table tr td:nth-child(8){
    width: 220px;
}

</style>