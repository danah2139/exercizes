'use strict';
var readlineSync = require('readline-sync');

var num = readlineSync.questionInt('Insert a number between 0-9: ');

var dict = {1:'ONE',2:'TWO',3:'THREE',4:'FOUR',5:'FIVE',6:'SIX',7:'SEVEN',8:'EIGHT',9:'NINE'};

console.log(dict[num]);