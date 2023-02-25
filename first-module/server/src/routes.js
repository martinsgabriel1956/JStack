const userController = require("./controllers/userController");

module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    handler: userController.listUser,
  },
  {
    endpoint: "/users/:id",
    method: "GET",
    handler: userController.getUserById,
  },
];
