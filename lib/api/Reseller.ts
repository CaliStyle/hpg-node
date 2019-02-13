export const Reseller = {
  addReseller: function(data) {
    const {...req } = data

    const url = {
      'POST': `/resellers`
    }

    return this.request(url, req)
  },

  editReseller: function(data) {
    const {reseller_id, ...req } = data
    const url = {
      'PUT': `/resellers/${reseller_id}`
    }

    return this.request(url, req)
  },

  allResellers: function (data) {
    const { page_size, start_row, sort_field, asc, ...req } = data
    const url = {
      'GET': `/resellers?PageSize=${page_size}&StartRow=${start_row}&SortField=${sort_field}&Asc=${asc}`
    }

    return this.request(url, req)
  },

  resellerById: function (data) {
    const { reseller_id, ...req } = data
    const url = {'GET': `/resellers/${reseller_id}`}

    return this.request(url, req)
  },

  deleteReseller: function(data) {
    const {reseller_id, ...req } = data
    const url = {
      'DEL': `/resellers/${reseller_id}`
    }

    return this.request(url, req)
  },
}