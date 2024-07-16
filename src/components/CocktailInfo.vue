<script setup lang="ts">
import { computed } from "vue";

const props = defineProps(['data']);

const ingredientsCount = computed(() => {
  const ingredients = props.data ?
      Object.keys(props.data).filter((item) => item.includes('strIngredient') && props.data[item]) : [];

  return [...Array(ingredients.length).keys()].map((item) => item + 1);
})
</script>
<template>
  <div class="cocktail-info">
    <div class="cocktail-info__row">
      <div class="cocktail-info__cell">
        <h1>{{ data?.strDrink }}</h1>
        <p>{{ data?.strCategory }}</p>
        <p>{{ data?.strAlcoholic }}</p>
        <p>{{ data?.strGlass }}</p>
        <div>
          <h4>Instructions:</h4>
          <p>{{ data?.strInstructions }}</p>
        </div>

        <h4>List of ingredients:</h4>
        <ul class="ingredients-list">
          <li
              v-for="item in ingredientsCount"
              :key="item"
              class="ingredients-list__item"
          >
            <span>{{ data[`strIngredient${item}`] }}</span>
            <span>{{ data[`strMeasure${item}`] }}</span>
          </li>
        </ul>
      </div>
      <div class="cocktail-info__cell">
        <img :src="data?.strDrinkThumb" :alt="data?.strDrink" loading="lazy"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cocktail-info {
  &__row {
    display: flex;
    flex-direction: column-reverse;
    gap: 2rem;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }

  &__cell {
    flex: 1;
  }
}

.ingredients-list {
  padding: 0;

  &__item {
    display: grid;
    grid-template-columns: repeat(2, 10rem);
    gap: 3rem;
  }
}

img {
  max-width: 100%;
}
</style>
