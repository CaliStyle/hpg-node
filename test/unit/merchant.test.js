const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit Merchant', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({
      apiKey: process.env.API_KEY,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      transform: false,
      debug: true
    })
  })

  it('should exist', () => {
    assert.ok(rpg.merchant)
    assert.equal(rpg.merchant.rpg, rpg)
    assert.equal(typeof rpg.merchant.addMerchant, 'function')
    assert.equal(typeof rpg.merchant.editMerchant, 'function')
    assert.equal(typeof rpg.merchant.allMerchants, 'function')
    assert.equal(typeof rpg.merchant.allMerchantsList, 'function')
    assert.equal(typeof rpg.merchant.merchantById, 'function')
    assert.equal(typeof rpg.merchant.deleteMerchant, 'function')
  })
})