const chai = require('chai');
const assert = chai.assert;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  it ('should be a function', function() {
    const game = new Game();
    assert.typeOf(Game, 'function');
  });
  it ('should be an instance of the Game', function() {
    const game = new Game();
    assert.instanceOf(game, Game);
  });
  it ('should keep track of the current round', function() {
    const game = new Game();
    assert.deepEqual(game.currentRound, '');
  });
  it ('should be able to start playing', function() {
    const game = new Game();
    game.start();
    assert.deepEqual(game.deck.countCards(), 30);
  });
});
