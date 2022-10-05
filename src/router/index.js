import {createRouter, createWebHistory} from "vue-router";
const Home = () => import('@/views/Home.vue')
const register = ()=>import('@/views/register.vue')
const login = ()=>import('@/views/Login.vue')
const userinfo = ()=>import('@/views/userinfo.vue')
const edit = ()=>import('@/views/Edit.vue')
const article = ()=>import('@/views/Article.vue')
const search =()=>import('@/views/search.vue')
const download= ()=>import('@/views/download.vue')
const routes = [
     {
       path:'/',
       component:Home,
       mata:{
        keepalive:true
       }
     },
     {
       path:'/register',
       component:register
     },
     {
       path:'/login',
       component:login
     },
     {
       path:'/search',
       component:search
     },
     {
       path:'/download',
       component:download
     },
     {
       path:'/userinfo',
       component:userinfo,
     },
     {
       path:'/edit',
       component:edit,
     },
     {
       path:'/article/:id',
       component:article
     },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
