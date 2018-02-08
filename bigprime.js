"use strict";
var thatBigNumber = 600851475143;
var thePrimeFactors = [];

function isAfactor(value){
    return (thatBigNumber % value == 0)
}


/* 
function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
*/

function isPrime(n) {
    return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/));
  }

for (let i = 1 ; i <= thatBigNumber; i++){
    if (isAfactor(i) && isPrime(i)){thePrimeFactors.push(i)}
}

console.log(thePrimeFactors);



