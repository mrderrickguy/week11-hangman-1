//Requires that the game.js file is loaded in order to use this JS file. We need this in order to choose a word. 
var game = require('./game.js');
//Requires readline so that we can read user input in the console.
var readline = require('readline');
//Variable set up to hold the choice that the player makes later in requestInfo.
var choice;
//Variable set up to hold the letter the player choose in the guess function.
exports.letter; 
//Creates a variable called chosenWord that is set to equal the game.js function chooseWord's return. (Is this even english anymore?) This is an exports because we will need to acces it in other JS files. 
exports.chosenWord = game.chooseWord();

//Function to request user input to decide whether you want to guess a letter or guess the word. 
exports.requestInfo = function(){
	var r1 = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});

	r1.question("What would you like to do? (Guess a 'letter' or guess the 'word')", (answer) =>{
		choice = answer;
		r1.close();
		exports.guess();
	});
};

//Function to request user input to provide a guess, whether you asked for a letter or a word. 
exports.guess = function(){
	if(choice == "letter"){
		var r2 = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});

		r2.question("Which letter do you choose?", (answer) =>{
			exports.letter = answer;
			r2.close();
			console.log("You chose the letter "+exports.letter);
			//Requires that the word.js file is loaded in order to use this JS file. We need this in order to check if the letter is in the word.
			var word = require('./word.js');
			word.checker();
		})

	}
	else if(choice == "word"){

	}
	else{
		console.log("Wrong answer. Try 'letter' or 'word'.");
		exports.requestInfo();
	}
};

exports.requestInfo();