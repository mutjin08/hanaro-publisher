let s = "red,green,blue,cyan,magenta,sky,purple";

//문자열을 특정 기호를 기반으로 분리한다
let results = s.split(",");
console.log(results);

//특정 기호를 기반으로 문자열을 합친다
console.log(results.join("vv"));
console.log(results.join("\n"));

//padding
console.log("한글", "*");
console.log("한글".padStart(6), "*");
console.log("1".padStart(3,0)); //001, 002, 003, ...
for(i=90;i<=100;i++){
  console.log(i.toString().padStart(3,0));
}

//*substring
let today = "2024-02-05";
console.log(today.substring(0, 4)); //(start, end)
console.log(today.substring(5, 7));
console.log(today.substring(8, 10));

//slice
console.log(today.slice(0, 4));

//*trim : 문자열 앞뒤에 쓸데 없는 공백을 제거한다
//input tag에 id 입력시 space test spacce
s = "          test           ";
console.log(s.trim());

//ascii code
//parity bit
//짝수parity : 1의 개수가 짝수
//홀수parity : 1의 개수가 홀수
//hamming code : 검출과 동시에 수정도 가능한 알고리즘
//checksum : 연산식 수행 결과가 마지막 번호

console.log("0", "0".charCodeAt(0));

//parseInt : 숫자를 문자로 바꿔준다
x = "123"; //[49, 50, 51]
x = 123; //123->2진수로 바꾸어 저장

//s에 문자가 들어가 있으면 -1을 반환한다
//숫자로 되어 있으면 123을 만들어 반환한다ㅏ
function myParseInt(s){
  let result = 0;
  for(i=0;i<s.length;i++){
    if(s.charCodeAt(i)<48 ||s.charCodeAt(i)>57){
      return -1;
    }
    result = result * 10 + s.charCodeAt(i) - 48;
  }
  return result;
}
result = myParseInt("123") + myParseInt("456") //567
console.log(result);

console.log(String.fromCharCode(65));
console.log(String.fromCharCode(97));

let holiday = "한글날";
let month = 10;
let day = 9;

console.log(s);
function ff(txts, a, b, c){
  console.log(txts);
  console.log(a);
  console.log(b);
  console.log(c);
}
s = ff`${holiday}는 ${month}월 ${day}일 입니다.`;

function upperToLower(s){
  let regexp = new RegExp(/[A-Z]/g);
  let r = s.replaceAll(regexp, (str)=>{
    return "*"+str.toLowerCase()+"*-";
  })
  return r;
}
console.log(upperToLower("Senior Coding Learning JS"));