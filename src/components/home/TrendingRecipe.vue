<template>
  <section class="section__wrapper">
    <!-- section head -->
    <div class="flex items-center justify-between">
      <h4>Trending Recipe</h4>
      <router-link to="/recipe" class="text-accent font-semibold"
        >View more</router-link
      >
    </div>

    <!-- section content -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
      <RecipeCard :recipes="relatedRecipe" />
    </div>
  </section>
</template>

<script>
import RecipeCard from "../common/RecipeCard.vue";

export default {
  components: {
    RecipeCard,
  },
  data() {
    return {
      relatedRecipe: [],
    };
  },
  methods: {
    async fetchRelatedRecipe() {
      setTimeout(async () => {
        const response = await fetch("https://dummyjson.com/recipes?limit=6");
        const data = await response.json();
        this.relatedRecipe = data.recipes;
      }, 500);
    },
  },
  mounted() {
    this.fetchRelatedRecipe();
  },
};
</script>
