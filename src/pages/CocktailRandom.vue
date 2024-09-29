<script setup>
import AppLayout from "@/components/AppLayout.vue"
import { computed, ref } from "vue"
import axios from "axios"
import { COCKTAIL_RANDOM, INGREDIENT_PIC } from "@/constants"
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"

const cocktail = ref([])

const ingredients = computed(() => {
  const ingredients = []
  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break

    const ingredient = {}
    ingredient.name = cocktail.value[`strIngredient${i}`]
    ingredients.push(ingredient)
  }
  return ingredients
})

async function getCocktail() {
  const res = await axios.get(`${COCKTAIL_RANDOM}`)
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
          <div class="slider">
            <swiper :slides-per-view="3" :space-between="50" class="swiper">
              <swiper-slide v-for="(ingredient, key) in ingredients" :key="key">
                <img :src="`${INGREDIENT_PIC}${ingredient.name}-Small.png`" alt="" />
                <div class="name">
                  {{ ingredient.name }}
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="instructions">
            {{ cocktail.strInstructions }}
          </div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style scoped lang="scss">
@import "/src/assets/styles/main.scss";

.slider {
  padding: 50px 0;
}

.swiper {
  width: 586px;
}

.name {
  padding-top: 20px;
}
</style>
