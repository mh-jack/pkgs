import { BundleProps } from './index'

export type VariantInfo = {
  Size: string
}

export type Language = {
  name: string
  iso639_1: string
  iso639_2: string
  nativeName: string
}

export type Currency = {
  code: string
  name: string
  symbol: string
}

export type Translations = {
  br: string
  de: string
  es: string
  fa: string
  fr: string
  hr: string
  it: string
  ja: string
  nl: string
  pt: string
}

export type RegionalBloc = {
  name: string
  acronym: string
  otherNames: string[]
  otherAcronyms: any[]
}

export type NormalizedShippingCountry = {
  area: number
  cioc: string
  flag: string
  gini: number
  name: string
  latlng: number[]
  region: string
  borders: string[]
  capital: string
  demonym: string
  languages: Language[]
  subregion: string
  timezones: string[]
  alpha2Code: string
  alpha3Code: string
  currencies: Currency[]
  nativeName: string
  population: number
  numericCode: string
  altSpellings: string[]
  callingCodes: string[]
  translations: Translations
  regionalBlocs: RegionalBloc[]
  topLevelDomain: string[]
}

export type PurchasedPhysicalGoodShippingAddress = {
  id: string
  raw: string
  zip: string
  city: string
  type: string
  line1: string
  line2: string
  userId: string
  country: string
  address1: string
  fullName: string
  province: string
  createdAt: Date
  deletedAt?: any
  updatedAt: Date
  billingZip: string
  rawAddress: string
  phoneNumber?: any
  country_code: string
  province_code: string
  billingCountry: string
  countryAlpha2Code: string
  countryAlpha3Code: string
  smartyStreetValidated?: any
  normalized_shipping_country: NormalizedShippingCountry
}

export type PaymentInfo = {
  id: string
  ticketId: string
  shippingAddress: PurchasedPhysicalGoodShippingAddress
  currency: string
  currencyValue: number
  targetCurrency: string
  targetValue: number
  email: string
  mailingList: boolean
  refunded: boolean
  createdAt: Date
  paymentProvider: string
  paymentId: string
  phone?: any
  targetServiceFee: number
  serviceFeePct: string
  receiptNumber?: any
  discountCode: string
  discountValue?: any
  shippingTargetValue: number
  referrer?: any
  taxTargetValue: number
  payoutProcessed: boolean
  paymentMethodId: string
  shippingAddressId: string
  currencyTotalValue: number
  currencyRate: string
  userId: string
}

export type PurchasedPhyicalGoods = {
  id: string
  paymentInfoId: string
  artistBrandId: string
  productId: string
  variantId?: any
  createdAt: Date
  eventId: string
  variantInfo: VariantInfo
  bundleId: string
  merchGalleryItemId?: any
  shopifyExported: boolean
  status: string
  shippedDate?: any
  estimatedArrival?: any
  trackingUrl?: any
  paymentInfo: PaymentInfo
  bundle: BundleProps
}
