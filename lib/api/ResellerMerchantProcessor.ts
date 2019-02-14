import { Base } from './Base'

export class ResellerMerchantProcessor extends Base {
  getProcecssor(data) {
    const {resellerId, merchantId, processorId, ...req } = data

    const url = {
      'GET': `/resellers/${resellerId}/merchants/${merchantId}/processorconfigurations/${processorId}`
    }

    return this.rpg.request(url, req)
  }

  setProcessor(data) {
    const {resellerId, merchantId, processorId, ...req } = data

    const url = {
      'PUT': `/resellers/${resellerId}/merchants/${merchantId}/processorconfigurations/${processorId}`
    }

    return this.rpg.request(url, req)
  }
}