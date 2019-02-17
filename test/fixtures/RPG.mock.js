const RPG = require('../../dist').RPG

module.exports.RPGMock = class RPGMock extends RPG {
  request(reqUrl, body, validation) {
    return Promise.resolve(body)
  }
}