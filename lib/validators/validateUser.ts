import * as joi from 'joi'
import {user} from '../schemas'

export const validateUser = {
  // Validate Creating a user
  addUser(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, user, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  },
  // Validate editing a user
  editUser(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, user, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  },
  // Validate all users query
  allUsers(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, user, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  },
  // Validate user by id query
  userById(data) {
    return new Promise((resolve, reject) => {
      joi.validate(data, user, (err, value) => {
        if (err) {
          return reject(new TypeError(err))
        }
        return resolve(value)
      })
    })
  }
}