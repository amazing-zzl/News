<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper v-bind:options="swiperOption">
          <swiper-slide v-for="(item,index) in slideList" v-bind:key="index">
            <a v-bind:href="'/#/index'"><img v-bind:src="item.img"></a>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>

    
    <div class="product-box">
      <div class="container">
        <h2>通知公告</h2>
        <div class="wrapper">
          <div class="list-box">
            <div class="list" v-for="(arr,i) in menuList" v-bind:key="i">
              <div class="item" v-for="(item,j) in arr" v-bind:key="j"> 
                  <a href="" target="_blank" v-bind:id="item.id">
                    <div class="date"></div>
                    <div class="content">{{item.title}}</div>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default{
    name:'index',
    components:{
      swiper,
      swiperSlide,
    },
    data(){
      return {
        swiperOption:{
          autoplay:true,
          loop:true,
          effect:'cube',
          cubeEffect: {
            shadowOffset: 100,
            shadowScale: 0.6
          },
          pagination: {
            el: '.swiper-pagination',
            clickable:true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        slideList:[
          {
            id:'',
            img:'/images/swiper-big-1.jpg'
          },
          {
            id:'',
            img:'/images/swiper-big-2.jpg'
          },
          {
            id:'',
            img:'/images/swiper-big-3.jpg'
          },
          {
            id:'',
            img:'/images/swiper-big-4.jpg'
          },
          {
            id:'',
            img:'/images/swiper-big-5.jpg'
          }
        ],

        menuList:[
          [{
              id:1,
              title:"我是第一个标题，我是第一个标题，我是第一个标题，我是第一个标题，我是第一个标题，",

            },{
              id:2,
              title:"我是第二个哈哈哈哈哈哈哈哈哈哈我是第二个哈哈哈哈哈哈哈哈哈哈我是第二个哈哈哈哈哈哈哈哈哈哈",
          },{
              id:3,
              title:"我是第三个哈哈哈，我是第三个哈哈哈我是第三个哈哈哈我是第三个哈哈哈我是第三个哈哈哈",
          }],

          [{
              id:4,
              title:"我是第四个标题，我是第四个标题我是第四个标题我是第四个标题我是第四个标题我是第四个标题",
            },{
              id:5,
              title:"我是第五个。第五个五个五个五个五个",
          },{
              id:6,
              title:"我是第六个",
          }],
        ],
        phoneList:[],
        showModal:false
      }
    },
    mounted(){
      this.init();
    },
    methods:{
      init(){
        this.axios.get('/products',{
          params:{
            categoryId:100012,
            pageSize:6
          }
        }).then((res)=>{
          this.phoneList = [res.list.slice(0,3),res.list.slice(3,6)];
          console.log(this.phoneList[0][0].subtitle);
          
        })
      }
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .index{
    width: 1226px;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
    .swiper-box{
      .swiper-container {
        display: block;
        background-size: 100% 100%;
        img{
          width:100%;
          height:100%;
        }
      }  
    }

    .product-box{
      margin-top: 50px;
      margin-bottom: 50px;
      background-color:$colorJ;
      padding:30px 50px 50px;    
      h2{
        font-size:$fontF;
        height:21px;
        line-height:21px;
        color:$colorB;
        margin-bottom:20px;
      }
      .wrapper{
        display:flex;
        .list-box{
          .list{
            @include flex();
            width:986px;
            margin-bottom:14px;
            &:last-child{
              margin-bottom:0;
            }
            .item{
              margin-top: 10px;
              margin-left: 60px;
              width:300px;
              height:80px;
              background-color:$colorG;
              text-align:center;

              .date{
                float: left;
                width: 87px;
                height: 57px;
                background: url(/images/icon004.png) no-repeat;
                margin-left: 3px;
                margin-top: 10px;
              }
              .content{
                margin-top: 18px;
                font-size: 14px;
                color: #4c4c4c;
                overflow: hidden;
                -webkit-line-clamp: 2;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                text-align:left
              }
            }
          }
        }
      }
    }
  }
</style>