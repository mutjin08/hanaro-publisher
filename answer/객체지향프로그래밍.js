/*
은닉성 - 자동차 => 껍데기가 없으면 오염이 쉽고 고장이 자주 난다. 
                  껍데기를 씌워서 보호하자 
                  클로저 처럼 : 데이터를 보호, 접근권한(private, public)
상속성 - 처음부터 새로 안만들고 근접한것들이 있으면 상속받아 만든다. 
         코드의 재활용도를 높이고 프레임워크를 만드는데 가장 중요한 성격  
다형성 - 다양한 성격, overloading, overriding 두가지가 지원 
               a = 4 + 5;    + 연산자는 정수 더하기
               b = "4" + "5";  + 연산자는 문자열 합치기 

추상성 - 클래스 내부구조의 정확한 내용을 몰라도 사용이 가능한 성격 
        추상성이 극대화될수록 사용자가 편해진다. 
        자동차 => 발명(부품 하나 하나 깎아 만든다.), 상당히 구체적
              => 핸리포드 컨베이이어 밸트, 
              추상화된 자동차가 사용자는 편하다 .그러가 만드는 사람은 더 어렵다.  
 
1세대 :  기계어, 어셈블리어 - 하드웨어를 속속들이 알아서 프로그램 해야 한다. 
        레지스터 16개 , 
2세대 : 코볼(데이터처리전문), 포트란(과학기술계산용) 두개 기능을 합친언어를 만들 수준이 
       안되서 각각 전문처리언어, 모로 가로 서울만 가면 된다.
       대충 만들어서 결과가 나온다, 
3세대 : 구조적 프로그래밍 언어 
        모듈단위로 프로그램을 작성한다. (함수, 프로시저가 존재)
        함수는 반환값이 있고 프로시저는 반환을 못함 => 함수(C언어)
        하드웨어로부터 개발자를 떼어놓는다. 개발자가 하드웨어의구체적 사용법을 몰라도 
        프로그램이 가능하다. C언어는 모든 하드웨어를 파일과 동일시를 함
        파일 입출력만 하면 모든 장비제어가 가능하다. ==> 자바, 자바스크립트
        구조체 => 데이터만 묶어놓은 데이터의 추상화 
        함수 => 처리과정의 추상화 
        알고리즘 중심 

 4세대 :  구조체를 하나 만들고, 이 구조체의 데이터를 접근하기 위한 함수를 만든다. 
          구조체 1000개 , 구조체마다 접근함수 최소 5개 이상임 
          1000개 , 최소함수가 5000개 
         
          구조체 + 관련있는 함수 묶자 => 클래스라고 하자 

          구조체 => 클래스 
          데이터만 있는 클래스도 있고 
          데이터와 함수가 같이 있는 클래스도 있고 
          함수만 있는 클래스도 있다 

          스택이나 큐나 링크드리스트 - 부품형 클래스, 자기자체가 완결구조가 아니고 
          다른 클래스에서 갖다 쓸 클래스들 
*/

class Person
{
    //생성자는 객체 생성시 호출되는 특별한 유형의 함수다 
    //호출자가 => 시스템이다. 우리가 아무거나 만들어놓고 얘가 생성자야라고하면 
    //시스템은 못알아듣는다. 자바 클래스명(), 자바스크립트 ,constructor()
    //사용자가 생성자를 안만들면 시스템이 만들어서라도 호출한다. 
    //자바스크립트는 overloading이 지원되지 않는다.
    //생성자는 여러개 있으면 안된다. 
    //소멸자 -> 객체가 소멸될때 호출해야 되는데 GC(Gabage Collector)가 있는 언어들이 
    //GC가 책임진다. 소멸자는 없는걸로 
    //name;
    //age; 

    //자바처럼 private나 protected public 없느냐 
    //없다. 다만 _ 하나를 붙이면 아 저거 보호하려고 하는구나
    //
    constructor(name="홍길동", age=23)
    {
        //this:객체자신을 가리키는 자기 참조자라고 한다. 
        this._name = name;  //생성자에서 변수를 선언해도 한다
        this._age = age;

        //공통메모리 공간=>공동의 변수 
        console.log("Person 객체 생성");
    }

    //함수앞에 function 못붙임 
    display(){
        console.log(`${this._name} ${this._age}`);
    }

    //속성:property - 함수와 변수의 중간쯤 존재 
    //만들때는 get 함수명(){ ...}  실제 사용시에는 변수처럼 사용할 수 있다 

    //자바의 getter/setter역할을 하긴 한다.
    //get함수는 변수값 하나만 가져갈때 사용 
    get Age() {   //값 읽어갈때 사용
        return this._age;
    }

    //값 하나만 바꾸게 , 값 바꿀때
    set Age(value){            // setAge=15;
        this._age = value;
    }

    get Name(){ return "이름은 " + this._name; }
    set Name(value){ 
        this._name=value; 
    }
}

let person = new Person();
let person2 = new Person("장길산", 12);

person.display();
person2.display();
person.Age = 55;  //사용시에 변수처럼 사용한다. 만드는 쪽에선 함수형태이다. 
                  //set이구현되어야한다
console.log( person.Age ); //get이 구현되어야 한다. 

person.Name = "김경훈"; //set호출, set 이 없으면 이렇게 사용불가 
console.log( person.Name ); //get호출 get이 없으면 사용불가 

//못막음 _ 있는것을 암묵적으로 private로 본다.
person._name="eee";
console.log( person._name );



