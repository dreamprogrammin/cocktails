<script setup>
import AppLayout from "@/components/AppLayout.vue"
import CocktailThumb from "@/components/CocktailThumb.vue"
import { useRootStore } from "@/stores/root"
import { storeToRefs } from "pinia"

const rootStore = useRootStore()
rootStore.getIngredients()

const { ingredients, cocktails, ingredient } = storeToRefs(rootStore)

function getCoctail() {
  rootStore.getCoctail(rootStore.ingredient)
}

function removeIngredient() {
  rootStore.setCoctails(null)
}
</script>

<template>
  <AppLayout
    img-url="/src/assets/img/bg-1.jpg"
    :back-page="removeIngredient"
    :is-back-btn-visible="!!ingredient"
  >
    <div class="wrapper">
      <div class="info" v-if="!ingredient || !cocktails">
        <div class="title">Choose your drink</div>
        <div class="wrapper__select">
          <el-select
            v-model="rootStore.ingredient"
            placeholder="Choose main ingredient"
            size="large"
            filterable
            allow-create
            style="width: 240px"
            @change="getCoctail"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by
          ingredient through our cocktail generator.
        </div>
        <img src="/src/assets/img/coctails.png" alt="Coctails" class="img" />
      </div>
      <div class="info" v-else>
        <div class="title">COCKTAILS WITH {{ ingredient }}</div>
        <div class="coctails">
          <CocktailThumb
            v-for="cocktail in cocktails"
            :key="cocktail.idDrink"
            :cocktail="cocktail"
          />
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style scoped lang="scss">
@import "../assets/styles/main.scss";

.wrapper__select {
  padding-top: 50px;
}
.select {
  width: 200px;
}
.text {
  padding-top: 50px;
  max-width: 516px;
  margin: 0 auto;
  color: $textMuted;
  line-height: 36px;
  letter-spacing: 0.1em;
}
.img {
  margin-top: 60px;
}

.coctails {
  @include flex-container(space-between, center);
  margin-top: 60px;
  flex-wrap: wrap;
  max-height: 400px;
  overflow-y: auto;
}
</style>
