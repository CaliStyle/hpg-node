import * as joi from 'joi'

export const config = joi.object().keys({
  apiKey: joi.string().allow(null),
  username: joi.string(),
  password: joi.string(),
  transform: joi.boolean().allow(null),
  debug: joi.boolean().allow(null),
  sandbox: joi.boolean().allow(null),
  changePassword: joi.boolean().allow(null),
  userType: joi.number().allow(null),
  role: joi.string().allow(null),
  parentId: joi.number().allow(null),
  resellerId: joi.number().allow(null)
})