<template lang="">
  <article
    v-for="blog in blogs"
    :key="blog.id"
    class="shadow-lg bg-background rounded-md"
  >
    <router-link :to="`/blog/${blog.slug}`">
      <img
        class="rounded-t-md h-[325px] w-full"
        :src="blog.image"
        alt="blog_image"
      />
      <div class="space-y-2 p-4">
        <span>{{ blog.datePublished }}</span>
        <h5 class="leading-[2.5rem]">{{ blog.title }}</h5>
        <p>{{ blog.excerpt }}</p>
      </div>
    </router-link>
  </article>
</template>
<script>
export default {
  props: {
    blogs: {
      type: Object,
      required: true,
    },
  },
};
</script>
