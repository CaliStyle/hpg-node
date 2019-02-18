import { Base } from './Base'
import {validateUserMerchant, validateUserReseller} from "../validators";

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
      'GET': `/resellers/${resellerId}/users`
    }

    const query = []
    if (typeof pageSize !== 'undefined') {
      query.push(`PageSize=${pageSize}`)
    }
    if (typeof startRow !== 'undefined') {
      query.push(`StartRow=${startRow}`)
    }
    if (typeof sortField !== 'undefined') {
      query.push(`SortField=${sortField}`)
    }
    if (typeof asc !== 'undefined') {
      query.push(`Asc=${asc}`)
    }
    if (query.length > 0) {
      url.GET = url.GET + `?${ query.join('&') }`
    }

    return validateUserReseller.allUserResellers(data)
      .then(validation => {
        return this.rpg.request(url, req, validation)
      })
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