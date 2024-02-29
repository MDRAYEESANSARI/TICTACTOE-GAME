let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGame = document.querySelector(".new-reset");
let showWinnerContainer = document.querySelector(".show-winner");
let msg = document.querySelector("#msg");
let round= document.querySelector("#round")
let turnO = false;
const winPatterns = [
  //winPattern
  [0, 1, 2], //[0]
  [0, 3, 6], //[1]
  [0, 3, 7], //[2]
  [1, 4, 7], //[3]
  [3, 4, 5], //[4]
  [6, 7, 8], //[5]
  [2, 5, 8], //[6]
  [2, 4, 6], //[7]
];

const resetGame = () => {
  turnO = true;
  enableBox();
  showWinnerContainer.classList.add("hide");
  round.classList.remove("hide");
};
const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  showWinnerContainer.classList.remove("hide");
  disableBox();
  round.classList.add("hide");
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
