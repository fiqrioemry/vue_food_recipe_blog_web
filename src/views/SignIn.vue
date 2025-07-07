<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-100"
  >
    <div class="w-full max-w-md p-6">
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
        class="w-full backdrop-blur-sm bg-white/90 border-orange-200 shadow-xl"
      >
        <CardHeader class="text-center space-y-2">
          <div class="flex justify-center">
            <div
              class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          <CardTitle class="text-2xl font-bold text-gray-900"
            >Welcome Back!</CardTitle
          >
          <CardDescription class="text-base text-gray-600">
            Sign in to continue your culinary journey
          </CardDescription>
        </CardHeader>

        <CardContent class="space-y-6">
          <form @submit.prevent="handleLogin" class="space-y-4">
            <div
              v-for="(data, index) in signInInputForm"
              :key="index"
              class="space-y-2"
            >
              <div class="relative">
                <input
                  :type="data.type"
                  v-model="data.value"
                  :placeholder="data.placeholder"
                  class="w-full px-4 py-1 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  class="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                />
                <label class="ml-2 block text-sm text-gray-700"
                  >Remember me</label
                >
              </div>
              <a
                href="#"
                class="text-sm font-medium text-orange-600 hover:text-orange-500"
              >
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              size="lg"
              class="w-full py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              :disabled="isButtonDisabled()"
            >
              <span v-if="!isButtonLoading">Sign In</span>
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
                Signing in...
              </span>
            </Button>
          </form>

          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <button
              class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <svg class="h-5 w-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                />
              </svg>
              Google
            </button>
            <button
              class="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
              Facebook
            </button>
          </div>

          <div class="text-center text-sm text-gray-600">
            Don't have an account?
            <router-link
              to="/signup"
              class="font-medium text-orange-600 hover:text-orange-500"
            >
              Sign up here
            </router-link>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
</template>

<script>
import Button from "@/components/ui/button/Button.vue";
import { signInInputForm } from "@/config";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default {
  components: {
    Button,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  },
  data() {
    return {
      isButtonLoading: false,
      signInInputForm,
    };
  },
  methods: {
    isButtonDisabled() {
      return (
        (this.signInInputForm.value && !this.signInInputForm[0].value) ||
        !this.signInInputForm[1].value
      );
    },
    handleLogin() {
      this.isButtonLoading = true;
      setTimeout(() => {
        alert(`Feature disabled in demo`);
        this.isButtonLoading = false;
      }, 500);
    },
  },
};
</script>
