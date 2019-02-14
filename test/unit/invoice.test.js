const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Invoice', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.invoice)
  })
})
