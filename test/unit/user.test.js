const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#User', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.user)
    assert.equal(typeof rpg.user.addUser, 'function')
    assert.equal(typeof rpg.user.editUser, 'function')
    assert.equal(typeof rpg.user.allUsers, 'function')
    assert.equal(typeof rpg.user.userById, 'function')
  })
})
