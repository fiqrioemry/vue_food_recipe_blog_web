<template>
  <div class="flex flex-col space-y-4 py-2 items-center justify-between">
    <h4>Newsletter</h4>
    <p>Subscribe to our newsletter to get more help</p>
    <form class="w-full" action="submit">
      <Input placeholder="Enter your email" />
    </form>
    <Button class="w-full">Subscribe</Button>
  </div>
</template>
<script>
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default {
  components: {
    Input,
    Button,
  },
};
</script>
