<template>
  <main>
    <Header />
    <div class="mt-14">
      <router-view />
    </div>
    <Footer />
  </main>
</template>

<script>
import Header from "../common/Header.vue";
import Footer from "../common/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
