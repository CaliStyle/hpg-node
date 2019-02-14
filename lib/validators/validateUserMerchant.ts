import * as joi from 'joi'
import { userMerchant } from '../schemas'

export const validateUserMerchant = {
  // Validate Creating a userMerchant
  addUserMerchant(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, userMerchant, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  },
  // Validate editing a userMerchant
  editUserMerchant(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, userMerchant, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  },
  // Validate all userMerchants query
  allUserMerchants(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, userMerchant, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  },
  // Validate userMerchant by id query
  userMerchantById(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, userMerchant, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  }
}