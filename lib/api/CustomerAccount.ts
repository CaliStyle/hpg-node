export const CustomerAccount = {
  /**
   * Add Customer Account
   * @param data
   */
  addCustomerAccount: function (data) {
    // TODO this may be a GET request
    const { merchant_id, customer_id, customer_account_id, ...req } = data
    const url = {'POST': `/merchants/${ merchant_id}/customers/${customer_id}/customeraccounts/${customer_account_id}/encrypted`}

    return this.request(url, req)
  },
  /**
   * Edit Customer Account
   * @param data
   */
  editCustomerAccount: function (data) {
    const { merchant_id, customer_id, customer_account_id, ...req } = data
    const url = {'PUT': `/merchants/${ merchant_id}/customers/${customer_id}/customeraccounts/${customer_account_id}`}

    return this.request(url, req)
  },
  /**
   * Get All Customer Accounts
   * @param data
   */
  allCustomerAccounts: function (data) {
    const { merchant_id, customer_id, ...req } = data
    const url = {'GET': `/merchants/${ merchant_id}/customers/${customer_id}/customeraccounts`}

    return this.request(url, req)
  },
  /**
   * Customer Account By Id Credit Card
   * @param data
   */
  customerAccountByIdCC: function (data) {
    const { merchant_id, customer_id, customer_account_id, ...req } = data
    const url = {'GET': `/merchants/${ merchant_id}/customers/${customer_id}/customeraccounts/${customer_account_id}`}

    return this.request(url, req)
  },
  /**
   * Customer Account By Id ACH
   * @param data
   */
  customerAccountByIdACH: function (data) {
    const { merchant_id, customer_account_id, ...req } = data
    const url = {'GET': `/merchants/${ merchant_id}/customeraccounts/${customer_account_id}`}

    return this.request(url, req)
  },
  /**
   * Set Default Customer Account
   * @param data
   */
  setDefaultCustomerAccount: function(data) {
    const { merchant_id, customer_account_id, ...req } = data
    const url = {'PUT': `/merchants/${ merchant_id}/customeraccounts/${customer_account_id}/default`}

    return this.request(url, req)
  },
  /**
   * Get Default Customer Account
   * @param data
   */
  defaultCustomerAccount: function (data) {
    const { merchant_id, customer_account_id, ...req } = data
    const url = {'GET': `/merchants/${ merchant_id}/customeraccounts/${customer_account_id}/default`}

    return this.request(url, req)
  },
  /**
   * Get Customer Account Type
   * @param data
   */
  customerAccountType: function (data) {
    const { merchant_id, customer_account_id, ...req } = data
    const url = {'GET': `/merchants/${ merchant_id}/customeraccounts/${customer_account_id}/encrypted`}

    return this.request(url, req)
  }
}