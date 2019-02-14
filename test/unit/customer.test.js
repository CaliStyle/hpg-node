const assert = require('assert')
const RPG = require('../../dist').RPG

describe('#Customer', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPG({

    })
  })

  it('should exist', () => {
    assert.ok(rpg.customer)
    assert.equal(typeof rpg.customer.addCustomer, 'function')
    assert.equal(typeof rpg.customer.editCustomer, 'function')
    assert.equal(typeof rpg.customer.allCustomers, 'function')
    assert.equal(typeof rpg.customer.customerById, 'function')
  })
  it.skip('should list all customers', (done) => {
    rpg.customer.allCustomers({
      merchantId: 63
    })
      .then(data => {
        console.log('allCustomers', data)
        done()
      })
      .catch(err => {
        console.log('err allCustomers', err)
        done(err)
      })
  })
  it.skip('should add customer', (done) => {
    rpg.customer.addCustomer({
      merchantId: 63,
      "referenceNumber": "null",
      "userName": "JamesRonald",
      "password": "I7i8ZaazO3j09",
      "billingContact": {
        "name": {
          "title": "Mr",
          "firstName": "James",
          "middleName": "Christopher",
          "lastName": "Ronald"
        },
        "companyName": "Walmart",
        "department": "Billing",
        "fax": "2129876543",
        "phone": "5557543010",
        "alternatePhone": "5417543018",
        "mobile": "5417543010",
        "email": "james.goerge@gmail.com",
        "url": "www.google.com",
        "address": {
          "addressLine1": "P.O.Box 3700 Eureka",
          "addressLine2": "LaSalle Street",
          "city": "Chicago",
          "state": "Illinois",
          "country": 1,
          "postalCode": "60176",
          "timeZone": "EASTERN"
        }
      },
      "shippingContact": {
        "name": {
          "title": "Mr",
          "firstName": "James",
          "middleName": "Christopher",
          "lastName": "Ronald"
        },
        "companyName": "Walmart",
        "department": "Billing",
        "fax": "2129876543",
        "phone": "5557543010",
        "alternatePhone": "5417543018",
        "mobile": "5417543010",
        "email": "james.goerge@gmail.com",
        "url": "www.google.com",
        "address": {
          "addressLine1": "P.O.Box 3700 Eureka",
          "addressLine2": "LaSalle Street",
          "city": "Chicago",
          "state": "Illinois",
          "country": 1,
          "postalCode": "60176",
          "timeZone": "EASTERN"
        }
      },
      "isEnabled": false
    })
      .then(data => {
        console.log('addCustomer', data)
        done()
      })
      .catch(err => {
        console.log('err addCustomer', err)
        done(err)
      })
  })
})