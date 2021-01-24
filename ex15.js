'use strict';
const readlineSync = require('readline-sync');
function combineStrArr(strArr1,strArr2){
    if(strArr1.length<1){
        return;
    }
    var combArr = strArr1;
    for(var i = 0 ;i<strArr2.length ; i++){
        combArr.push(strArr2[i]);
    }
    return combArr;
}
const str1 = readlineSync.question('write a string: ');
var strArr1 = str1.split(' ');
const str2 = readlineSync.question('write a string: ');
var strArr2 = str2.split(' ');
console.log(combineStrArr(strArr1,strArr2));