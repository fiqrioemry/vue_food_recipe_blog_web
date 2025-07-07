<template>
  <main class="container mx-auto py-6">
    <!-- hero section -->
    <HeroSection />

    <!-- Sharerecipe section -->
    <ShareRecipe />

    <!-- Trending recipe section -->
    <TrendingRecipe />

    <!-- Blog section -->
    <BlogSection />
  </main>
</template>

<script>
import HeroSection from "../components/home/HeroSection.vue";
import ShareRecipe from "../components/home/ShareRecipe.vue";
import BlogSection from "../components/home/BlogSection.vue";
import TrendingRecipe from "../components/home/TrendingRecipe.vue";
import HomePageSkeleton from "@/components/skeleton/HomePageSkeleton.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default {
  components: {
    HeroSection,
    BlogSection,
    ShareRecipe,
    HomePageSkeleton,
    TrendingRecipe,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  },
};
</script>
