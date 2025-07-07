<template>
  <section class="py-20 bg-orange-50">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Latest Food Stories & Tips
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover cooking tips, food trends, and inspiring stories from our
          community of food lovers.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Blog Card 1 -->
        <article
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div class="relative h-48">
            <img
              src="/blog-1.jpg"
              alt="Cooking Tips"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm"
            >
              Tips
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              10 Essential Kitchen Tools Every Home Chef Needs
            </h3>
            <p class="text-gray-600 mb-4">
              Discover the must-have kitchen tools that will elevate your
              cooking game and make meal preparation a breeze.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  src="/avatar-1.jpg"
                  alt="Author"
                  class="w-8 h-8 rounded-full mr-3"
                />
                <span class="text-sm text-gray-600">Sarah Johnson</span>
              </div>
              <span class="text-sm text-gray-500">5 min read</span>
            </div>
          </div>
        </article>

        <!-- Blog Card 2 -->
        <article
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="relative h-48">
            <img
              src="/blog-2.jpg"
              alt="Food Trends"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm"
            >
              Trends
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              The Rise of Plant-Based Cooking: A Beginner's Guide
            </h3>
            <p class="text-gray-600 mb-4">
              Explore the world of plant-based cooking and learn how to create
              delicious, nutritious meals without meat.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  src="/avatar-2.jpg"
                  alt="Author"
                  class="w-8 h-8 rounded-full mr-3"
                />
                <span class="text-sm text-gray-600">Mike Chen</span>
              </div>
              <span class="text-sm text-gray-500">8 min read</span>
            </div>
          </div>
        </article>

        <!-- Blog Card 3 -->
        <article
          class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div class="relative h-48">
            <img
              src="/blog-3.jpg"
              alt="Food Culture"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm"
            >
              Culture
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              Exploring Global Cuisines: A Journey Through Flavors
            </h3>
            <p class="text-gray-600 mb-4">
              Take a culinary journey around the world and discover the unique
              flavors and traditions of different cultures.
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  src="/avatar-3.jpg"
                  alt="Author"
                  class="w-8 h-8 rounded-full mr-3"
                />
                <span class="text-sm text-gray-600">Emma Davis</span>
              </div>
              <span class="text-sm text-gray-500">10 min read</span>
            </div>
          </div>
        </article>
      </div>

      <div class="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
        <router-link
          to="/blog"
          class="inline-flex items-center px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          View All Articles
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogSection",
};
</script>
