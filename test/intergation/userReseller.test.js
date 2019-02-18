const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Intergration UserReseller', () => {
  let rpg

  before((done) => {
    rpg = new RPG({
      apiKey: process.env.API_KEY,
      username: process.env.USERNAME || 'mylesg1',
      password: process.env.PASSWORD || 'Scarface1!',
      transform: false,
      debug: true,
      sandbox: true
    })
    if (!process.env.USE_API) {
      rpg.getApiToken()
        .then(data => {
          console.log('login', data)
          done()
        })
        .catch(err => {
          done(err)
        })
    }
    else {
      done()
    }
  })

  it.skip('should list all users', (done) => {
    rpg.userReseller.allUsers({
      resellerId: rpg.config.parentId
    })
      .then(data => {
        console.log('allUsers', data)
        done()
      })
      .catch(err => {
        console.log('err allUsers', err)
        done(err)
      })
  })

})
