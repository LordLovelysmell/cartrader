<template>
  <div>
    <CarCards :cars="cars" />
  </div>
</template>

<script setup>
const route = useRoute();

const minPrice = ref(route.query.minPrice ? route.query.minPrice : "");
const maxPrice = ref(route.query.maxPrice ? route.query.maxPrice : "");

const { data: cars, refresh } = await useFetchCars(route.params.city, {
  make: route.params.make,
  minPrice,
  maxPrice,
});

watch(
  () => route.query,
  async (current) => {
    maxPrice.value = current.maxPrice;
    minPrice.value = current.minPrice;
    refresh();
  }
);
</script>
