const http = require("http");
const users = require("./mocks/users");

const server = http.createServer((request, response) => {
  const routeLog = {
    method: request.method,
    endpoint: request.url,
  };

  const isGetUsersDataRoute =
    routeLog.endpoint === "/users" && routeLog.method === "GET";

  if (isGetUsersDataRoute) {
    response.writeHead(200, { "Content-Type": "application/json" });
    const usersData = JSON.stringify(users);
    response.end(usersData);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`Cannot ${routeLog.method} ${routeLog.endpoint}`);
  }

  console.log(routeLog);
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
