/* initialize variables*/
var allLetters=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var compPick="";
var youPick="";
var lettersPicked=[];
var totAllowedGuesses=9;
var winCount=0;
var lossCount=0;
/*
-Reset all counters to 0/(9 for t.a.g) at call of program. Do not refresh screen on win or loss.
-Prompt for a letter (html) to start.
-Random generate compPick(does this need to happen before prompt- timing?)
-Check to make sure input is valid, convert case
-Add to winCount/lossCount
-If winCount=1 clusysear lettersPicked array, restart game (display clear field on screen)
-If totAllowedGuesses>=9 add to lossCount, restart game.
-Add to lettersPicked (can we use it both as counter and display?)
*/
function startGame(){

console.log("guess",totAllowedGuesses);
compPick = allLetters[Math.floor(Math.random() * allLetters.length)];
	for (var i=0; i < allLetters.length; i++){
		console.log(allLetters[i]);
		//lettersPicked.push(youPick);
	}
//console.log("first comppick",compPick);
document.getElementById('guessesLeft').innerHTML = totAllowedGuesses;
/*if(youPick !== compPick){
	totAllowedGuesses--


	}*/
}
//*document.getElementById('guessesLeft').innerHTML = totAllowedGuesses;
document.getElementById('youPickedThis').innerHTML = lettersPicked;
//document.getElementById('countYerWins').innerHTML = winCount;
//*document.getElementById('countYerLosses').innerHTML = lossCount;*/
//console.log(youPickedThis);
//console.log(totAllowedGuesses);
//console.log(lettersPicked);
startGame();
document.onkeyup = function(event){
	var youPick = String.fromCharCode(event.keyCode).toLowerCase();
	//console.log("youpick", youPick);
	//console.log("compick ",compPick)

	/*if(compPick === youPick){
		winCount++;
		alert("YES!");
		document.getElementById('winningLetter').innerHTML = compPick;
		document.getElementById('countYerWins').innerHTML = winCount;
		console.log("wincount ",winCount);
		startGame();*/
if(totAllowedGuesses===0){
		lossCount++;
		document.getElementById('countYerLosses').innerHTML = lossCount;
		alert("You are all out of Guesses!");
		totAllowedGuesses=9
		lettersPicked=[]
		document.getElementById('youPickedThis').innerHTML = lettersPicked;
		startGame();

		//lettersPicked.push(youPick);
	}else if(compPick === youPick){
		winCount++;
		alert("YES!");
		//document.getElementById('winningLetter').innerHTML = compPick;
		document.getElementById('countYerWins').innerHTML = winCount;
		console.log("wincount ",winCount);
		totAllowedGuesses=9
		lettersPicked=[]
		document.getElementById('youPickedThis').innerHTML = lettersPicked;
		startGame();


	/*if(totAllowedGuesses===0){
		lossCount++;
		document.getElementById('countYerLosses').innerHTML = lossCount;
		alert("You are all out of Guesses!");
		startGame();*/
	}else if(compPick!==youPick){

		totAllowedGuesses--
		document.getElementById('guessesLeft').innerHTML = totAllowedGuesses;
		lettersPicked.push(youPick);
		document.getElementById('youPickedThis').innerHTML = lettersPicked;
	}

}