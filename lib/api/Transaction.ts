import { Base } from './Base'

export class Transaction extends Base {
  addTransactionCC(data) {
    const {merchantId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/transactions`
    }

    return this.rpg.request(url, req)
  }
  addTransactionACH(data) {
    const {merchantId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/transactions`
    }

    return this.rpg.request(url, req)
  }
  addTransactionDC(data) {
    const {merchantId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/transactions`
    }

    return this.rpg.request(url, req)
  }
  addTransactionCustomerCC(data) {
    const {merchantId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/transactions`
    }

    return this.rpg.request(url, req)
  }
  addTransactionCustomerACH(data) {
    const {merchantId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/transactions`
    }

    return this.rpg.request(url, req)
  }
  addTip(data) {
    const {merchantId, transactionId, tip_amount, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/transactions/${transactionId}/adjustment?tipAmount=${tip_amount}`
    }

    return this.rpg.request(url, req)
  }

  getTransactionById(data) {
    const {merchantId, transactionId, ...req } = data

    const url = {
      'GET': `/merchants/${merchantId}/transactions/${transactionId}`
    }

    return this.rpg.request(url, req)
  }

  searchTransactions(data) {
    const {merchantId, ...req } = data

    const url = {
      'GET': `/merchants/${merchantId}/transactions`
    }

    return this.rpg.request(url, req)
  }

  verifyTransaction(data) {
    const {merchantId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/transactions`
    }

    return this.rpg.request(url, req)
  }

  forceSaleTransaction(data) {
    const {merchantId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/transactions`
    }

    return this.rpg.request(url, req)
  }

  voidTransactionCC(data) {
    const {merchantId, transactionId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/3/transactions/${transactionId}/cancellations`
    }

    return this.rpg.request(url, req)
  }

  voidTransactionACH(data) {
    const {merchantId, transactionId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/2/transactions/${transactionId}/cancellations`
    }

    return this.rpg.request(url, req)
  }

  voidTransactionDC(data) {
    const {merchantId, transactionId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/1/transactions/${transactionId}/cancellations`
    }

    return this.rpg.request(url, req)
  }

  refundTransactionCC(data) {
    const {merchantId, transactionId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/3/transactions/${transactionId}/refunds`
    }

    return this.rpg.request(url, req)
  }

  refundTransactionACH(data) {
    const {merchantId, transactionId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/2/transactions/${transactionId}/refunds`
    }

    return this.rpg.request(url, req)
  }

  refundTransactionDC(data) {
    const {merchantId, transactionId, ...req } = data

    const url = {
      'POST': `/merchants/${merchantId}/1/transactions/${transactionId}/refunds`
    }

    return this.rpg.request(url, req)
  }
}