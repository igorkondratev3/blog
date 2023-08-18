import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "startPage",
      component: () => import("../pages/StartPage.vue"),
    },
    {
      path: "/create-post",
      name: "createPost",
      component: () => import("../pages/CreatePost.vue"),
    },
    {
      path: "/post/:id",
      name: "postPage",
      component: () => import("../pages/PostPage.vue"),
      props: true,
      beforeEnter: (to, from, next) => {
        const posts = JSON.parse(localStorage.getItem("posts"));
        if (!posts || !to.params.id || !posts[to.params.id]) next("/");
        next();
      },
    },
  ],
});

export default router;
