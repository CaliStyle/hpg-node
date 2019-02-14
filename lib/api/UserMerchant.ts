import { Base } from './Base'

export class UserMerchant extends Base {
  addUser(data) {
    const {merchantId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/users`
    }

    return this.rpg.request(url, req)
  }

  editUser(data) {
    const {merchantId, userId, ...req } = data
    const url = {
      'PUT': `/merchants/${merchantId}/users/${userId}`
    }

    return this.rpg.request(url, req)
  }

  allUsers(data) {
    const { merchantId, pageSize, startRow, sortField, asc, ...req } = data
    const url = {
      'GET': `/merchants/${merchantId}/users?PageSize=${pageSize}&StartRow=${startRow}&SortField=${sortField}&Asc=${asc}`
    }

    return this.rpg.request(url, req)
  }

  userById(data) {
    const { merchantId, userId, ...req } = data
    const url = {'GET': `/merchants/${merchantId}/users/${userId}`}

    return this.rpg.request(url, req)
  }

  deleteUser(data) {
    const {merchantId, userId, ...req } = data
    const url = {
      'DEL': `/merchants/${merchantId}/users/${userId}`
    }

    return this.rpg.request(url, req)
  }

  changePassword(data) {
    const {merchantId, loginname, ...req } = data
    const url = {
      'POST': `/merchants/${merchantId}/users/${loginname}/passwords`
    }

    return this.rpg.request(url, req)
  }

  resetPassword(data) {
    const {merchantId, loginname, ...req } = data
    const url = {
      'POST': `/merchants/${merchantId}/users/${loginname}/passwords`
    }

    return this.rpg.request(url, req)
  }

  inactivateUser(data) {
    const {merchantId, userId, ...req } = data
    const url = {
      'DEL': `/merchants/${merchantId}/users/${userId}/activations`
    }

    return this.rpg.request(url, req)
  }

  activateUser(data) {
    const {merchantId, userId, ...req } = data
    const url = {
      'POST': `/merchants/${merchantId}/users/${userId}/activations`
    }

    return this.rpg.request(url, req)
  }

  getUserByLoginName(data) {
    const {merchantId, loginname, ...req } = data
    const url = {
      'GET': `/merchants/${merchantId}/users/${loginname}`
    }

    return this.rpg.request(url, req)
  }

  unlockUser(data) {
    const {merchantId, userId, ...req } = data
    const url = {
      'DEL': `/merchants/${merchantId}/users/${userId}/locks`
    }

    return this.rpg.request(url, req)
  }
}