<template>
  <div class="all">
    <div class="banner">
      <img  src="./../../public/images/banner.png" />
    </div>
    <div class="body">
      <div class="path">
        当前位置：
        <a href="/#/index">首页</a>
        <i>&gt;</i>
        <a href="/wenxue.html">{{categoryName}}</a>
        <i>&gt;</i>
        <i>&gt;</i>新闻列表
      </div>
      <div class="container">
          
        <u v-for="(news,i) in newsList" v-bind:key="i">
          <li>
            <a v-bind:href="'/#/details/' + categoryName + '/' + news.newsId" target="_blank" title="点击查看新闻详情">
              <div class="text">
                <h5>{{news.newsTitle}}</h5>
                <p>发布时间：{{news.updateTime/1000 | formatDate}}</p>
              </div>
            </a>
          </li>
        </u>
        <el-pagination
          class = "pagination"
          background
          layout="prev, pager, next"
          :pageSize = "pageSize"
          :total="total"
          @current-change = "handleChange"
          > 
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { Pagination } from 'element-ui'
import {formatDate} from './../util/formatDate'
export default {
  name: "newsList",
  components:{
    [Pagination.name]:Pagination
  },
  data() {
    return {
      pageSize:10,
      pageNum:1,
      total:50,
      categoryName: this.$route.params.categoryName,
      newsList: [
        {
          id: 1,
          title: "合肥工业大学参与的PCAWG联盟在《Natunre》发表6篇研究论文",
          updateTime: 123456
        },
        {
          id: 2,
          title:
            "习近平总书记在统筹推进新冠肺炎疫情防控和经济社会发展工作部署会议上的重要讲话鼓舞人心凝聚力量",
          updateTime: 123456
        }
      ] //存储获取到的新闻数据
    };
  },
  mounted() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      let categoryType = this.$route.params.categoryType;
      this.axios
        .get("/news_back/user/newsList?categoryType=" + categoryType,{
          params:{
            pageNum:this.pageNum
          }
          
        })
        .then(res => {
          this.newsList = res.content;
          this.pageSize=res.size,
          this.pageNum=res.number+1,
          this.total=res.totalElements
          //console.log(res)
          //给total等分页器赋值
        });
    },
    handleChange(pageNum){
      this.pageNum = pageNum;
      this.getNewsList();
    }
  },
  filters: {
      formatDate(time) {
        time = time * 1000
        let date = new Date(time)
       // console.log(new Date(time))
        return formatDate(date, 'yyyy-MM-dd hh:mm')
      }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.all {
  min-width: 1228px;
  overflow-x: hidden;
  font-family: "Microsoft yahei";
  .banner {
    position: relative;
    overflow: hidden;
    height: 380px;
    width: 100%;
  }
  .body {
    background: #ffffff;
    font-family: microsoft yahei;
    height: 100%;
    color: #333;
    .path {
      line-height: 60px;
      padding-left: 360px;
      color: #666666;
      background-color: ghostwhite;
      font-size: 16px;
      width: 100%;
    }
    .container {
      width: 1228px;
      color: #000000;
      u {
        display: block;
        text-align: center;
        list-style-type: disc;
        margin-block-start: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        padding-inline-start: 40px;
        li {
          width: 880px;
          list-style: none;
          display: list-item;
          a {
            margin-left: 250px;
            display: block;
            padding: 40px;
            border-bottom: 2px solid #e5e5e5;
            overflow: hidden;
            .text {
              padding-top: 15px;
              font-size: 15px;
              font-family: "Microsoft Yahei";
              color: #4c4c4c;
              overflow: hidden;
              -webkit-line-clamp: 2;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              text-align: left;
              margin-left: 40px;
              float: left;
              width: 500px;
              h5 {
                font-size: 18px;
                color: #333333;
                margin-bottom: 10px;
              }
              p {
                font-size: 12px;
                color: #444444;
                line-height: 28px;
              }
            }
          }
        }
      }
      .pagination{
        margin-top:20px;
        text-align:center;
      }
    }
    
  }
}
</style>