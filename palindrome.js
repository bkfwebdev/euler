"use strict";
 var currentNumber = 0;
 var currentString = ""
 var palindromes = []; 
 var bigNum = 0;

 
console.log("start!");
// console.log(reverseString("This is a test of the reverse string function"));
for (let x = 1000; x <= 9999; x++){
    for (let y = 1000; y <= 9999; y++){
        currentNumber = x * y;
        isPalindrome(currentNumber);
        //console.log(currentNumber);

    }

}
console.log(bigNum);
console.log("finish!");

function reverseString(str) {
    return str.split("").reverse().join("");
}

 function isPalindrome (someNumber){
    let someString = String(someNumber)
    // console.log(someString);
    let putItInReverse = reverseString(someString);
    // console.log(putItInReverse);
    
     if(someString === putItInReverse){
         palindromes.push(someNumber);
         if(someNumber > bigNum){bigNum = someNumber;}
         // console.log(someNumber);
        }
 }