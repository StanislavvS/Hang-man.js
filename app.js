const body = document.querySelector("body");
const hangmanContainer = document.createElement("div");
const guessCounter = document.createElement("p");
const puzzle = document.createElement("p");

const game1 = new Hangman("Tarnowskie Gory", 2);
const renderElements = () => {
  guessCounter.textContent = game1.checkMessage;
  puzzle.textContent = game1.getGuess;
};

renderElements();

hangmanContainer.appendChild(guessCounter);
hangmanContainer.appendChild(puzzle);
body.appendChild(hangmanContainer);
window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);

  game1.makeGuess(guess);

  console.log(game1.status);
  renderElements();
});

getPuzzle(2, (error, puzzle) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else console.log(puzzle);
});

const countryCode = "PL";
getCountryDetails(countryCode, (error, countryData) => {
  if (error) {
    console.log(`Error: ${error}`);
  } else {
    const country = countryData.find(
      (country) => country.alpha2Code === countryCode
    );
    console.log(country.name);
  }
});
