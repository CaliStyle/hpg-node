const assert = require('assert')
const RPGMock = require('../fixtures/RPG.mock').RPGMock

describe('#Unit Customer', () => {
  let rpg

  beforeEach(() => {
    rpg = new RPGMock({
      apiKey: process.env.API_KEY,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      transform: false,
      debug: true
    })
  })

  it('should exist', () => {
    assert.ok(rpg.customer)
    assert.equal(rpg.customer.rpg, rpg)
    assert.equal(typeof rpg.customer.addCustomer, 'function')
    assert.equal(typeof rpg.customer.editCustomer, 'function')
    assert.equal(typeof rpg.customer.allCustomers, 'function')
    assert.equal(typeof rpg.customer.customerById, 'function')
  })

  it('should validate add customer', (done) => {
    rpg.customer.addCustomer({
      merchantId: 1,
      referenceNumber: '123',
      userName: 'scott',
      password: 'password123',
      email: 'test@test.com',
      billingContact: {
        name: {
          title: 'Mr.',
          firstName: 'Scott',
          middleName: 'B.',
          lastName: 'Wyatt'
        },
        companyName: 'RiSE',
        department: 'Sr. Dev',
        fax: '55555555555',
        phone: '55555555555',
        alternatePhone: '55555555555',
        mobile: '55555555555',
        email: 'test@test.com',
        url: 'https://payments.rise.store',
        address: {
          addressLine1: '555 N. Five Rd.',
          addressLine2: 'Suite 5',
          city: 'Indianapolis',
          state: 'IN',
          country: 'USA',
          postalCode: '46250-4299',
          timeZone: 'EST'
        }
      },
      shippingContact: {
        name: {
          title: 'Mr.',
          firstName: 'Scott',
          middleName: 'B.',
          lastName: 'Wyatt'
        },
        companyName: 'RiSE',
        department: 'Sr. Dev',
        fax: '55555555555',
        phone: '55555555555',
        alternatePhone: '55555555555',
        mobile: '55555555555',
        email: 'test@test.com',
        url: 'https://payments.rise.store',
        address: {
          addressLine1: '555 N. Five Rd.',
          addressLine2: 'Suite 5',
          city: 'Indianapolis',
          state: 'IN',
          country: 'USA',
          postalCode: '46250-4299',
          timeZone: 'EST'
        }
      }
    })
      .then(res => {
        assert.deepEqual(res, {
          //
          referenceNumber: '123',
          userName: 'scott',
          password: 'password123',
          email: 'test@test.com',
          billingContact: {
            name: {
              title: 'Mr.',
              firstName: 'Scott',
              middleName: 'B.',
              lastName: 'Wyatt'
            },
            companyName: 'RiSE',
            department: 'Sr. Dev',
            fax: '55555555555',
            phone: '55555555555',
            alternatePhone: '55555555555',
            mobile: '55555555555',
            email: 'test@test.com',
            url: 'https://payments.rise.store',
            address: {
              addressLine1: '555 N. Five Rd.',
              addressLine2: 'Suite 5',
              city: 'Indianapolis',
              state: 'IN',
              country: 'USA',
              postalCode: '46250-4299',
              timeZone: 'EST'
            }
          },
          shippingContact: {
            name: {
              title: 'Mr.',
              firstName: 'Scott',
              middleName: 'B.',
              lastName: 'Wyatt'
            },
            companyName: 'RiSE',
            department: 'Sr. Dev',
            fax: '55555555555',
            phone: '55555555555',
            alternatePhone: '55555555555',
            mobile: '55555555555',
            email: 'test@test.com',
            url: 'https://payments.rise.store',
            address: {
              addressLine1: '555 N. Five Rd.',
              addressLine2: 'Suite 5',
              city: 'Indianapolis',
              state: 'IN',
              country: 'USA',
              postalCode: '46250-4299',
              timeZone: 'EST'
            }
          }
        })
        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('should validate edit customer', (done) => {
    rpg.customer.editCustomer({
      merchantId: 1,
      customerId: 1,
      referenceNumber: '123',
      userName: 'scott',
      password: 'password123',
      email: 'test@test.com',
      billingContact: {
        name: {
          title: 'Mr.',
          firstName: 'Scott',
          middleName: 'B.',
          lastName: 'Wyatt'
        },
        companyName: 'RiSE',
        department: 'Sr. Dev',
        fax: '55555555555',
        phone: '55555555555',
        alternatePhone: '55555555555',
        mobile: '55555555555',
        email: 'test@test.com',
        url: 'https://payments.rise.store',
        address: {
          addressLine1: '555 N. Five Rd.',
          addressLine2: 'Suite 5',
          city: 'Indianapolis',
          state: 'IN',
          country: 'USA',
          postalCode: '46250-4299',
          timeZone: 'EST'
        }
      },
      shippingContact: {
        name: {
          title: 'Mr.',
          firstName: 'Scott',
          middleName: 'B.',
          lastName: 'Wyatt'
        },
        companyName: 'RiSE',
        department: 'Sr. Dev',
        fax: '55555555555',
        phone: '55555555555',
        alternatePhone: '55555555555',
        mobile: '55555555555',
        email: 'test@test.com',
        url: 'https://payments.rise.store',
        address: {
          addressLine1: '555 N. Five Rd.',
          addressLine2: 'Suite 5',
          city: 'Indianapolis',
          state: 'IN',
          country: 'USA',
          postalCode: '46250-4299',
          timeZone: 'EST'
        }
      }
    })
      .then(res => {
        assert.deepEqual(res, {
          //
          referenceNumber: '123',
          userName: 'scott',
          password: 'password123',
          email: 'test@test.com',
          billingContact: {
            name: {
              title: 'Mr.',
              firstName: 'Scott',
              middleName: 'B.',
              lastName: 'Wyatt'
            },
            companyName: 'RiSE',
            department: 'Sr. Dev',
            fax: '55555555555',
            phone: '55555555555',
            alternatePhone: '55555555555',
            mobile: '55555555555',
            email: 'test@test.com',
            url: 'https://payments.rise.store',
            address: {
              addressLine1: '555 N. Five Rd.',
              addressLine2: 'Suite 5',
              city: 'Indianapolis',
              state: 'IN',
              country: 'USA',
              postalCode: '46250-4299',
              timeZone: 'EST'
            }
          },
          shippingContact: {
            name: {
              title: 'Mr.',
              firstName: 'Scott',
              middleName: 'B.',
              lastName: 'Wyatt'
            },
            companyName: 'RiSE',
            department: 'Sr. Dev',
            fax: '55555555555',
            phone: '55555555555',
            alternatePhone: '55555555555',
            mobile: '55555555555',
            email: 'test@test.com',
            url: 'https://payments.rise.store',
            address: {
              addressLine1: '555 N. Five Rd.',
              addressLine2: 'Suite 5',
              city: 'Indianapolis',
              state: 'IN',
              country: 'USA',
              postalCode: '46250-4299',
              timeZone: 'EST'
            }
          }
        })
        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('should validate get customer by id', (done) => {
    rpg.customer.customerById({
      merchantId: 1,
      customerId: 1
    })
      .then(res => {
        assert.deepEqual(res, {})
        done()
      })
      .catch(err => {
        done(err)
      })
  })

  it('should validate get all customers', (done) => {
    rpg.customer.allCustomers({
      merchantId: 1,
      pageSize: 10,
      startRow: 1,
      sortField: 'username',
      asc: true
    })
      .then(res => {
        assert.deepEqual(res, {})
        done()
      })
      .catch(err => {
        done(err)
      })
  })
})