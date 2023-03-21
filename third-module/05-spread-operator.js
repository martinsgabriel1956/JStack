const user = {
  name: "John",
  lastName: "Smith",
  age: 30,
  instagram: "@john_smith",
  skills: ["HTML", "CSS", "JS", "React", "Redux"],
  active: false,
};

console.log({ user });

const updatedUser = {
  ...user,
  active: true,
};

console.log({ updatedUser });
