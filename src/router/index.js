import {createRouter, createWebHistory} from 'vue-router'
import AnalyticPage from "@/components/AnaliticPage";
import AuthPage from "@/components/AuthPage";
import NotFoundPage from "@/components/NotFoundPage"

const routes = [
    {
        path: '/',
        component: AuthPage
    },
    {
        path: '/analytic',
        component: AnalyticPage,
        beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('leadhit-site-id')) next({path: '/'})
            else next()
        }
    },
    {
        path: '/404',
        component: NotFoundPage,
    },
    {
        path: "/:catchAll(.*)",
        redirect: '/404',
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
