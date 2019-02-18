const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit ReportMerchant', () => {
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
    assert.ok(rpg.reportMerchant)
    assert.equal(rpg.reportMerchant.rpg, rpg)
    assert.equal(typeof rpg.reportMerchant.billingReport, 'function')
    assert.equal(typeof rpg.reportMerchant.creationReport, 'function')
    assert.equal(typeof rpg.reportMerchant.merchantTransactionReport, 'function')
  })
})