<script setup>
import { ROUTERS_PATHS } from "@/constants"
import { Back } from "@element-plus/icons-vue"
import { computed } from "vue"
import { useRoute, useRouter } from "vue-router"
const props = defineProps({
  imgUrl: {
    type: String,
    required: true
  },
  backPage: {
    type: Function,
    required: false
  },
  isBackBtnVisible: {
    type: Boolean,
    default: true
  }
})

const route = useRoute()
const router = useRouter()

const routeName = computed(() => route.name)

function goForCocktailRandom() {
  router.push(ROUTERS_PATHS.COCKTAIL_RANDOM)

  if (routeName.value === ROUTERS_PATHS.COCKTAIL_RANDOM) {
    router.go()
  }
}

function goBack() {
  props.backPage ? props.backPage() : router.go(-1)
}
</script>

<template>
  <div class="root">
    <div :style="`background-image: url(${imgUrl})`" class="img"></div>
    <div class="main">
      <div class="btns">
        <el-button :icon="Back" circle class="back" v-if="isBackBtnVisible" @click="goBack" />
        <el-button class="btn" @click="goForCocktailRandom">Get cocktail random</el-button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/styles/main.scss";

.root {
  display: flex;
  min-height: 100vh;
  background-color: $background;
}

.img {
  width: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}

.main {
  padding: 32px 40px;
  width: 50%;
  position: relative;
}

.btn {
  position: absolute;
  top: 32px;
  right: 40px;
  background-color: $accent;
  border-color: $accent;
  color: $text;
  font-size: 14px;
  font-family: "Raleway", "Arial", sans-serif;
  &:hover,
  &:active {
    background-color: darken($accent, 10%);
    border-color: darken($accent, 10%);
  }
}
.btns {
  @include flex-container(space-between, flex-start);
}

.back {
  background-color: transparent;
  border-color: #fff;
  &:hover {
    border-color: $accent;
  }
}
</style>
