const http = require("http");
const { URL } = require("url");
const routes = require("./routes");
const PORT = 3000;

const server = http.createServer((request, response) => {
  const host = request.headers.host;
  const url = `http://${host}${request.url}`;
  const parsedUrl = new URL(url);

  let { pathname } = parsedUrl;
  let id = null;

  const splitEndpoint = pathname.split("/").filter(Boolean);
  const splitEndpointAmountIsMoreThanOne = splitEndpoint.length > 1;

  if (splitEndpointAmountIsMoreThanOne) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  const findRoute = (routeObj) =>
    routeObj.method === request.method && routeObj.endpoint === pathname;

  const route = routes.find(findRoute);

  if (route) {
    const searchParams = Object.fromEntries(parsedUrl.searchParams);
    request.query = searchParams;
    request.params = { id };

    const responseSendContent = (statusCode, content) => {
      response.writeHead(statusCode, { "Content-Type": "application/json" });
      const responseData = JSON.stringify(content);
      response.end(responseData);
    };

    response.send = responseSendContent;

    route.handler(request, response);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
