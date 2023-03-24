const tech = "Node.js";
const techs = ["HTML", "CSS", tech, "JavaScript"];

const includesValueOfString = tech.includes("Node");
const includesValueOfArray = techs.includes("Node");
const startWith = tech.startsWith("Nod");
const endsWith = tech.endsWith("s");

console.log(includesValueOfString);
console.log(includesValueOfArray);
console.log(startWith);
console.log(endsWith);
