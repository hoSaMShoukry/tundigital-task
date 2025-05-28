import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig>{
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: (_routes) => [
    {
      name: "home",
      path: "/",
      component: () => import("~/pages/index.vue").then((r) => r.default || r),
    },
  ],
};
