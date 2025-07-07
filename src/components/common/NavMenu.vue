<template>
  <Sheet>
    <SheetTrigger>
      <font-awesome-icon class="text-2xl" icon="fa-solid fa-bars"
    /></SheetTrigger>
    <SheetContent>
      <ul
        class="flex md:flex-row flex-col items-center justify-between py-12 gap-y-10 font-medium"
      >
        <li v-for="link in links" class="hover:text-accent">
          <SheetClose>
            <router-link
              :to="link.path"
              :key="link.path"
              active-class="text-accent font-bold"
              exact-active-class="text-accent font-bold"
              >{{ link.title }}</router-link
            >
          </SheetClose>
        </li>
      </ul>
    </SheetContent>
  </Sheet>
</template>

<script>
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NavLink from "./NavLink.vue";
import { navLinks } from "../../config/index.js";

export default {
  components: {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
    Button,
    NavLink,
  },

  data() {
    return {
      links: navLinks,
    };
  },
};
</script>
