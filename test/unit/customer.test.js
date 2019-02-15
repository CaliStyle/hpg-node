const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Customer', () => {
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
    assert.ok(rpg.customer)
    assert.equal(typeof rpg.customer.addCustomer, 'function')
    assert.equal(typeof rpg.customer.editCustomer, 'function')
    assert.equal(typeof rpg.customer.allCustomers, 'function')
    assert.equal(typeof rpg.customer.customerById, 'function')
  })
})