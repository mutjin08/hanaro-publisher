//const fs = require('fs'); //이전표현식
//package.json파일에 "type" 속성이 module일때 작동됨
//const assert = require('assert');

import fs from 'fs'; 
import assert from 'assert'; //검증 할때 

class CommonClass
{
    //생성자
    _arr=[];  //메모리를 하나 만들음
    constructor(...args)
    {
        //가변 매개변수   ...args : 데이터가 배열로 전달된다. 자바의 String[]args
        //console.log( args );
        //console.log( Array.isArray( args[0]) ); //첫번째 요소가 배열이냐?
        if (Array.isArray( args[0]))
            this._arr = args[0];
        else 
            this._arr = args;

        //어떤 클래스로 객체를 생성했는지 확인할 수 있다. 
        console.log("생성자이름 ",  this.constructor.name);
    }

    //배열의 메모리 삭제 
    clear(){
        this._arr = [];  //새로 할당하면 아까 있던 애들 참조변수가 다 없어지면서 
                         //GC가 여유가 메모리 삭제한다. 
    }
    //배열의 복사본을 반환한다. - 복사본을 반환해야 실제 스택이나 큐메모리를 건드린다. 
    //깊은 복사로 던져줘야 한다. 안그러면 스택안의 데이터안의 메모리 공유가 벌어진다. 
    toArray() {
        //배열의 deepcopy가 [...배열];
        return [...this._arr];
    } //배열로 이용해서 만들라고 배열 배열 반환 

    print() {
        console.log( this._arr);
    } //   데이터 출력
    remove(){
       if(this.isQueue)
            this._arr.shift(); //큐는 앞쪽에서 삭제 
       else 
            this._arr.pop(); //뒤에꺼 삭제   
    } //스택의 경우 가장마직요소 삭제, 큐는 가장 먼저 들어간 요소 삭제

    get isEmpty(){
        //스택이나 큐가 비면 true 반환 
        return this._arr.length ===0; 
    } 
    get peek(){
        //스택의 경우 가장마지막요소 반환, 큐는 가장 먼저 들어간 요소 반환만 하고 삭제는 안함
        if(this.isQueue)  //스택의 배열의 마지막을 내보내고, 큐의 경우는 첫번째 
        {
            return this._arr[0];//첫번째꺼 
        }
        else 
        {
            //스택은 배열의 젤 마지막거 , lengh-1
            return this._arr[ this._arr.length-1];
        }
    } 
    //remove와 peek합친거 젤 앞에 있는거를 반환하고 삭제
    get poll(){ 
        if( this.isEmpty) //큐던 스택이던 비어있으면 null 반환
            return null;

        if(this.isQueue)
            return this._arr.shift(); //큐는 앞쪽에서 삭제 
        else 
            return this._arr.pop(); //뒤에꺼 삭제 

        //배열에서 앞에서 제거가 shift함수 - 앞에거 제거 
    } 

    get length(){
        return this._arr.length; //내부 배열의 크기를 주세요 
    }

    get isQueue(){ return this.constructor.name.toLowerCase() == "queue"; }
    get isStack(){ return this.constructor.name.toLowerCase() == "stack"; }
    //자바스크립트 JSON의 역할+람다
    
    toString(){
        return `${this.constructor.name} : ${this._arr}`;
    }
}


let c1 = new CommonClass();//매개변수
let c2 = new CommonClass([1,2,3]); //배열 만들어서 직접 전달할 수도 있고
let c3 = new CommonClass(1,2,3); //배열을 만들기 싫어서 데이터를 나열해서 전달 
                                 //배열에 넣고 싶다 

let a = c2.toArray(); //deepcopy 또는 hardcopy
a[0]=5;
console.log( a);
console.log( c2._arr);

//공통클래스 
class Stack extends CommonClass
{
    // map().filter().forEach
    //s.push(1).push(2).push(2);......
    push(data)
    {
        this._arr.push(data);
        return this;  //나를 반환한다 
    }

    pop(){
        if( this.length>0)
            return this.poll;
            //return this._arr[this.length-1];//마지막 
    }
}

class Queue extends CommonClass
{
    enqueue(data){
        this._arr.push(data);
        return this;
    }

    dequeue(){
        return this.poll; //제거 
    }
}

let s = new Stack();
console.log( "queue", s.isQueue );
console.log( "stack", s.isStack );

let q = new Queue();
console.log( "queue", q.isQueue );
console.log( "stack", q.isStack );

a.shift();//배열 앞의 요소를 제거한다 
console.log("a == ", a);

s.push("A").push("B").push("C").push("D").push("E");
console.log(s._arr);

console.log( "peek" , s.peek);
console.log( s.pop());
console.log( s.pop());
console.log( s.pop());

console.log( s.toString() );

q.enqueue("A").enqueue("B").enqueue("C").enqueue("D").enqueue("E");
console.log( q.toString() );
console.log(q.peek); 
console.log( q.dequeue() );
console.log( q.dequeue() );
console.log( q.toString() );

assert.strictEqual("a", "a");  // === 형전환도 안하고 둘이 내용이 같은지 같으면 아무출력
                               //서로 다를때 예외발생
assert.deepStrictEqual(new String("a"), new Object("a"));
//서로 타입은 다른데 내용이 같아 === 

// assert.strictEqual("a", "b"); 
assert.deepStrictEqual(s.toArray(), ["A", "B"]); //내용이 같으면 타입이 달라도 괜찮다












