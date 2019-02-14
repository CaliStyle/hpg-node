const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#ResellerSub', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.resellerSub)
    assert.equal(typeof rpg.resellerSub.addSubreseller, 'function')
    assert.equal(typeof rpg.resellerSub.editSubreseller, 'function')
    assert.equal(typeof rpg.resellerSub.allSubresellers, 'function')
    assert.equal(typeof rpg.resellerSub.subresellerById, 'function')
  })
})