const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Transaction', () => {
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
    assert.ok(rpg.transaction)
    assert.equal(typeof rpg.transaction.addTransactionCC, 'function')
    assert.equal(typeof rpg.transaction.addTransactionACH, 'function')
    assert.equal(typeof rpg.transaction.addTransactionDC, 'function')
    assert.equal(typeof rpg.transaction.addTransactionCustomerCC, 'function')
    assert.equal(typeof rpg.transaction.addTransactionCustomerACH, 'function')
    assert.equal(typeof rpg.transaction.addTip, 'function')
    assert.equal(typeof rpg.transaction.getTransactionById, 'function')
    assert.equal(typeof rpg.transaction.searchTransactions, 'function')
    assert.equal(typeof rpg.transaction.verifyTransaction, 'function')
    assert.equal(typeof rpg.transaction.forceSaleTransaction, 'function')
    assert.equal(typeof rpg.transaction.voidTransactionCC, 'function')
    assert.equal(typeof rpg.transaction.voidTransactionACH, 'function')
    assert.equal(typeof rpg.transaction.voidTransactionDC, 'function')
    assert.equal(typeof rpg.transaction.refundTransactionCC, 'function')
    assert.equal(typeof rpg.transaction.refundTransactionACH, 'function')
    assert.equal(typeof rpg.transaction.refundTransactionDC, 'function')
  })
})
