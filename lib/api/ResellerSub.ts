export const ResellerSub = {
  addSubreseller: function(data) {
    const {reseller_id, ...req } = data

    const url = {
      'POST': `/resellers/${reseller_id}/subresellers`
    }

    return this.request(url, req)
  },

  editSubreseller: function(data) {
    const {reseller_id, subreseller_id, ...req } = data
    const url = {
      'PUT': `/resellers/${reseller_id}/subresellers/${subreseller_id}`
    }

    return this.request(url, req)
  },

  allSubresellers: function (data) {
    const { reseller_id, page_size, start_row, sort_field, asc, ...req } = data
    const url = {
      'GET': `/resellers/${reseller_id}/subresellers?PageSize=${page_size}&StartRow=${start_row}&SortField=${sort_field}&Asc=${asc}`
    }

    return this.request(url, req)
  },

  subresellerById: function (data) {
    const { reseller_id, subreseller_id, ...req } = data
    const url = {'GET': `/resellers/${reseller_id}/subresellers/${subreseller_id}`}

    return this.request(url, req)
  },
}