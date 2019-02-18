import { Base } from './Base'
import {validateUser, validateUserMerchant} from "../validators";

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
      'GET': `/merchants/${merchantId}/users`
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

    return validateUserMerchant.allUserMerchants(data)
      .then(validation => {
        return this.rpg.request(url, req, validation)
      })
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