const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#MerchantProcessor', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.merchantProcessor)
    assert.equal(typeof rpg.merchantProcessor.getProcessor, 'function')
    assert.equal(typeof rpg.merchantProcessor.setProcessor, 'function')
  })
})