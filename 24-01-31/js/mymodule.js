//mymodule.js

function sigma(limit=10){
  if(limit<10){
    return ; //값을 지정하지 않으면 undefined가 전달된다
  }

  let s = 0;
  let i;

  for(i=1;i<=limit;i++){
    s += i;
  }
  return s;
}

console.log(sigma());
console.log(sigma(100));

function upper(target){
  return target.toUpperCase();
}

//다른 파일에서 이 함수를 접근할 수 있다
exports.mysigma = sigma;
exports.myupper = upper;

