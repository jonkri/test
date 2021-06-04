// export default {}
module.exports = {
  createDeck() {
    const deck = [],
      suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']

    for (let n = 0; n < suits.length; n++) {
      for (let m = 1; m < 14; m++) {
        deck.push({
          suit: suits[n],
          value: m
        })
      }
    }

    return deck
  },
  draw(deck) {
    return deck.pop()
  },
  score(hand) {
    return hand[0].value
  }
}
