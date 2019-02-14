const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Reseller', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.reseller)
    assert.equal(typeof rpg.reseller.addReseller, 'function')
    assert.equal(typeof rpg.reseller.editReseller, 'function')
    assert.equal(typeof rpg.reseller.allResellers, 'function')
    // assert.equal(typeof rpg.reseller.allResellersList, 'function')
    assert.equal(typeof rpg.reseller.resellerById, 'function')
    assert.equal(typeof rpg.reseller.deleteReseller, 'function')
  })
})