/* initialize variables*/
var allLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var compPick="";
var lettersPicked=[];
var totAllowedGuesses=9
var winCount=0;
var lossCount=0;
/*
-Reset all counters to 0/(9 for t.a.g) at call of program. Do not refresh screen on win or loss.
-Prompt for a letter (html) to start.
-Random generate compPick(does this need to happen before prompt- timing?)
-Check to make sure input is valid, convert case
-Add to winCount/lossCount
-If winCount=1 clear lettersPicked array, restart game (display clear field on screen)
-If totAllowedGuesses>=9 add to lossCount, restart game.
-Add to lettersPicked (can we use it both as counter and display?)
*/
function logletters (list){

for (var i=0; i<list.length;i++){
	console.log(list[i]);
}
}
logletters(allLetters)
compPick = allLetters[Math.floor(Math.random() * allLetters.length)];
console.log(allLetters[Math.floor(Math.random())]);
console.log(allLetters.length);
console.log(compPick)
/*if (str.match(/[a-z]/i)) {
// alphabet letters found
else
alert("Not a alphabetical letter- try again!")
}*/