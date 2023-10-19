const http = require("http");

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "application/json");
  response.setHeader("X-Powered-By", "NodeJS");

  const { url, method } = request;

  if (url === "/books") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "GET",
        })
      );
    }

    if (method === "POST") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "POST",
        })
      );
    }

    if (method === "PUT") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "PUT",
        })
      );
    }

    if (method === "DELETE") {
      response.statusCode = 200;
      response.end(
        JSON.stringify({
          message: "DELETE",
        })
      );
    }
  } else {
    response.statusCode = 404;
    response.end(
      JSON.stringify({
        message: "NOT FOUND!",
      })
    );
  }
};

const server = http.createServer(requestListener);

const port = 9000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
