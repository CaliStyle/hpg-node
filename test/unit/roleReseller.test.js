const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#RoleReseller', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.roleReseller)
    assert.equal(typeof rpg.roleReseller.addRole, 'function')
    assert.equal(typeof rpg.roleReseller.editRole, 'function')
    assert.equal(typeof rpg.roleReseller.allRoles, 'function')
    assert.equal(typeof rpg.roleReseller.roleById, 'function')
  })
})
