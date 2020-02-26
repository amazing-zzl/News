<template>
    <div>
       {{this.$route.params.id}}
    </div>
</template>
<script>
    export default{
        name:"news",
        data(){
            return{
                news:{},//存储获取到的新闻数据
            }
        },
        mounted(){
            //this.getNewsInfo();
        },
        methods:{
            //getNewsInfo(){
           //   let id = this.$route.params.id;
            //    this.axios.get('/news_back/user/news/detiles/${id}').then((res)=>{
           //        this.news = res;
           //     })
           // }
        }
    }
</script>