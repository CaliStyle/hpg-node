import * as joi from 'joi'
import { config } from '../schemas'

export const validateConfig = {
  rpg(data) {
    joi.validate(data, config, (err, value) => {
      if (err) {
        throw new TypeError(err)
      }
      return value
    })
  }
}