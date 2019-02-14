const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#RPG Config', () => {
  it('should not configure', (done) => {
    try {
      const rpg = new RPG({
        apiKey: null,
        username: 'Merchant001',
        password: 'Admin@123456',
        transform: false,
        debug: true
      })
      assert.equal(rpg instanceof RPG, true)
      done()
    }
    catch (err) {
      done(err)
    }
  })
  it('should not configure', (done) => {
    try {
      const rpg = new RPG({
        apiKey: false,
        username: false,
        password: false,
        transform: false,
        debug: 'break'
      })

      done(new Error('This should not have validated'))
    }
    catch (err) {
      assert.equal(err instanceof TypeError, true)
      done()
    }
  })
})