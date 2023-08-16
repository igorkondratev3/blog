import Vue from "vue";
import VueRouter from "vue-router";
import StartPage from "../pages/StartPage.vue";
import CreatePost from "../pages/CreatePost.vue";
import PostPage from "../pages/PostPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "startPage",
      component: StartPage,
    },
    {
      path: "/create-post",
      name: "createPost",
      component: CreatePost,
    },
    {
      path: "/post/:id",
      name: "postPage",
      component: PostPage,
      props: true,
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
  ],
});

export default router;