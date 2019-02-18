const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit RPG', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({
      apiKey: process.env.API_KEY,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      transform: false,
      sandbox: true,
      debug: true
    })
  })

  it('should exist', () => {
    assert.ok(rpg)
    assert.ok(rpg.config)
    assert.equal(rpg.httpAgent, null)
    assert.equal(rpg.maxNetworkRetries, 0)
    assert.ok(rpg.requestUrl)
    assert.equal(typeof rpg.request, 'function')
  })
  it('should have the configured config', () => {
    assert.deepEqual(rpg.config, {
      apiKey: process.env.API_KEY || null,
      username: process.env.USERNAME || null,
      password: process.env.PASSWORD || null,
      transform: false,
      debug: true,
      sandbox: true,
      validateWebhooks: false,
      parentId: null,
      resellerId: null,
      role: null,
      userType: null,
      changePassword: false
    })
  })
  it('should set max network retires', () => {
    rpg.maxNetworkRetries = 1
    assert.equal(rpg.maxNetworkRetries, 1)
  })
})