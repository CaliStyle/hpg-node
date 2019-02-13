export const Fee = {
  addFee: function(data) {
    const {...req } = data

    const url = {
      'POST': `/fees`
    }

    return this.request(url, req)
  },

  editFee: function(data) {
    const {fee_id, ...req } = data
    const url = {
      'PUT': `/fees/${fee_id}`
    }

    return this.request(url, req)
  },

  allFees: function (data) {
    const { page_size, start_row, sort_field, asc, ...req } = data
    const url = {
      'GET': `/fees?PageSize=${page_size}&StartRow=${start_row}&SortField=${sort_field}&Asc=${asc}`
    }

    return this.request(url, req)
  },

  feeById: function (data) {
    const { fee_id, ...req } = data
    const url = {'GET': `/fees/${fee_id}`}

    return this.request(url, req)
  },

  deleteFee: function(data) {
    const {fee_id, ...req } = data
    const url = {
      'DEL': `/fees/${fee_id}`
    }

    return this.request(url, req)
  },

  feeByChannelType: function (data) {
    const { channel_type, ...req } = data
    const url = {'GET': `/channels/fees/${channel_type}`}

    return this.request(url, req)
  },
}