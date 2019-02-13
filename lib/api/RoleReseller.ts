export const RoleReseller = {
  addRole: function(data) {
    const {reseller_id, ...req } = data

    const url = {
      'POST': `/resellers/${reseller_id}/roles`
    }

    return this.request(url, req)
  },

  editRole: function(data) {
    const {reseller_id, role_id, ...req } = data
    const url = {
      'PUT': `/resellers/${reseller_id}/roles/${role_id}`
    }

    return this.request(url, req)
  },

  allRoles: function (data) {
    const { reseller_id, page_size, start_row, sort_field, asc, ...req } = data
    const url = {
      'GET': `/resellers/${reseller_id}/roles?PageSize=${page_size}&StartRow=${start_row}&SortField=${sort_field}&Asc=${asc}`
    }

    return this.request(url, req)
  },

  roleById: function (data) {
    const { reseller_id, role_id, ...req } = data
    const url = {'GET': `/resellers/${reseller_id}/roles/${role_id}`}

    return this.request(url, req)
  },

  deleteRole: function(data) {
    const {reseller_id, role_id, ...req } = data
    const url = {
      'DEL': `/resellers/${reseller_id}/roles/${role_id}`
    }

    return this.request(url, req)
  },

  getOperation: function(data) {
    const { user_type, ...req } = data
    const url = {
      'GET': `/operations?userType=${user_type || 0}`
    }

    return this.request(url, req)
  }
}