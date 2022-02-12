/**
 * @typedef {object} SalesInfo
 * @prop {string} [datetime]
 * @prop {number} discount
 * @prop {number} [duration]
 * @prop {number} earnings
 * @prop {string} [eventId]
 * @prop {string} [itemId]
 * @prop {string} [itemType]
 * @prop {string} [name]
 * @prop {string} [paymentProvider]
 * @prop {boolean} [payoutProcessed]
 * @prop {SalesInfoTotals} [paypal]
 * @prop {number} price
 * @prop {number} quantity
 * @prop {number} [serviceFee]
 * @prop {number} [shipping]
 * @prop {SalesInfoTotals} [stripe]
 * @prop {number} [tax]
 * @prop {number} total
 * @prop {SalesInfoTotals} [totals]
 */
export type SalesInfo = {
  datetime?: string
  discount: number
  duration?: number
  earnings: number
  eventId?: string
  itemId?: string
  itemType?: string
  name?: string // Event Name
  paymentProvider?: string
  payoutProcessed?: boolean
  paypal?: SalesInfoTotals
  price: number
  quantity: number
  serviceFee?: number
  shipping?: number
  stripe?: SalesInfoTotals
  tax?: number
  total: number
  totals?: SalesInfoTotals
}

/**
 * @typedef {object} SalesInfoTotals
 * @prop {number} [discount]
 * @prop {number} [earnings]
 * @prop {number} [shipping]
 * @prop {number} [tax]
 * @prop {number} [tip]
 * @prop {number} [total]
 */
export type SalesInfoTotals = {
  discount?: number
  earnings?: number
  shipping?: number
  tax?: number
  tip?: number
  total?: number
}
