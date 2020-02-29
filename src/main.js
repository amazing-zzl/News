import Vue from 'vue'
import App from './App.vue'
import routers from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const mock = false;
if(mock){
  require('./moke/api')
}

//baseURL根据跨域方式做调整
axios.defaults.baseURL = '/api';  //接口代理的方式
axios.defaults.timeout = 8000;
//接口错误拦截
axios.interceptors.response.use(function(response){
  let res = response.data;
  if (res.code == 0){  //状态码为0则成功，返回data
    return res.data;
  }else if(res.code == 10){  //状态码为0，则表示未登录
    window.location.href = '/#/login';
  }else{
    alert(res.msg);
  }
})

Vue.use(VueLazyLoad,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})

Vue.use(ElementUI);

Vue.use(VueAxios,axios);
Vue.config.productionTip = false


new Vue({
  router:routers,//如果routers改为router,可简写为router
  render: h => h(App),
}).$mount('#app')
