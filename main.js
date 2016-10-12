//Requires that the game.js file is loaded in order to use this JS file. We need this in order to choose a word. 
var game = require('./game.js');
//Console logs the word using the return value of game.chooseWord(). The chooseWord function exists in the game.js file. 
console.log(game.chooseWord());