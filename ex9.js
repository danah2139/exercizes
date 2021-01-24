var readlineSync = require('readline-sync');
var flag = true;
var n = readlineSync.questionInt("Write number ");
for(var i=2; i<n;i++){
    for(var j=2;j<i && flag;j++) {
        if ((i%j)==0){
            flag = false;
        }
    }
    flag ?  console.log(i) : flag = true ; 
    
}