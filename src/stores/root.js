import { COCTAILS_BY_INGRIDIENTS_URL, INGREDIENTS_URL } from "@/constants"
import axios from "axios"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useRootStore = defineStore("rootStore", () => {
  //State
  const ingredients = ref([])
  const ingredient = ref(null)
  const cocktails = ref([])
  //Actions
  const getIngredients = async () => {
    try {
      const response = await axios.get(INGREDIENTS_URL)
      ingredients.value = response?.data?.drinks
    } catch (error) {
      console.error(error)
    }
  }
  const getCoctail = async (ingredient) => {
    try {
      const response = await axios.get(`${COCTAILS_BY_INGRIDIENTS_URL}${ingredient}`)
      cocktails.value = response?.data?.drinks
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  const setCoctails = (val) => (ingredient.value = val)

  return {
    getCoctail,
    cocktails,
    ingredients,
    getIngredients,
    setCoctails,
    ingredient
  }
})
