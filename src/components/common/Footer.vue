<script>
import NewsLetter from "./NewsLetter.vue";
export default {
  components: {
    NewsLetter,
  },
};
</script>

<template>
  <footer class="w-full bg-orange-100">
    <section class="section__wrapper">
      <!-- head content -->
      <div class="grid grid-cols-1 md:grid-cols-10 gap-x-10">
        <!-- perferct recipe -->
        <div
          class="p-2 text-center space-y-4 md:text-start col-span-10 md:col-span-3"
        >
          <h4>FLA<span class="text-accent">VORIZ</span></h4>
          <p>
            Indulge in a culinary experience like no other. Explore a diverse
            range of recipes, each designed to bring joy and flavor to your
            table. From comforting classics to bold new flavors, we’ve got
            something for every taste
          </p>
        </div>
        <div class="col-span-4" />
        <div class="col-span-10 md:col-span-3">
          <NewsLetter />
        </div>
      </div>
      <!-- bottom content -->
      <div
        class="pt-6 border-t-2 border-secondary flex items-center justify-center"
      >
        <!-- copyright -->
        <div>&copy; 2023 Flavoriz Logo. All right reserved</div>
      </div>
    </section>
  </footer>
</template>
