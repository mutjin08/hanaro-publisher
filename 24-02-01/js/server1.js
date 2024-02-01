/*
http://127.0.0.1:4000/?name=sujin&age=40
*/

const http = require("http");
const host = "127.0.0.1";
const port = 4000;
const fs = require("fs");
const url = require("url");

let server = http.createServer((req, res) => {

  console.log(req.method);
  console.log(req.url);

  let pathName = url.parse(req.url).pathname;
  if (req.method == "GET" && pathName == "/") {
    let query = url.parse(req.url, true).query; // Corrected the way to parse query parameters
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>${query.name} ${query.age}</h1>`);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>post</h1>");
  }
});

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});
