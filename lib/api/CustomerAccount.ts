import { Base } from './Base'

export class CustomerAccount extends Base {
  /**
   * Add Customer Account
   * @param data
   */
  addCustomerAccount(data) {
    // TODO this may be a GET request
    const { merchantId, customerId, customerAccountId, ...req } = data
    const url = {'POST': `/merchants/${ merchantId}/customers/${customerId}/customeraccounts/${customerAccountId}/encrypted`}

    return this.rpg.request(url, req)
  }
  /**
   * Edit Customer Account
   * @param data
   */
  editCustomerAccount(data) {
    const { merchantId, customerId, customerAccountId, ...req } = data
    const url = {'PUT': `/merchants/${ merchantId}/customers/${customerId}/customeraccounts/${customerAccountId}`}

    return this.rpg.request(url, req)
  }
  /**
   * Get All Customer Accounts
   * @param data
   */
  allCustomerAccounts(data) {
    const { merchantId, customerId, ...req } = data
    const url = {'GET': `/merchants/${ merchantId}/customers/${customerId}/customeraccounts`}

    return this.rpg.request(url, req)
  }
  /**
   * Customer Account By Id Credit Card
   * @param data
   */
  customerAccountByIdCC(data) {
    const { merchantId, customerId, customerAccountId, ...req } = data
    const url = {'GET': `/merchants/${ merchantId}/customers/${customerId}/customeraccounts/${customerAccountId}`}

    return this.rpg.request(url, req)
  }
  /**
   * Customer Account By Id ACH
   * @param data
   */
  customerAccountByIdACH(data) {
    const { merchantId, customerAccountId, ...req } = data
    const url = {'GET': `/merchants/${ merchantId}/customeraccounts/${customerAccountId}`}

    return this.rpg.request(url, req)
  }
  /**
   * Set Default Customer Account
   * @param data
   */
  setDefaultCustomerAccount(data) {
    const { merchantId, customerAccountId, ...req } = data
    const url = {'PUT': `/merchants/${ merchantId}/customeraccounts/${customerAccountId}/default`}

    return this.rpg.request(url, req)
  }
  /**
   * Get Default Customer Account
   * @param data
   */
  defaultCustomerAccount(data) {
    const { merchantId, customerAccountId, ...req } = data
    const url = {'GET': `/merchants/${ merchantId}/customeraccounts/${customerAccountId}/default`}

    return this.rpg.request(url, req)
  }
  /**
   * Get Customer Account Type
   * @param data
   */
  customerAccountType(data) {
    const { merchantId, customerAccountId, ...req } = data
    const url = {'GET': `/merchants/${ merchantId}/customeraccounts/${customerAccountId}/encrypted`}

    return this.rpg.request(url, req)
  }
}