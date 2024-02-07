class NodeData{
  data;
  next;
  constructor(data){
    this.data = data; //데이터 공간
    this.next = null; //다음번 요소에 대한 주소값
  }
}

class MyList{
  constructor(){
    this.head = new NodeData();
    this.tail = new NodeData();

    this.head.next = this.tail;
    this.tail.next = this.tail;
  }

  //head쪽에 data 추가하기
  insertHead(data){
    let temp = new NodeData();
    temp.data = data;
    temp.next = this.head.next;
    this.head.next = temp;
  }

  insertOrdered(data){
    let temp = new NodeData();
    temp.data = data;

    let t1 = this.head.next;
    let t2 = this.head;
    let stop = false;

    while(!stop && t1 != this.tail){
      if(t1.data < temp.data){
        t1 = t1.next;
        t2 = t2.next;
      }
      else{
        stop = true;
      }
    }

    temp.next = t2.next;
    t2.next = temp;
  }

  display(){
    let trace = this.head.next;
    while(trace!=this.tail){
      console.log(trace.data);
      trace = trace.next
    }
  }

  
  deleteItem(){
    
  }
}

class Stack{
  data = new MyList();
  push(data){
    this.data.insertHead(data);
  }
  pop(){

  }
  get isEmpty(){
    return this.data.head.next == this.data.tail;
  }
}

let list = new MyList();
list.insertOrdered("A");
list.insertOrdered("B");
list.insertOrdered("C");

list.insertHead("f");
list.insertHead("g");
list.insertHead("h");
list.insertHead("i");
list.insertHead("j");

list.display();