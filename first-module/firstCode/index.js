const { printName, lastName } = require("./printName");
const os = require("os");

console.log(`${printName("John")} ${lastName}`);
console.log(os.type());
