import fs from 'fs';
import assert from 'assert';

class CommonClass{
  _arr = [];
  constructor(...args){
    if (Array.isArray(args[0])){
      this._arr = args[0];
    }
    else{
      this._arr = args;
    }

    console.log("생성자이름", this.constructor.name);
  }
  clear(){
    this._arr = [];
  }
  toArray(){
    return [...this._arr];
  }
  print(){
    console.log(this._arr);
  }
  remove(){
    if(this.isQueue){
      this._arr.shift();
    }
    else if(this.isStack){
      this._arr.pop();
    }
  }
  get isEmpty(){
    return this._arr.length === 0;
  }
  get peek(){
    if(this.isQueue){
      return this._arr[0];
    }
    else if(this.isStack){
      return this._arr[this._arr.length - 1];
    }
  }
  get poll(){
    if(this.isEmpty){
      return null;
    }
    
    if(this.isQueue){
      return this._arr.shift();
    }
    else if(this.isStack){
      return this._arr.pop();
    }
  }
  get length(){
    return this._arr.length;
  }
  get isQueue(){
    return this.constructor.name.toLowerCase() == "queue";
  }
  get isStack(){
    return this.constructor.name.toLowerCase() == "stack";
  }
}