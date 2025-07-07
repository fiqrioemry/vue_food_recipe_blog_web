<template>
  <div class="bg-accent-muted space-y-6 p-6 rounded-sm text-center">
    <h4 class="leading-[2rem]">Stay connected with our updates</h4>
    <p>for the lastest health tips and delicious recipes</p>

    <form class="space-y-4" action="submit">
      <Input class="w-full rounded-md h-12" placeholder="Enter you email" />
      <div>
        <RouterLink to="/signup">
          <Button size="lg" class="w-full">Signup</Button>
        </RouterLink>
      </div>
    </form>
  </div>
</template>
<script>
import Button from "../ui/button/Button.vue";
import Input from "../ui/input/Input.vue";
export default {
  components: {
    Input,
    Button,
  },
};
</script>
