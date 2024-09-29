<script setup>
import AppLayout from "@/components/AppLayout.vue"
import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import axios from "axios"
import { COCKTAIL_BY_ID_URL } from "@/constants"

const route = useRoute()

const cocktail = ref([])
const coctailId = computed(() => route.path.split("/").pop())

const ingredients = computed(() => {
  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break

    const ingredient = {}
    ingredient.name = cocktail.value[`strIngredient${i}`]
    ingredient.measure = cocktail.value[`strMeasure${i}`]
    ingredients.push(ingredient)
  }
  return ingredients
})

async function getCocktail() {
  const res = await axios.get(`${COCKTAIL_BY_ID_URL}${coctailId.value}`)
  cocktail.value = res?.data?.drinks[0]
}

getCocktail()
</script>
<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :img-url="cocktail.strDrinkThumb">
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <ul class="list">
            <li v-for="(item, key) in ingredients" :key="key">
              <div class="list-item">
                {{ item.name }}
                <template v-if="item.name">
                  |
                  {{ item.measure }}
                </template>
              </div>
            </li>
          </ul>
          <div class="list">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style scoped>
/* Ваши стили */
</style>
