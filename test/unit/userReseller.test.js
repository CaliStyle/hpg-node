const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#UserReseller', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.userReseller)
    assert.equal(typeof rpg.userReseller.addUser, 'function')
    assert.equal(typeof rpg.userReseller.editUser, 'function')
    assert.equal(typeof rpg.userReseller.allUsers, 'function')
    assert.equal(typeof rpg.userReseller.userById, 'function')
  })
})
