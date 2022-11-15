// function to get the computer choice
// 0 argument
function computerChoice() {
  let string = ["Rock", "Paper", "Scissor"];
  let num = Math.floor(Math.random() * string.length);
  return string[num];
}
//Global function
let score = 0;

//taking access of all the Id's for Input
// and Dom Manipulation
// 1)Notify 2Hand 3)Score
let rockDiv = document.getElementById("Rock");
let paperDiv = document.getElementById("Paper");
let scissorsDiv = document.getElementById("Scissor");
let notifyDiv = document.getElementById("notify");
let handDiv = document.getElementById("hand");
let scoreDiv = document.getElementById("score");
let endDiv = document.getElementById("end");

//Getting player input by event listener
// returning the playgame function
// with one argument playerInput
rockDiv.onclick = (e) => {
  let choice = e.target.parentNode.id;
  return playGame(choice);
};
paperDiv.onclick = (e) => {
  let choice = e.target.parentNode.id;
  return playGame(choice);
};
scissorsDiv.onclick = (e) => {
  let choice = e.target.parentNode.id;
  return playGame(choice);
};

// function to get the result whose is winning;
function playGame(choice) {
  let playerInput = choice;
  let computerInput = computerChoice();
  console.log({ playerInput });
  console.log({ computerInput });

  // Get the result of match
  if (playerInput == computerInput) {
    score += 0;

    notifyDiv.innerText = "It's a draw!";
  } else if (playerInput == "Rock" && computerInput == "Scissor") {
    score += 1;
    notifyDiv.innerText = "You Win!";
  } else if (playerInput == "Paper" && computerInput == "Rock") {
    score += 1;
    notifyDiv.innerText = "You Win!";
  } else if (playerInput == "Scissor" && computerInput == "Paper") {
    score += 1;
    notifyDiv.innerText = "You Win!";
  } else {
    score -= 1;
    notifyDiv.innerText = "You Lose!";
  }
  dom(score, playerInput, computerInput);
}

// function for last dom manipulation of
// total score and hands
function dom(score, playerInput, computerInput) {
  scoreDiv.innerText = `Your Score : ${score}`;
  handDiv.innerText = `${playerInput} vs ${computerInput} `;
  endDiv.onclick = () => {
    scoreDiv.innerText = "";
    handDiv.innerText = "";
    notifyDiv.innerText = "";
  };
}
