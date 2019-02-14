const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#ResellerMerchantProcessor', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.resellerMerchantProcessor)
    assert.equal(typeof rpg.resellerMerchantProcessor.getProcessor, 'function')
    assert.equal(typeof rpg.resellerMerchantProcessor.setProcessor, 'function')
  })
})