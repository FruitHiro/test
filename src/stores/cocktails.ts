import { type Ref, ref} from 'vue';
import { defineStore } from 'pinia';
import { COCKTAILS } from "@/utils/const";
import { getData } from "@/utils/api";
import { useRouter } from "vue-router";

export const useCocktailStore = defineStore('cocktail', () => {
  const cocktails = ref(COCKTAILS);

  const cocktailsData: Ref<Record<string, any>> = ref({});

  const router = useRouter();

  async function getCocktailData(id: string): Promise<any> {
    try {
      const data = await getData(id)

      if (data.drinks) {
        cocktailsData.value[id] = data.drinks[0];

        return data.drinks[0];
      } else {
        router.push({ name: 'error' });
      }

      return null;
    } catch (err) {
      console.log(err);
    }
  }

  return { cocktails, cocktailsData, getCocktailData };
});
