const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit RoleReseller', () => {
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
    assert.ok(rpg.roleReseller)
    assert.equal(rpg.roleReseller.rpg, rpg)
    assert.equal(typeof rpg.roleReseller.addRole, 'function')
    assert.equal(typeof rpg.roleReseller.editRole, 'function')
    assert.equal(typeof rpg.roleReseller.allRoles, 'function')
    assert.equal(typeof rpg.roleReseller.roleById, 'function')
  })
})
