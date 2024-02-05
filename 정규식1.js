//test함수
//정규식 함수, 정규식 객체에 있는 함수이다ㅏ
//패턴 존재 유무만 판단한다

//exec함수
//패턴에 해당하는 정보를 배열형태로 전달
//해당 패턴에 일치자가 없으면 : null 반환
//일치자가 있으면 : 단어, 인덱스, 입력문장, groups 반환
//정보를 그룹화 할 수 있다
//(\d{3})-(\d{4})-(\d{4}) -> 000-0000-0000

let s1 = "I like star";
let s2 = "Like you";
let s3 = "I don't like you";

console.log("\n/like/", "대소문자 구분함");
let regexp = new RegExp(/like/); //패턴객체 생성
console.log(s1, regexp.test(s1)); //true
console.log(s2, regexp.test(s2)); //false
console.log(s3, regexp.test(s3)); //true

console.log("\n/like/i", "대소문자 관계 없음");
regexp = new RegExp(/like/i); //패턴객체 생성
console.log(s1, regexp.test(s1)); //true
console.log(s2, regexp.test(s2)); //true
console.log(s3, regexp.test(s3)); //true

console.log("\n/^like/i", "like로 시작함, 대소문자 관계 없음");
regexp = new RegExp(/^like/i); //패턴객체 생성
console.log(s1, regexp.test(s1)); //true
console.log(s2, regexp.test(s2)); //true
console.log(s3, regexp.test(s3)); //true

console.log("\n/like$/i", "like로 끝남, 대소문자 관계 없음");
regexp = new RegExp(/^like$/i); //패턴객체 생성
console.log(s1, regexp.test(s1)); //true
console.log(s2, regexp.test(s2)); //true
console.log(s3, regexp.test(s3)); //true

console.log("\n\n\n------exec--------");
console.log("\n/like$/i", "like로 끝남, 대소문자 관계 없음");
regexp = new RegExp(/^like$/i); //패턴객체 생성
console.log(s1, regexp.exec(s1)); //true
console.log(s2, regexp.exec(s2)); //true
console.log(s3, regexp.exec(s3)); //true