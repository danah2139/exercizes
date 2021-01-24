'use strict';
const readlineSync = require('readline-sync');
// capitalize(a, e, i, o, u,y) 

const str = readlineSync.question('write a string: ');

function setCharAt(str,index,chr) {
    var part1=str.substring(0,index);
    let rest =index+1;
    let part2 =str.substring(rest,str.length);
    return part1 + chr + part2 ;
}

const vowel = ['a','e','i','o','u','y'];
var newStr = str;
var c;

for( c=0; c<str.length;c++){
    if (vowel.includes(str[c])){
        newStr= setCharAt(newStr,c,str[c].toUpperCase());
    }
}
console.log(newStr);

