const myArrowFunction = () => "Hello World!";

console.log(myArrowFunction());

const someNumber = 10;

const sum = () => (someNumber >= 10 ? "Maior ou igual a 10" : "Menor que 10");

console.log(sum());

const getUser = () => ({
  name: "John",
  lastName: "Doe",
});

console.log(getUser());
