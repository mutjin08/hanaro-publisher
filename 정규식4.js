console.log("[KkcC]");
console.log(/[KkcC]/.test("korean"));
console.log(/[KkcC]/.test("Corean"));
console.log(/[KkcC]/.test("abc"));
console.log(/[KkcC]/.test("aKbewx"));

console.log("[KkcC]로 시작하는 단어");
console.log(/^[KkcC]/.test("korean"));
console.log(/^[KkcC]/.test("Corean"));
console.log(/^[KkcC]/.test("abc"));
console.log(/^[KkcC]/.test("aKbewx"));

//a[0123456789]b -> a[0-9]b
//숫자 앞뒤로 a와 b가 있는
console.log("/a[0-9]b/ : a와 b 사이에 숫자가 반드시 하나 존재해야 한다");
console.log(/a[0-9]b/.test("ab"));
console.log(/a[0-9]b/.test("a1b"));
console.log(/a[0-9]b/.test("a123b"));
console.log(/a[0-9]b/.test("sfdefseea5bsfdsfsdf"));

//^는 []기호와 쓰일 때 다른 의미를 갖는다
//^[^0-9] : 첫글자가 숫자이면 안된다
console.log("/a[^0-9]b/ 숫자를 배제하고");
console.log("/a[^0-9]b/", /a[^0-9]b/.test("a b"));
console.log("/a[^0-9]b/", /a[^0-9]b/.test("a$b"));
console.log("/a[^0-9]b/", /a[^0-9]b/.test("a3b"));
console.log("/a[^0-9]b/", /a[^0-9]b/.test("avb"));


console.log("/^[^0-9]/ 첫글자가 숫자로 시작하면 안된다");
console.log("/^[^0-9]/", /^[^0-9]/.test("1abc"));
console.log("/^[^0-9]/", /^[^0-9]/.test("a1bc"));

console.log("/[^0-9]/ 문장이 숫자만으로 구성되면 안된다");
console.log("/[^0-9]/", /[^0-9]/.test("1abc"));
console.log("/[^0-9]/", /[^0-9]/.test("123"));