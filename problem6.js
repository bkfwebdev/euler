"use strict";

function sumOfsquares(num){
  let  rval=0;
for (let x=1; x<= num; x++){
rval = rval + Math.pow(x,2);
}
return rval;
}

function squareOfsums(num){
  let rval = 0;
  for(let x=1; x<=num; x++){
    rval = rval + x;
  }
  rval = Math.pow(rval,2);
  return rval;
}

console.log(sumOfsquares(10));
console.log(squareOfsums(10));

console.log(squareOfsums(100)-sumOfsquares(100));
