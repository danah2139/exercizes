var readlineSync = require('readline-sync');

var str = readlineSync.question('Write something: ');

res = str.replace(/ /g,'*');
console.log(res);