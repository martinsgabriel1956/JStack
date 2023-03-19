function myFunction() {
  this.name = "John";

  const myArrowFunction = () => {
    this.lastName = "Martins";
  };

  myArrowFunction();
}

const logMyFunction = new myFunction();
console.log(logMyFunction);
console.log(this);
