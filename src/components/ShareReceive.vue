<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Share & Receive Amazing Recipes
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Join our community to share your culinary creations and discover
          delicious recipes from food enthusiasts worldwide.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Share Card -->
        <div
          class="bg-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Share Your Recipes
          </h3>
          <p class="text-gray-600">
            Upload your favorite recipes with detailed instructions, photos, and
            tips to help others recreate your dishes.
          </p>
        </div>

        <!-- Discover Card -->
        <div
          class="bg-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div
            class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-amber-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Discover New Dishes
          </h3>
          <p class="text-gray-600">
            Explore a vast collection of recipes from different cuisines and
            find inspiration for your next meal.
          </p>
        </div>

        <!-- Connect Card -->
        <div
          class="bg-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div
            class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-orange-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            Connect with Foodies
          </h3>
          <p class="text-gray-600">
            Join a community of food enthusiasts, share experiences, and learn
            from others' cooking adventures.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ShareReceive",
};
</script>
