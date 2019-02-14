const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#UserMerchant', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.userMerchant)
  })
})
