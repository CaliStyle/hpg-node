import { Base } from './Base'

export class ResellerSub extends Base {
  addSubreseller(data) {
    const {resellerId, ...req } = data

    const url = {
      'POST': `/resellers/${resellerId}/subresellers`
    }

    return this.rpg.request(url, req)
  }

  editSubreseller(data) {
    const {resellerId, subresellerId, ...req } = data
    const url = {
      'PUT': `/resellers/${resellerId}/subresellers/${subresellerId}`
    }

    return this.rpg.request(url, req)
  }

  allSubresellers(data) {
    const { resellerId, pageSize, startRow, sortField, asc, ...req } = data
    const url = {
      'GET': `/resellers/${resellerId}/subresellers?PageSize=${pageSize}&StartRow=${startRow}&SortField=${sortField}&Asc=${asc}`
    }

    return this.rpg.request(url, req)
  }

  subresellerById(data) {
    const { resellerId, subresellerId, ...req } = data
    const url = {'GET': `/resellers/${resellerId}/subresellers/${subresellerId}`}

    return this.rpg.request(url, req)
  }
}