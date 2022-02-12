export type ShippingAddress = {
  city: string
  country: string
  userId: string
  fullName: string
  line1: string
  countryAlpha2Code?: string
  createdAt?: Date
  deletedAt?: Date | null
  id?: string
  line2?: string | null
  province?: string
  rawAddress?: string
  type?: string
  updatedAt?: Date | null
  zip?: string | number | null
}

export type UserProps = {
  access?: string
  applemusic: string
  artistBrandId: string
  bio?: string
  cashApp: string
  createdAt: Date
  email: string
  externalBillingId: string
  firstName: string
  id: string
  image?: string
  instagram?: string
  isSuper?: boolean
  isVerified: boolean
  lang: string
  lastName: string
  merch: string
  passwordHash: string
  paymentMethods?: any[]
  permissions?: string[]
  paypal: any | null
  phone: any | null
  resetPasswordToken: string
  shippingAddresses?: ShippingAddress[]
  slug: string
  soundcloud: string
  spotify: string
  stripeAccountId?: string
  stripeCustomerId: null
  timezone: string
  updatedAt?: Date
  userId: string
  venmo: string
}
