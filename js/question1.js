/*
http://127.0.0.1:4000/add?x=4&y=5
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
  let query = url.parse(req.url, true).query;

  if (pathName === "/add") {
    let x = parseInt(query.x);
    let y = parseInt(query.y);

    res.writeHead(200, { "Content-Type": "text/html" });
    for (let i = 1; i <= y; i++) {
      res.write(`<h1>${x} x ${i} = ${x * i}</h1>`);
    }
    res.end(); // 응답 종료
  } else if (pathName === "/gugu") {
    gugu(req, res);
  }
});

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});

function gugu(req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });

  // 구구단 출력
  for (let i = 2; i <= 9; i++) {
    res.write(`<h2>${i}dan</h2>`);
    for (let j = 1; j <= 9; j++) {
      res.write(`<p>${i} x ${j} = ${i * j}</p>`);
    }
  }
  res.end(); // 응답 종료
}
