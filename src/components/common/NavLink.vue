<template lang="">
  <ul class="flex md:flex-row flex-col justify-between gap-x-6 font-medium">
    <li v-for="link in links" class="hover:text-accent">
      <router-link
        :to="link.path"
        :key="link.path"
        active-class="text-accent font-bold"
        exact-active-class="text-accent font-bold"
        >{{ link.title }}</router-link
      >
    </li>
  </ul>
</template>
<script>
import { navLinks } from "../../config/index.js";
import { SheetClose } from "@/components/ui/sheet";
export default {
  setup() {
    const links = navLinks;
    return {
      links,
    };
  },
};
</script>
