var readlineSync = require('readline-sync');

// Wait for user's response.
var Name = readlineSync.question('What is your name?');
console.log('Hello ' + Name + '!');


