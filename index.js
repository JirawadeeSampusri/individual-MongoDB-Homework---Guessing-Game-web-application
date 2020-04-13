const GAME = {}
var guess;
var letter = [];
var wrongLetters = []; //incorrectly guessed letters
var counter = 7; //counts correct letters
var losses = 0;
var wins = 0;
index=1;

document.getElementById("counter").innerHTML = counter;
document.getElementById("losses").innerHTML = losses;
document.getElementById("wins").innerHTML = wins;

var wordList = ["ABCD"];

function answer(button) {
    
    answer1 = button.value
    
    document.getElementById("letter"+index).innerHTML = answer1
    index++;
    
    if(index==5){
       index=1;
    };

    if (answer1=="wordList"){
      found = true;
    }
    console.log(index)
}
      