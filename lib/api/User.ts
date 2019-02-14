import { Base } from './Base'

export class User extends Base {
  addUser(data) {
    const {...req } = data

    const url = {
      'POST': `/users`
    }

    return this.rpg.request(url, req)
  }

  editUser(data) {
    const {userId, ...req } = data
    const url = {
      'PUT': `/users/${userId}`
    }

    return this.rpg.request(url, req)
  }

  allUsers(data) {
    const { pageSize, startRow, sortField, asc, ...req } = data
    const url = {
      'GET': `/users?PageSize=${pageSize}&StartRow=${startRow}&SortField=${sortField}&Asc=${asc}`
    }

    return this.rpg.request(url, req)
  }

  userById(data) {
    const { userId, ...req } = data
    const url = {'GET': `/users/${userId}`}

    return this.rpg.request(url, req)
  }

  deleteUser(data) {
    const {userId, ...req } = data
    const url = {
      'DEL': `/users/${userId}`
    }

    return this.rpg.request(url, req)
  }

  changePassword(data) {
    const {loginname, ...req } = data
    const url = {
      'POST': `/users/${loginname}/passwords`
    }

    return this.rpg.request(url, req)
  }

  resetPassword(data) {
    const {loginname, ...req } = data
    const url = {
      'POST': `/users/${loginname}/passwords`
    }

    return this.rpg.request(url, req)
  }

  inactivateUser(data) {
    const {userId, ...req } = data
    const url = {
      'DEL': `/users/${userId}/activations`
    }

    return this.rpg.request(url, req)
  }

  activateUser(data) {
    const {userId, ...req } = data
    const url = {
      'POST': `/users/${userId}/activations`
    }

    return this.rpg.request(url, req)
  }

  getUserByLoginName(data) {
    const {loginname, ...req } = data
    const url = {
      'GET': `/users/${loginname}`
    }

    return this.rpg.request(url, req)
  }

  unlockUser(data) {
    const {userId, ...req } = data
    const url = {
      'DEL': `/users/${userId}/locks`
    }

    return this.rpg.request(url, req)
  }

  forgotPassword(data) {
    const {loginname, ...req } = data
    const url = {
      'POST': `/users/${loginname}/forgotpasswords`
    }

    return this.rpg.request(url, req)
  }

}