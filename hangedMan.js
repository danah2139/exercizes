'use strict';
const readlineSync = require('readline-sync');
const figlet = require('figlet');
const randomWords = require('random-words');

console.log(figlet.textSync('HANG MAN ',{font: 'Ghost',
horizontalLayout: 'default',
verticalLayout: 'default',
width: 120,
whitespaceBreak: true}));

var numberOfGuesses = 10;
var flag = false;
var word = randomWords();
word = word.toString();
var tempWord = starInWord(word);
var letter = '';

function starInWord(word){
    var arr=[];
    for(var i=0;i<word.length;i++){
        arr.push('*');
    }
    return arr;
}

function checkLetter(letter,word,tempWord){
    for(var i=0;i<word.length;i++){
        if(letter.toString().toUpperCase()==word[i].toString().toUpperCase()){
            tempWord.splice(i,1,word[i]);
            flag = true; 
        }
    }
    return tempWord;
}
console.log(word);


while(numberOfGuesses>0){
    console.log(`You have ${numberOfGuesses} guesses`);
    console.log("Your word is: ");
    console.log(tempWord.toString().replace(/,/g,''));
    letter = readlineSync.question("What is your guess? ",{limit:/[a-z]/i});
    while(letter.length>1){
        console.log("please enter only one character");
        letter = readlineSync.question("What is your guess? ",{limit:/[a-z]/i});
    }
    tempWord = checkLetter(letter,word,tempWord);
    if(!flag)
    {
        numberOfGuesses--;
    }
    flag =false;
    if(tempWord.toString().replace(/,/g,'')==word){
        console.log("WOW U R GOOD!");
        return;
    }
}
console.log("You lost! Bye Bye");



//var str = readlineSync.question("Wr",null,{type:String,})

