<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useCocktailStore } from "@/stores/cocktails";

const { cocktails } = useCocktailStore();
</script>

<template>
  <ul class="cocktails-list">
    <li
        v-for="item in cocktails"
        :key="item"
        class="cocktails-list__item"
    >
      <RouterLink :to="item">{{ item }}</RouterLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.cocktails-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;

  &__item {
    display: flex;
    margin-bottom: .5rem;

    a {
      display: flex;
      border: 1px solid transparent;
      border-radius: .25rem;
      color: inherit;
      text-decoration: none;
      padding: .5rem 1rem;
      width: 100%;

      &:hover {
        border-color: lightgray;
      }

      &.router-link-active {
        border-color: black;
      }
    }
  }
}
</style>
