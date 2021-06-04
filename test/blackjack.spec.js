const assert = require('assert'),
  // import { createDeck, draw } from '../blackjack'
  { createDeck, draw, score } = require('../blackjack')

describe('blackjack.js', function () {
  it('produces a deck with a length of 52', function () {
    assert.strictEqual(createDeck().length, 52)
  })

  it('has a draw function which reduces the array length by 1', function () {
    const deck = createDeck()
    draw(deck)
    assert.strictEqual(deck.length, 51)
  })

  it('produces a deck with 13 hearts (for version)', function () {
    const deck = createDeck()

    let count = 0

    for (let n = 0; n < deck.length; n++) {
      if (deck[n].suit === 'HEARTS') {
        count++
      }
    }

    assert.strictEqual(count, 13)
  })

  it('produces a deck with 13 hearts (filter version)', function () {
    assert.strictEqual(
      createDeck().filter((card) => card.suit === 'HEARTS').length,
      13
    )
  })

  it('calculates a score of 10 for a 10 of hearts', function () {
    assert.strictEqual(score([card('HEARTS', 10)]), 10)
  })

  it('calculates a score of 9 for a 9 of hearts', function () {
    assert.strictEqual(score([card('HEARTS', 9)]), 9)
  })
})

function card(suit, value) {
  return {
    suit,
    value
  }
}
