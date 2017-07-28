var letter = ["a","b","c","d","e","f","g","h","i"]
var guesses = 5;
var wins = 0;
var losses= 0;
var guessItem = [];
var userWins = document.getElementById("score");
var userLoss = document.getElementById("loss");
var userGuesses = document.getElementById("guesses");
var resetLetter = function(){
  for (var i = 0; i < letter.length; i++){
    console.log(letter[i]);
  }
};
resetLetter();
function getLetter(){
	var letterIndex = Math.floor(Math.random()* letter.length); 
	return letter[letterIndex];
}
var userInput
var currentLetter = getLetter();


document.onkeydown = function (event) {
  userInput = event.key;
  guessItem.push(userInput);
  if (userInput == currentLetter){
    alert("WINNER!!! You might actually be psychic!      Disclaimer: Consult your physician first.");
    wins++;
    gameReset();
    userWins.innerHTML= "Wins: " + wins;
  }
  else {
  	guesses--;
  	userGuesses.innerHTML= "Guesses: " + guesses;
  	attemps();
  }
 };
function attemps(){
  	if (guesses== 0){
  		alert("GAME OVER: The letter was: " + currentLetter);
  		losses++;
  		userLoss.innerHTML= "Losses: " + losses;
  		gameReset();
  	}
  	else{
  		alert("Guess Again")
  	}
 };
function gameReset(){
	 
	console.log (currentLetter);
	currentLetter= getLetter();
	guesses = 3
}