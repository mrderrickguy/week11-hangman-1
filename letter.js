var main = require('./main.js');
var guessArr = [];
var guessDisplay = "";
var wordArr = [];

//Separates the wordChoice into an array for easier accessibility.
exports.initDisplay = function(){
	var wordChoice = main.chosenWord;
	for(var i = 0; i<wordChoice.length; i++){
		wordArr.push(wordChoice.charAt(i));
		if(wordChoice.charAt(i) == '\xa0'){
			guessArr.push('\xa0');		
		}
		else{
		guessArr.push('_');
		}
	};
}

//Displays what the user has guessed/blanks in the word file. 
exports.displayWord = function(){
	guessDisplay = "";
	for(var i = 0; i <guessArr.length; i++){
		guessDisplay += guessArr[i]+" ";
	}
	console.log(guessDisplay);
};

exports.editArray = function(position, letter){
	guessArr[position] = letter; 
};