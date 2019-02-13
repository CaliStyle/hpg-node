import * as changeCase from 'change-case'
import * as request from 'request-promise'

import {
  Billing,
  Country,
  Customer,
  CustomerAccount,
  Fee,
  Fraud,
  Invoice,
  Merchant,
  MerchantProcessor,
  Notification,
  NotificationMerchant,
  NotificationReseller,
  PaymentForm,
  RatePlan,
  RecurringPayment,
  Report,
  ReportMerchant,
  Reseller,
  ResellerMerchant,
  ResellerMerchantProcessor,
  ResellerSub,
  ResolutionCenter,
  Risk,
  Role,
  RoleMerchant,
  RoleReseller,
  Transaction,
  User,
  UserMerchant,
  UserReseller
} from './api'

const urlRequest = 'https://api.uat.hellopayments.net'

export class HPG {
  public billing // : Billing
  public country // : Country
  public customer // : Customer
  public customerAccount // : CustomerAccount
  public fee // :
  public fraud // : Fraud
  public invoice // : Invoice
  public merchant  // : Merchant
  public merchantProcessor // : MerchantProcessor
  public notification // : Notification
  public notificationMerchant // : NotificationMerchant
  public notificationReseller // : NotificationReseller
  public paymentForm // : PaymentForm
  public ratePlan // : RatePlan
  public recurringPayment // : RecurringPayment
  public report // : Report
  public reportMerchant // : ReportMerchant
  public reportMerchantProcessor // : ReportMerchantProcessor
  public reseller // : Reseller
  public resellerMerchant // : ResellerMerchant
  public resellerMerchantProcessor // : ResellerMerchantProcessor
  public resellerSub // : ResellerSub
  public resolutionCenter // : ResolutionCenter
  public risk // : Risk
  public role // : Role
  public roleMerchant // : RoleMerchant
  public roleReseller // : RoleReseller
  public transaction // : Transaction
  public user // : User
  public userMerchant // : UserMerchant
  public userReseller // : UserReseller

  private config: {
    apiKey?: string,
    userName?: string,
    password?: string,
    transform?: boolean,
    debug?: boolean
  } = {}

  constructor(options = {}) {

    this.config = this.configure(options)

    this.billing = Billing
    this.country = Country
    this.customer = Customer
    this.customerAccount = CustomerAccount
    this.fee = Fee
    this.fraud = Fraud
    this.invoice = Invoice
    this.merchant = Merchant
    this.merchantProcessor = MerchantProcessor
    this.notification = Notification
    this.notificationMerchant = NotificationMerchant
    this.notificationReseller = NotificationReseller
    this.paymentForm = PaymentForm
    this.ratePlan = RatePlan
    this.recurringPayment = RecurringPayment
    this.report = Report
    this.reportMerchant = ReportMerchant
    this.reseller = Reseller
    this.resellerMerchant = ResellerMerchant
    this.resellerMerchantProcessor = ResellerMerchantProcessor
    this.resellerSub = ResellerSub
    this.resolutionCenter = ResolutionCenter
    this.risk = Risk
    this.role = Role
    this.roleMerchant = RoleMerchant
    this.roleReseller = RoleReseller
    this.transaction = Transaction
    this.user = User
    this.userMerchant = UserMerchant
    this.userReseller = UserReseller

    // bind `this` context
    const methods = [
      'billing',
      'country',
      'customer',
      'customerAccount',
      'fee',
      'fraud',
      'invoice',
      'merchant',
      'merchantProcessor',
      'notification',
      'notificationMerchant',
      'notificationReseller',
      'paymentForm',
      'ratePlan',
      'recurringPayment',
      'report',
      'reportMerchant',
      'reseller',
      'resellerMerchant',
      'resellerMerchantProcessor',
      'resellerSub',
      'resolutionCenter',
      'risk',
      'role',
      'roleMerchant',
      'roleReseller',
      'transaction',
      'user',
      'userMerchant',
      'userReseller'
    ]
    methods.forEach((cat) => {
      Object.keys(this[cat]).forEach((key) => {
        this[cat][key] = this[cat][key].bind(this)
      })
    })
  }

  /**
   * Configure NMI client
   * @name configure
   * @param {Object} options
   * @param {string} options.apiKey       api key
   * @param {string} options.username     username
   * @param {string} options.password     password
   * @param {bool}   options.transform    disable transformations
   * @param {bool}   options.debug        output verbose debug information
   */
  configure(options: { apiKey?: string, userName?: string, password?: string, transform?: boolean, debug?: boolean } = {}) {
    return {
      apiKey: options.apiKey || this.config.apiKey || '',
      username: options.userName || this.config.userName || '',
      password: options.password || this.config.password || '',
      transform: options.transform !== false,
      debug: options.debug || false
    }
  }

  /**
   * Return Method and Url
   * @param obj
   */
  composeUrl(obj) {
    const method = Object.keys(obj)[0]
    const url = `${urlRequest}${obj[method]}`
    return {url, method}
  }

  /**
   * Perform a request.
   * @name request
   * @param {*} body as json
   */
  request(req, body = {}) {

    // attach keys to root element
    // let rootKey = Object.keys(body)[0]
    // body[rootKey].apiKey = body[rootKey].apiKey || this.config.apiKey

    // Get the method and url from the request
    const { method, url } = this.composeUrl(req)

    // request
    return request({
      method: method,
      url: url,
      strictSSL: true,
      body: body,
    })
      .then((res) => {
        // if(res.response.result && res.response.result !== 1) {
        //   res.isHPG = true
        //   throw res
        // }
        // else {
        //   return res
        // }
      })
  }
}