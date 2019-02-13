export const Role = {
  addRole: function(data) {
    const {...req } = data

    const url = {
      'POST': `/roles`
    }

    return this.request(url, req)
  },

  editRole: function(data) {
    const {role_id, ...req } = data
    const url = {
      'PUT': `/roles/${role_id}`
    }

    return this.request(url, req)
  },

  allRoles: function (data) {
    const { page_size, start_row, sort_field, asc, ...req } = data
    const url = {
      'GET': `/roles?PageSize=${page_size}&StartRow=${start_row}&SortField=${sort_field}&Asc=${asc}`
    }

    return this.request(url, req)
  },

  roleById: function (data) {
    const { role_id, ...req } = data
    const url = {'GET': `/roles/${role_id}`}

    return this.request(url, req)
  },

  deleteRole: function(data) {
    const {role_id, ...req } = data
    const url = {
      'DEL': `/roles/${role_id}`
    }

    return this.request(url, req)
  },

  getOperation: function(data) {
    const {user_type, ...req } = data
    const url = {
      'GET': `/operations?userType=${user_type || 2}`
    }

    return this.request(url, req)
  },

  getAllOperations: function(data) {
    const {...req } = data
    const url = {
      'GET': `/operations`
    }

    return this.request(url, req)
  }
}