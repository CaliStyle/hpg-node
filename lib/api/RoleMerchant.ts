export const RoleMerchant = {
  addRole: function(data) {
    const {merchant_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/roles`
    }

    return this.request(url, req)
  },

  editRole: function(data) {
    const {merchant_id, role_id, ...req } = data
    const url = {
      'PUT': `/merchants/${merchant_id}/roles/${role_id}`
    }

    return this.request(url, req)
  },

  allRoles: function (data) {
    const { merchant_id, page_size, start_row, sort_field, asc, ...req } = data
    const url = {
      'GET': `/merchants/${merchant_id}/roles?PageSize=${page_size}&StartRow=${start_row}&SortField=${sort_field}&Asc=${asc}`
    }

    return this.request(url, req)
  },

  roleById: function (data) {
    const { merchant_id, role_id, ...req } = data
    const url = {'GET': `/merchants/${merchant_id}/roles/${role_id}`}

    return this.request(url, req)
  },

  deleteRole: function(data) {
    const {merchant_id, role_id, ...req } = data
    const url = {
      'DEL': `/merchants/${merchant_id}/roles/${role_id}`
    }

    return this.request(url, req)
  },

  getOperation: function(data) {
    const { user_type, ...req } = data
    const url = {
      'GET': `/operations?userType=${user_type || 1}`
    }

    return this.request(url, req)
  }
}