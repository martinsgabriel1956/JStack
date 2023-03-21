const user = {
  name: "John",
  lastName: "Smith",
  age: 30,
  instagram: "@john_smith",
  skills: ["HTML", "CSS", "JS", "React", "Redux"],
};

const { name, skills, ...rest } = user;
const [primary, secondary] = skills;

console.log(rest);
