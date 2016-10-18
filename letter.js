var main = require('./main.js');


exports.displayWord = function(){
	var wordChoice = main.chosenWord;
	var wordArr = [];
	var guessArr = [];

//Separates the wordChoice into an array for easier accessibility. 
	for(var i = 0; i<wordChoice.length; i++){
		wordArr.push(wordChoice.charAt(i));
		if(wordChoice.charAt(i) == '\xa0'){
			guessArr.push('\xa0');		
		}
		else{
		guessArr.push('_');
		}
	};

//Displays what the user has guessed/blanks in the word file. 
	for(var i = 0; i <guessArr.length; i++){
		console.log(guessArr);
	}
}

