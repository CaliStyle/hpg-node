const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#UserMerchant', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.userMerchant)
    assert.equal(typeof rpg.userMerchant.addUser, 'function')
    assert.equal(typeof rpg.userMerchant.editUser, 'function')
    assert.equal(typeof rpg.userMerchant.allUsers, 'function')
    assert.equal(typeof rpg.userMerchant.userById, 'function')
  })
})
