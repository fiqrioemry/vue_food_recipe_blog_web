<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 class="text-2xl font-semibold text-gray-600 mb-4">
        Halaman Tidak Ditemukan
      </h2>
      <p class="text-gray-500 mb-6">
        Halaman yang Anda cari tidak dapat ditemukan.
      </p>
      <div class="space-x-4">
        <router-link
          to="/"
          class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg inline-block"
        >
          Kembali ke Beranda
        </router-link>
        <router-link
          to="/blog"
          class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg inline-block"
        >
          Lihat Blog
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  mounted() {
    // Optional: Log untuk analytics
    console.log("404 - Page not found:", this.$route.path);
  },
};
</script>
