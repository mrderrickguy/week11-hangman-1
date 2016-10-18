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
	if()
	if(main.gameOver == false){
		main.requestInfo();
	}
	else if(main.gameOver == true){
		console.log("Game over");
	}

}; 

exports.wordCheck = function(){
	console.log("checking word...");
};
