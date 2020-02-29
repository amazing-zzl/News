<template>
    <div class="header">
        <div class="nav-topbar">   
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">信息门户</a>
                    <a href="javascript:;">工大邮箱</a>
                    <a href="javascript:;">财务管理</a>
                    <a href="javascript:;">新闻投稿</a>
                </div>

                <div class="topbar-menu">
                    <a href="javascript:;">通知公告</a>
                    <a href="javascript:;">报告讲座</a>
                    <a href="javascript:;">文明创建</a>
                    <a href="javascript:;">图书馆</a>
                </div>
                
            </div>
        </div>
        <div class="logoTwo">
            <a href="/#/index" title="新闻网">
                <img src="./../../public/images/logo-big.png" class='log' alt="新闻网" title="新闻网">
            </a>
        </div>
    </div>

</template>

<script>
    export default{
        name:"nav-header"
    }

</script>

<style lang="scss">
    .header{
        .nav-topbar{
            height: 40px;
            line-height: 40px;
            background-color: #a6292f;
            color: #B0B0B0;
            .container{
                width: 1226px;
                margin-right: auto;
                margin-left: auto;
                display: flex;
                justify-content: space-between;
                a{
                    display: inline-block;
                    color: #B0B0B0;
                    margin-right: 17px;
                }
            }
        }
        .logoTwo{
                position: relative;
                width: 603px;
                height: 72px;
                left: 50%;
                margin-left: -302px;
                background: url(/images/logo-top-bg.png) no-repeat center;
                .log{
                    position: absolute;
                    width:"414";
                    height:"69";
                    border:"0";
                    margin-left: 15%;
                    margin-top:-3%;
                    
                }
        }
    }
</style>