const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = 0;
    this.currentCard = this.deck.cards[0];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    const turn = new Turn(guess, this.currentCard);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    } else {
      this.correctGuesses++;
    }
    this.currentCard = this.deck.cards[this.turns];
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return Math.floor((this.correctGuesses/this.turns)*100);
  }

  endRound() {
    return `** Round over! ** You answered ${this.round.calculatePercentCorrect}% of the questions correctly!`;
  }
}

module.exports = Round;
