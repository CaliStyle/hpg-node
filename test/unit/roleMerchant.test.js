const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#RoleMerchant', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.roleMerchant)
    assert.equal(typeof rpg.roleMerchant.addRole, 'function')
    assert.equal(typeof rpg.roleMerchant.editRole, 'function')
    assert.equal(typeof rpg.roleMerchant.allRoles, 'function')
    assert.equal(typeof rpg.roleMerchant.roleById, 'function')
  })
})
