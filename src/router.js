import Vue from "vue"
import Router from "vue-router"
import Home from "./pages/home"
import Index from "./pages/index"
import News from "./pages/news"
import Login from "./pages/login"


Vue.use(Router);

export default new Router({
    routes:[{   //配置路由子列表
        path:"/",  //做路由嵌套,引入Home组件为了共用nav组件
        name:"home",
        component:Home,
        redirect:'/index',//默认跳转到index页面
        children:[
            {
                path:'/index',  //首页
                name:'index',
                component:Index,
            }, {
                path:'news/:id',//新闻页
                name:'news',
                component:News,
            }
        ]

    },{
        path:'/login',
        name:'login',
        component:Login,

    }
    ]
})