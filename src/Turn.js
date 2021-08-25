class Turn {
  constructor(userGuess, card) {
    this.guess = userGuess;
    this.card = card;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    this.card.answers.forEach(this.guess) {
      if (this.guess === this.card.answers) {
        return true;
      } else {
        return false;
      }
    }
  }

  giveFeedback() {
    this.card.answers.forEach(this.guess) {
      if (this.guess === this.card.answers) {
        return 'correct!';
      } else {
        return 'incorrect!';
      }
    }
  }
}

module.exports = Turn;
