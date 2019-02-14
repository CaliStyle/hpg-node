import { Base } from './Base'

export class RoleMerchant extends Base {
  addRole(data) {
    const {merchantId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/roles`
    }

    return this.rpg.request(url, req)
  }

  editRole(data) {
    const {merchantId, roleId, ...req } = data
    const url = {
      'PUT': `/merchants/${merchantId}/roles/${roleId}`
    }

    return this.rpg.request(url, req)
  }

  allRoles(data) {
    const { merchantId, pageSize, startRow, sortField, asc, ...req } = data
    const url = {
      'GET': `/merchants/${merchantId}/roles?PageSize=${pageSize}&StartRow=${startRow}&SortField=${sortField}&Asc=${asc}`
    }

    return this.rpg.request(url, req)
  }

  roleById(data) {
    const { merchantId, roleId, ...req } = data
    const url = {'GET': `/merchants/${merchantId}/roles/${roleId}`}

    return this.rpg.request(url, req)
  }

  deleteRole(data) {
    const {merchantId, roleId, ...req } = data
    const url = {
      'DEL': `/merchants/${merchantId}/roles/${roleId}`
    }

    return this.rpg.request(url, req)
  }

  getOperation(data) {
    const { user_type, ...req } = data
    const url = {
      'GET': `/operations?userType=${user_type || 1}`
    }

    return this.rpg.request(url, req)
  }
}