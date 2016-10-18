//Sets up the array of words that can be guessed. 
var words = ["nas", "biggie", "tupac", "big\xa0l", "a\xa0tribe\xa0called\xa0quest", "snoop\xa0dogg", "dr\xa0dre", "nwa", "wu\xa0tang\xa0clan", "beastie\xa0boys", "method\xa0man", "jay\xa0z", "busta\xa0rhymes", "big\xa0pun", "mos\xa0def", "ludacris", "run\xa0dmc", "gang\xa0starr", "ice\xa0cube", "mobb\xa0deep"];

//Sets up a function that chooses the word and returns it back. Exports is used so that this function is accessible within other JS files. 
exports.chooseWord = function(){
	var randNum = Math.floor((Math.random()*words.length)+1);
	return words[randNum];
}