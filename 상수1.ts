const msg = "Hello";
const profile = {name:"홍길동", age:17}

//msg = "안녕하세요" 
//msg는 const로 선언되어서 내용을 변경할 수 없다
//Hello라는 문자열이 저장된 주소를 msg변수가 받는다
//안녕하세요는 다른 동네에 저장된다
//그래서 msg의 내용변경이 불가하다

//profile = {name:"김고순", age:5}
//const로 선언된 객체와 다른 객체 할당 불가능

profile.name = "김고순";
//profile이 소유하고 있는 객체의 name과 age는 상수가 아님
//name이 갖고 있는 값과 age가 갖고 있는 값은 변경 가능
//profile은 계속 동일한 객체 주소를 갖고 있다

console.log(profile);