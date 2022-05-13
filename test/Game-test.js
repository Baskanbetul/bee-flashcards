const chai = require("chai");
const expect = chai.expect;
const data = require("../src/data");
const prototypeQuestions = data.prototypeData;
const Game = require('../src/Game');
const Round = require("../src/Round");
const Deck = require("../src/Deck");
const Card = require("../src/Card");
const Turns = require("../src/Turns");

describe("Game", () => {
   let cards, round, game;

   beforeEach(() => {
    cards = new Card;
    round = new Round;
    game = new Game;
   }) 

it('should be a function', () => {
    expect(Game).to.be.a("function");
})

   it('should be an instance of the Game class', () => {
    game.start();
    expect(game).to.be.an.instanceOf(Game);
  }); 
})
