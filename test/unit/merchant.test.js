const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Merchant', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.merchant)
    assert.equal(typeof rpg.merchant.addMerchant, 'function')
    assert.equal(typeof rpg.merchant.editMerchant, 'function')
    assert.equal(typeof rpg.merchant.allMerchants, 'function')
    assert.equal(typeof rpg.merchant.allMerchantsList, 'function')
    assert.equal(typeof rpg.merchant.merchantById, 'function')
    assert.equal(typeof rpg.merchant.deleteMerchant, 'function')
  })
})