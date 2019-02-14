const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#ResellerMerchant', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.resellerMerchant)
    // assert.equal(typeof rpg.resellerMerchant.addResellerMerchant, 'function')
    // assert.equal(typeof rpg.resellerMerchant.editResellerMerchant, 'function')
    // assert.equal(typeof rpg.resellerMerchant.allResellerMerchants, 'function')
    // assert.equal(typeof rpg.resellerMerchant.resellerMerchantById, 'function')
  })
})