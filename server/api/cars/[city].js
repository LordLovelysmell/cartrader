import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
  const { city } = event.context.params;
  const { make, minPrice, maxPrice } = getQuery(event);

  let filteredCars = cars.filter((car) => isEqual(car.city, city));

  if (make) {
    filteredCars = filteredCars.filter((car) => isEqual(car.make, make));
  }

  if (minPrice) {
    filteredCars = filteredCars.filter((car) => car.price >= Number(minPrice));
  }

  if (maxPrice) {
    console.log(typeof maxPrice);
    filteredCars = filteredCars.filter((car) => car.price <= Number(maxPrice));
  }

  return filteredCars;
});

function isEqual(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
