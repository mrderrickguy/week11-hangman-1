//Requires the game.js file so that we can import the word we want the user to guess. 
var main = require("./main.js");
var letter = require("./letter.js");

//Function to check if a letter is present in the word.
exports.checker = function(){
	var wordToCheck = main.chosenWord;
	for(var i = 0; i < wordToCheck.length; i++){
		console.log(wordToCheck.charAt(i));
		if(wordToCheck.charAt(i) == main.letter){
			console.log("Function to add guessed letter to array");
		}
		else{
			console.log("Function to tighten the hangman's noose.");
		}
	}
}; 

exports.wordCheck = function(){
	console.log("checking word...");
};
