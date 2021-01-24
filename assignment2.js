'use strict';

const readlineSync = require('readline-sync');

var points = 50;
console.log("########## WELCOME TO WAR ###########");
const name = readlineSync.question("Enter your name: ");
while(points>0){
    console.log(`Hello ${name} - your have currently ${points} ILS points!`);
    var bet = readlineSync.questionInt("Place your bet between 1 to 50 including for the next round: ");
    if((bet>50)||(bet<=0)){
        console.log( "invalid input Bye Bye") ;
        return;
    }
    var player = Math.floor(Math.random() * 12)+1; 
    var computer = Math.floor(Math.random() * 12)+1;

    console.log(`Your Card is ${player} and my is ${computer}`);

    if(player>computer){
        points+=bet;
        console.log(`You Won ${bet} ILS and now you have ${points} ILS`);
        const answers = ["play another round","leave with my money :-)"]
        var quest = readlineSync.keyInSelect(answers,"What would you like to do? ",{cancel:false});
        if(quest=='1'){
            console.log(`You have ${points} ILS Bye Bye`);
            return;
        }
    }
    else{
        points-=bet;
        console.log(`You Lost ${bet} ILS and now you have ${points} ILS`);
        if(points<=0){
            console.log("You are broke! Bye Bye");
            return;
        }
    }
}

