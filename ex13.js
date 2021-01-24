'use strict';
const readlineSync = require('readline-sync');
const str = readlineSync.question('write a string: ');
var strArr = str.split(' ');
var count =0;
var max =0;
var index = 0;
for(var i=0; i<strArr.length;i++){
    var j=0;
    while(j<strArr[i].length){
        if(strArr[i][j].search(/([a-z]|[A-Z])/g)!=-1)
        { 
            count++;
        }
        j++;
    }
    if(count>max){
        max=count;
        index=i ;
    }
    count = 0;
}

console.log(strArr[index]);


