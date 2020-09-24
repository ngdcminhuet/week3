import { CHOICES } from "./constant";
const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

const getRoundOutcome = (userChoice, computerChoice) => {
  let result;

  if (userChoice === "Rock") {
    result = computerChoice === "Scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "Paper") {
    result = computerChoice === "Rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "Scissors") {
    result = computerChoice === "Paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  return result;
};

const getNumResult = (result, numLose, numTie, numWin) => {
  if (result === "Victory!") {
    numWin += 1;
  }
  if (result === "Defeat!") {
    numLose += 1;
  }
  if (result === "Tie game!") {
    numTie += 1;
  }
  return [numWin, numLose, numTie];
};
export { randomComputerChoice, getRoundOutcome, getNumResult };
