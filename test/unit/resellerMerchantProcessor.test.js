const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#ResellerMerchantProcessor', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.resellerMerchantProcessor)
    // assert.equal(typeof rpg.resellerMerchantProcessor.addResellerMerchantProcessor, 'function')
    // assert.equal(typeof rpg.resellerMerchantProcessor.editResellerMerchantProcessor, 'function')
    // assert.equal(typeof rpg.resellerMerchantProcessor.allResellerMerchantProcessors, 'function')
    // assert.equal(typeof rpg.resellerMerchantProcessor.resellerMerchantProcessorById, 'function')
  })
})