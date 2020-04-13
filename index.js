
const GAME = {}
index=1;

async function startGame() {
  axios.get("/game")
  attempt = 6;
  answer.start();
}

function answer(button) {
    
    answer1 = button.value
    
    document.getElementById("letter"+index).innerHTML = answer1
    index++;

    console.log(index)
}
function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    
    // Displaying the value
    alert("Hi...." + inputVal);
    location.href="game.html";
}

function Click(){
  // Selecting the input element and get its value 
  
  // Displaying the value
  alert("You are win / try again");
}

function clickPlayagain() {
  if (index ==4){
    startGame();  
  }
  
}
