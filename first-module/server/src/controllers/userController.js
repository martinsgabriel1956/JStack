let users = require("../mocks/users");

module.exports = {
  listUser(request, response) {
    const { order } = request.query;

    const sortUsers = (prev, curr) => {
      const orderIsDesc = order === "desc";
      if (orderIsDesc) {
        return prev.id < curr.id ? 1 : -1;
      }
      return prev.id > curr.id ? 1 : -1;
    };

    const sortedUsers = users.sort(sortUsers);
    const statusCode = 200;
    response.send(statusCode, sortedUsers);
  },
  getUserById(request, response) {
    const { id } = request.params;
    const findUser = (user) => user.id === Number(id);
    const user = users.find(findUser);

    if (!user) {
      response.writeHead(400, { "Content-Type": "application/json" });
      const errorMessage = JSON.stringify({ error: "user not found." });
      response.end(errorMessage);
    } else {
      response.writeHead(200, { "Content-Type": "application/json" });
      const userData = JSON.stringify(user);
      response.end(userData);
    }
  },
  createUser(request, response) {
    const { body } = request;
    const lastUserId = users[users.length - 1].id;

    const newUser = {
      id: lastUserId + 1,
      name: body.name,
    };

    users.push(newUser);
    response.send(200, newUser);
  },
  updateUser(request, response) {
    const { name } = request.body;
    let { id } = request.params;

    id = Number(id);

    const findUser = (user) => user.id === id;
    const userExists = users.find(findUser);

    if (!userExists) {
      return response.send(400, { error: "user not found." });
    }

    const updateUser = (user) =>
      user.id === id ? { ...userExists, name } : user;
    users = users.map(updateUser);

    response.send(200, { id, name });
  },
  deleteUser(request, response) {
    let { id } = request.params;
    id = Number(id);

    const hasNotEqualId = (user) => user.id !== id;
    const removeUser = users.filter(hasNotEqualId);
    users = removeUser;

    response.send(200, { deleted: true });
  },
};
