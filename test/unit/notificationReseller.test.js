const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#NotificationReseller', () => {
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
    assert.ok(rpg.notificationReseller)
    // assert.equal(typeof rpg.notificationReseller.addNotificationReseller, 'function')
    // assert.equal(typeof rpg.notificationReseller.editNotificationReseller, 'function')
    // assert.equal(typeof rpg.notificationReseller.allNotificationResellers, 'function')
    // assert.equal(typeof rpg.notificationReseller.notificationResellerById, 'function')
  })
})