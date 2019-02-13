export const Customer = {
  addCustomer: function(data) {
    const { merchant_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/customers`
    }

    return this.request(url, req)
  },
  
  editCustomer: function(data) {
    const { merchant_id, customer_id, ...req } = data
    const url = {
      'PUT': `/merchants/${merchant_id}/customers/${customer_id}`
    }

    return this.request(url, req)
  },
  
  allCustomers: function (data) {
    const { merchant_id, page_size, start_row, sort_field, asc, ...req } = data
    const url = {
      'GET': `/merchants/${merchant_id}/customers?PageSize=${page_size}&StartRow=${start_row}&SortField=${sort_field}&Asc=${asc}`
    }

    return this.request(url, req)
  },
  
  customerById: function (data) {
    const { merchant_id, customer_id, ...req } = data
    const url = {'GET': `/merchants/${merchant_id}/customers/${customer_id}`}

    return this.request(url, req)
  }
}