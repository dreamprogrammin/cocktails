import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"
import Cocktail from "@/pages/Cocktail.vue"
import CocktailRandom from "@/pages/CocktailRandom.vue"
import { ROUTERS_PATHS } from "@/constants"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTERS_PATHS.HOME,
      name: ROUTERS_PATHS.HOME,
      component: Home
    },
    {
      path: ROUTERS_PATHS.COCKTAILS,
      name: ROUTERS_PATHS.COCKTAILS,
      component: Cocktail
    },
    {
      path: ROUTERS_PATHS.COCKTAIL_RANDOM,
      name: ROUTERS_PATHS.COCKTAIL_RANDOM,
      component: CocktailRandom
    }
  ]
})
export default router
