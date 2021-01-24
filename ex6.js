
var readlineSync = require('readline-sync');

do {
var num = readlineSync.questionInt("please choose a number larger than 10: ");
}
while(num<=10)
console.log("thank you");