import http from "http";
import fs from "fs";
import ejs from "ejs" //npm install ejs

//ejs : html문서와 json 객체를 합쳐서 새로운 html 문서를 만든다

//createServer : 클라이언트가 접속요청을 하면 자신에게 전달된 callback함수 호출
let server = http.createServer((request, response)=>{
  response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
  response.end("<h1>한글도 가능</h1>");
});

server.listen(3000, "127.0.0.1", ()=>{
  console.log("http://127.0.0.1:3000 start")
  //listen이 완료되면 호출된다
});

//nodemon - node 모니터링 -> 소스 바뀌면 자동으로 재시작
//ubuntu에서 putty로 들어가서 접속
//p2 또는 nginx에 올리기도 함
//p2 설치하고 가동
//p2 : ubuntu에서 node를 demon으로 실행시키게 한다