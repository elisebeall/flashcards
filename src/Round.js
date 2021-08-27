class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck[0];
  }

  takeTurn(guess) {
    this.turns++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.deck[0].id);
    }
    turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.round(this.incorrectGuesses.length/this.turns)*100;
  }
}

module.exports = Round;
