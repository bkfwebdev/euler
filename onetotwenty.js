"use strict";
function one2twenty(someNumber){
    let booly = true;
    for (let x = 1; x <= 20; x++){
        booly = (someNumber % x == 0);
        if (booly == false){ return booly; }
    }
    return booly;
}

var myNumber = 1;
while (one2twenty(myNumber) == false){
    myNumber = myNumber + 1;
}

console.log(myNumber);
