
const GAME = {}
index=1;

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
function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    
    // Displaying the value
    alert("Hi...." + inputVal);
    location.href="game.html";
}

