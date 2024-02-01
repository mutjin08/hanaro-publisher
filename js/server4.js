/*
http://127.0.0.1:4000/
postman - post - body - x-www-form-urlencoded
잘 해결됨 나 그냥 get으로 계속 보내고 있어서 오류남...
*/
const http = require("http");
const host = "127.0.0.1";
const port = 4000;

let server = http.createServer((req, res)=>{
  console.log(req.method);
  console.log(req.url);

  if(req.method == "POST"){
    callProcess(req, res);
  }
  else{
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>This is First Server<h1/>");
  }
})

function callProcess(req, res){
  let body = "";
  req.on("data", (data)=>{
    body += data;
  })

  req.on("end", ()=>{
    var data = new URLSearchParams(body.toString());

    //json구조 아님
    console.log(data);
    console.log("name" + data.get("name"));
    console.log("age" + data.get("age"));

    res.writeHead(200, {'Content-Type':'text/html'});
    var result = "<h1>이름: "+data.get("name")+"</h1>";
    result += "<h1>나이: "+data.get("age")+"</h1>";
    res.end(result);
  })
}

server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});