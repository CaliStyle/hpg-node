const assert = require('assert')
const HPG = require('../../dist').HPG

describe('#Customer', () => {
  let hpg

  beforeEach(() => {
    hpg = new HPG({})
  })

  it('should exist', () => {
    assert.ok(hpg.customer)
    assert.equal(typeof hpg.customer.addCustomer, 'function')
    assert.equal(typeof hpg.customer.editCustomer, 'function')
    assert.equal(typeof hpg.customer.allCustomers, 'function')
    assert.equal(typeof hpg.customer.customerById, 'function')
  })
})