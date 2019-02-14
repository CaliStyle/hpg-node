import * as joi from 'joi'

import {customer, customerIdQuery, customersQuery} from '../schemas'

export const validateCustomer = {
  // Validate Creating a customer
  addCustomer(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, customer, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  },
  // Validate editing a customer
  editCustomer(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, customer, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  },
  // Validate all customers query
  allCustomers(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, customersQuery, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  },
  // Validate customer by id query
  customerById(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, customerIdQuery, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  }
}