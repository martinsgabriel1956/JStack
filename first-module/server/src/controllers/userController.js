const users = require("../mocks/users");

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
    response.writeHead(200, { "Content-Type": "application/json" });
    const usersData = JSON.stringify(sortedUsers);
    response.end(usersData);
  },
};
