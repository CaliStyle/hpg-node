const assert = require('assert')
const HPG = require('../../dist').HPG

describe('#CustomerAccount', () => {
  let hpg

  beforeEach(() => {
    hpg = new HPG({})
  })

  it('should exist', () => {
    assert.ok(hpg.customerAccount)
    assert.equal(typeof hpg.customerAccount.addCustomerAccount, 'function')
    assert.equal(typeof hpg.customerAccount.editCustomerAccount, 'function')
    assert.equal(typeof hpg.customerAccount.allCustomerAccounts, 'function')
    assert.equal(typeof hpg.customerAccount.customerAccountByIdCC, 'function')
    assert.equal(typeof hpg.customerAccount.customerAccountByIdACH, 'function')
    assert.equal(typeof hpg.customerAccount.setDefaultCustomerAccount, 'function')
    assert.equal(typeof hpg.customerAccount.defaultCustomerAccount, 'function')
    assert.equal(typeof hpg.customerAccount.customerAccountType, 'function')
  })
})