


//Set up an array for alphabet
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//Declared variables for wins, losses, guesses of game
var wins = 0;
var losses = 0;
var guesses = 8;
var badLetters = [];

//Computer picks random letter
var computerLetter = letters[Math.floor(Math.random() * letters.length)];

// Function to update letter during reset
var updateLetter = function () {

  computerLetter = letters[Math.floor(Math.random() * letters.length)];
}

// Function created to reset the game
var resetGame = function() {

  guesses = 8;
  badLetters = [];

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
  var x = event.keyCode;

  if (x >= 65 && x<=90) {
 
  // if letter user chooses equals computer's letter, wins increases by 1, alerts user correct letter is picked, game resets
  if (userLetter === computerLetter) {

    wins++;
    alert("You're psychic!");
    resetGame();
    

  }

  // if letter user chooses doesn't equal computer's letter, guesses decreases by 1 and pushes userLetter to badLetters array
  else if(userLetter != computerLetter) {

    //comparing wrongly chosen letters with the array of badLetters
    var badArray = badLetters.indexOf(userLetter);

    //helps prevent duplicate letters from entering array
    if (badArray === -1) {

      guesses--;
      badLetters.push(userLetter);

    }

    
  }

  // if run out of guesses, increases number of losses by 1, alerts user incorrect letter wasn't found, game resets
  if (guesses === 0) {

    losses++;
    alert("Your will never be the next Miss Cleo. Better luck next time!");
    resetGame();
    

  }



  }

  else {

    alert("Please press a letter!");
  }

  //calls function to display on keypress and puts it in function
  updateHtml(userLetter);

  console.log(x);

};

   

  
// Testing purposes
// console.log('Computer Letter: ' + computerLetter);
//   console.log('Wins: ' + wins);
//   console.log(guesses);



 



  






