
var readlineSync = require('readline-sync');
var assembly = readlineSync.questionInt("Write positive number ");
var result = assembly;
for (var i = 1; i<assembly; i++)
{
    result *=i;
}
console.log(result);