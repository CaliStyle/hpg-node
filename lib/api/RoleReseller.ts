import { Base } from './Base'

export class RoleReseller extends Base {
  addRole(data) {
    const {resellerId, ...req } = data

    const url = {
      'POST': `/resellers/${resellerId}/roles`
    }

    return this.rpg.request(url, req)
  }

  editRole(data) {
    const {resellerId, roleId, ...req } = data
    const url = {
      'PUT': `/resellers/${resellerId}/roles/${roleId}`
    }

    return this.rpg.request(url, req)
  }

  allRoles(data) {
    const { resellerId, pageSize, startRow, sortField, asc, ...req } = data
    const url = {
      'GET': `/resellers/${resellerId}/roles?PageSize=${pageSize}&StartRow=${startRow}&SortField=${sortField}&Asc=${asc}`
    }

    return this.rpg.request(url, req)
  }

  roleById(data) {
    const { resellerId, roleId, ...req } = data
    const url = {'GET': `/resellers/${resellerId}/roles/${roleId}`}

    return this.rpg.request(url, req)
  }

  deleteRole(data) {
    const {resellerId, roleId, ...req } = data
    const url = {
      'DEL': `/resellers/${resellerId}/roles/${roleId}`
    }

    return this.rpg.request(url, req)
  }

  getOperation(data) {
    const { user_type, ...req } = data
    const url = {
      'GET': `/operations?userType=${user_type || 0}`
    }

    return this.rpg.request(url, req)
  }
}