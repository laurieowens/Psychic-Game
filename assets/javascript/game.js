/* initialize variables*/
var allLetters=["a","b","c","d"];
var compPick="";
var lettersPicked=[];
var totAllowedGuesses=9
var winCount=0;
var lossCount=0;
/*

-Reset all counters to 0 at call of program. Do not refresh screen on win or loss.
-Prompt for a letter (html) to start.
-Random generate compPick(does this need to happen before prompt- timing?)
-Check to make sure input is valid, convert case
-Add to winCount/lossCount
-If winCount=1 clear lettersPicked array, restart game (display clear field on screen)
-If totAllowedGuesses>=9 add to lossCount, restart game.
-Add to lettersPicked (can we use it both as counter and display?)


*/
if (str.match(/[a-z]/i)) {
// alphabet letters found
else
alert("Not a alphabetical letter- try again!")
}