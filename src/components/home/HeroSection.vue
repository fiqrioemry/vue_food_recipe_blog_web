<template>
  <section class="section__wrapper">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="pt-[50px] md:pt-[100px] pr-0 md:pr-6 space-y-6">
        <h1 class="leading-[4rem]">
          Your Daily Dish A <span class="text-accent">Food</span> Journey
        </h1>
        <p>
          Discover the joy of delicious meals, crafted to bring comfort, flavor,
          and excitement to your table.
        </p>
        <router-link to="/recipe">
          <Button size="lg"> Explore Recipe</Button></router-link
        >
      </div>
      <div class="hidden md:flex flex-col">
        <div class="py-6 space-y-6 pt-[75px]">
          <div class="flex items-center justify-center">
            <img
              class="w-[400px] h-[400px]"
              src="@/assets/hero_image_food.png"
              alt="hero_image"
            />
          </div>
        </div>
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
