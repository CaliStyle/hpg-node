const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit UserReseller', () => {
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
    assert.ok(rpg.userReseller)
    assert.equal(rpg.userReseller.rpg, rpg)
    assert.equal(typeof rpg.userReseller.addUser, 'function')
    assert.equal(typeof rpg.userReseller.editUser, 'function')
    assert.equal(typeof rpg.userReseller.allUsers, 'function')
    assert.equal(typeof rpg.userReseller.userById, 'function')
  })
})
