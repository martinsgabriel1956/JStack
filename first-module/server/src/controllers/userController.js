const users = require("../mocks/users");

module.exports = {
  listUser(request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    const usersData = JSON.stringify(users);
    response.end(usersData);
  },
};
