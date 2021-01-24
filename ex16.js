'use strict';
const readlineSync = require('readline-sync');
function reverseNumbers(arr){
    var temp;
    for(var j = 0, i=arr.length-1;i>0 , j< i; i--,j++)
    {   
        temp = arr[j] 
        arr[j] = arr[i];
        arr[i]= temp;
    }
    return arr;

}

const numbers = readlineSync.question(" write a  list of numbers: ");
var arr = [];
arr = numbers.split(' ');
for(var i=0;i<arr.length;i++ ){
    if(arr[i].search(/[0-9]/g)==-1){
        arr.splice(i,1);
    }
}

console.log(reverseNumbers(arr));

