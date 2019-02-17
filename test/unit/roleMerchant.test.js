const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit RoleMerchant', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({
      apiKey: process.env.API_KEY,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      transform: false,
      debug: true
    })
  })

  it('should exist', () => {
    assert.ok(rpg.roleMerchant)
    assert.equal(rpg.roleMerchant.rpg, rpg)
    assert.equal(typeof rpg.roleMerchant.addRole, 'function')
    assert.equal(typeof rpg.roleMerchant.editRole, 'function')
    assert.equal(typeof rpg.roleMerchant.allRoles, 'function')
    assert.equal(typeof rpg.roleMerchant.roleById, 'function')
  })
})
