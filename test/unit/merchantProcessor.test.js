const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit MerchantProcessor', () => {
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
    assert.ok(rpg.merchantProcessor)
    assert.equal(rpg.merchantProcessor.rpg, rpg)
    assert.equal(typeof rpg.merchantProcessor.getProcessor, 'function')
    assert.equal(typeof rpg.merchantProcessor.setProcessor, 'function')
  })
})