<template>
  <article
    v-for="recipe in recipes"
    class="rounded-md shadow-lg"
    :key="recipe.id"
  >
    <router-link :to="`/recipe/${recipe.name}`">
      <div class="image__wrapper relative">
        <button
          class="absolute right-2 top-2 bg-background px-4 py-2 rounded-md"
        >
          <font-awesome-icon
            class="text-accent text-xs"
            icon="fa-solid fa-bookmark"
          />
        </button>
        <img class="rounded-t-md" :src="recipe.image" alt="favorite" />
      </div>

      <div class="px-2 py-2 min-h-[75px]">
        <div>
          <font-awesome-icon
            v-for="i in Math.floor(recipe.rating)"
            class="text-accent text-xs"
            icon="fa-solid fa-star"
            :key="i"
          />
        </div>
        <div class="text-xs md:text-sm">{{ recipe.name }}</div>
      </div>
    </router-link>
  </article>
</template>
<script>
export default {
  props: {
    recipes: {
      type: Object,
      required: true,
    },
  },
};
</script>
