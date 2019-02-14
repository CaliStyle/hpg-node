import { validateCustomer } from '../validators'
import { RPG } from '../index'
import { Base } from './Base'

export class Customer extends Base {

  addCustomer (data) {
    const { merchantId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/customers`
    }

    return validateCustomer.addCustomer(data)
      .then(validation => {
        return this.rpg.request(url, req, validation)
      })
  }
  
  editCustomer (data) {
    const { merchantId, customerId, ...req } = data
    const url = {
      'PUT': `/merchants/${merchantId}/customers/${customerId}`
    }

    return validateCustomer.editCustomer(data)
      .then(validation => {
        return this.rpg.request(url, req, validation)
      })
  }
  
  allCustomers (data) {
    const { merchantId, pageSize, startRow, sortField, asc, ...req } = data
    const url = {
      'GET': `/merchants/${merchantId}/customers`
    }
    const query = []
    if (pageSize) {
      query.push(`PageSize=${pageSize}`)
    }
    if (startRow) {
      query.push(`StartRow=${startRow}`)
    }
    if (sortField) {
      query.push(`SortField=${sortField}`)
    }
    if (typeof asc !== 'undefined') {
      query.push(`Asc=${asc}`)
    }
    if (query.length > 0) {
      url.GET = url.GET + `?${ query.join('&') }`
    }

    return validateCustomer.allCustomers(data)
      .then(validation => {
        return this.rpg.request(url, req, validation)
      })
  }
  
  customerById(data) {
    const { merchantId, customerId, ...req } = data
    const url = {'GET': `/merchants/${merchantId}/customers/${customerId}`}

    return validateCustomer.customerById(data)
      .then(validation => {
        return this.rpg.request(url, req, validation)
      })
  }
}