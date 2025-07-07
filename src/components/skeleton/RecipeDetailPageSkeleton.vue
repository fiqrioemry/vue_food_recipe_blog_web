<template>
  <main>
    <section class="section__wrapper">
      <!-- page navigation-->
      <div class="h-6 w-24 animate__loading" />

      <!-- content head -->
      <div>
        <div class="h-8 w-1/3 animate__loading" />
        <div
          class="grid grid-cols-1 md:grid-cols-10 items-center border-b py-2"
        >
          <div class="col-span-1 md:col-span-6">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4">
              <div class="h-6 animate__loading" />
              <div class="h-6 animate__loading" />
              <div class="h-6 animate__loading" />
            </div>
          </div>
        </div>
      </div>

      <!-- content body-->
      <div class="grid grid-cols-1 md:grid-cols-10 gap-x-4">
        <div class="col-span-1 md:col-span-6 space-y-6">
          <div class="h-[325px] w-full animate__loading" />

          <!-- recipe information -->
          <div class="space-y-6">
            <div v-for="i in 3" :key="i" class="h-6 w-full animate__loading" />
          </div>
        </div>

        <!-- separate border -->
        <div class="hidden md:flex md:col-span-1" />

        <!-- right side content-->
        <div class="hidden md:block md:col-span-3 space-y-6">
          <!-- nutrision fact -->
          <div class="h-[325px] w-full animate__loading space-y-2" />
        </div>
      </div>
    </section>
  </main>
</template>
