<template>
  <main>
    <section class="section__wrapper">
      <div class="image__wrapper relative">
        <div
          class="absolute left-5 md:left-10 text-2xl md:text-6xl font-semibold space-y-4"
        >
          <div>Explore</div>
          <div><span class="text-accent">Culinary</span> Insight</div>
        </div>
        <img
          class="rounded-lg"
          src="@/assets/recipe_page_background.jpg"
          alt="recipe_background"
        />
      </div>
      <div class="text-center">
        <h2>What to <span class="text-accent">Cook</span>?</h2>

        <Tabs :default-value="'all'">
          <TabsList
            class="flex flex-wrap gap-x-2 gap-y-2 md:gap-y-4 md:gap-x-4"
          >
            <!-- All Categories Tab -->
            <TabsTrigger
              value="all"
              class="rounded-full px-4 md:px-6"
              @click="handleTabClick('all')"
            >
              All Categories
            </TabsTrigger>
            <!-- Dynamic Categories Tabs -->
            <TabsTrigger
              v-for="(category, index) in categories"
              :key="index"
              :value="category"
              class="rounded-full px-4 md:px-6"
              @click="handleTabClick(category)"
            >
              {{ category }}
            </TabsTrigger>
          </TabsList>
          <!-- Dynamic Categories Content -->
          <TabsContent value="all">
            <div
              v-if="tabsLoading"
              class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 py-6"
            >
              <div v-for="i in 4" :key="i" class="animate__loading h-[300px]" />
            </div>

            <div v-else class="space-y-6 py-6">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">
                <RecipeCard :recipes="recipes" />
              </div>
              <!-- Pagination -->
              <Pagination
                :currentPage="currentPage"
                :totalPages="totalPages"
                :onPageChanged="onPageChanged"
              />
            </div>
          </TabsContent>
          <TabsContent
            v-for="(category, index) in categories"
            :key="index"
            :value="category"
            class="space-y-6"
          >
            <div
              v-if="tabsLoading"
              class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 py-6"
            >
              <div v-for="i in 4" :key="i" class="animate__loading h-[300px]" />
            </div>
            <div v-else class="space-y-6 py-6">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">
                <RecipeCard :recipes="recipes" />
              </div>
              <!-- Pagination -->
              <Pagination
                :currentPage="currentPage"
                :totalPages="totalPages"
                :onPageChanged="onPageChanged"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  </main>
</template>

<script>
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Pagination from "@/components/common/Pagination.vue";
import RecipeCard from "@/components/common/RecipeCard.vue";

export default {
  components: {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Pagination,
    RecipeCard,
  },
  data() {
    return {
      categories: [],
      recipes: [],
      mealType: "all",
      totalPages: 0,
      currentPage: 1,
      dataPerPage: 4,
      tabsLoading: true,
    };
  },
  methods: {
    async fetchRecipes(url) {
      try {
        const response = await fetch(url);
        const { recipes } = await response.json();
        return recipes;
      } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
      }
    },
    async fetchAllMealType() {
      const recipes = await this.fetchRecipes(
        "https://dummyjson.com/recipes?limit=100"
      );
      this.categories = [...new Set(recipes.flatMap((item) => item.mealType))];
      this.handleTabClick("all");
    },
    async fetchByMealType(mealType) {
      const url =
        mealType === "all"
          ? "https://dummyjson.com/recipes?limit=100"
          : `https://dummyjson.com/recipes/meal-type/${mealType}`;
      const recipes = await this.fetchRecipes(url);

      this.totalPages = Math.ceil(recipes.length / this.dataPerPage);
      const start = (this.currentPage - 1) * this.dataPerPage;
      this.recipes = recipes.slice(start, start + this.dataPerPage);
      this.tabsLoading = false;
    },
    handleTabClick(selectedMealType) {
      this.tabsLoading = true;
      this.currentPage = 1;
      this.fetchByMealType(selectedMealType);
    },
    onPageChanged(page) {
      this.currentPage = page;
      this.fetchByMealType(this.mealType);
    },
  },
  mounted() {
    this.fetchAllMealType();
  },
};
</script>
