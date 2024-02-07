import http from "http";
import fs from "fs";
//ejs : html문서와 json 객체를 합쳐서 새로운 html 문서를 만든다
import ejs from "ejs"; //npm install ejs
import url from "url";

//함수 map을 만들자
//일일이 if문 사용말고 for문써서 해당 url이 오면 함수를 호출하자
const pathMap = [
  {"path":"/", function:index},
  {"path":"/test", function:test},
]

//createServer : 클라이언트가 접속요청을 하면 자신에게 전달된 callback함수 호출
let server = http.createServer((request, response)=>{
  let pathName = url.parse(request.url, true).pathName;
  if(request.method=="GET"){
    let idx = pathMap.findIndex((item)=>{item.path==pathName})
    if(idx!=-1){
      pathMap[idx].function(request, response);
    }
  }
  else if(request.method=="POST"){

  }
  else{
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    response.end("<h1>한글도 가능</h1>");
  }
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

function index(request, response)
{
    //1.html 파일 읽기 
    fs.readFile('./html/index.html', "utf-8", (error, data)=>{
        if(error)
        {
            console.log("파일을 찾을 수 없습니다.");
            return;
        }

        let result = ejs.render(data); //현재는 아무값도 전달하지 않아서 render를 거치나
                     //안거치나 똑같음 
        response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
        response.end(result);
    })
}

function test(request, response)
{
    
}