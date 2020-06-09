const body = document.querySelector("body");
const hangmanContainer = document.createElement("div");
const guessCounter = document.createElement("p");
const puzzle = document.createElement("p");
const resetButton = document.createElement("button");

let game1;

resetButton.textContent = "Reset";

hangmanContainer.appendChild(guessCounter);
hangmanContainer.appendChild(puzzle);
hangmanContainer.appendChild(resetButton);
body.appendChild(hangmanContainer);
window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);

  game1.makeGuess(guess);

  console.log(game1.status);
  renderElements();
});

const renderElements = () => {
  guessCounter.textContent = game1.puzzle;
  puzzle.textContent = game1.statusMessage;
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  console.log(puzzle);
  game1 = new Hangman(puzzle, 5);
  renderElements();
};

resetButton.addEventListener("click", startGame);

startGame();
// getPuzzle(2)
//   .then((puzzle) => console.log(puzzle))
//   .catch((err) => console.log(err));
// getLocation()
//   .then((location) => {
//     return getCountryDetails(location.country);
//   })
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

getCurrentCountry()
  .then((country) => {
    console.log(country.name);
  })
  .catch((err) => console.log(err));
