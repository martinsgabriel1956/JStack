const inventory = [
  { name: "iPhone", price: 5000, quantity: 2 },
  { name: "MacBook Pro", price: 20000, quantity: 1 },
  { name: "Magic Mouse", price: 1000, quantity: 5 },
];

const createNewInventoryArray = inventory.map((product) => ({
  ...product,
  subtotal: product.price * product.quantity,
}));

console.log({ createNewInventoryArray });
