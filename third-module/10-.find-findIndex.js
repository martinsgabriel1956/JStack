const inventory = [
  { name: "iPhone", price: 5000, quantity: 2 },
  { name: "MacBook Pro", price: 20000, quantity: 1 },
  { name: "Magic Mouse", price: 1000, quantity: 5 },
];

const findItem = inventory.find((product) => product.name === "Magic Mouse");
console.log({ findItem });

const findItemIndex = inventory.findIndex(
  (product) => product.name === "MacBook Pro"
);
console.log({ findItemIndex });
