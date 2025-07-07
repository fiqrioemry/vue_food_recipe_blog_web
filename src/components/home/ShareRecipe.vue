<template>
  <section class="section__wrapper">
    <div class="flex gap-x-10">
      <img
        class="hidden md:block max-w-[400px] max-h-[400px]"
        src="@/assets/create_new_recipe.png"
        alt="new_recipe"
      />
      <div class="flex flex-col gap-y-6 text-center">
        <h2>Share your recipes</h2>
        <p>
          Have a dish you love? Share your culinary creations with the world and
          inspire others to bring new flavors to their kitchen. Let your recipe
          tell its story.
        </p>
        <router-link to="/signin">
          <Button size="lg">Create new recipe</Button></router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import { Button } from "../ui/button";
export default {
  components: {
    Button,
  },
};
</script>
