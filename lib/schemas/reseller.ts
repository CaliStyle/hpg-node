import * as joi from 'joi'

export const reseller = joi.object().keys({
  resellerId: joi.alternatives().try(joi.number(), joi.string()).required(),
})