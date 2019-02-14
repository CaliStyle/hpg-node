const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Fee', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.fee)
    assert.equal(typeof rpg.fee.addFee, 'function')
    assert.equal(typeof rpg.fee.editFee, 'function')
    assert.equal(typeof rpg.fee.allFees, 'function')
    assert.equal(typeof rpg.fee.feeById, 'function')
    assert.equal(typeof rpg.fee.deleteFee, 'function')
    assert.equal(typeof rpg.fee.feeByChannelType, 'function')
  })
})