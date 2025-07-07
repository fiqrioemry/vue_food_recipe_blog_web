<template>
  <header
    class="py-4 bg-background fixed top-0 left-0 right-0 z-10 border-b-2 border-accent"
  >
    <div class="header__wrapper">
      <div>
        <img src="@/assets/2.png" class="h-8" />
      </div>
      <nav class="hidden md:block">
        <NavLink />
      </nav>
      <!-- nav menu (mobile) -->
      <div class="flex md:hidden"><NavMenu /></div>

      <!-- nav button -->
      <div class="hidden md:flex space-x-2">
        <router-link to="/signin">
          <Button variant="ghost"> Login </Button>
        </router-link>
        <router-link to="/signup"> <Button>Signup</Button></router-link>
      </div>
    </div>
  </header>
</template>

<script>
import NavMenu from "./NavMenu.vue";
import NavLink from "./NavLink.vue";
import { Button } from "@/components/ui/button";

export default {
  components: {
    Button,
    NavMenu,
    NavLink,
  },
};
</script>
