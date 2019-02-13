export const User = {
  addUser: function(data) {
    const {...req } = data

    const url = {
      'POST': `/users`
    }

    return this.request(url, req)
  },

  editUser: function(data) {
    const {user_id, ...req } = data
    const url = {
      'PUT': `/users/${user_id}`
    }

    return this.request(url, req)
  },

  allUsers: function (data) {
    const { page_size, start_row, sort_field, asc, ...req } = data
    const url = {
      'GET': `/users?PageSize=${page_size}&StartRow=${start_row}&SortField=${sort_field}&Asc=${asc}`
    }

    return this.request(url, req)
  },

  userById: function (data) {
    const { user_id, ...req } = data
    const url = {'GET': `/users/${user_id}`}

    return this.request(url, req)
  },

  deleteUser: function(data) {
    const {user_id, ...req } = data
    const url = {
      'DEL': `/users/${user_id}`
    }

    return this.request(url, req)
  },

  changePassword: function(data) {
    const {loginname, ...req } = data
    const url = {
      'POST': `/users/${loginname}/passwords`
    }

    return this.request(url, req)
  },

  resetPassword: function(data) {
    const {loginname, ...req } = data
    const url = {
      'POST': `/users/${loginname}/passwords`
    }

    return this.request(url, req)
  },

  inactivateUser: function(data) {
    const {user_id, ...req } = data
    const url = {
      'DEL': `/users/${user_id}/activations`
    }

    return this.request(url, req)
  },

  activateUser: function(data) {
    const {user_id, ...req } = data
    const url = {
      'POST': `/users/${user_id}/activations`
    }

    return this.request(url, req)
  },

  getUserByLoginName: function(data) {
    const {loginname, ...req } = data
    const url = {
      'GET': `/users/${loginname}`
    }

    return this.request(url, req)
  },

  unlockUser: function(data) {
    const {user_id, ...req } = data
    const url = {
      'DEL': `/users/${user_id}/locks`
    }

    return this.request(url, req)
  },

  forgotPassword: function(data) {
    const {loginname, ...req } = data
    const url = {
      'POST': `/users/${loginname}/forgotpasswords`
    }

    return this.request(url, req)
  },

}