<template>
  <main>
    <!-- loading when fetching process -->
    <RecipeDetailPageSkeleton v-if="loading" />
    <!-- show when fetching done -->
    <section
      v-else
      v-for="recipe in recipes"
      class="section__wrapper"
      :key="recipe.id"
    >
      <!-- page navigation-->
      <div>home / recipe / {{ recipe.name.toLowerCase() }}</div>

      <!-- content head -->
      <div>
        <!-- title -->
        <div class="text-3xl md:text-4xl font-semibold">
          {{ recipe.name }}
        </div>
        <!-- summary -->
        <div
          class="grid grid-cols-1 md:grid-cols-10 items-center border-b py-2"
        >
          <!-- info-->
          <div class="col-span-1 md:col-span-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">
              <div class="flex items-center gap-x-2 text-sm">
                <font-awesome-icon
                  class="text-accent"
                  icon="fa-solid fa-user"
                />
                <span>Alexander Den</span>
              </div>

              <div class="flex items-center gap-x-2 text-sm">
                <font-awesome-icon
                  class="text-accent"
                  icon="fa-solid fa-calendar"
                />
                <span>October 24, 2023</span>
              </div>

              <div class="flex items-center gap-x-2 text-sm">
                <font-awesome-icon
                  class="text-accent"
                  icon="fa-solid fa-comment"
                />
                <span>{{ recipe.reviewCount }} comment</span>
              </div>
            </div>
          </div>
          <!-- separate border -->
          <div class="hidden md:flex md:col-span-1"></div>

          <!-- share button-->
          <div class="hidden md:flex md:col-span-3 space-x-4 items-center">
            <button class="py-2 px-4 border rounded-md">
              <font-awesome-icon
                class="text-accent"
                icon="fa-solid fa-bookmark"
              />
            </button>
            <button class="py-2 px-4 border rounded-md">
              <font-awesome-icon
                class="text-accent"
                icon="fa-solid fa-share-nodes"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- content body-->
      <div class="grid grid-cols-1 md:grid-cols-10 gap-x-4">
        <!-- left side content -->
        <div class="col-span-1 md:col-span-6 space-y-6">
          <!-- recipe image -->
          <div class="image__wrapper">
            <img
              class="w-full h-[425px] rounded-sm"
              :src="recipe.image"
              alt="detail_image"
            />
          </div>

          <!-- recipe information -->
          <div class="flex flex-wrap">
            <div
              v-for="detail in recipeDetail"
              class="flex items-center gap-x-2 px-2 py-2 w-1/3 md:w-1/5"
            >
              <div
                class="flex items-center justify-center py-2 px-2 rounded-full bg-accent-muted"
              >
                <font-awesome-icon class="text-accent" :icon="detail.icon" />
              </div>
              <div class="text-sm">
                <span>{{ detail.name }}</span>
                <p class="font-bold">{{ recipe[detail.type] }}</p>
              </div>
            </div>
          </div>

          <!-- ingredients & instruction  -->

          <div class="space-y-6">
            <!-- ingredients -->
            <div class="space-y-4 md:space-y-6">
              <h4>Ingredients</h4>
              <div
                v-for="ingredient in recipe.ingredients"
                :key="ingredient"
                class="flex items-center px-6 space-x-4"
              >
                <font-awesome-icon
                  class="text-accent"
                  icon="fa-solid fa-circle-check"
                />
                <p>{{ ingredient }}</p>
              </div>
            </div>

            <!-- instructions -->
            <div class="space-y-4 md:space-y-6">
              <h4>Instruction</h4>
              <div
                v-for="instruction in recipe.instructions"
                :key="ingredient"
                class="flex items-center px-6 space-x-4"
              >
                <font-awesome-icon
                  class="text-accent"
                  icon="fa-solid fa-circle-check"
                />
                <p>{{ instruction }}</p>
              </div>
            </div>
          </div>

          <!-- you might also like -->
          <div class="space-y-6 py-6">
            <h4>You might also like</h4>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">
              <RecipeCard :recipes="recommendRecipes" />
            </div>
          </div>
        </div>

        <!-- separate border -->
        <div class="hidden md:flex md:col-span-1"></div>

        <!-- right side content-->
        <div class="hidden md:block md:col-span-3 space-y-6">
          <!-- nutrision fact -->
          <div
            class="py-6 px-6 max-h-[400px] w-full bg-foreground rounded-sm space-y-2"
          >
            <h4>Nutrision fact</h4>
            <div
              v-for="nutrision in nutrisionFact"
              class="flex items-center justify-between border-b"
            >
              <div>{{ nutrision.title }}</div>
              <div>{{ nutrision.value }}</div>
            </div>
          </div>

          <!-- stay connect  -->
          <AsideStayConnect />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { nutrisionFact, recipeDetail } from "@/config";
import RecipeCard from "@/components/common/RecipeCard.vue";
import RecipeDetailPageSkeleton from "@/components/skeleton/RecipeDetailPageSkeleton.vue";
import AsideStayConnect from "@/components/common/AsideStayConnect.vue";

export default {
  components: {
    Input,
    Button,
    RecipeCard,
    RecipeDetailPageSkeleton,
    AsideStayConnect,
  },
  setup() {
    const recipes = ref([]);
    const route = useRoute();
    const loading = ref(true);
    const recommendRecipes = ref([]);
    const slug = ref(route.params.slug);
    const recipeDetailData = recipeDetail;
    const nutrisionFactData = nutrisionFact;

    const fetchData = async (slug) => {
      // recipe detail
      const response = await fetch(`https://dummyjson.com/recipes?limit=100`);
      const result = await response.json();
      const data = result.recipes;
      recipes.value = data.filter((item) => item.name === slug);

      // recommend recipe
      const mealType = recipes.value[0].mealType[0];
      const recommend = await fetch(
        `https://dummyjson.com/recipes/meal-type/${mealType}`
      );
      const recommendData = await recommend.json();
      recommendRecipes.value = recommendData.recipes
        .filter((item) => item.id !== recipes.value[0].id)
        .slice(0, 3);
      loading.value = false;
    };

    onMounted(() => {
      setTimeout(() => {
        fetchData(slug.value);
      }, 500);
    });

    watch(
      () => route.params.slug,
      (newSlug) => {
        slug.value = newSlug;
        loading.value = true;
        fetchData(newSlug);
      }
    );

    return {
      slug,
      nutrisionFact: nutrisionFactData,
      recipeDetail: recipeDetailData,
      recommendRecipes,
      recipes,
      loading,
    };
  },
};
</script>
