const readlineSync = require('readline-sync');

var str = readlineSync.question('Write something: ');

var med = 0;
var flag = true;  
for(let i=0, j=str.length-1  ;i<str.length/2 && flag;i++,j--){
    if (str[i]!=str[j]){
        flag= false
    }
   
}
flag? console.log("palindrome"):console.log("not palindrome");
