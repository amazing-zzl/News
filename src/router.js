import Vue from "vue"
import Router from "vue-router"
import Home from "./components/home"
import Home from "./components/index"

Vue.use(Router);

export default new Router({
    routes:[{
        path:"/",
        name:"home",
        component:Home,
        children:[
            {
                path:'/index',
                name:'index',
                component:index,
            }, {
                path:'/prodect',
                name:'index',
                component:index,
            }, {
                path:'/index',
                name:'index',
                component:index,
            }
        ]

    }
    ]
})