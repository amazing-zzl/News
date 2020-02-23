<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

// import storage from './storage'
export default {
  name: 'app',
  components: {
    
  },
  data(){
    return{
      //res:{} 
    }
  },
  mounted(){
    //storage.setItem('b',1,'user')
    //storage.clear('b','user')
    //本地集成mockjs实现数据mock
    //this.axios.get('/user/login').then((res)=>{
    // this.res = res;
    //})
  },
  
}
</script>

<style>
@import './assets/scss/reset.scss';
</style>
