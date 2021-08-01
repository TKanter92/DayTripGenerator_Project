"use strict";


function runDayTripGenerator(tripOptions = []) {
    let destOptions = ["Chicago", "Toronto", "Austin", "Seattle", "Los Angeles", "Miami"];
    let foodOptions = ["McDonalds", "Jimmy Johns", "Chick fil A", "Dominos", "Olive Garden"];
    let transOptions = ["Plane", "Bus", "Car", "Train", "Boat", "Police Escort", "Presidential Escort"];
    let funOptions = ["Comedy Show", "Waterpark", "Beach", "Museum", "Sporting Event"];
    
    let location = tripOptions[0];
    if (!location) {
        location = locationGenerator(destOptions)
    } 
    let transportation = tripOptions[1];
    if (!transportation) {
        transportation = transGenerator(transOptions)
    }
    let foodChoice = tripOptions[2];
    if (!foodChoice) {
        foodChoice = foodGenerator(foodOptions)
    }
    let entertainment = tripOptions[3];
    if (!entertainment) {
        entertainment = entGenerator(funOptions)
    }
    
    console.log("Here is your trip : You will be heading to " + location + " via " + transportation + ". You will stop for food at " + foodChoice + ", and spend some time at a " + entertainment + "!");

    let userInput = prompt("Please enter the number associated with the detail you wish to change. 1. Destination 2. Transportation 3. Food 4. Entertainment 5. No Change Needed");

    if (userInput == "1") {
        console.clear();
        location = locationGenerator(destOptions);
        runDayTripGenerator([false, transportation, foodChoice, entertainment]);
    } else if (userInput == "2") {
        console.clear();
        transportation = transGenerator(transOptions);
        runDayTripGenerator([location, false, foodChoice, entertainment]);
    } else if (userInput == "3") {
        console.clear();
        foodChoice = foodGenerator(foodOptions);
        runDayTripGenerator([location, transportation, false, entertainment]);
    } else if (userInput == "4") {
        console.clear();
        entertainment = entGenerator(funOptions);
        runDayTripGenerator([location, transportation, foodChoice, false]);
    } else if (userInput == "5") {
        console.log("Great choice! Your trip is set! Have fun!");
    }
}



function locationGenerator(randomTrip){
    let place = Math.floor((Math.random() * randomTrip.length));
    return randomTrip[place]
}

function foodGenerator(foodChoices){
    let foods = Math.floor((Math.random() * foodChoices.length));
    return foodChoices[foods]
}

function transGenerator(transChoices){
    let vehicle = Math.floor((Math.random() * transChoices.length));
    return transChoices[vehicle]
}

function entGenerator(funChoices){
    let fun = Math.floor((Math.random() * funChoices.length));
    return funChoices[fun]
}

runDayTripGenerator();