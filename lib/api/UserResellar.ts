import { Base } from './Base'

export class UserReseller extends Base {
  addUser(data) {
    const {resellerId, ...req } = data

    const url = {
      'POST': `/resellers/${resellerId}/users`
    }

    return this.rpg.request(url, req)
  }

  editUser(data) {
    const {resellerId, userId, ...req } = data
    const url = {
      'PUT': `/resellers/${resellerId}/users/${userId}`
    }

    return this.rpg.request(url, req)
  }

  allUsers(data) {
    const { resellerId, pageSize, startRow, sortField, asc, ...req } = data
    const url = {
      'GET': `/resellers/${resellerId}/users?PageSize=${pageSize}&StartRow=${startRow}&SortField=${sortField}&Asc=${asc}`
    }

    return this.rpg.request(url, req)
  }

  userById(data) {
    const { resellerId, userId, ...req } = data
    const url = {'GET': `/resellers/${resellerId}/users/${userId}`}

    return this.rpg.request(url, req)
  }

  deleteUser(data) {
    const {resellerId, userId, ...req } = data
    const url = {
      'DEL': `/resellers/${resellerId}/users/${userId}`
    }

    return this.rpg.request(url, req)
  }

  changePassword(data) {
    const {resellerId, loginname, ...req } = data
    const url = {
      'POST': `/resellers/${resellerId}/users/${loginname}/passwords`
    }

    return this.rpg.request(url, req)
  }

  resetPassword(data) {
    const {resellerId, loginname, ...req } = data
    const url = {
      'POST': `/resellers/${resellerId}/users/${loginname}/passwords`
    }

    return this.rpg.request(url, req)
  }

  inactivateUser(data) {
    const {resellerId, userId, ...req } = data
    const url = {
      'DEL': `/resellers/${resellerId}/users/${userId}/activations`
    }

    return this.rpg.request(url, req)
  }

  activateUser(data) {
    const {resellerId, userId, ...req } = data
    const url = {
      'POST': `/resellers/${resellerId}/users/${userId}/activations`
    }

    return this.rpg.request(url, req)
  }

  getUserByLoginName(data) {
    const {resellerId, loginname, ...req } = data
    const url = {
      'GET': `/resellers/${resellerId}/users/${loginname}`
    }

    return this.rpg.request(url, req)
  }

  unlockUser(data) {
    const {resellerId, userId, ...req } = data
    const url = {
      'DEL': `/resellers/${resellerId}/users/${userId}/locks`
    }

    return this.rpg.request(url, req)
  }
}