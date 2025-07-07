<template>
  <section class="section__wrapper">
    <!-- section head -->
    <div class="flex items-center justify-between">
      <h4>Blog</h4>
      <router-link to="/blog" class="text-accent font-semibold"
        >View more</router-link
      >
    </div>

    <!-- section content -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
      <!-- blog card content display -->
      <BlogCard :blogs="articles.slice(0, 2)" />
    </div>
  </section>
</template>

<script>
import articles from "@/config/blog.json";
import BlogCard from "../common/BlogCard.vue";

export default {
  components: {
    BlogCard,
  },
  data() {
    return {
      articles,
      loading: true,
    };
  },
};
</script>
