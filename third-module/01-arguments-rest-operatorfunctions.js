function sum() {
  const allArgs = Object.values(arguments);
  console.log(allArgs);
}

const anotherSum = (...args) => {
  console.log(args);
};

sum(1, 2, 3, 4, 5, 6, 7, 8, 9);
anotherSum(1, 2, 3, 4, 5, 6, 7, 8, 9);
