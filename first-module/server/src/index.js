const http = require("http");
const routes = require("./routes");
const PORT = 3000;

const server = http.createServer((request, response) => {
  const findRoute = (routeObj) =>
    routeObj.method === request.method && routeObj.endpoint === request.url;

  const route = routes.find(findRoute);

  if (route) {
    route.handler(request, response);
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
