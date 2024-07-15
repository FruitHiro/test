import { createRouter, createWebHistory } from 'vue-router';
import CocktailView from "@/views/CocktailView.vue";
import PathNotFound from "@/views/PathNotFound.vue";
import { COCKTAILS } from "@/utils/const";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: `/${COCKTAILS[0]}`,
    },
    {
      path: '/:id',
      component: CocktailView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      alias: '/404',
      component: PathNotFound
    }
  ]
});

export default router;
