<script setup lang="ts">
import { RouterView } from 'vue-router';
import CocktailsList from "@/components/CocktailsList.vue";
</script>

<template>
  <main>
    <nav>
      <CocktailsList />
    </nav>

    <section>
      <RouterView />
    </section>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;
  line-height: 1.5;
  gap: 2rem;
  margin: auto;
  width: 100%;
  max-width: 1024px;
  min-width: 360px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
}

section {
  flex: 1;
}
</style>
