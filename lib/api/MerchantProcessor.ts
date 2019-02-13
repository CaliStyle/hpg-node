export const MerchantProcessor = {
  getProcecssor: function(data) {
    const {merchant_id, processor_id, ...req } = data

    const url = {
      'GET': `/merchants/${merchant_id}/processorconfigurations/${processor_id}`
    }

    return this.request(url, req)
  },

  setProcessor: function(data) {
    const {merchant_id, processor_id, ...req } = data

    const url = {
      'PUT': `/merchants/${merchant_id}/processorconfigurations/${processor_id}`
    }

    return this.request(url, req)
  },
}