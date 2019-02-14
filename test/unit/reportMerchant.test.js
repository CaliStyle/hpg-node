const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#ReportMerchant', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.reportMerchant)
    // assert.equal(typeof rpg.reportMerchant.addReportMerchant, 'function')
    // assert.equal(typeof rpg.reportMerchant.editReportMerchant, 'function')
    // assert.equal(typeof rpg.reportMerchant.allReportMerchants, 'function')
    // assert.equal(typeof rpg.reportMerchant.reportMerchantById, 'function')
  })
})