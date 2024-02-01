//typeof는 함수가 아닌 연산자이다
//괄호의 유무 상관 없다
const n = 123;
console.log(typeof n); //number

//접미어 숫자 n
const bi = 123n; 
console.log(typeof bi); //bigint

//연습1
const s = "abc";
const ss = new String("abc");
console.log(typeof s);
console.log(typeof ss);

//객체1 == 객체2 : 서로 같은 메모리 공간을 공유한다
const s2 = "abc";
const ss2 = new String("abc");
console.log(typeof s, s==s2);
console.log(typeof ss, ss==ss2);

let c = n + Number(bi); //cannot mix number and bigint
console.log("c=", typeof c);

//연습2
console.log(null==0); //false
console.log(null==""); //false

console.log(undefined==0); //false
console.log(undefined==""); //false

//primitive 타입 -> number 객체
i = 0;
console.log(i.toString());
//console.log(100.toString());

/*
scope
변수가 자신의 영향력을 미치는 범위

전역변수
함수의 외부에 선언되는 변수
모든 함수가 이 변수를 사용할 수 있다
전역변수를 많이 사용하면 각 함수간의 결합력을 강화
한 함수에서의 변화가 다른 함수에 연쇄반응을 일으킴
프로그램 유지 보수에 좋지 않음
가급적 아주 제한적으로 사용하는 것이 좋음

지역변수
함수의 내부에 선언되는 변수
그 함수를 호출할 때 비로소 메모리가 할당
함수의 종료 즉시 메모리로부터 제거됨
영향력이 함수내에만 존재
가급적 많이 쓰자

객체 지향이 나오면서 변수의 scope가 좀 더 세분화됨
if 블락이나 for등의 block내에서만 존재하는 변수도 생김
이 block안에 만들어진 변수들은 그 block안에만 존재
js의 var을 이용한 선언은 이 부분이 적용되지 않음
호이스팅 : 함수단위의 scope는 var도 적용됨 but for문이나 while문등에서 선언된 변수에 대해서 별도로 인식하지 않고 모두 같은 것으로 인식하는 상황
그래서 let 탄생!

if, for, while등의 block 내에서만 존재하는 변수를 선언할 수 있음
앞으로의 변수 선언은 let 키워드를 이용해 선언하도록 권장되고 있다
*/
