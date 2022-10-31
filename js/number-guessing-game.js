function runGame() {
    const ranNum = Math.floor(Math.random() * 100) + 1;
    playerGuess = prompt('Guess a number between 1-100');
    guessing = true;

    while(guessing) {
        if (playerGuess == ranNum) {
            alert('You are right!');
        }
        else if (playerGuess > 100 || playerGuess < 1) {
            playerGuess = prompt('Please guess a valid number');
        }
        else if (playerGuess > ranNum) {
            playerGuess = prompt('Too large. Try a lower number');
        }
        else {
            playerGuess = prompt('Too small. Try a higher number');
        }
    }
}