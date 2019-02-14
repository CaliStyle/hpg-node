import { Base } from './Base'

export class ResellerMerchant extends Base {
  addMerchant(data) {
    const {resellerId, ...req } = data

    const url = {
      'POST': `/resellers/${resellerId}/merchants`
    }

    return this.rpg.request(url, req)
  }

  editMerchant(data) {
    const {resellerId, merchantId, ...req } = data
    const url = {
      'PUT': `/resellers/${resellerId}/merchants/${merchantId}`
    }

    return this.rpg.request(url, req)
  }

  allMerchants(data) {
    const { resellerId, pageSize, startRow, sortField, asc, ...req } = data
    const url = {
      'GET': `/resellers/${resellerId}/merchants?PageSize=${pageSize}&StartRow=${startRow}&SortField=${sortField}&Asc=${asc}`
    }

    return this.rpg.request(url, req)
  }

  merchantById(data) {
    const { resellerId, merchantId, ...req } = data
    const url = {'GET': `/resellers/${resellerId}/merchants/${merchantId}`}

    return this.rpg.request(url, req)
  }
}