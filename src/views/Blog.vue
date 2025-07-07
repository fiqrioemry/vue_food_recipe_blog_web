<template>
  <BlogPageSkeleton v-if="loading" />
  <section v-else class="section__wrapper">
    <div>home / blog</div>

    <h3>Latest Blog</h3>

    <!-- blog display -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
      <!-- blog card -->
      <BlogCard :blogs="blogs" />
    </div>

    <!-- Pagination -->
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      :onPageChanged="onPageChanged"
    />
  </section>
</template>

<script>
import BlogData from "@/config/blog.json";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/common/BlogCard.vue";
import Pagination from "@/components/common/Pagination.vue";
import BlogPageSkeleton from "@/components/skeleton/BlogPageSkeleton.vue";

export default {
  components: {
    Button,
    BlogCard,
    Pagination,
    BlogPageSkeleton,
  },
  data() {
    return {
      blogs: [],
      BlogData,
      loading: true,
      totalPages: 0,
      dataPerPage: 2,
      currentPage: 1,
    };
  },
  methods: {
    fetchAllBlog() {
      setTimeout(() => {
        this.totalPages = Math.ceil(this.BlogData.length / this.dataPerPage);
        const firstIndex = (this.currentPage - 1) * this.dataPerPage;
        const lastIndex = firstIndex + this.dataPerPage;
        this.blogs = this.BlogData.slice(firstIndex, lastIndex);
        this.loading = false;
      }, 500);
    },

    onPageChanged(page) {
      this.currentPage = page;
      this.loading = true;
      this.fetchAllBlog();
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    this.fetchAllBlog();
  },
};
</script>
