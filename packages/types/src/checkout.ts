/**
 * @typedef {object} Variant
 * @prop {number} cap
 * @prop {string} merchDescription
 * @prop {string} merchName
 */
export type Variant = {
  cap: number
  sold: number
  soldOut: boolean
}

export type PhysicalGoodOptions = {
  id: number
  name: string
  values: string[]
}

export type CheckoutPhysicalGoods = {
  id: string
  name: string
  productId: string
  bundleId: string
  importedGood?: {
    description?: string
    images?: { src: string; height: number; width: number }[]
    name?: string
    options?: PhysicalGoodOptions[]
  }
  images: { src: string; height: number; width: number }[]
  options: PhysicalGoodOptions[]
  type: string
  shippingAddressRequired?: boolean
  walletRequired?: boolean
  digitalInfo?: any
  provider?: string // either merch_upload or shopify or printful
  cap?: number
  sold?: number
  variantCaps?: any
}

export type CheckoutDigitalGoods = CheckoutPhysicalGoods

export type BundleProps = {
  id?: string
  eventId?: string
  name?: string
  price?: number
  sold?: number
  soldOut?: boolean
  staticSoldOut?: boolean
  status?: string
  addOnInfo?: any
  bundleCap?: number
  bundlesSold?: number
  displayOrder?: number
  merchType?: string
  image?: string
  description?: string
  shippingRates?: any
  taxInfo?: any
  geofenceRestrictions?: any
  isPublic?: boolean
  fulfillmentCost?: number
  limitedInventory?: boolean
  meetEventId?: string
  hasAfterparty?: boolean
  physicalGoods?: CheckoutPhysicalGoods[]
  digitalGoods?: CheckoutPhysicalGoods[]
  nextPrices?: any[]
  linkOutUrl?: string
}

export type TierProps = {
  price?: number
  applyToBundles: boolean
  datetime: string
  hasRun: boolean
  increase: number
  increaseType: string
  name: string
}

export type TieredPricingProps = {
  tiers: TierProps[]
}
