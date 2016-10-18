//Requires the game.js file so that we can import the word we want the user to guess. 
var main = require("./main.js");

//Variable to grab the chosenWord export from main.js. We want to grab this instead of the function in game.js because the function will then run and possibly (most likely) choose a different word. We want to keep the word consistent so we choose the one from main.


//Function to check if a letter is present in the word.
exports.checker = function(){
	var wordToCheck = main.chosenWord;
	for(var i = 0; i < wordToCheck.length; i++){
		console.log(wordToCheck.charAt(i));
		if(wordToCheck.charAt(i) == main.letter){
			console.log("Function to display the guessed letter in the console in letter.js");
		}
		else{
			console.log("Function to tighten the hangman's noose.");
		}
	}
}; 

exports.wordCheck = function(){
	console.log("checking word...");
};
