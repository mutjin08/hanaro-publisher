/*
http://127.0.0.1:4000/?name=sujin&age=40
*/
const http = require("http");
const host = "127.0.0.1";
const port = 4000;

let server = http.createServer((req, res)=>{
  console.log(req.method);

  if(req.method == "POST"){
    callProcess(req, res);
  }
  else{
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>This is First Server<h1/>");
  }
})

function callProcess(req, res)
{
    //POST방식은 body에 데이타를 별도로 보내서 GET방식과 별도의 처리를 해야 한다
    let body = "";
    req.on('data', (data)=>{
        body+=data;
    })
    req.on('end', ()=>{
        var data = new URLSearchParams(body.toString());
        //json구조 아님
        console.log( data);
        console.log("name " + data.get("name"));
        console.log("age " + data.get("age"));
        res.writeHead(200, {'Content-Type':'text/html'});
        var result = '<h1>이름 : '+data.get("name")+'</h1>';
        result += '<h1>나이 : '+data.get("age")+'</h1>';
        res.end(result);
    });
}
server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});