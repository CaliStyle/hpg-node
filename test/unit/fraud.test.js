const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit Fraud', () => {
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
    assert.ok(rpg.fraud)
    assert.equal(rpg.fraud.rpg, rpg)
  })
})
