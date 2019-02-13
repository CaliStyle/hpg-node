export const UserMerchant = {
  addUser: function(data) {
    const {merchant_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/users`
    }

    return this.request(url, req)
  },

  editUser: function(data) {
    const {merchant_id, user_id, ...req } = data
    const url = {
      'PUT': `/merchants/${merchant_id}/users/${user_id}`
    }

    return this.request(url, req)
  },

  allUsers: function (data) {
    const { merchant_id, page_size, start_row, sort_field, asc, ...req } = data
    const url = {
      'GET': `/merchants/${merchant_id}/users?PageSize=${page_size}&StartRow=${start_row}&SortField=${sort_field}&Asc=${asc}`
    }

    return this.request(url, req)
  },

  userById: function (data) {
    const { merchant_id, user_id, ...req } = data
    const url = {'GET': `/merchants/${merchant_id}/users/${user_id}`}

    return this.request(url, req)
  },

  deleteUser: function(data) {
    const {merchant_id, user_id, ...req } = data
    const url = {
      'DEL': `/merchants/${merchant_id}/users/${user_id}`
    }

    return this.request(url, req)
  },

  changePassword: function(data) {
    const {merchant_id, loginname, ...req } = data
    const url = {
      'POST': `/merchants/${merchant_id}/users/${loginname}/passwords`
    }

    return this.request(url, req)
  },

  resetPassword: function(data) {
    const {merchant_id, loginname, ...req } = data
    const url = {
      'POST': `/merchants/${merchant_id}/users/${loginname}/passwords`
    }

    return this.request(url, req)
  },

  inactivateUser: function(data) {
    const {merchant_id, user_id, ...req } = data
    const url = {
      'DEL': `/merchants/${merchant_id}/users/${user_id}/activations`
    }

    return this.request(url, req)
  },

  activateUser: function(data) {
    const {merchant_id, user_id, ...req } = data
    const url = {
      'POST': `/merchants/${merchant_id}/users/${user_id}/activations`
    }

    return this.request(url, req)
  },

  getUserByLoginName: function(data) {
    const {merchant_id, loginname, ...req } = data
    const url = {
      'GET': `/merchants/${merchant_id}/users/${loginname}`
    }

    return this.request(url, req)
  },

  unlockUser: function(data) {
    const {merchant_id, user_id, ...req } = data
    const url = {
      'DEL': `/merchants/${merchant_id}/users/${user_id}/locks`
    }

    return this.request(url, req)
  },
}