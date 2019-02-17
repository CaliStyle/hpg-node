import * as joi from 'joi'

import {customerAdd, customerIdQuery, customersQuery, customerUpdate} from '../schemas'

export const validateCustomer = {
  // Validate Creating a customer
  addCustomer(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, customerAdd, (err, value) => {
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
      joi.validate(data, customerUpdate, (err, value) => {
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