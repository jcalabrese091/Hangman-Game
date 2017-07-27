var letter = ["a","b","c","d","e","f","g","h","i"]
var resetLetter = function(){
  for (var i = 0; i < letter.length; i++){
    console.log(letter[i]);
  }
};
resetLetter();
function getLetter(){
	var letterIndex = Math.floor(Math.random()* letter.length); 
	return letter["letterIndex"];
}
getLetter();
var userInput
var currentLetter = getLetter();
document.onkeydown = function (event) {
  userInput = event.key;
  if (userInput == currentLetter){
    alert("you are psychic");
  }
  else {
    alert("guess again");
  }
};