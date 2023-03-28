const inventory = [
  { name: "iPhone", price: 5000, quantity: 2 },
  { name: "MacBook Pro", price: 20000, quantity: 1 },
  { name: "Magic Mouse", price: 1000, quantity: 5 },
];

const findSomePriceItemMoreThan1000 = inventory.some(
  (product) => product.price > 1000
);
const findSomePriceItemLessThan1000 = inventory.some(
  (product) => product.price < 1000
);
const findEveryPriceItemMoreThanOrEqual1000 = inventory.every(
  (product) => product.price >= 1000
);

console.log({ findSomePriceItemMoreThan1000 });
console.log({ findSomePriceItemLessThan1000 });
console.log({ findEveryPriceItemMoreThanOrEqual1000 });
