import { Base } from './Base'

export class MerchantProcessor extends Base {
  getProcecssor(data) {
    const {merchantId, processorId, ...req } = data

    const url = {
      'GET': `/merchants/${merchantId}/processorconfigurations/${processorId}`
    }

    return this.rpg.request(url, req)
  }

  setProcessor(data) {
    const {merchantId, processorId, ...req } = data

    const url = {
      'PUT': `/merchants/${merchantId}/processorconfigurations/${processorId}`
    }

    return this.rpg.request(url, req)
  }
}