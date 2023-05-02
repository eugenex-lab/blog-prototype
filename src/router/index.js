import { createRouter, createWebHistory } from 'vue-router'
import BlogList from "@/views/BlogList";
import BlogDetails from "@/views/BlogDetails";


const routes = [
  {
    path: '/',
    name: 'posts' ,
    component: BlogList
  },
  {
    path: '/post/:id',
    name: 'postDetail',
    component : BlogDetails
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/'
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
