//exec함수
//패턴에 해당하는 정보를 배열형태로 전달

let s1 = "I like star";
let s2 = "Like you";
let s3 = "I don't like you";

console.log("\n/like$/i", "like로 끝남, 대소문자 관계 없음");
let regexp = new RegExp(/^like$/i); //패턴객체 생성
console.log(s1, regexp.exec(s1)); //true
console.log(s2, regexp.exec(s2)); //true
console.log(s3, regexp.exec(s3)); //true