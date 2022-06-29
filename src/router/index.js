import {createRouter, createWebHistory} from 'vue-router'
import AuthPage from "@/components/AuthPage";
import AnalyticPage from "@/components/AnaliticPage";

const routes = [
  {
    path: '/',
    component: AuthPage
  },
  {
    path: '/analytic',
    component: AnalyticPage,
    // beforeEnter: (to,from,next)=> {
    //   if(localStorage.getItem('leadhit-site-id')){
    //     next()
    //   }else{
    //     next('/')
    //   }
    // }
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL)
})

export default router
