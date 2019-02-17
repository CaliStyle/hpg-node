const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit Role', () => {
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
    assert.ok(rpg.role)
    assert.equal(rpg.role.rpg, rpg)
    assert.equal(typeof rpg.role.addRole, 'function')
    assert.equal(typeof rpg.role.editRole, 'function')
    assert.equal(typeof rpg.role.allRoles, 'function')
    assert.equal(typeof rpg.role.roleById, 'function')
  })
})
