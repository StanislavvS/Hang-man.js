class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessLetters = [];
    this.status = "playing";
  }
  get getGuess() {
    let puzzle = "";
    this.word.forEach((letter) => {
      this.guessLetters.includes(letter) || letter === " "
        ? (puzzle += letter)
        : (puzzle += "*");
    });

    return puzzle;
  }
  makeGuess(letter) {
    letter = letter.toLowerCase();
    if (this.status !== "playing") {
      return;
    }
    !this.guessLetters.includes(letter) && this.word.includes(letter)
      ? this.guessLetters.push(letter)
      : (this.remainingGuesses -= 1);

    this.checkStatus();
  }
  get checkMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "finished") {
      return `Great work! You guessed the word`;
    } else if (this.status === "failed") {
      return `Nice try! The word was ${this.word.join("")}`;
    }
  }
  checkStatus() {
    const finished = this.word.every(
      (letter) => this.guessLetters.includes(letter) || letter === " "
    );

    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
}
