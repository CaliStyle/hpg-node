const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit ResellerMerchantProcessor', () => {
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
    assert.ok(rpg.resellerMerchantProcessor)
    assert.equal(rpg.resellerMerchantProcessor.rpg, rpg)
    assert.equal(typeof rpg.resellerMerchantProcessor.getProcessor, 'function')
    assert.equal(typeof rpg.resellerMerchantProcessor.setProcessor, 'function')
  })
})