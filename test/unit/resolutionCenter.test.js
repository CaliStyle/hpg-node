const assert = require('assert')
const HPG = require('../../dist').HPG

describe('#ResolutionCenter', () => {
  let hpg

  beforeEach(() => {
    hpg = new HPG({})
  })

  it('should exist', () => {
    assert.ok(hpg.resolutionCenter)
  })
})