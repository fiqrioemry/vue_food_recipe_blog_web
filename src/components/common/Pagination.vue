<template>
  <div class="space-x-2 space-y-2">
    <button
      v-for="page in totalPages"
      :key="page"
      :value="page"
      @click="onPageChanged(page)"
      :class="
        page === currentPage
          ? 'bg-accent px-4 py-2 rounded-md border'
          : 'px-4 py-2 rounded-md border'
      "
    >
      {{ page }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    onPageChanged: {
      type: Function,
      required: true,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
};
</script>
