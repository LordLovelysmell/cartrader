<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car.features" />
    <CarDetailDescription :description="car.description" />
    <CarDetailContact />
  </div>
</template>

<script setup>
const {
  params: { name, id },
} = useRoute();
const { capitalized } = useUtilities();
useHead({
  title: capitalized(name),
});

definePageMeta({
  layout: "custom",
});

const { cars } = useCars();
const car = computed(() => {
  return cars.find((c) => Number(c.id) === Number(id));
});

if (!car.value) {
  throw createError({
    statusCode: 404,
    message: `Car with ID of ${id} does not exist`,
  });
}
</script>
