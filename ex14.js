'use strict';

const readlineSync = require('readline-sync');
const size = readlineSync.questionInt("write a number: ");
var max = 0;
var min = 100;
var arr =[];
arr.length=parseInt(size);

for(var i=0;i<arr.length;i++){
    arr[i]= Math.floor(Math.random() * 50)+1;
}

for(var i=0;i<arr.length;i++){
    if (min>arr[i]){
        min = arr[i];
    }
    if(max<arr[i]){
        max = arr[i];
    }
}
console.log(`min is ${min}`);
console.log(`max is ${max}`);