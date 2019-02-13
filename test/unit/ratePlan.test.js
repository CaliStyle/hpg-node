const assert = require('assert')
const HPG = require('../../dist').HPG

describe('#RatePlan', () => {
  let hpg

  beforeEach(() => {
    hpg = new HPG({})
  })

  it('should exist', () => {
    assert.ok(hpg.ratePlan)
  })
})