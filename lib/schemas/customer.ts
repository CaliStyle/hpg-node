import * as joi from 'joi'

export const customer = joi.object().keys({
  merchantId: joi.alternatives().try(joi.number(), joi.string()).required(),
  referenceNumber: joi.string().allow(null),
  userName: joi.string(),
  password: joi.string(),
  billingContact: joi.object().keys({
    name: joi.object().keys({
      title: joi.string().allow(null),
      firstName: joi.string().allow(null),
      middleName: joi.string().allow(null),
      lastName: joi.string().allow(null)
    }).optional(),
    companyName: joi.string().allow(null),
    department: joi.string().allow(null),
    fax: joi.alternatives().try(joi.number(), joi.string()).allow(null),
    phone: joi.alternatives().try(joi.number(), joi.string()).allow(null),
    alternatePhone: joi.alternatives().try(joi.number(), joi.string()).allow(null),
    mobile: joi.alternatives().try(joi.number(), joi.string()).allow(null),
    email: joi.string().allow(null),
    url: joi.string().allow(null),
    address: joi.object().keys({
      addressLine1: joi.string().allow(null),
      addressLine2: joi.string().allow(null),
      city: joi.string().allow(null),
      state: joi.string().allow(null),
      country: joi.alternatives().try(joi.number(), joi.string()).allow(null),
      postalCode: joi.string().allow(null),
      timeZone:joi.string().allow(null)
    }).optional()
  }),
  shippingContact: joi.object().keys({
    name: joi.object().keys({
      title: joi.string().allow(null),
      firstName: joi.string().allow(null),
      middleName: joi.string().allow(null),
      lastName: joi.string().allow(null)
    }).optional(),
    companyName: joi.string().allow(null),
    department: joi.string().allow(null),
    fax: joi.alternatives().try(joi.number(), joi.string()).allow(null),
    phone: joi.alternatives().try(joi.number(), joi.string()).allow(null),
    alternatePhone: joi.alternatives().try(joi.number(), joi.string()).allow(null),
    mobile: joi.alternatives().try(joi.number(), joi.string()).allow(null),
    email: joi.string().allow(null),
    url: joi.string().allow(null),
    address: joi.object().keys({
      addressLine1: joi.string().allow(null),
      addressLine2: joi.string().allow(null),
      city: joi.string().allow(null),
      state: joi.string().allow(null),
      country: joi.alternatives().try(joi.number(), joi.string()).allow(null),
      postalCode: joi.string().allow(null),
      timeZone:joi.string().allow(null)
    }).optional()
  }),
  isEnabled: joi.boolean().optional()
})

export const customersQuery = joi.object().keys({
  merchantId: joi.alternatives().try(joi.number(), joi.string()).required(),
  customerId: joi.alternatives().try(joi.number(), joi.string()),
  status: joi.boolean(),
  allActiveInactive: joi.boolean(),
  email: joi.string().allow(null),
  firstName: joi.string().allow(null),
  lastName: joi.string().allow(null),
  companyName: joi.string().allow(null),
  startRow: joi.alternatives().try(joi.number(), joi.string()),
  pageSize: joi.alternatives().try(joi.number(), joi.string()),
  sortField: joi.string().allow(null),
  asc: joi.boolean().allow(null)
})

export const customerIdQuery = joi.object().keys({
  merchantId: joi.alternatives().try(joi.number(), joi.string()).required(),
  customerId: joi.alternatives().try(joi.number(), joi.string()).required(),
})