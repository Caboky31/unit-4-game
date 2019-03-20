//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// created and crystal object                             START OF JAVASCRIPT
 //------------------------------------------------------------------------------------------------------------------------------------------------------------//
let crystal = {
    crystal1:
    {
        name: "crystal1",    // crystal.value calls the value of 1 0f the 4 properties
        value: 0
    },
    crystal2:
    {
        name: "crystal2",
        value: 0
    },
    crystal3:
    {
        name: "crystal3",
        value: 0
    },
    crystal4:
    {
        name: "crystal4",
        value: 0
    }
};
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
// Scores
let currentScore = 0; // Score of player
let targetScore = 0; // Score player needs to tie to win ( generated at random)

let winCount = 0; // Currents wins for player
let loseCount = 0; // Currents losses for player


// Functions
//---------------------------------------------------------------------------------------------
let getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;   // generates a random number between parm1 and parm2 decieded when you call function
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
let startGame = () => {   // starts game 
    currentScore = 0; /// started score is 0
    targetScore = getRandom(19, 120); //calls function to generate random numbers between 19, 120

    crystal.crystal1.value = getRandom(1, 12); // generates a random # between 1 and 12 bassed on the parm we pass
    crystal.crystal2.value = getRandom(1, 12); // generates a random # between 1 and 12 bassed on the parm we pass
    crystal.crystal3.value = getRandom(1, 12); // generates a random # between 1 and 12 bassed on the parm we pass
    crystal.crystal4.value = getRandom(1, 12); // generates a random # between 1 and 12 bassed on the parm we pass

$("#yourScore").html(currentScore); // updates the HTML with the current score
$("#targetScore").html(targetScore); // updates the HTML with the targets score 
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var addValues = crystal => { // adds updated values to html bassed on user guesses/clicks

    currentScore = currentScore + crystal.value; // currents score is updated by calling the crystal object and it's values

    $("#yourScore").html(currentScore);

    checkWin(); // calls checkWin fu
}
//------------------------------------------------------------------------------------------------------------------------------------------------------------//
var checkWin = () => {                   // function to check win/lose and update HTML based on that
    if(currentScore > targetScore){
        alert("You Lose!");
        loseCount++;// adds 1 to losecount
        $("#loseCounts").html(loseCount); // updates html
        startGame(); // restarts browswer/game 
    }
    else if(currentScore == targetScore){
        alert("You Win!");
        winCount++; // adds 1 to wincount
        $("#winCounts").html(winCount); // updates html
        startGame(); // restarts browswer/game 
    }
}

//Add click functions to all crystal images using JQuery
//---------------------------------------------------------------------------------------------
startGame(); // calls startGame function which starts game

$("#img1").click( () => {
    addValues(crystal.crystal1); // Adds onclick function to img using a jQuery
});
$("#img2").click( () => {
    addValues(crystal.crystal2);// Adds onclick function to img using a jQuery
});
$("#img3").click( () => {
    addValues(crystal.crystal3);// Adds onclick function to img using a jQuery
});
$("#img4").click( () => {
    addValues(crystal.crystal4);// Adds onclick function to img using a jQuery
});

//------------------------------------------------------------------------------------------------------------------------------------------------------------//
//                                                                     END  OF JAVASCRIPT
//------------------------------------------------------------------------------------------------------------------------------------------------------------//