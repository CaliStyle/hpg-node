export const UserReseller = {
  addUser: function(data) {
    const {reseller_id, ...req } = data

    const url = {
      'POST': `/resellers/${reseller_id}/users`
    }

    return this.request(url, req)
  },

  editUser: function(data) {
    const {reseller_id, user_id, ...req } = data
    const url = {
      'PUT': `/resellers/${reseller_id}/users/${user_id}`
    }

    return this.request(url, req)
  },

  allUsers: function (data) {
    const { reseller_id, page_size, start_row, sort_field, asc, ...req } = data
    const url = {
      'GET': `/resellers/${reseller_id}/users?PageSize=${page_size}&StartRow=${start_row}&SortField=${sort_field}&Asc=${asc}`
    }

    return this.request(url, req)
  },

  userById: function (data) {
    const { reseller_id, user_id, ...req } = data
    const url = {'GET': `/resellers/${reseller_id}/users/${user_id}`}

    return this.request(url, req)
  },

  deleteUser: function(data) {
    const {reseller_id, user_id, ...req } = data
    const url = {
      'DEL': `/resellers/${reseller_id}/users/${user_id}`
    }

    return this.request(url, req)
  },

  changePassword: function(data) {
    const {reseller_id, loginname, ...req } = data
    const url = {
      'POST': `/resellers/${reseller_id}/users/${loginname}/passwords`
    }

    return this.request(url, req)
  },

  resetPassword: function(data) {
    const {reseller_id, loginname, ...req } = data
    const url = {
      'POST': `/resellers/${reseller_id}/users/${loginname}/passwords`
    }

    return this.request(url, req)
  },

  inactivateUser: function(data) {
    const {reseller_id, user_id, ...req } = data
    const url = {
      'DEL': `/resellers/${reseller_id}/users/${user_id}/activations`
    }

    return this.request(url, req)
  },

  activateUser: function(data) {
    const {reseller_id, user_id, ...req } = data
    const url = {
      'POST': `/resellers/${reseller_id}/users/${user_id}/activations`
    }

    return this.request(url, req)
  },

  getUserByLoginName: function(data) {
    const {reseller_id, loginname, ...req } = data
    const url = {
      'GET': `/resellers/${reseller_id}/users/${loginname}`
    }

    return this.request(url, req)
  },

  unlockUser: function(data) {
    const {reseller_id, user_id, ...req } = data
    const url = {
      'DEL': `/resellers/${reseller_id}/users/${user_id}/locks`
    }

    return this.request(url, req)
  },
}