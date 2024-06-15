import {createRouter, createWebHistory} from "vue-router";

const routes=[
    {
        path:'/',
        redirect:'/view'
    },
    {
        path: '/view',
        name:'View',
        component:()=>  import('../components/view/index.vue')
    },
    {
        path: '/working',
        name:'working',
        component:()=>import('../components/working/index.vue')
    },
    {
        path: '/about',
        name:'about',
        component:()=>import('../components/About/index.vue')
    }
]

export const router = createRouter({
    history:createWebHistory(),
    routes
})