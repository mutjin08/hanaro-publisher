/*
http://127.0.0.1:4000/?name=sujin&age=40
http://127.0.0.1:4000/add?x=4&y=5

get 방식일 때는 string
json 요소에 접근할 때 ob["키값"] 또는 ob.키값
키값에 hyphen 들어있으면 java 변수에 - 못 쓴다
ob["name"] 가능, ob.name 가능
ob["user-name"] 가능, ob.user-name 불가능
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
  if (pathName === "/") {

    console.log(query["name"]);
    console.log(query["age"]);
    
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`<h1>${query.name} ${query.age}</h1>`);
  }
  else if(pathName === "/add"){  // '=' 대신 '===' 사용
    let x = parseInt(query.x);
    let y = parseInt(query.y);

    res.writeHead(200, {"Content-Type": "text/html"});  // 'writeHeader' 대신 'writeHead'
    res.end(`<h1>${x}+${y}=${x+y}</h1>`);
  } 
  else {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>post</h1>");
  }
});

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});