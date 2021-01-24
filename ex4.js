'use strict';
var readlineSync = require('readline-sync');
try {
    let numbersOfFriends = readlineSync.question('How many people are you going with? ');
    let reg = /[^0-9]/g; 
    numbersOfFriends = numbersOfFriends.toString();
    if(numbersOfFriends.match(reg)){
        throw("stop execution")
    }
    let isKosher = readlineSync.question('Should it be Kosher? ');
    isKosher = isKosher.toString();
    reg = /[^yn]/i;
    if(isKosher.match(reg)){
        throw("stop execution")
    }
    if (isKosher=='Y' || isKosher=='y'){
         let isLemehadrin= readlineSync.question('Should it be Kashrut Lemehadrin? ');
         isLemehadrin = isLemehadrin.toString();
        if(isLemehadrin.match(reg)){throw("stop execution")}
        if(isLemehadrin=='Y'||isLemehadrin=='y') 
        {
            console.log('Yes,Kashrut Lemehadrin');}
        else{
            console.log('No Kashrut Lemehadrin');
        }
    }
    
    var typesOfFood = ['Asian', 'Barbecue', 'Vegetarian', 'Sea Food', 'Italian'];
    var index = readlineSync.keyInSelect(typesOfFood, ' What kind of food do you want?');
    console.log('Ok, ' + typesOfFood[index] + ' Bon appetit!');
    

} catch (error) {
    console.log(error);
}
