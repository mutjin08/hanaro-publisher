//require -> 외부 모듈을 불러온다
//import -> 
// java 
// 모듈을 불러오는것이 아니다. 이미 모듈이 메모리에 로딩되어 있다
// 원래는 java.lang.String을 써야하지만 String이라고만 쓰면 import 된 파일에서 찾아본다
// node, python
// import 해야만 모듈이 메모리에 가져와진다

let fs = require("fs");

fs.readFile("./멀티스레드.txt", "utf-8", function(error, data){
  //console.log(error);
  console.log(data);
})

let data = fs.readFileSync("./멀티스레드.txt", "utf-8");
console.log(data);

console.log("완료!!!");