<template>
  <section
    class="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 to-amber-100"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute inset-0"
        style="
          background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23FF6B6B\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
        "
      ></div>
    </div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="text-center lg:text-left" data-aos="fade-up">
          <h1
            class="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Discover Delicious
            <span class="text-orange-600">Recipes</span>
            <br />
            Share Your Passion
          </h1>
          <p
            class="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0"
          >
            Join our community of food enthusiasts. Share your favorite recipes,
            discover new dishes, and connect with fellow food lovers.
          </p>
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <router-link
              to="/signup"
              class="px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </router-link>
            <router-link
              to="/recipes"
              class="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-orange-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-orange-600"
            >
              Explore Recipes
            </router-link>
          </div>
        </div>

        <!-- Image Content -->
        <div class="relative" data-aos="fade-up" data-aos-delay="200">
          <div class="relative z-10">
            <img
              src="/hero-image.jpg"
              alt="Delicious Food"
              class="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <!-- Decorative Elements -->
          <div
            class="absolute -top-4 -right-4 w-24 h-24 bg-orange-200 rounded-full opacity-50"
          ></div>
          <div
            class="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-200 rounded-full opacity-50"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>
