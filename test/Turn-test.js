const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Turn = require('../src/Turn');

// Your Turn class should meet the following requirements:
// Instantiated with two arguments - a string (that represents a user’s guess to the question), and a Card object for the current card in play.
// returnGuess: method that returns the guess
// returnCard: method that returns the Card
// evaluateGuess: method that returns a boolean indicating if the user’s guess matches the correct answer on the card
// giveFeedback - method that returns either ‘incorrect!’ or ‘correct!’ based on whether the guess is correct or not.

describe ('Turn', function() {
  it ('should be a function', function() {
    let turn = new Turn();
    assert.equal(Turn, 'function');
  });
  it ('should be an instance of Turn', function() {
    let turn = new Turn();
    assert.instanceof(turn, Turn);
  });
  it ('should have two arguments', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn = new Turn('sea otter', card);
    assert.equal(turn.guess, 'string');
    assert.equal(card, Card);
  });
  it ('should return a guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn = new Turn('sea otter', card);
    turn.returnGuess();
    assert.equal(turn.returnGuess, 'sea otter');
  });
  it ('should return a card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn = new Turn('sea otter', card);
    turn.returnCard();
    assert.equal(turn.returnCard, card);
  });
  it ('should evaluate the guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn1 = new Turn('sea otter', card);
    let turn2 = new Turn('pug', card);
    turn1.evaluateGuess();
    turn2.evaluateGuess();
    assert.equal(turn1.evaluateGuess, true);
    assert.equal(turn2.evaluateGuess, false);
  });
  it ('should give feedback', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn1 = new Turn('sea otter', card);
    let turn2 = new Turn('pug', card);
    turn1.giveFeedback();
    turn2.giveFeedback();
    assert.equal(turn1.giveFeedback, 'correct!');
    assert.equal(turn2.giveFeedback, 'incorrect!');
  });
});
