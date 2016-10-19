//Requires the game.js file so that we can import the word we want the user to guess. 
var main = require("./main.js");
var letter = require("./letter.js");

//Function to check if a letter is present in the word.
exports.checker = function(){
	var wordToCheck = main.chosenWord;
	for(var i = 0; i < wordToCheck.length; i++){
		if(wordToCheck.charAt(i) == main.letter){
			letter.editArray(i, main.letter);
		}
	}
	letter.displayWord();
	main.lives++; 
	if(main.gameOver == false){
		main.requestInfo();
	}
	else if(main.gameOver == true){
		console.log("Game over");
	}

}; 

//Function to check if the word guessed is correct. If it is, then we tell the user that they guessed it, we should then ask if they want to play again.
exports.wordCheck = function(){
	var guess = main.wordGuess;
	var word = main.chosenWord;
	if(guess == word){
		console.log("You guessed it!");
		main.playAgain();
	}
	else{
		console.log("Sorry, incorrect.");
		main.lives++;
		main.requestInfo();
	}
};
