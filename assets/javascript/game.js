


//Set up an array for alphabet
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Declared variables for wins, losses, guesses of game
var wins = 0;
var losses = 0;
var guesses = 8;
var badLetters = [" "];

//Computer picks random letter
var computerLetter = letters[Math.floor(Math.random() * letters.length)];

// Function to update letter during reset
var updateLetter = function () {

  computerLetter = letters[Math.floor(Math.random() * letters.length)];
}

// Function created to reset the game
var resetGame = function() {

  guesses = 8;
  badLetters = [" "];

  //resets letter and updates html based on if statements below
  updateHtml();
  updateLetter();


}

// Function created so that html updates when game is over
var updateHtml = function(userLetter) {

  //Displays Wins/Losses/Guesses/Letters guessed in HTML
    var updateWins = "<p>Wins: " + wins + "</p>";
    var updateLosses = "<p>Losses: " + losses + "</p>";
    var updateGuess = "<p>Guesses Left: " + guesses + "</p>";
    var letterDisplay = "<p>Letters you've guessed: </p>" + badLetters.join(" ");
    var gameDiv = document.getElementById("game");
    gameDiv.innerHTML = updateWins + updateLosses + updateGuess + letterDisplay;

}


//***Starts game at key press (start of function)***
document.onkeyup = function(event) {

  //Keyboard pressed creates value for the variable userLetter
  var userLetter = event.key;

  updateHtml(userLetter);

 
  if (userLetter === computerLetter) {

    wins++;
    alert("You're psychic!");
    resetGame();
    

  }

  else if(userLetter != computerLetter) {

    guesses--;
    // console.log(guesses);
    badLetters.push(userLetter);
    // console.log(badLetters);
    
  }

  if (guesses === -1) {

    losses++;
    alert("Your will never be the next Miss Cleo. Better luck next time!");
    resetGame();
    

  }

   

  

console.log('Computer Letter: ' + computerLetter);
  // console.log(wins);
  console.log(guesses);

};

 



  






