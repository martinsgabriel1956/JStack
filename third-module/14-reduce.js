const inventory = [
  { name: "iPhone", price: 5000, quantity: 2 },
  { name: "MacBook Pro", price: 20000, quantity: 1 },
  { name: "Magic Mouse", price: 1000, quantity: 5 },
];

const totalPrice = inventory.reduce((total, item) => {
  return total + item.price * item.quantity;
}, 0);

console.log({ totalPrice });
