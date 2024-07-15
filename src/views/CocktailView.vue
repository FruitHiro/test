<script setup lang="ts">
import CocktailInfo from "@/components/CocktailInfo.vue";
import {ref, type Ref, watch} from "vue";
import { useRoute } from "vue-router";
import { useCocktailStore } from "@/stores/cocktails";
import LoadingCircle from "@/components/LoadingCircle.vue";

const { cocktailsData, getCocktailData } = useCocktailStore();

const route = useRoute();

const loading = ref(false);

const data: Ref<Record<string, any>> = ref({});

watch(
    () => route.params.id as string,
    async (id) => {

      if (cocktailsData[id]) {
        data.value = cocktailsData[id];
      } else {
        loading.value = true;
        data.value = await getCocktailData(id);
        loading.value = false;
      }
    },
    { immediate: true }
);
</script>

<template>
  <LoadingCircle v-if="loading" />
  <CocktailInfo :data v-else />
</template>
