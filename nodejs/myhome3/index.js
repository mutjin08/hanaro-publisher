import express, {request} from "express";
import ejs from "ejs";

let app = express()

//request 객체에 자동으로 body 붙여준다
app.use(express.json);
app.use(express.urlencoded({extended:false}));

//모든 응답처리를 담당한다
//use 함수에 parameter로 콜백함수를 준다
//(request, response, next); 세번째 매개변수인 next는 chain을 만들어서
//이번함수 -> 다음함수 -> 그 다음함수 여러번 거쳐서 처리될 때 유용
//잘 안씀. 의미가 중요
app.use("/", (request, response, next) => {
  console.log("/");
  next(); //밑의 url 없는 함수한테 던짐
})

app.use("/test", (request, response, next) => {
  console.log("/test");
  next(); //밑의 url 없는 함수한테 던짐
})

//어떤 경우에든 URL은 중복되면 안된다
//http://127.0.0.1:4000/get
app.get("/get", (request, response) => {
  response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
  response.end("<h1>GET 방식 전달</h1>");
})

app.get("/get", (request, response) => {
  let data = {product_name:"새우깡", product_price:4000};
  response.send(data); //node가 아니라 express가 제공한다
  //보내는 data의 형태에 따라 자동으로 결정한다
  //express framework 만든 사람들이 send 함수를 새로 만들었음
  //보내는 data의 형태에 따라 자동으로 지정한다
})

//http://127.0.0.1:4000/add?x=5&y=7
app.get("/add", (request, response)=>{
  //get 방식으로 parameter 전달시 : request 객체에 query가 json형태로 달려온다
  console.log(typeof request.query, request.query)//json
  let x = request.query.x;
  let y = request.query.y;
  response.send({"x":x, "y":y, "result":parseInt(x)+parseInt(y)});
})

//http://127.0.0.1:4000/add2/5/7/test
app.get("/add2/:x/:y/:msg", (request, response)=>{
  //get 방식으로 parameter 전달시 : request 객체에 query가 json형태로 달려온다
  let x = request.params.x; //let x = request.query.x;
  let y = request.params.y;//let y = request.query.y;
  let msg = request.params.msg;
  response.send({"x":x, "y":y, "result":parseInt(x)+parseInt(y), "msg":msg});
})

//html 파일 만들어서 form tag를 통해서 POST로 전송 OR curl OR postman으로 접근
//browser URL은 무조건 get 방식임
app.post("/post", (request, response) => {
  response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
  response.end("<h1>POST 방식 전달</h1>");
})

//postman으로 해야 한다
//JSON으로 보내던 x-www-form-urlencoded 방식을 사용해서 보내든 처리방식이 동일하다
//springboot의 경우 @RequestBody => json을 처리하고자 할 때 x-www-form-urlencoded는 그냥 받음
app.post("/userinfo", (request, response) => {
  // app.use(express.json);
  // app.use(express.urlencoded({extended:false}));
  let name = request.body.name;
  let age = request.body.age;

  //send함수가 적절한 헤더를 알아서 보내준다
  //writeHead를 호출하지 않는다
  response.send({ name: name, age: age, result: 'OK' });
})

app.use((request, response)=>{
  response.writeHead(200, {"Content-Type":"text/html; charset=utf-8"});
  response.end("<h1>Hi Express</h1>");
  next();
});

app.listen(4000, ()=>{
  console.log("server start http://127.0.0.1:4000");
})