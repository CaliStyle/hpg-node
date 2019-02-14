const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#ResellerSub', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.resellerSub)
    // assert.equal(typeof rpg.resellerSub.addResellerSub, 'function')
    // assert.equal(typeof rpg.resellerSub.editResellerSub, 'function')
    // assert.equal(typeof rpg.resellerSub.allResellerSubs, 'function')
    // assert.equal(typeof rpg.resellerSub.resellerSubById, 'function')
  })
})