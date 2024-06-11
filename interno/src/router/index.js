import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/components/pages/HomePage.vue";
import BlogDetailsPage from "@/components/pages/ProjectDetailsPage.vue";
import BlogPage from "@/components/pages/BlogPage.vue";
import ProjectPage from "@/components/pages/ProjectPage.vue";
import ProjectDetailsPage from "@/components/pages/ProjectDetailsPage.vue";
import NotFound from "@/components/pages/NotFound.vue";
// import ArticleComponent from "@/components/blocks/ArticleComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage,
  },
  {
    path: "/blogdetails/:page?",
    name: "blogdetails",
    component: BlogDetailsPage,
  },
  {
    path: "/blog/:page?",
    name: "blockpage",
    component: BlogPage,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectPage,
  },
  {
    path: "/projects/:page?",
    name: "projectsdetails",
    component: ProjectDetailsPage,
  },
  {
    path: "/404",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "*",
    redirect: "/404",
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
