import { validateCustomer } from '../validators'
import { Base } from './Base'

export class Customer extends Base {

  /**
   * Add Customer
   * @param data
   */
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

  /**
   * Edit Customer
   * @param data
   */
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

  /**
   * List All Customers
   * @param data
   */
  allCustomers (data) {
    const { merchantId, pageSize, startRow, sortField, asc, ...req } = data
    const url = {
      'GET': `/merchants/${merchantId}/customers`
    }
    const query = []
    if (typeof pageSize !== 'undefined') {
      query.push(`PageSize=${pageSize}`)
    }
    if (typeof startRow !== 'undefined') {
      query.push(`StartRow=${startRow}`)
    }
    if (typeof sortField !== 'undefined') {
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

  /**
   * Get Customer by ID
   * @param data
   */
  customerById(data) {
    const { merchantId, customerId, ...req } = data
    const url = {'GET': `/merchants/${merchantId}/customers/${customerId}`}

    return validateCustomer.customerById(data)
      .then(validation => {
        return this.rpg.request(url, req, validation)
      })
  }
}