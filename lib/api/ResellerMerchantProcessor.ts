export const ResellerMerchantProcessor = {
  getProcecssor: function(data) {
    const {reseller_id, merchant_id, processor_id, ...req } = data

    const url = {
      'GET': `/resellers/${reseller_id}/merchants/${merchant_id}/processorconfigurations/${processor_id}`
    }

    return this.request(url, req)
  },

  setProcessor: function(data) {
    const {reseller_id, merchant_id, processor_id, ...req } = data

    const url = {
      'PUT': `/resellers/${reseller_id}/merchants/${merchant_id}/processorconfigurations/${processor_id}`
    }

    return this.request(url, req)
  },
}