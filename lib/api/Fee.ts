import { Base } from './Base'

export class Fee extends Base {
  addFee(data) {
    const {...req } = data

    const url = {
      'POST': `/fees`
    }

    return this.rpg.request(url, req)
  }

  editFee(data) {
    const {feeId, ...req } = data
    const url = {
      'PUT': `/fees/${feeId}`
    }

    return this.rpg.request(url, req)
  }

  allFees(data) {
    const { pageSize, startRow, sortField, asc, ...req } = data
    const url = {
      'GET': `/fees?PageSize=${pageSize}&StartRow=${startRow}&SortField=${sortField}&Asc=${asc}`
    }

    return this.rpg.request(url, req)
  }

  feeById(data) {
    const { feeId, ...req } = data
    const url = {'GET': `/fees/${feeId}`}

    return this.rpg.request(url, req)
  }

  deleteFee(data) {
    const {feeId, ...req } = data
    const url = {
      'DEL': `/fees/${feeId}`
    }

    return this.rpg.request(url, req)
  }

  feeByChannelType(data) {
    const { channel_type, ...req } = data
    const url = {'GET': `/channels/fees/${channel_type}`}

    return this.rpg.request(url, req)
  }
}