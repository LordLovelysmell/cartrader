<template>
  <div class="mt-32 flex">
    <CarSideBar />
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute();
const { capitalized } = useUtilities();
useHead({
  title: `${
    route.params.make ? capitalized(route.params.make) : "Cars"
  } in ${capitalized(route.params.city)}`,
});

definePageMeta({
  layout: "custom",
});
</script>
