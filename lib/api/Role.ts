import { Base } from './Base'

export class Role extends Base {
  addRole(data) {
    const {...req } = data

    const url = {
      'POST': `/roles`
    }

    return this.rpg.request(url, req)
  }

  editRole(data) {
    const {roleId, ...req } = data
    const url = {
      'PUT': `/roles/${roleId}`
    }

    return this.rpg.request(url, req)
  }

  allRoles(data) {
    const { pageSize, startRow, sortField, asc, ...req } = data
    const url = {
      'GET': `/roles?PageSize=${pageSize}&StartRow=${startRow}&SortField=${sortField}&Asc=${asc}`
    }

    return this.rpg.request(url, req)
  }

  roleById(data) {
    const { roleId, ...req } = data
    const url = {'GET': `/roles/${roleId}`}

    return this.rpg.request(url, req)
  }

  deleteRole(data) {
    const {roleId, ...req } = data
    const url = {
      'DEL': `/roles/${roleId}`
    }

    return this.rpg.request(url, req)
  }

  getOperation(data) {
    const {user_type, ...req } = data
    const url = {
      'GET': `/operations?userType=${user_type || 2}`
    }

    return this.rpg.request(url, req)
  }

  getAllOperations(data) {
    const {...req } = data
    const url = {
      'GET': `/operations`
    }

    return this.rpg.request(url, req)
  }
}