export const ResellerMerchant = {
  addMerchant: function(data) {
    const {reseller_id, ...req } = data

    const url = {
      'POST': `/resellers/${reseller_id}/merchants`
    }

    return this.request(url, req)
  },

  editMerchant: function(data) {
    const {reseller_id, merchant_id, ...req } = data
    const url = {
      'PUT': `/resellers/${reseller_id}/merchants/${merchant_id}`
    }

    return this.request(url, req)
  },

  allMerchants: function (data) {
    const { reseller_id, page_size, start_row, sort_field, asc, ...req } = data
    const url = {
      'GET': `/resellers/${reseller_id}/merchants?PageSize=${page_size}&StartRow=${start_row}&SortField=${sort_field}&Asc=${asc}`
    }

    return this.request(url, req)
  },

  merchantById: function (data) {
    const { reseller_id, merchant_id, ...req } = data
    const url = {'GET': `/resellers/${reseller_id}/merchants/${merchant_id}`}

    return this.request(url, req)
  },
}