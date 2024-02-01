//http 프로토콜을 지원하는 nodejs의 모듈
let http = require("http"); 

//http.createServer 함수를 사용하여 서버 객체를 생성
//클라이언트가 접속해오면 createServer함수에서 콜백함수를 호출한다
let server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type":"text/html"}); //응답 헤더를 설정
  response.end("<h1>hello nodejs</h1>"); //응답 본문을 작성하고 클라이언트에게 전송
});

//서버 시작 및 대기
//listen : 대기상태로 들어간다
server.listen(3000, ()=>{
  console.log("서버 시작");
})

//http://localhost:3000/