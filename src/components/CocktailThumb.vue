<script setup>
import { RouterLink } from "vue-router"
defineProps({
  cocktail: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="root">
    <RouterLink :to="`/cocktails/${cocktail.idDrink}`">
      <div :style="`background-image: url(${cocktail.strDrinkThumb})`" class="pic"></div>
    </RouterLink>
    <div class="name">{{ cocktail.strDrink }}</div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/main.scss";

.root {
  width: calc((100% - 76px) / 3);
  margin: 38px;
  margin-bottom: 20px;

  &:nth-child(3n + 3) {
    padding-right: 0;
  }
}
.pic {
  width: 120px;
  height: 120px;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
  margin: 0 auto;
}

.name {
  padding-top: 15px;
  letter-spacing: 0.1em;
  widows: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
