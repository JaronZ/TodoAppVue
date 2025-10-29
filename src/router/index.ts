import { createRouter, createWebHistory } from 'vue-router'
import TodoView from "@/views/TodoView.vue";
import * as Vue from 'vue';
import DetailsView from "@/views/DetailsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
          path: "/",
          component: TodoView,
          meta: {
              title: "Todo List"
          }
      },
      {
          path: "/details/:id",
          component: DetailsView,
          meta: {
              title: "Todo Details"
          }
      }
  ],
});

const DEFAULT_TITLE = "TodoAppVue";
router.afterEach(async (to, from) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    await Vue.nextTick(() => {
        document.title = (typeof to.meta.title === "string" && to.meta.title) || DEFAULT_TITLE;
    });
});

export default router
