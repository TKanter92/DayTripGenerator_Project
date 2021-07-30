"use strict";


function runDayTripGenerator(){
    let destOptions = ["Chicago", "Toronto", "Austin", "Seattle", "Los Angeles", "Miami"];
    let foodOptions = ["McDonalds", "Jimmy Johns", "Chick fil A", "Dominos", "Olive Garden"];
    let transOptions = ["Plane", "Bus", "Car", "Train", "Boat", "Police Escort", "Presidential Escort"];
    let funOptions = ["Comedy Show", "Waterpark", "Beach", "Museum", "Sporting Event"];

    

    let location = locationGenerator(destOptions);
    let foodChoice = foodGenerator(foodOptions, location);
    transGenerator(transOptions);
    entGenerator(funOptions);

    console.log()

    let userInput = prompt("What would you like to change: 1. destination 2. ")

    if(userInput == "1"){
        location = locationGenerator(destOptions);
    }
    else if()
}

function locationGenerator(randomTrip){
    let number = Math.floor((Math.random() * randomTrip.length));
    return randomTrip[number]
}



function foodGenerator(foodChoices, location){
    let foodChoice = false;
    for (let i = 0; i < foodChoices.length; i++){
        let restChoice = prompt("Would you like to eat at " + foodChoices[i] + " while in " + location + "? Please Enter yes or no.");
        if (foodChoice !== restChoice)
        foodChoices[i] ++;
        if (foodChoice === restChoice)
        return foodChoice;
    }
}

// function transGenerator(transChoices){
//     let transChoice = false;
//     for (let i = 0; i < transChoices.length; i++){
//         let carChoice = prompt("Would you like to travel to " + location + " by " + transChoices[i] + "? Please Enter yes or no.");
//         if (transChoice !== carChoice)
//         transChoices[i] ++;
//         if (transChoice === carChoice)
//         return transChoice;
//     }
// }

// function entGenerator(funChoices){
//     let funChoice = false;
//     for (let i = 0; i < funChoices.length; i++){
//         let entertainment = prompt("Would you like to go to a " + funChoices[i] + " while in " + location + "? Please Enter yes or no.");
//         if (entertainment !== funChoice)
//         funChoices[i] ++;
//         if (entertainment === funChoice)
//         return funChoice;
//     }
// }

runDayTripGenerator();