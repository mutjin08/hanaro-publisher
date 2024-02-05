 //변수 여러개를 동시에 초기화 가능하다
 //일반함수로 만들면 함수가 뒤에 있어도 초기화가 가능하다
x = y = 5;
let output = (x, y)=>{
  console.log("x=",x,"y=",y);
}
output(x, y);

//연산수식들을 괄호로 묶어주면 차례대로 수행된다
q = (p=3, p = 4+5)
console.log(q);

//거듭제곱
console.log(2**3);


//클래스는 반드시 객체를 만들어야 하는가?
//클래스 : !!!관련있는!!! 데이터와 함수의 결합
//1.데이터와 함수가 결합이 된다
//2.데이터만 있는 클래스도 가능하다
//3.함수만 존재하는 클래스도 가능하다
//3.1.math - 거듭제곱, 반올림, 삼각함수 -> 객체를 생성하지 않고 사용하는 클래스의 대표적인 예시
//3.2.함수나 변수가 static 키워드가 붙으면 전역공간(static)


//undefined
//Cannot read properties of undefined(reading length)
let arr1;
console.log(arr1, typeof arr1);
//console.log(arr1.length);

//예외 발생 시
//브라우저 : dom 구조 출력에 아무 문제가 없고 script만 돌아가지 않는다. 치명적이지 않음
//serverside script platform(eg.nodejs) : 사이트가 다운된다. web server가 예외에 의해서 완전 다운되는 상황을 막기 위해 `객체?` 사용한다.
//객체참조변수 `?` : 이 객체 참조변수에는 객체가 있을 수도 있고 없을 수도 있다.
let arr2;
console.log(arr2?.length);



//old
let arr3;
if(arr3==undefined){
  arr4 = [];
}

//new
let arr5;
arr5 = arr5 ?? []; //undefined라면 []를 만들어 전달해라
console.log("init by this method?",arr5?.length);

//boolean
//자동형변환
console.log(1+true, 1+false);

//0이 아닌 모든 값은 true로 인식된다
if(-1&&1&&-0.1){
  console.log("이게 프린트된다는건 0만 false라는 뜻~~");
}

//삼항연산자
myMax = x>y?x:y;
console.log(myMax);

a=1, b=2, c=(a++, b++); //쉼표 연산자는 마지막 표현식의 값을 반환합니다. 따라서 c에는 2가 할당됩니다.
console.log(a, b, c);

//페이지 자동 이동을 방지하는 방법
/*
<a href="javascript:void(0)">클릭</a>
<a href="#none">클릭</a>
*/

x = 0.2, y = 0.3, z = 0.1;
let equal = Math.abs(x-y+z) < Number.EPSILON; // 0 < 매우작은수 ???
console.log(equal, x - y + z);

for(i=0;i<=1;i++){
  console.log(i, i.toFixed(1));
}

/*
매개변수를 함수에 전달하는 방법
1. call by value
2. call by pointer - c언어만 지원
3. call by reference - reference(pointer) 즉 변수의 주소를 함수에 전달하는 것이다
*/

function addPoints(x, y){
  x = x + 3;
  y = y + 7;
}

addPoints(0.123456, 2);
//함수를 호출하면 stack이라는 공간에 함수가 자리를 차지한다
//매개변수 공간을 두 개 확보하고
//x 라는 매개변수에 값 0.123456을 복사
//y 라는 매개변수에 값 2를 복사

