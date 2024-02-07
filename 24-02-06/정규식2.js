s = `
I like star
red star
blue star
I like star
I like cat
I like dog
My dog is pretty
I love my dog
`

console.log(/like/i.test(s)); //존재유무만
console.log(/like/i.exec(s)); //첫번째 것만

//exec 함수는 한개만 찾아온다
//i : 대소문자 구분 없이
//g : 문서 전체에서
console.log(/like/igm.exec(s));

//match 함수
//여러번 등장할 경우에 사용
//문자열.match(정규식)
//match함수는 정규식에 속한 함수가 아니라 문자열에 속한다
//매개변수로 정규식(리터럴)
//g옵션이 있을 때 여러개 검색한다
//배열로 알려준다 but. 몇 번 등장했는지는 알 수 없다
console.log("-----match함수-----");
result = s.match(/like/ig);
console.log(result);

s1 = "홍길동의 전화번호는 010-9811-5202입니다. 김고순의 우편번호는 123-456입니다";
let regexp = /\d{3}-\d{4}-\d{4}/
console.log(regexp.exec(s1));

console.log("group화 : ()로 서로 묶어준다")
regexp = /(\d{3})-(\d{4})-(\d{4})/
console.log(regexp.exec(s1));
result = regexp.exec(s1);
console.log(result[0], result[1], result[2], result[3])

//네이밍 그룹화 : 이름을 줄 수 있다
regexp = /(?<ph1>\d{3})-(?<ph2>\d{4})-(?<ph3>\d{4})/
console.log(regexp.exec(s1));
result = regexp.exec(s1);
console.log(result.groups["ph1"], result.groups["ph2"], result.groups["ph3"])

//문장에서 휴대폰 번호만 찾기
s1 = `
난도치 010-0356-0000
김고순 010-2340-3500
최고돌 010-0560-0450
강도치 010-0120-1234
박바늘 010-6711-5678
선인장 010-9811-5202
`
result = s1.match(/(\d{3})-(\d{4})-(\d{4})/ig);
console.log(result);

//search
//문자열 함수
//찾아서 인덱스를 반환한다
//첫번째 것만 찾는다. 없으면 -1을 반환한다
//정수를 반환하는 함수를 만들 때, 0번부터가 배열의 인덱스로 존재한다
//반환값이 객체여야 하는 경우는 참조를 반환 (-1을 가질 수 없음 -> 0또는 null을 반환)
//js의 경우에는 반환값이 없을 경우에 undefined가 반환된다
result = s1.search(/(\d{3})-(\d{4})-(\d{4})/ig);
console.log(result);

//replace 함수
//패턴을 패턴으로 바꿔치기가 가능하다
//문자열에서 함수를 갖고 있다
//like -> love로 바꾸기
//바뀐 문자열을 반환한다
//js의 string은 원래 string을 변경할 수 없다
//readonly 반환 문자열 받기


console.log(s1);
//문자열로 찾아서 바꿔치기(처음 하나만)
result = s.replace("like", "love");
console.log(result);
//패턴으로 찾아서 바꿔치기(처음 하나만)
result = s.replace(/like/ig, "love");
console.log(result);
//패턴으로 찾아서 바꿔치기(모두)
result = s.replaceAll(/like/ig, "love");
console.log(result);

//replace의 callback함수
//data 찾을 때 마다 callback 함수가 호출된다. callback함수의 호출자는 시스템이다. 따라서 반환값이 있어야 한다
//첫번째 변수 : 패턴
//두번째 변수 : 위치
//세번째 변수 : 문장
result = s.replace(/like/ig, function(a, b, c){
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
});

result = s.replace(/like/ig, function(item){
  console.log("item", item);
  return item.toUpperCase();
});
console.log(result);

console.log(result);
regexp = new RegExp(/\d{3}-d{4}-d{4}/g);
result  = s1.replace(regexp, function(item, index){
  console.log(item, index);
  return item;
})

regexp = new RegExp(/(\d{3})-(\d{4})-(\d{4})/g);
result1 = s1.replace(regexp, '$1$2$3');
console.log(result1);