
'use strict';
var readlineSync = require('readline-sync');

function sumNumbers(num1,num2){
    var sum = num1 + num2;
    if(sum==10)
    {console.log("makes 10");}
    else 
    {console.log("nope");}
}

// Add 2 numbers from the user
var num1 = readlineSync.questionInt('Insert a number: ');
var num2 = readlineSync.questionInt('Insert another number: ');

sumNumbers(num1,num2);