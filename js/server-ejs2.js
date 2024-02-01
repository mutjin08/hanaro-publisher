/*
html 파일을 읽어서
ejs 엔진을 통해
js 객체와 html을 결합해서
새로운 html을 만들어 보내야 한다

ejs : JavaScript 코드를 HTML에 삽입하여 동적으로 내용을 생성하는 엔진
npm install ejs
*/

const http = require("http");
const host = "127.0.0.1";
const port = 4000;

const url = require("url");
const fs = require("fs");
const ejs = require("ejs");

let server = http.createServer((req, res) => {
});

server.listen(port, host, () => {
  console.log(`Server start at http://${host}:${port}`);
});

function add_input(req, res){
  fs.readFile("../html/add_input.html", "utf-8", function (error, data) {
    if (error) {
      console.error(error);
      res.setHeader("Content-Type", "text/html")
      //res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>Internal Server Error</h1>");
      return;
    }

    res.writeHead(200, { "Content-type": "text/html" });
    //data = ejs.render(data, {title:"hello"});
    //data = ejs.render(data, {title:"hello", contents:"안녕하세요", foods:["포도","사과","딸기"]})
    res.end(data);
  });
}