import { Base } from './Base'

export class ReportMerchant extends Base {
  billingReport(data) {
    const { pageSize, start_date, end_date, sortField, asc, csv, ...req } = data
    const url = {
      'GET': `/reports/billingreport?startDate=${ start_date }&endDate=${ end_date }&PageSize=${pageSize}&SortField=${sortField || 'merchantName' }&Asc=${asc}&exportToCsv=${csv}`
    }

    return this.rpg.request(url, req)
  }
  creationReport(data) {
    const { pageSize, from_date, to_date, sortField, asc, csv, ...req } = data
    const url = {
      'GET': `/reports/merchantactivationreport?fromdate=${ from_date }&todate=${ to_date }&PageSize=${pageSize}&SortField=${sortField || 'merchantName' }&Asc=${asc}&exportToCsv=${csv}`
    }

    return this.rpg.request(url, req)
  }

  merchantTransactionReport(data) {
    const { merchantId, pageSize, startRow, channel_type, from_date, to_date, sortField, asc, csv, ...req } = data
    const url = {
      'GET': `/reports/transactionlistreport?fromdate=${ from_date }&todate=${ to_date }&PageSize=${pageSize}&SortField=${sortField || 'TransactionDate' }&Asc=${asc}&exportToCsv=${csv}&MerchantId=${merchantId}&StartRow=${startRow}&ChannelType=${channel_type}`
    }

    return this.rpg.request(url, req)
  }
}