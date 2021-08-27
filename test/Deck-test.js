const chai = require('chai');
const assert = chai.assert;
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe ('Deck', function() {
  it ('should be an instance of Deck', function() {
    const deck = new Deck();
    assert.instanceOf(deck, Deck);
  });
  it ('should be able to have cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    assert.deepEqual(card1, deck.deck[0]);
  });
  it ('should be able to count the number of cards', function() {
    const card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    const deck = new Deck([card1, card2, card3]);
    assert.deepEqual(deck.countCards(), 3);
  });
});
