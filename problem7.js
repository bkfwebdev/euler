"use strict";

function isPrime(n) {
  return !(Array(n + 1).join(1).match(/^1?$|^(11+?)\1+$/));
}

var tally1 = 1;
var tally2 = 1;
var primes = [];
while (tally2 <= 10001){
    if (isPrime(tally1)){
        primes.push(tally1);
        tally2 = tally2 + 1
        }
        tally1 = tally1 + 1;
}

console.log(primes);


