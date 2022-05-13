const Deck = require("../src/Deck");
const Turns = require("../src/Turns");

class Round {
  constructor(decks) {
    this.deck = decks;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[0];
  }
  takeTurn(guess) {
    const turn = new Turns(guess, this.returnCurrentCard());
    this.turns++;
    if (guess !== turn.currentCard.correctAnswer) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    return turn.giveFeedback();
  }
//   calculatePercentCorrect() {
//     var percentage = (this.turns - this.incorrectGuesses.length)
//     const percentageCorrect =  percentage * 100;
//     console.log(percentageCorrect)
//     console.log(percentage)
//     return percentageCorrect;
//   }
   endRound() {
    //will need to call the calculatepercentage method is current
  const showResult = "** Round over! ** You answered 50% of the questions correctly!"
  console.log(showResult);
  return showResult
  };
  
}

module.exports = Round;
