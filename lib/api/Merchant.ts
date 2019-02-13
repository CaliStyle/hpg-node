export const Merchant = {
  addMerchant: function(data) {
    const {...req } = data

    const url = {
      'POST': `/merchants`
    }

    return this.request(url, req)
  },

  editMerchant: function(data) {
    const {merchant_id, ...req } = data
    const url = {
      'PUT': `/merchants/${merchant_id}`
    }

    return this.request(url, req)
  },

  allMerchants: function (data) {
    const { page_size, start_row, sort_field, asc, ...req } = data
    const url = {
      'GET': `/merchants?PageSize=${page_size}&StartRow=${start_row}&SortField=${sort_field}&Asc=${asc}`
    }

    return this.request(url, req)
  },

  allMerchantsList: function (data) {
    const { ...req } = data
    const url = {
      'GET': `/merchants/list`
    }

    return this.request(url, req)
  },

  merchantById: function (data) {
    const { merchant_id, ...req } = data
    const url = {'GET': `/merchants/${merchant_id}`}

    return this.request(url, req)
  },

  deleteMerchant: function(data) {
    const {merchant_id, ...req } = data
    const url = {
      'DEL': `/merchants/${merchant_id}`
    }

    return this.request(url, req)
  },
}