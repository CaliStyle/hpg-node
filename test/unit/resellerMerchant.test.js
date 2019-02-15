const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#ResellerMerchant', () => {
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
    assert.ok(rpg.resellerMerchant)
    assert.equal(typeof rpg.resellerMerchant.addMerchant, 'function')
    assert.equal(typeof rpg.resellerMerchant.editMerchant, 'function')
    assert.equal(typeof rpg.resellerMerchant.allMerchants, 'function')
    assert.equal(typeof rpg.resellerMerchant.merchantById, 'function')
  })
})