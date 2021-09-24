"use strict";

let secretnum = Math.trunc(Math.random() * 20) + 1;
let score = 15;
let highscore = 0;
const colo = [
  "linear-gradient(45deg, rgb(0,0,0), #BF0003",
  "linear-gradient(45deg, rgb(0,0,0), #BA1903",
  "linear-gradient(45deg, rgb(0,0,0), #B53307",
  "linear-gradient(45deg, rgb(0,0,0), #B14A0A",
  "linear-gradient(45deg, rgb(0,0,0), #AC600D",
  "linear-gradient(45deg, rgb(0,0,0), #A87310",
  "linear-gradient(45deg, rgb(0,0,0), #A38413",
  "linear-gradient(45deg, rgb(0,0,0), #9E9315",
  "linear-gradient(45deg, rgb(0,0,0), #939A18",
  "linear-gradient(45deg, rgb(0,0,0), #7E951A",
  "linear-gradient(45deg, rgb(0,0,0), #6B911C",
  "linear-gradient(45deg, rgb(0,0,0), #5A8C1E",
  "linear-gradient(45deg, rgb(0,0,0), #4A8720",
  "linear-gradient(45deg, rgb(0,0,0), #3C8321",
  "linear-gradient(45deg, rgb(0,0,0), #307E22",
  "linear-gradient(45deg, rgb(0,0,0), #257A24",
];

alert(
  "how to play?? \nguess the right number, you have 15 chances\ngood luck 🦄"
);

const message = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    message("❗ Enter a Number");
  } else if (guess === secretnum) {
    message("🎉 Correct Number");
    document.querySelector(".number").style.width = "60%";
    document.querySelector(".number").style.fontSize = "4rem";
    document.querySelector(
      ".number"
    ).textContent = `🙌 correct guess 🙌 : ${secretnum}`;
    message(" ");
    document.querySelector(".check").disabled = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretnum) {
    document.querySelector("body").style.backgroundImage = colo[score];
    if (score > 1) {
      message(guess > secretnum ? "Too High" : "Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message("You Lost");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 15;
  secretnum = Math.trunc(Math.random() * 20) + 1;
  message("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(45deg, rgb(0, 0, 0), rgb(0, 114, 93))";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".check").disabled = false;
});
