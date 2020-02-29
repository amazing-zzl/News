<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/index'">
              <img v-bind:src="item.img" />
            </a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>

    <div v-for="(category,cat) in categoryList" v-bind:key="cat">
      <div class="product-box">
        <div class="container">
          <ul>
            <div class="categoryTitle">
              <h2>{{category.categoryName}}</h2>
              <div class="image">
                <a v-bind:href="'/#/newsList/' + category.categoryType + '/'  + category.categoryName" target="_blank">
                  <img alt src="./../../public/images/iconTo.png" title="更多"/>
                </a>
              </div>
            </div>
            <div class="wrapper">
              <div class="list-box">
                <div class="list" v-for="(arr,i) in newsList" v-bind:key="i">
                  <div v-if="cat===i">
                    <div class="item" v-for="(item,j) in arr" v-bind:key="j">
                      <li>
                        <a v-bind:href="'/#/details/' + category.categoryName + '/' + item.id" target="_blank">
                          <div class="date">
                            <span class="d1">News</span>
                            <span class="d2">新闻</span>
                          </div>
                          <div class="title">{{item.title}}</div>
                        </a>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "index",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      id: 1,
      swiperOption: {
        autoplay: true,
        loop: true,
        effect: "cube",
        cubeEffect: {
          shadowOffset: 100,
          shadowScale: 0.6
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      slideList: [
        {
          id: "",
          img: "/images/swiper-big-1.jpg"
        },
        {
          id: "",
          img: "/images/swiper-big-2.jpg"
        },
        {
          id: "",
          img: "/images/swiper-big-3.jpg"
        },
        {
          id: "",
          img: "/images/swiper-big-4.jpg"
        },
        {
          id: "",
          img: "/images/swiper-big-5.jpg"
        }
      ],

      newsList: [],
      categoryList: [],
      showModal: false
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.axios
        .get("/news_back/user/news/index", {
          params: {
            //  categoryId:100012,
            //  pageSize:6
          }
        })
        .then(res => {
          this.categoryList = res;
          for (var i = 0; i < res.length; i++) {
            this.newsList.push(res[i].newsInfo);
          }
          //console.log(res[0].newsInfo);
        });
    }
  }
};
</script>
<style lang="scss">
@import "./../assets/scss/config.scss";
@import "./../assets/scss/mixin.scss";
.index {
  width: 1226px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  .swiper-box {
    .swiper-container {
      display: block;
      background-size: 100% 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .product-box {
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: $colorJ;
    padding: 30px 50px 50px;
    .categoryTitle {
      position: relative;
      height: 40px;
      line-height: 40px;
      .image {
        position: absolute;
        right: 0px;
        top: 0px;
        text-align: left;
        border: none;
        vertical-align: middle;
      }
    }
    h2 {
      font-size: $fontF;
      height: 21px;
      line-height: 21px;
      color: $colorB;
      margin-bottom: 20px;
    }
    .wrapper {
      display: flex;
      .list {
        @include flex();
        width: 986px;
        margin-bottom: 14px;
        &:last-child {
          margin-bottom: 0;
        }
        .item {
          margin-top: 16px;
          margin-left: 20px;
          float: left;
          width: 300px;
          height: 80px;
          background-color: $colorG;
          text-align: center;

          .date {
            float: left;
            width: 87px;
            height: 57px;
            background: url(/images/icon004.png) no-repeat;
            margin-left: 6px;
            margin-top: 10px;
            .d1 {
              font-size: 18px;
              color: #9d8d61;
              font-weight: bold;
              line-height: 36px;
              margin-left: -10px;
            }
            .d2 {
              display: block;
              
              width: 66px;
              color: #FF8C00;
              font-family: "Cormorant";
            }
          }
          .title {
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
          }
        }
      }
    }
  }
}
</style>