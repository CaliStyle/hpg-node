const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit ResellerSub', () => {
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
    assert.ok(rpg.resellerSub)
    assert.equal(rpg.resellerSub.rpg, rpg)
    assert.equal(typeof rpg.resellerSub.addSubreseller, 'function')
    assert.equal(typeof rpg.resellerSub.editSubreseller, 'function')
    assert.equal(typeof rpg.resellerSub.allSubresellers, 'function')
    assert.equal(typeof rpg.resellerSub.subresellerById, 'function')
  })
})