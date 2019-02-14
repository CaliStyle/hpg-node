import * as joi from 'joi'
import { userReseller } from '../schemas'

export const validateUserReseller = {
  // Validate Creating a userReseller
  addUserReseller(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, userReseller, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  },
  // Validate editing a userReseller
  editUserReseller(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, userReseller, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  },
  // Validate all userResellers query
  allUserResellers(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, userReseller, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  },
  // Validate userReseller by id query
  userResellerById(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, userReseller, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  }
}