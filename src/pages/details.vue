<template>
  <div class="all">
    <div class="banner">
      <img src="./../../public/images/banner.png" />
    </div>
    <div class="body">
      <div class="path">
        当前位置：
        <a href="/#/index">首页</a>
        <i>&gt;</i>
        <a href="/#/index">{{categoryName}}</a>
        <i>&gt;</i>正文
      </div>
      <div class="container">
        <div class="article" role="article">
          <div class="main">
            <div class="article-title">
              <h1>{{news.newsTitle}}</h1>
              <p>
                <span>
                  新闻id：{{news.newsId}}
                </span>
                <span>
                  发布时间：{{news.updateTime/1000 | formatDate}}
                </span>
              </p>
            </div>
            <!-- 文章内容start -->
            <div class="article-body" role="article-body">
              <p style="white-space: pre-wrap;">{{news.newsContent}}</p>
            </div>
          </div>
          <!-- 文章内容end -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
 import {formatDate} from './../util/formatDate'
export default {
  name: "details",

  data() {
    return {
      news: {}, //存储获取到的新闻数据
      categoryName:this.$route.params.category,
    };
  },

  mounted() {
    this.getNewsInfo();
  },

  methods: {
    getNewsInfo() {
      let id = this.$route.params.id;
      this.axios.get("/news_back/user/news/details?id=" + id).then(res => {
        this.news = res;
      });
    }
  },
    filters: {
      formatDate(time) {
        time = time * 1000
        let date = new Date(time)
        console.log(new Date(time))
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
    background: #f5f5f5;
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
      width: 990px;
      margin: 0 auto;
      .article {
        background: #fff;
        overflow: hidden;
        width: 802px;
        box-shadow: 0 0 6px #ddd;
        margin-left: auto;
        margin-right: auto;
        .main {
          .article-title {
            width: 722px;
            margin-top: 40px;
            margin-bottom: 17px;
            text-align: center;
            h1 {
              font-size: 26px;
              line-height: 30px;
              color: #333;
              margin-bottom: 6px;
            }
            p {
              font-size: 12px;
              line-height: 18px;
              color: #999;
              span {
                margin-right: 24px;
              }
            }
          }
          .article-body {
            width: 722px;
            font-size: 16px;
            line-height: 29px;
            border-top: 1px solid #e0e0e0;
            margin-left: auto;
            margin-right: auto;
            padding: 28px 0;
            p {
              margin-bottom: 1em;
              text-indent: 2em;
            }
          }
        }
      }
    }
  }
}
</style>