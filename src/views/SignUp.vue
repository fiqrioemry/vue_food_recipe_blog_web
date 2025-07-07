<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-100"
  >
    <div class="w-full max-w-md p-2">
      <div class="flex justify-between items-center mb-2">
        <Button variant="ghost" class="hover:bg-accent/10">
          <router-link to="/" class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </router-link>
        </Button>
      </div>

      <Card
        class="w-full backdrop-blur-sm bg-background border-accent/20 shadow-xl"
      >
        <CardHeader class="text-center space-y-3">
          <CardTitle class="text-2xl font-bold">Create Account</CardTitle>
          <CardDescription class="text-base">
            Join our community of food lovers and start sharing your favorite
            recipes
          </CardDescription>
        </CardHeader>

        <CardContent class="space-y-2">
          <form @submit.prevent="handleLogin" class="space-y-4">
            <div v-for="(data, index) in signUpInputForm" :key="index">
              <input
                :type="data.type"
                v-model="data.value"
                :placeholder="data.placeholder"
                class="w-full px-4 py-1 rounded-lg border border-input bg-background/50 focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              class="w-full py-3 rounded-lg bg-accent hover:bg-accent/90 text-background font-medium transition-all duration-200"
              :disabled="isButtonDisabled()"
            >
              <span v-if="!isButtonLoading">Create Account</span>
              <span v-else class="flex items-center gap-2">
                <svg
                  class="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating Account...
              </span>
            </Button>
          </form>

          <div class="text-center text-sm text-muted-foreground">
            Already have an account?
            <router-link
              to="/signin"
              class="font-medium text-accent hover:text-accent/80 transition-colors"
            >
              Sign in here
            </router-link>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>

<script>
import Button from "@/components/ui/button/Button.vue";
import { signUpInputForm } from "@/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default {
  components: {
    Button,
    Card,
    CardContent,
    CardFooter,
    CardDescription,
    CardHeader,
    CardTitle,
  },
  data() {
    return {
      loading: true,
      isButtonLoading: false,
      signUpInputForm,
    };
  },
  methods: {
    isButtonDisabled() {
      return (
        (this.signUpInputForm.value && !this.signUpInputForm[0].value) ||
        !this.signUpInputForm[1].value
      );
    },
    handleLogin() {
      this.isButtonLoading = true;
      setTimeout(() => {
        alert(`Feature disabled in demo `);
        this.isButtonLoading = false;
      }, 500);
    },
  },
};
</script>
