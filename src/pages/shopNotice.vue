<template>
    <div class="shop-notice">
        <h2></h2>
        <ul class="notice-ul">
            <li>
                发布者：
                <input type="text" placeholder="请输入您的管理员ID">
                <input type="password" placeholder="请输入您的管理员密码">

            </li>
            <li>
                公告内容：
                <textarea name="" id="" placeholder="在此输入公告内容"></textarea>
            </li>
            <li>
                公告类型：
                <select name="" id="">
                    <option value="">类型1</option>
                    <option value="">类型2</option>
                    <option value="">类型3</option>
                </select>
            </li>
            <li>
                图片：
                <a href="">
                    <i style="color:rgb(166, 164, 164) ;" class="fas fa-plus"></i>
                    <br>
                    添加图片
                </a>
            </li>

        </ul>
        <button class="btn btn-primary">发布公告</button>
        <button class="btn btn-primary">清空</button>
        <div class="history-notice">
            <h2>历史公告</h2>
            <div class="search-notice">
                <input type="text" placeholder="搜索历史公告">
                <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
            </div>
            
            <ul class="history-notice-ul">
                <li>
                    <textarea name="" id="" cols="30" rows="10">
                    </textarea>
                </li>
                <li>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </li>
                <li>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </li>
                <li>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </li>
            </ul>
        </div>           
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.shop-notice{
    width: 1080px;
    height: 900px;
    border-right: 1px solid rgb(211, 211, 211);
    border-bottom: 1px solid rgb(211, 211, 211);
    background-color: rgba(187, 187, 187, 0.8);
    margin-top: -900px;
    margin-left: 198px;
    button{
        margin-left: 20%;
    }
}
.notice-ul{
    width: 1080px;
    height: 400px;
    li{
        width: 100%;
        height: 80px;
        line-height: 60px;
        margin-left: 80px;
        input{
            height: 30px;
            width: 200px;
            margin-left: 40px;
        }
        textarea{
            width: 455px;
            height: 80px;
            margin-left: 20px;
            outline: none;
            font-size: 18px;
        }
        select{
            width: 100px;
            height: 30px;
            margin-left: 20px;
        }
        a{
            display: block;
            width: 100px;
            height: 100px;
            line-height: 30px;
            text-align: center;
            color: rgb(135, 134, 134);
            background-color: aliceblue;
            margin-left: 100px;
            margin-top: -40px;
            border: 1px solid rgb(196, 195, 195);
        }
    }
}

.history-notice{
    height: 400px;
    margin-top: 20px;
    width: 100%;
    /* background-color: bisque; */
    overflow: auto;
    border-top: 1px solid rgb(192, 192, 192);

}
.search-notice{
    height: 40px;
    width: 310px;
    line-height: 40px;
    /* background-color: #FF9502; */
    margin-left: 450px;
    border: 1px solid;
    border-radius: 5px;
    input{
        height: 30px;
        width: 270px;
        border: none;
        outline: none;
        font-size: 18px;
        margin-left: 5px;
        background-color: rgba(255, 255, 255, 0);
        
    }
    span{
        display: inline-block;
        font-size: 22px;
        height: 30px;
        margin-top: 5px;
    }

}
.history-notice ul{
    width: 100%;
    li{
        float: left;
        width: 400px;
        height: 220px;
        margin-left: 100px;
        margin-top: 40px;
        textarea{
            float: left;
            background-color: rgb(242, 248, 247);
            width: 330px;
            line-height: 30px;
            height: 200px;
            padding: 20px;
        }
    }
}
</style>