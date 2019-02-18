const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit UserMerchant', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({
      apiKey: process.env.API_KEY,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      transform: false,
      debug: true, sandbox:true
    })
  })

  it('should exist', () => {
    assert.ok(rpg.userMerchant)
    assert.equal(rpg.userMerchant.rpg, rpg)
    assert.equal(typeof rpg.userMerchant.addUser, 'function')
    assert.equal(typeof rpg.userMerchant.editUser, 'function')
    assert.equal(typeof rpg.userMerchant.allUsers, 'function')
    assert.equal(typeof rpg.userMerchant.userById, 'function')
  })
})
