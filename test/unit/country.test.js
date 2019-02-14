const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Country', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({})
  })

  it('should exist', () => {
    assert.ok(rpg.country)
    // assert.equal(typeof rpg.country.addCountry, 'function')
    // assert.equal(typeof rpg.country.editCountry, 'function')
    // assert.equal(typeof rpg.country.allCountrys, 'function')
    // assert.equal(typeof rpg.country.countryById, 'function')
  })
})