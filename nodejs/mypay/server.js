import http from 'http';
import fs from 'fs';
import ejs from 'ejs';
import url from 'url';
import path from 'path';

const pathMap = [
  {"path":"/", "func":index},
  {"path":"/weekpay", "func":weekpay},
  {"path":"/weekpay_result", "func":weekpay_result},
];

let server = http.createServer((request, response)=>{
  let pathName = url.parse(request.url, true).pathname;
  console.log(pathName+"*", pathMap[0].path+"*");
  if(request.method=="GET"){
    let idx = pathMap.findIndex((item)=>item.path==pathName);
    console.log(idx);
    if(idx!=-1){
      pathMap[idx].func(request, response);
    }
  }
  else if(request.method=="POST"){}
  else{
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    response.end("<h1>한글도 가능하다구~</h1>");
  }
});

server.listen(3000, "127.0.0.1", ()=>{
  console.log("http://127.0.0.1:3000 start");
})

function index(request, response){
  fs.readFile("./html/index.html", "utf-8", (error, data)=>{
    if(error){
      console.log("파일을 찾을 수 없습니다");
      return;
    }

    let result = ejs.render(data);
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    response.end(result);
  })
}

function weekpay(request, response){
  fs.readFile("./html/weekpay.html", "utf-8", (error, data)=>{
    if(error){
      console.log("파일을 찾을 수 없습니다");
      return;
    }

    let result = ejs.render(data);
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    response.end(result);
  })
}

function weekpay_result(request, response){
  let params = url.parse(request.url, true).query;
  console.log(params);

  fs.readFile(path.resolve()+"/html/weekpay_result.html", "utf-8", (error, data)=>{
    if(error){
      console.log("파일을 찾을 수 없습니다");
      return;
    }
    
    weekpay_result = parseInt(params.per_hour)*parseInt(params.total_time);

    let result = ejs.render(data, {...params, "result":weekpay_result});
    response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
    response.end(result);
  })
}