"use strict";


function runDayTripGenerator(){
    let destOptions = ["Chicago", "Toronto", "Austin", "Seattle", "Los Angeles", "Miami"];
    let foodOptions = ["McDonalds", "Jimmy Johns", "Chick fil A", "Dominos", "Olive Garden"];
    let transOptions = ["Plane", "Bus", "Car", "Train", "Boat", "Police Escort", "Presidential Escort"];
    let funOptions = ["Comedy Show", "Waterpark", "Beach", "Museum", "Sporting Event"];

    let location = locationGenerator(destOptions);
    let foodChoice = foodGenerator(foodOptions);
    let transportation = transGenerator(transOptions);
    let entertainment = entGenerator(funOptions);

    console.log("This is the current trip : You will be heading to " + location + " via " + transportation + ". You will stop for food at " + foodChoice + ", and spend some time at a " + entertainment + "!");

    let userInput = prompt("Please enter the number associated with the detail you wish to change. 1. Destination 2. Transportation 3. Food 4. Entertainment 5. No Change Needed");

    if(userInput == "1"){
        locationGenerator(destOptions);
    }
    else if(userInput == "2"){
        transportation = transGenerator(transOptions);
    }
    else if (userInput == "3"){
        foodChoice = foodGenerator(foodOptions);
    }
    else if (userInput == "4"){
        entertainment = entGenerator(funOptions);
    }
    else if (userInput == "5"){
        console.log("Great choice! Enjoy your Trip! Your day trip generator is now complete.")
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