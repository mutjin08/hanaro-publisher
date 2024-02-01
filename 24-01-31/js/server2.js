const http = require("http");
const host = "127.0.0.1";
const port = 4000;
const fs = require("fs");

let server = http.createServer((req, res) => {
  console.log(req.method);
  if (req.method === "GET") {
    fs.readFile("./html/input.html", (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        res.end("Internal Server Error");
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html");
        res.end(data);
      }
    });
  }
});

server.listen(port, host, () => {
  console.log(`Server start at http://${host}:${port}`);
});
