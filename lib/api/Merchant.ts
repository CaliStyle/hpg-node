import { Base } from './Base'

export class Merchant extends Base {
  addMerchant(data) {
    const {...req } = data

    const url = {
      'POST': `/merchants`
    }

    return this.rpg.request(url, req)
  }

  editMerchant(data) {
    const {merchantId, ...req } = data
    const url = {
      'PUT': `/merchants/${merchantId}`
    }

    return this.rpg.request(url, req)
  }

  allMerchants(data) {
    const { pageSize, startRow, sortField, asc, ...req } = data
    const url = {
      'GET': `/merchants?PageSize=${pageSize}&StartRow=${startRow}&SortField=${sortField}&Asc=${asc}`
    }

    return this.rpg.request(url, req)
  }

  allMerchantsList(data) {
    const { ...req } = data
    const url = {
      'GET': `/merchants/list`
    }

    return this.rpg.request(url, req)
  }

  merchantById(data) {
    const { merchantId, ...req } = data
    const url = {'GET': `/merchants/${merchantId}`}

    return this.rpg.request(url, req)
  }

  deleteMerchant(data) {
    const {merchantId, ...req } = data
    const url = {
      'DEL': `/merchants/${merchantId}`
    }

    return this.rpg.request(url, req)
  }
}