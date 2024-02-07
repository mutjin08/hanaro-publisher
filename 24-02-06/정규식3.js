reg  = /cat/;
//reg = newRegExp(/cat/); //동일하다
let sentence1 = "I love my cat";
let sentence2 = "I love my Dog and Cat";
console.log(reg.test(sentence1), reg.test(sentence2));

reg = /cat/i; //대소문자 상관 없이
console.log(reg.test(sentence1), reg.test(sentence2));

reg = /^cat/i; //cat으로 시작하는, 대소문자 상관 없이
let sentence3 = "Cat is lovely";
console.log(reg.test(sentence1), reg.test(sentence2), reg.test(sentence3));

reg = /cat&/i; //cat으로 끝나는, 대소문자 상관 없이
console.log(reg.test(sentence1), reg.test(sentence2), reg.test(sentence3));

reg = /c.t/i; //c와 t사이에 한글자(줄바꿈 제외), 대소문자 상관 없이
console.log(reg.test("ct"));
console.log(reg.test("ccct"));
console.log(reg.test("cat"));
console.log(reg.test("ctt"));

reg = /l....l/; //l과 l사이에 4글자