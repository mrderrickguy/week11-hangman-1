//Requires that the game.js file is loaded in order to use this JS file. We need this in order to choose a word. 
var game = require('./game.js');
//Requires readline so that we can read user input in the console.
var inquirer = require('inquirer');
//Variable set up to hold the choice that the player makes later in requestInfo.
var choice;
//Variable set up to hold the letter the player choose in the guess function.
exports.letter; 
//Variable to hold the word the player guesses in the guess function.
exports.wordGuess;
//Creates a variable called chosenWord that is set to equal the game.js function chooseWord's return. (Is this even english anymore?) This is an exports because we will need to acces it in other JS files. 
exports.chosenWord = game.chooseWord();

//Function to request user input to decide whether you want to guess a letter or guess the word. 
exports.requestInfo = function(){
	var questions = [
	{
		type: "input",
		name: "whatDo",
		message: "What would you like to guess? 'letter' or 'word'?"
	}
	];

	inquirer.prompt(questions).then(function(answers){
		
		var answer = JSON.Stringify(answers.whatDo);
		console.log(answer);
		if(answer == "letter"){
			guess("letter");
		}
		else if(answers == "word"){
			console.log("You want to choose a word");
		}
		else{
			console.log("Wrong answer. Please try again.");
			exports.requestInfo();
		}
	})
};

//Function to request user input to provide a guess, whether you asked for a letter or a word. 
exports.guess = function(type){
	if(type == "letter"){
		var questions = [
				{
					type: "input",
					name: "letter",
					message: "Which letter do you choose?"
				}
		];

		inquirer.prompt(questions).then(function(answers){
			letter = answers.letter;
			word.checker();
		})
	}
	else{
		var questions = [{
			type: "input",
			name: "word",
			message: "Which word do you choose?"
		}];

		inquirer.prompt(questions).then(function(answers){
			wordGuess = answers.word;
			word.checker();
		})
	}
	
};

exports.requestInfo();