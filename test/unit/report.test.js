const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit Report', () => {
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
    assert.ok(rpg.report)
    assert.equal(rpg.report.rpg, rpg)
  })
})
