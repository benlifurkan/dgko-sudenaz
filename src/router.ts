import { createRouter, createWebHistory } from "vue-router";

// Import routes
import HomePage from "./views/Home.vue";
import LoginPage from "./views/Login.vue";
import { readLoggedIn } from "./lib/auth";

const routes = [
  {
    path: "/login",
    component: LoginPage,
    meta: { guestOnly: true },
  },
  {
    path: "/",
    component: HomePage,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _from, next) => {
  const loggedIn = readLoggedIn();

  if (to.meta.requiresAuth && !loggedIn) {
    next({ path: "/login", query: { redirect: to.fullPath } });
    return;
  }

  if (to.meta.guestOnly && loggedIn) {
    next({ path: "/" });
    return;
  }

  next();
});

export default router;
