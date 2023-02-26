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
    let body = "";

    const receiveAllChunks = (chunk) => (body += chunk);

    request.on("data", receiveAllChunks);

    const sendBodyParsed = () => {
      body = JSON.parse(body);

      const lastUserId = users[users.length - 1].id;

      const newUser = {
        id: lastUserId + 1,
        name: body.name,
      };

      users.push(newUser);
      response.send(200, newUser);
    };

    request.on("end", sendBodyParsed);
  },
};
