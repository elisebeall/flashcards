const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe ('Turn', function() {
  it ('should be a function', function() {
    let turn = new Turn();
    assert.typeOf(Turn, 'function');
  });
  it ('should be an instance of Turn', function() {
    let turn = new Turn();
    assert.instanceOf(turn, Turn);
  });
  it ('should have two arguments', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn = new Turn(card.answers[1], card);
    assert.typeOf(turn.guess, 'string');
    assert.instanceOf(card, Card);
  });
  it ('should return a guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn = new Turn(card.answers[1], card);
    turn.returnGuess();
    assert.deepEqual(turn.returnGuess(), card.answers[1]);
  });
  it ('should return a card', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn = new Turn('sea otter', card);
    turn.returnCard();
    assert.equal(turn.returnCard(), card);
  });
  it ('should evaluate the guess', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn1 = new Turn(card.answers[0], card);
    let turn2 = new Turn(card.answers[1], card);
    turn1.evaluateGuess();
    turn2.evaluateGuess();
    assert.deepEqual(turn1.evaluateGuess(), true);
    assert.deepEqual(turn2.evaluateGuess(), false);
  });
  it ('should give feedback', function() {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    let turn1 = new Turn(card.answers[0], card);
    let turn2 = new Turn(card.answers[1], card);
    turn1.giveFeedback();
    turn2.giveFeedback();
    assert.equal(turn1.giveFeedback(), 'correct!');
    assert.equal(turn2.giveFeedback(), 'incorrect!');
  });
});
