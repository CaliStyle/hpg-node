const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Reseller', () => {
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
    assert.ok(rpg.reseller)
    assert.equal(typeof rpg.reseller.addReseller, 'function')
    assert.equal(typeof rpg.reseller.editReseller, 'function')
    assert.equal(typeof rpg.reseller.allResellers, 'function')
    // assert.equal(typeof rpg.reseller.allResellersList, 'function')
    assert.equal(typeof rpg.reseller.resellerById, 'function')
    assert.equal(typeof rpg.reseller.deleteReseller, 'function')
  })
})