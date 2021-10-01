import { createWebHistory, createRouter } from "vue-router";
const routes =[
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ '../views/home/index.vue'),
    },
    {
        path: "/components",
        name: "components",
        component: () => import(/* webpackChunkName: "components" */ '../views/components/index.vue'),
    },
    {
        path: "/about",
        name: "about",
        component: () => import(/* webpackChunkName: "home" */ '../views/about/index.vue'),
    }
]


const router  = createRouter({
    history: createWebHistory(),
    routes
})


export default router