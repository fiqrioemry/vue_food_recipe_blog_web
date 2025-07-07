import Blog from "@/views/Blog.vue";
import Home from "@/views/Home.vue";
import Recipe from "@/views/Recipe.vue";
import BlogDetails from "@/views/BlogDetails.vue";
import RecipeDetails from "@/views/RecipeDetails.vue";
import MainLayout from "@/components/layout/MainLayout.vue";
import { createRouter, createWebHistory } from "vue-router";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

const routes = [
  // Auth routes (outside MainLayout)
  { path: "/signin", component: SignIn },
  { path: "/signup", component: SignUp },

  // Main app routes
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "", // Changed from "/"
        name: "home",
        component: Home,
      },
      {
        path: "recipe", // Changed from "/recipe"
        name: "recipe",
        component: Recipe,
      },
      {
        path: "blog", // Changed from "/blog"
        name: "blog",
        component: Blog,
      },
      {
        path: "blog/:slug", // Changed from "/blog/:slug"
        name: "BlogDetails",
        component: BlogDetails,
      },
      {
        path: "recipe/:slug", // Changed from "/recipe/:slug"
        name: "RecipeDetails",
        component: RecipeDetails,
      },
    ],
  },

  // NotFound route - HARUS di luar nested routes
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
