const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#CustomerAccount', () => {
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
    assert.ok(rpg.customerAccount)
    assert.equal(typeof rpg.customerAccount.addCustomerAccount, 'function')
    assert.equal(typeof rpg.customerAccount.editCustomerAccount, 'function')
    assert.equal(typeof rpg.customerAccount.allCustomerAccounts, 'function')
    assert.equal(typeof rpg.customerAccount.customerAccountByIdCC, 'function')
    assert.equal(typeof rpg.customerAccount.customerAccountByIdACH, 'function')
    assert.equal(typeof rpg.customerAccount.setDefaultCustomerAccount, 'function')
    assert.equal(typeof rpg.customerAccount.defaultCustomerAccount, 'function')
    assert.equal(typeof rpg.customerAccount.customerAccountType, 'function')
  })
})