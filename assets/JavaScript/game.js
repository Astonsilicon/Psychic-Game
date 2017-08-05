// Array 
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// wins losses
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var guessesLeft = 9;
    var guessedLetters = [];
    var letterToGuess = [];



// functions
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(computerChoices);

    var updateGuessesLeft = function() {
      document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
    };

    var updateLetterToGuess = function() {
      this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
    };

    var updateGuessesSoFar = function() { 
      document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
    };

    var reset = function() {
      totalGuesses = 9;
      guessedLetters = [];
      guessesLeft = 9;
     

      updateGuessesSoFar();
      updateLetterToGuess();
      updateGuessesLeft();
    }

    updateLetterToGuess();
    updateGuessesLeft();



    document.onkeyup = function(event) {
      guessesLeft--;
      var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();
// if, else statements 
  if ((guessesLeft > 0) && (userGuess == letterToGuess)) {
    
        wins++;
        document.querySelector('#wins').innerHTML = "Wins: " + wins;
        alert("Congratulations, you are psychic!");
        reset();
    
  } else if (guessesLeft == 0) {
      
      losses++;
      document.querySelector('#losses').innerHTML = "Losses: " + losses;
      alert("Sorry, you're not psychic, or maybe you are... try again?");
       
      reset();
  }
};
