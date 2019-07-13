var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
               't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerGuesses;
var userGuesses = [];
var wins = 0;
var losses = 0;
var guessesLeft = 9;

var updateComputerGuesses=function() {
    var nComputerGuesses =letters[ Math.floor(Math.random()*letter.length)];
    computerGuesses= String.fromCharCode(97 + nComputerGuesses);
    console.log("computerGuesses =" + computerGuesses);
};

var updateUserGuesses=function() {
    document.querySelector("#UserGuesses").innerHTML = "user guesses = " + userGuesses;
};

var updateWins=function() {
    document.querySelector("#Wins").innerHTML = "wins = " + wins;
};

var updateLosses=function() {
    document.querySelector("#Losses").innerHTML = "losses = " + losses;
};

var updateGuessesLeft=function() {
    document.querySelector("#GuessesLeft").innerHTML = "guessesLeft = " + guessesLeft;
};

function reset() {
    console.log('reset');
}

reset();

document.onkeyup = function(event) {
    console.log('onKeyUp')
    var keyEntered = event.key.toLowerCase();
    userGuesses.push(keyEntered);
    guessesLeft--;

    if (computerGuesses == keyEntered) {
        wins++;
        reset();
    }

    if (guessesLeft === 0) {
        losses++;
        reset();
    }

    else {
        updateUserGuesses();
        updateGuessesLeft();
    }
};

    

