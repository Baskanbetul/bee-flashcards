const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require("./Card"); 
const Round = require('./Round');
const Deck = require("./Deck");

class Game {
  constructor() {
    this.currentRound;

  }
  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
  start() {
    const cards = prototypeQuestions.map((card) => new Card(card.id, card.question, card.answers, card.correctAnswer))
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.printMessage(deck,round);
    this.printQuestion(round);
  }


}

module.exports = Game;