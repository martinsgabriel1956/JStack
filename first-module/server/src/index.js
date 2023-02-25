const http = require("http");
const { URL } = require("url");
const routes = require("./routes");
const PORT = 3000;

const server = http.createServer((request, response) => {
  const host = request.headers.host;
  const url = `http://${host}${request.url}`;
  const parsedUrl = new URL(url);

  const findRoute = (routeObj) =>
    routeObj.method === request.method &&
    routeObj.endpoint === parsedUrl.pathname;

  const route = routes.find(findRoute);

  if (route) {
    const searchParams = Object.fromEntries(parsedUrl.searchParams);
    request.query = searchParams;
    route.handler(request, response);
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
