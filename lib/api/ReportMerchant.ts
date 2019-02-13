export const ReportMerchant = {
  billingReport: function (data) {
    const { page_size, start_date, end_date, sort_field, asc, csv, ...req } = data
    const url = {
      'GET': `/reports/billingreport?startDate=${ start_date }&endDate=${ end_date }&PageSize=${page_size}&SortField=${sort_field || 'merchantName' }&Asc=${asc}&exportToCsv=${csv}`
    }

    return this.request(url, req)
  },
  creationReport: function (data) {
    const { page_size, from_date, to_date, sort_field, asc, csv, ...req } = data
    const url = {
      'GET': `/reports/merchantactivationreport?fromdate=${ from_date }&todate=${ to_date }&PageSize=${page_size}&SortField=${sort_field || 'merchantName' }&Asc=${asc}&exportToCsv=${csv}`
    }

    return this.request(url, req)
  },

  merchantTransactionReport: function (data) {
    const { merchant_id, page_size, start_row, channel_type, from_date, to_date, sort_field, asc, csv, ...req } = data
    const url = {
      'GET': `/reports/transactionlistreport?fromdate=${ from_date }&todate=${ to_date }&PageSize=${page_size}&SortField=${sort_field || 'TransactionDate' }&Asc=${asc}&exportToCsv=${csv}&MerchantId=${merchant_id}&StartRow=${start_row}&ChannelType=${channel_type}`
    }

    return this.request(url, req)
  },
}