'use strict';

const readlineSync = require('readline-sync');
const chalk = require('chalk');
const emoji = require('node-emoji')


var score =0;
console.log(chalk.green("```````````````````````````````````````"));
console.log(chalk.greenBright("WHICH DISNEY CHARCTER R U?? "));
console.log(chalk.green("```````````````````````````````````````"));
console.log(chalk.red("QUESTION 1"));
console.log(chalk.red('How many Hours r u sleep at night?'));
let answers = ['At least 8 hours', 'Who sleep?', 'I sleep only in the morning', 'Between 4-8 hours'];
let index = readlineSync.keyInSelect(answers,null,{cancel:false});
let quest1={0:4,1:2,2:1,3:1};
score +=quest1[index];

console.log("-------------------------------------------------");
console.log(chalk.red("QUESTION 2"));
console.log(chalk.red('How many books did u read?'));
answers = ['Maybe 50', 'I cant count , over 100 at least', 'I dont like to read', 'Maybe 5 for the book report'];
index = readlineSync.keyInSelect(answers,null,{cancel:false});
let quest2= {0:2,1:4,2:1,3:1}; 
score += quest2[index];

console.log("--------------------------------------------------");
console.log(chalk.red("QUESTION 3"));
console.log(chalk.red('What is your favorite color?'));
answers = ['pink', 'Gray', 'Blue', 'Red'];
index = readlineSync.keyInSelect(answers,null,{cancel:false});
let quest3 = {0:2,1:1,2:1,3:4};
score +=quest3[index]

console.log("-------------------------------------------------------");
console.log(chalk.red("QUESTION 4"));
console.log(chalk.red('What kind of sport activity u like to do'));
answers = ["All kind of sport, such as tennis , football etc' "
, 'I like to walk or run twice a week', 'I love sport but I dont have time  fot it', 'Im lazy!'];
index = readlineSync.keyInSelect(answers,null,{cancel:false});
let quest4 = {0:2,1:4,2:1,3:1};
score +=quest4[index];

console.log("---------------------------------------------------");
console.log(chalk.red("QUESTION 5"));
console.log(chalk.red('What is your favorite food?'));
answers = ['Hamburger', 'Spaghetti', 'Something healthy like shoup', 'Pizza'];
index = readlineSync.keyInSelect(answers,null,{cancel:false});
let quest5 = {0:1,1:2,2:4,3:1};
score +=quest5[index];
console.log("---------------------------------------------------\n")

switch(true){
    case score <= 5:
        console.log(emoji.emojify(':star:'),chalk.blueBright("Andrew Stanton ! You like to party and to have fun!"),emoji.emojify(':star:'));
        break;
    case score <=10:
        console.log(emoji.emojify(':star:'),chalk.blueBright("Mulan ! U R a fighter !"),emoji.emojify(':star:'));
        break;
    case score <=16:
        console.log(emoji.emojify(':star:'),chalk.blueBright("Belle! You love paople and dont compromise on your principles"),emoji.emojify(':star:'));
        break;
    case score <=20:
        console.log(emoji.emojify(':star:'),chalk.blueBright("Cinderella! YOU SUCH A NICE PERSON"),emoji.emojify(':star:'));
        break;
}

