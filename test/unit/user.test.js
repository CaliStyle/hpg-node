const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit User', () => {
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
    assert.ok(rpg.user)
    assert.equal(rpg.user.rpg, rpg)
    assert.equal(typeof rpg.user.addUser, 'function')
    assert.equal(typeof rpg.user.editUser, 'function')
    assert.equal(typeof rpg.user.allUsers, 'function')
    assert.equal(typeof rpg.user.userById, 'function')
  })
})
