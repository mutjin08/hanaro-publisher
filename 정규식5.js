//* 앞의 문자가 0번 이상 반복되기만 하면 된다
console.log("* : 패턴이 0번 이상 반복되는 경우");
console.log(/a*b/.test("b"));
console.log(/a*b/.test("aaaaab"));
console.log(/a*b/.test("cccccbaaaaaa"));

//+ 앞의 문자가 1번 이상 반복되기만 하면 된다
console.log("+ : 패턴이 1번 이상 반복되는 경우");
console.log(/a+b/.test("b"));
console.log(/a+b/.test("aaaaab"));

//{n} : n번 반복
console.log("{n}");
console.log("/[0-9]{3}/", /[0-9]{3}/.test("1abc"));
console.log("/[0-9]{3}/", /[0-9]{3}/.test("1234"));

//email validation
function ValidateEmail(mail)
{
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        return (true)
    }
    return (false)
}

//전화번호 
//[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}
//\d{2,3}-\d{3,4}-\d{4}
console.log("전화번호 형식 출력하기");
regexp = new RegExp(/\d{2,3}-\d{3,4}-\d{4}/);
console.log("010-1111-2222", regexp.test("010-1111-2222"));
console.log("000000010-1111-2222", regexp.test("000000010-1111-2222"));
console.log("\b : 단어의 경계를 결정짓는다");
regexp = new RegExp(/\b\d{2,3}-\d{3,4}-\d{4}\b/);
console.log("010-1111-2222", regexp.test("010-1111-2222"));
console.log("000000010-1111-2222", regexp.test("000000010-1111-2222"));