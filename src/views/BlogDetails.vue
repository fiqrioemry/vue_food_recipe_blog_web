<template>
  <BlogDetailPageSkeleton v-if="loading" />
  <section
    v-else
    v-for="blog in data"
    :key="blog.slug"
    class="section__wrapper"
  >
    <!-- Page Navigation -->
    <div>home / blog / {{ blog.title }}</div>

    <!-- Blog Header -->
    <div class="space-y-4 py-6 border-b">
      <div class="text-3xl md:text-4xl font-semibold">{{ blog.title }}</div>

      <div class="flex items-center">
        <div
          v-for="(item, index) in blogInfoSummary"
          :key="index"
          class="flex items-center w-1/2 md:w-1/4 gap-x-2 text-sm"
        >
          <font-awesome-icon class="text-accent" :icon="item.icon" />
          <span>{{ blog[item.name] }}</span>
        </div>
      </div>
    </div>

    <!-- Blog Body -->
    <div class="grid grid-cols-1 md:grid-cols-10 gap-x-6">
      <div class="col-span-1 md:col-span-6 space-y-4">
        <!-- main article  -->
        <article class="space-y-4">
          <div class="image__wrapper h-[400px]">
            <img class="w-full" :src="blog.image" alt="blog_thumbnail" />
          </div>

          <p class="font-medium">{{ blog.excerpt }}</p>

          <div class="space-y-4">
            <p
              v-for="(text, index) in blog.content"
              :key="index"
              class="text-justify"
            >
              {{ text }}
            </p>
          </div>

          <div class="flex items-center gap-x-2">
            <h6>Tags :</h6>
            <div
              v-for="(tag, index) in blog.tags"
              :key="index"
              class="py-1 px-2 border rounded-md text-sm"
            >
              {{ tag }}
            </div>
          </div>
        </article>

        <!-- Related Blogs -->
        <div class="space-y-6 py-6">
          <h4>Related Blog</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            <BlogCard :blogs="relatedBlogs" />
          </div>
        </div>
      </div>

      <!-- separate border -->
      <div class="hidden md:flex md:col-span-1"></div>

      <!-- right side content-->
      <div class="hidden md:block md:col-span-3 space-y-6">
        <aside>
          <!-- stay connect  -->
          <AsideStayConnect />
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
import { useRoute } from "vue-router";
import articles from "@/config/blog.json";
import { blogInfoSummary } from "@/config";
import { ref, onMounted, watch } from "vue";
import BlogCard from "@/components/common/BlogCard.vue";
import AsideStayConnect from "@/components/common/AsideStayConnect.vue";
import BlogDetailPageSkeleton from "@/components/skeleton/BlogDetailPageSkeleton.vue";

export default {
  components: { BlogDetailPageSkeleton, BlogCard, AsideStayConnect },
  setup() {
    const data = ref([]);
    const relatedBlogs = ref([]);
    const loading = ref(true);
    const route = useRoute();

    const fetchBlogBySlug = (slug) => {
      loading.value = true;
      const currentBlog = articles.find((item) => item.slug === slug);
      if (currentBlog) {
        data.value = [currentBlog];
        relatedBlogs.value = getRelatedBlogs(slug);
      }
      loading.value = false;
    };

    const getRelatedBlogs = (currentBlogSlug) => {
      const currentIndex = articles.findIndex(
        (article) => article.slug === currentBlogSlug
      );
      const related = [];
      for (let i = 1; i <= 2; i++) {
        const nextIndex = (currentIndex + i) % articles.length;
        related.push(articles[nextIndex]);
      }
      return related;
    };

    onMounted(() => {
      fetchBlogBySlug(route.params.slug);
    });

    watch(
      () => route.params.slug,
      (newSlug) => {
        fetchBlogBySlug(newSlug);
      }
    );

    return {
      data,
      relatedBlogs,
      loading,
      blogInfoSummary,
    };
  },
};
</script>
