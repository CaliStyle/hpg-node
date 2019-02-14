const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#ResellerMerchant', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.resellerMerchant)
    assert.equal(typeof rpg.resellerMerchant.addMerchant, 'function')
    assert.equal(typeof rpg.resellerMerchant.editMerchant, 'function')
    assert.equal(typeof rpg.resellerMerchant.allMerchants, 'function')
    assert.equal(typeof rpg.resellerMerchant.merchantById, 'function')
  })
})