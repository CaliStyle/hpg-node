export const Transaction = {
  addTransactionCC: function(data) {
    const {merchant_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/transactions`
    }

    return this.request(url, req)
  },
  addTransactionACH: function (data) {
    const {merchant_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/transactions`
    }

    return this.request(url, req)
  },
  addTransactionDC: function (data) {
    const {merchant_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/transactions`
    }

    return this.request(url, req)
  },
  addTransactionCustomerCC: function (data) {
    const {merchant_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/transactions`
    }

    return this.request(url, req)
  },
  addTransactionCustomerACH: function (data) {
    const {merchant_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/transactions`
    }

    return this.request(url, req)
  },
  addTip: function(data) {
    const {merchant_id, transaction_id, tip_amount, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/transactions/${transaction_id}/adjustment?tipAmount=${tip_amount}`
    }

    return this.request(url, req)
  },

  getTransactionById: function(data) {
    const {merchant_id, transaction_id, ...req } = data

    const url = {
      'GET': `/merchants/${merchant_id}/transactions/${transaction_id}`
    }

    return this.request(url, req)
  },

  searchTransactions: function(data) {
    const {merchant_id, ...req } = data

    const url = {
      'GET': `/merchants/${merchant_id}/transactions`
    }

    return this.request(url, req)
  },

  verifyTransaction: function (data) {
    const {merchant_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/transactions`
    }

    return this.request(url, req)
  },

  forceSaleTransaction: function (data) {
    const {merchant_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/transactions`
    }

    return this.request(url, req)
  },

  voidTransactionCC: function (data) {
    const {merchant_id, transaction_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/3/transactions/${transaction_id}/cancellations`
    }

    return this.request(url, req)
  },

  voidTransactionACH: function (data) {
    const {merchant_id, transaction_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/2/transactions/${transaction_id}/cancellations`
    }

    return this.request(url, req)
  },

  voidTransactionDC: function (data) {
    const {merchant_id, transaction_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/1/transactions/${transaction_id}/cancellations`
    }

    return this.request(url, req)
  },

  refundTransactionCC: function (data) {
    const {merchant_id, transaction_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/3/transactions/${transaction_id}/refunds`
    }

    return this.request(url, req)
  },

  refundTransactionACH: function (data) {
    const {merchant_id, transaction_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/2/transactions/${transaction_id}/refunds`
    }

    return this.request(url, req)
  },

  refundTransactionDC: function (data) {
    const {merchant_id, transaction_id, ...req } = data

    const url = {
      'POST': `/merchants/${merchant_id}/1/transactions/${transaction_id}/refunds`
    }

    return this.request(url, req)
  },
}