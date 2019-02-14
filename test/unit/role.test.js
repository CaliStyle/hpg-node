const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Role', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.role)
    assert.equal(typeof rpg.role.addRole, 'function')
    assert.equal(typeof rpg.role.editRole, 'function')
    assert.equal(typeof rpg.role.allRoles, 'function')
    assert.equal(typeof rpg.role.roleById, 'function')
  })
})
