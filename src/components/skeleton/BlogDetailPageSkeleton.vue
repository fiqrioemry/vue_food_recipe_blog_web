<template>
  <div class="section__wrapper">
    <div class="space-y-4 py-6 border-b">
      <!-- blog title -->
      <div class="h-8 w-1/3 animate__loading"></div>
      <div class="flex items-center gap-x-6">
        <!-- blog author & date -->
        <div class="h-8 w-24 animate__loading"></div>
        <div class="h-8 w-24 animate__loading"></div>
      </div>
    </div>

    <!-- blog main content -->
    <div class="grid grid-cols-1 md:grid-cols-5 gap-x-8">
      <div class="col-span-1 md:col-span-3 space-y-8">
        <!-- image and paragraf -->
        <div class="space-y-4">
          <div class="w-full h-[400px] animate__loading"></div>

          <div class="h-6 w-full animate__loading"></div>
          <div class="h-6 w-full animate__loading"></div>
          <div class="h-6 w-full animate__loading"></div>
          <div class="h-6 w-full animate__loading"></div>
          <div class="h-6 w-1/2 animate__loading"></div>
        </div>

        <!-- related blog -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div v-for="i in 2" class="space-y-2" :key="i">
            <div class="w-full h-[225px] animate__loading"></div>
            <div class="h-6 w-1/2 animate__loading"></div>
          </div>
        </div>
      </div>

      <!-- aside  -->
      <aside class="hidde md:flex flex-col md:col-span-2 space-y-10 pl-[100px]">
        <div v-for="i in 3" :key="i" class="h-[225px] animate__loading"></div>
      </aside>
    </div>
  </div>
</template>
<script>
export default {};
</script>
