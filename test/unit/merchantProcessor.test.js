const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#MerchantProcessor', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.merchantProcessor)
    // assert.equal(typeof rpg.merchantProcessor.addMerchantProcessor, 'function')
    // assert.equal(typeof rpg.merchantProcessor.editMerchantProcessor, 'function')
    // assert.equal(typeof rpg.merchantProcessor.allMerchantProcessors, 'function')
    // assert.equal(typeof rpg.merchantProcessor.merchantProcessorById, 'function')
  })
})