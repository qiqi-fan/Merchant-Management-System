<template>
    <div class="goods-class">
        <div class="top">
            <select name="" id="type">
                <option value="">食品</option>
                <option value="">服装</option>
                <option value="">家用电器</option>
                <option value="">生活用品</option>
            </select>
            <button class="btn btn-primary">筛选</button>
            <input type="text" name="" id="" placeholder="请输入商品名称">
            <button class="btn btn-primary">搜索</button>
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
                    <td>上架时间</td>
                    <td>商品详情</td>
                </tr>
                <tr>
                    <td>三只松鼠坚果</td>
                    <td><img src="" alt=""></td>
                    <td>食品</td>
                    <td>￥100.00</td>
                    <td>100</td>
                    <td>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="star" class="fas fa-star"></i>
                    </td>
                    <td>
                        <div class="click-btn">
                            <div class="switch">
                                <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox">
                                <label for="cmn-toggle-1"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox">
                                <label for="cmn-toggle-4"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
                                <label for="cmn-toggle-7" data-on="Yes" data-off="No"></label>
                                </div>
                        </div>
                    </td>
                    <td>2022-02-02</td>
                    <td><a href="javascript:;">查看详情</a></td>
                </tr>
                <tr>
                    <td>面包</td>
                    <td><img src="" alt=""></td>
                    <td>食品</td>
                    <td>￥100.00</td>
                    <td>100</td>
                    <td>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="y-star" class="fas fa-star"></i>
                    </td>
                    <td>
                        <div class="click-btn">
                            <div class="switch">
                                <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox">
                                <label for="cmn-toggle-1"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox">
                                <label for="cmn-toggle-4"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
                                <label for="cmn-toggle-7" data-on="Yes" data-off="No"></label>
                                </div>
                        </div>
                    </td>
                    <td>2022-02-02</td>
                    <td><a href="javascript:;">查看详情</a></td>
                </tr>
                <tr>
                    <td>女卫衣</td>
                    <td><img src="" alt=""></td>
                    <td>服装</td>
                    <td>￥100.00</td>
                    <td>100</td>
                    <td>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="star" class="fas fa-star"></i>
                    </td>
                    <td>
                        <div class="click-btn">
                            <div class="switch">
                                <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox">
                                <label for="cmn-toggle-1"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox">
                                <label for="cmn-toggle-4"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
                                <label for="cmn-toggle-7" data-on="Yes" data-off="No"></label>
                                </div>
                        </div>
                    </td>
                    <td>2022-02-02</td>
                    <td id="check-info"><a href="javascript:;">查看详情</a></td>
                </tr>
                <tr>
                    <td>眼镜</td>
                    <td><img src="" alt=""></td>
                    <td>生活用品</td>
                    <td>￥100.00</td>
                    <td>100</td>
                    <td>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="star" class="fas fa-star"></i>
                    </td>
                    <td>
                        <div class="click-btn">
                            <div class="switch">
                                <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox">
                                <label for="cmn-toggle-1"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox">
                                <label for="cmn-toggle-4"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
                                <label for="cmn-toggle-7" data-on="Yes" data-off="No"></label>
                                </div>
                        </div>
                    </td>
                    <td>2022-02-02</td>
                    <td><a href="">查看详情</a></td>
                </tr>
                <tr>
                    <td>XXX</td>
                    <td><img src="" alt=""></td>
                    <td>服装</td>
                    <td>￥100.00</td>
                    <td>100</td>
                    <td>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="star" class="fas fa-star"></i>
                    </td>
                    <td>
                        <div class="click-btn">
                            <div class="switch">
                                <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox">
                                <label for="cmn-toggle-1"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox">
                                <label for="cmn-toggle-4"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
                                <label for="cmn-toggle-7" data-on="Yes" data-off="No"></label>
                                </div>
                        </div>
                    </td>
                    <td>2022-02-02</td>
                    <td><a href="">查看详情</a></td>
                </tr>
                <tr>
                    <td>XXX</td>
                    <td><img src="" alt=""></td>
                    <td>服装</td>
                    <td>￥100.00</td>
                    <td>100</td>
                    <td>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="star" class="fas fa-star"></i>
                    </td>
                    <td>
                        <div class="click-btn">
                            <div class="switch">
                                <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox">
                                <label for="cmn-toggle-1"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox">
                                <label for="cmn-toggle-4"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
                                <label for="cmn-toggle-7" data-on="Yes" data-off="No"></label>
                                </div>
                        </div>
                    </td>
                    <td>2022-02-02</td>
                    <td><a href="">查看详情</a></td>
                </tr>
                <tr>
                    <td>XXX</td>
                    <td><img src="" alt=""></td>
                    <td>服装</td>
                    <td>￥100.00</td>
                    <td>100</td>
                    <td>
                        <i id="star" class="fas fa-star"></i>
                        <i id="star" class="fas fa-star"></i>
                        <i id="star" class="fas fa-star"></i>
                    </td>
                    <td>
                        <div class="click-btn">
                            <div class="switch">
                                <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox">
                                <label for="cmn-toggle-1"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox">
                                <label for="cmn-toggle-4"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
                                <label for="cmn-toggle-7" data-on="Yes" data-off="No"></label>
                                </div>
                        </div>
                    </td>
                    <td>2022-02-02</td>
                    <td><a href="">查看详情</a></td>
                </tr>
                <tr>
                    <td>XXX</td>
                    <td><img src="" alt=""></td>
                    <td>服装</td>
                    <td>￥100.00</td>
                    <td>100</td>
                    <td>
                        <i id="star" class="fas fa-star"></i>
                        <i id="star" class="fas fa-star"></i>
                        <i id="star" class="fas fa-star"></i>
                    </td>
                    <td>
                        <div class="click-btn">
                            <div class="switch">
                                <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox">
                                <label for="cmn-toggle-1"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox">
                                <label for="cmn-toggle-4"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
                                <label for="cmn-toggle-7" data-on="Yes" data-off="No"></label>
                                </div>
                        </div>
                    </td>
                    <td>2022-02-02</td>
                    <td><a href="">查看详情</a></td>
                </tr>
                <tr>
                    <td>XXX</td>
                    <td><img src="" alt=""></td>
                    <td>服装</td>
                    <td>￥100.00</td>
                    <td>100</td>
                    <td>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="y-star" class="fas fa-star"></i>
                    </td>
                    <td>
                        <div class="click-btn">
                            <div class="switch">
                                <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox">
                                <label for="cmn-toggle-1"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox">
                                <label for="cmn-toggle-4"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
                                <label for="cmn-toggle-7" data-on="Yes" data-off="No"></label>
                                </div>
                        </div>
                    </td>
                    <td>2022-02-02</td>
                    <td><a href="">查看详情</a></td>
                </tr>
            </table>
        </div>


        <!-- <div class="table-div2">
            <table class="goods-table" >
                <tr>
                    <td>商品名称</td>
                    <td>图片</td>
                    <td>商品类别</td>
                    <td>单价</td>
                    <td>库存（SKU）</td>
                    <td>评分</td>
                    <td>是否上架</td>
                    <td>上架时间</td>
                    <td>商品详情</td>
                </tr>
                <tr>
                    <td>手机支架</td>
                    <td><img src="" alt=""></td>
                    <td>生活用品</td>
                    <td>￥100.00</td>
                    <td>100</td>
                    <td>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="star" class="fas fa-star"></i>
                    </td>
                    <td>
                        <div class="click-btn">
                            <div class="switch">
                                <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox">
                                <label for="cmn-toggle-1"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox">
                                <label for="cmn-toggle-4"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
                                <label for="cmn-toggle-7" data-on="Yes" data-off="No"></label>
                                </div>
                        </div>
                    </td>
                    <td>2022-02-02</td>
                    <td><a href="JavaScript:;">查看详情</a></td>
                </tr>
                <tr>
                    <td>XXX</td>
                    <td><img src="" alt=""></td>
                    <td>食品</td>
                    <td>￥100.00</td>
                    <td>100</td>
                    <td>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="y-star" class="fas fa-star"></i>
                    </td>
                    <td>
                        <div class="click-btn">
                            <div class="switch">
                                <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox">
                                <label for="cmn-toggle-1"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox">
                                <label for="cmn-toggle-4"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
                                <label for="cmn-toggle-7" data-on="Yes" data-off="No"></label>
                                </div>
                        </div>
                    </td>
                    <td>2022-02-02</td>
                    <td><a href="javascript:;" id="check-info2">查看详情</a></td>
                </tr>
                <tr>
                    <td>XXX</td>
                    <td><img src="" alt=""></td>
                    <td>服装</td>
                    <td>￥100.00</td>
                    <td>100</td>
                    <td>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="y-star" class="fas fa-star"></i>
                        <i id="star" class="fas fa-star"></i>
                    </td>
                    <td>
                        <div class="click-btn">
                            <div class="switch">
                                <input id="cmn-toggle-1" class="cmn-toggle cmn-toggle-round" type="checkbox">
                                <label for="cmn-toggle-1"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-4" class="cmn-toggle cmn-toggle-round-flat" type="checkbox">
                                <label for="cmn-toggle-4"></label>
                                </div>
                                
                                <div class="switch">
                                <input id="cmn-toggle-7" class="cmn-toggle cmn-toggle-yes-no" type="checkbox">
                                <label for="cmn-toggle-7" data-on="Yes" data-off="No"></label>
                                </div>
                        </div>
                    </td>
                    <td>2022-02-02</td>
                    <td><a href="">查看详情</a></td>
                </tr>
            </table>
        </div> -->

        <nav aria-label="Page navigation" class="changePage">
            <ul class="pagination">
                <li>
                <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
                </li>
                <li><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li>
                <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
                </li>
            </ul>
            </nav>
        
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.goods-class{
    width: 1078px;
    height: 900px;
    background-color: rgba(187, 187, 187, 0.8);
    border-right: 1px solid rgb(211, 211, 211);
    border-bottom: 1px solid rgb(211, 211, 211);
    margin-top: -900px;
    margin-left: 200px;
    position: absolute;
    
}
.top{
    width: 1078px;
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
    }
    .last{
        margin-left: 400px;
        width: 80px;
        background-color: rgba(10, 89, 155,0.7);

    }
}


/* 增加滚动条 */
.table-div{
    height: 720px;
    width: 1080px;
    /* background-color: #FF9502; */
    position: relative;
    overflow: auto;
}
.goods-table{
    border-right: 1px solid rgb(142, 146, 146) ;
    border-bottom: 1px solid rgb(142, 146, 146) ;
    border-collapse: collapse;
    margin-bottom: 10px;
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
            width: 150px;
            height: 95px;
            margin-top: 10px;
            /* background-color: #b1d9e5; */
        }
    } 
    

    }
    tr td:nth-child(2){
        width: 450px;
        /* height: 200px; */
    }
    tr:nth-child(2n-1){
        background-color:rgba(114, 176, 184, 0.5) ;
    }
}
.pagination{
    margin-left: 40%;
    display: fixed;
    li a{
        background-color:rgba(231, 231, 231,0.6) ;

    }
}

</style>