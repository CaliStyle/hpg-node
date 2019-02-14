import { Base } from './Base'

export class Reseller extends Base {
  addReseller(data) {
    const {...req } = data

    const url = {
      'POST': `/resellers`
    }

    return this.rpg.request(url, req)
  }

  editReseller(data) {
    const {resellerId, ...req } = data
    const url = {
      'PUT': `/resellers/${resellerId}`
    }

    return this.rpg.request(url, req)
  }

  allResellers(data) {
    const { pageSize, startRow, sortField, asc, ...req } = data
    const url = {
      'GET': `/resellers?PageSize=${pageSize}&StartRow=${startRow}&SortField=${sortField}&Asc=${asc}`
    }

    return this.rpg.request(url, req)
  }

  resellerById(data) {
    const { resellerId, ...req } = data
    const url = {'GET': `/resellers/${resellerId}`}

    return this.rpg.request(url, req)
  }

  deleteReseller(data) {
    const {resellerId, ...req } = data
    const url = {
      'DEL': `/resellers/${resellerId}`
    }

    return this.rpg.request(url, req)
  }
}