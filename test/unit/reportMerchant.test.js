const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#ReportMerchant', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.reportMerchant)
    assert.equal(typeof rpg.reportMerchant.billingReport, 'function')
    assert.equal(typeof rpg.reportMerchant.creationReport, 'function')
    assert.equal(typeof rpg.reportMerchant.merchantTransactionReport, 'function')
  })
})