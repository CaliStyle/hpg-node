const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Unit Fee', () => {
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
    assert.ok(rpg.fee)
    assert.equal(rpg.fee.rpg, rpg)
    assert.equal(typeof rpg.fee.addFee, 'function')
    assert.equal(typeof rpg.fee.editFee, 'function')
    assert.equal(typeof rpg.fee.allFees, 'function')
    assert.equal(typeof rpg.fee.feeById, 'function')
    assert.equal(typeof rpg.fee.deleteFee, 'function')
    assert.equal(typeof rpg.fee.feeByChannelType, 'function')
  })
})