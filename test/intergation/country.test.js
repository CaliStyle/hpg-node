const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Intergration Country', () => {
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
    assert.ok(rpg.country)
    // assert.equal(typeof rpg.country.addCountry, 'function')
    // assert.equal(typeof rpg.country.editCountry, 'function')
    // assert.equal(typeof rpg.country.allCountrys, 'function')
    // assert.equal(typeof rpg.country.countryById, 'function')
  })
})