import { EventConfig, PhysicalGoodOptions } from '../index'

export type EventState =
  | 'CREATED'
  | 'PRESHOW'
  | 'VOD'
  | 'LIVE'
  | 'INTERMISSION'
  | 'ENDED'

export type EventRemindersConfig = {
  reminders: EventReminder[]
  subscribers: EventSubscribers[]
}

export type EventReminder = {
  hasRun: boolean
  beforeMinutes: number
}

export type EventSubscribers = {
  hasRun: boolean
  beforeMinutes: number
}

export type PrivacyPolicy = {
  url: any
}

export type CustomButton = {
  url: string
  icon: string
  text: string
}

export type Stream = {
  id: string
  eventId: string
  slug: string
  provider: string
  config: ActiveStreamConfig
  vodStream: { config: ActiveStreamConfig }
  playerId: string | null
  state: EventState
  deletedAt: Date | null
  createdAt: Date
  region: any | null
}

export type VodStream = {
  id: string
  config?: {
    outputs?: {
      vimeo?: string
      createdAt: Date
      endedAt: Date
      playbackId: string
      fullPlayBackId?: string
      downloadURL?: string
      startOffsetSeconds?: number
      endOffsetSeconds?: number
      cdn?: {
        hls?: string
      }
    }
  }
}

export type ActiveStreamConfig = {
  muxConfig?: { id: string }
  outputs?: {
    cdn?: {
      hls?: string
    }
    dvr?: { createdAt: Date; duration: number; playbackId: any }
    vimeo?: string
  }
}

export type ArtistBrand = {
  id: string
  displayName: string
  slug: string
  bio: string | null
  image: string | null
  merch: string | null
  spotify: string | null
  applemusic: string | null
  venmo: any | null
  cashApp: any | null
  createdAt: Date
  updatedAt: Date | null
  youtube: string | null
  instagram: string | null
  isVerified: boolean
  showAttendeesCount: boolean
  paypal: any | null
  backgroundImage: string | null
  pageBackgroundImage: string | null
  privacyPolicy: PrivacyPolicy
  retargetPixel: any | null
  conversionPixel: any | null
  shopify: any | null
  ein: any | null
  stripeAccountId: string | null
  paypalAccountId: string | null
  facebook: string | null
  studioSessionTime: number
  serviceFeePct: string
  googleConversionPixel: any | null
  googleRetargetPixel: any | null
  needsAccessCode: boolean
  customButton: {
    buttons: CustomButton[]
  } | null
  theme: {
    artistBrand: string
    color: {
      [key: string]: string
    }
    font: {
      [key: string]: string
    }
    logo: {
      [key: string]: string
    }
  }
  maxTicketQuantity: number
  payoutDelay: number
  defaultCurrency: string
  whiteLabelId: string | null
  marketPixels: any
  merchServiceFeePct: string
  stripeErrors: any
  twitter: string | null
  tippingServiceFeePct: string
  chatRateLimit: number
  chatEnabled?: boolean
  accessCodeDropDate: any | null
  customConfirmation: any | null
  tidal: any | null
  requiresOverflow: any | null
  preStreamCreationHour: number
  hasAmbientNoise: boolean
  soundcloud: string | null
  housesEnabled: boolean
  airtableRecordId: string | null
  tippingEnabled: boolean
  pollsEnabled: boolean
  closedCaptionEnabled: boolean
  shopifyBuyButton?: {
    domain: string
    storefrontAccessToken: string
    productIds: string[]
    options?: any
  }
  dmEnabled?: boolean
  logoBlack: string | null
  logoWhite: string | null
  reminderConfig: any
  badWordFilter?: {
    words: string[]
  }
  showAvroomSourceControls: boolean
  pagePrimaryColor?: string
  creatorPageTheme: string
}

export type Tour = {
  name: string
}

/**
 * Bundle
 **/

export type Bundle = {
  id?: string
  eventId?: string
  name?: string
  price?: number
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
  physicalGoods?: BaseTypePhysicalGoods[]
  digitalGoods?: BaseTypePhysicalGoods[]
  nextPrices?: any[]
  createdAt: Date
  deletedAt: Date
  hasAfterparty: boolean
  limitedInventory: boolean
  linkOutUrl: string
  meetEventId: string
  serviceFeePct: string
  sold: string
}
export type BaseTypePhysicalGoods = {
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
  type: 'physical'
  shippingAddressRequired?: boolean
  walletRequired?: boolean
  digitalInfo?: any
  provider?: string // either merch_upload or shopify or printful
  variantCaps?: any
}
export type BaseTypeDigitalGoods = Omit<BaseTypePhysicalGoods, 'type'> & { type: 'digital' }

/**
 * Event
 **/

export type Event = {
  id: string
  artistBrandId: string
  slug: string
  displayName: string
  description: string | null
  ticketPrice: number
  datetime: Date | string
  actualStart: Date | null
  actualEnd: Date | null
  duration: string | number
  image: string | null
  createdAt: Date
  updatedAt: Date | null
  pinnedMessage: string | null
  state: EventState
  activeStreamId: string | null
  sponsorImage: string | null
  deletedAt: Date | null
  isPublic: boolean
  meetInterval: number | null
  eventType: string
  unsplashImage: string | null
  pwyw: boolean
  isFree: boolean
  isWaitlist: boolean
  geofenceTitle: string | null
  needsAccessCode: boolean
  atCheckoutOnly: boolean
  enableDiscountCode: boolean
  hideChat: boolean
  isCharityEnabled: boolean
  ticketImage: string | null
  streamArchive: any | null
  parentId: string | null
  allowQuestions: boolean
  nextEventId: string | null
  prevEventId: string | null
  payoutProcessed: boolean
  vodStreamId: string | null
  merchCountries: any | null
  customButton: {
    buttons: CustomButton[]
  } | null
  gcalEventId: string | null
  reminderConfig: EventRemindersConfig
  dropDate: Date | null
  staticSoldOut: any | null
  chatExport: any | null
  eventEndLengthHours: number
  vodDelayMin: number
  groupEventId: string | null
  accessCodeDropDate: Date | null
  copyCustomization: any
  airtableRecordId: string | null
  youtubeOverride: any | null
  chatModulo: any | null
  pwywMinPrice: number | null
  artistBrand: ArtistBrand
  geofences: any[]
  activeStream: Stream
  upsellEvent: null
  vodStream: VodStream | null
  parentEvent: Event | null
  prevEvent: null
  nextEvent: null | Event
  tours: Tour[]
  childEvents: Event[]
  groupEvents: Event[]
  artistBrandName: 'wenob'
  bundles: Bundle[]
  merchGalleryBundles: Bundle[]
  externalAddOnBundles: Bundle[]
  soldOut: false
  tippingEnabled: boolean
  vodDuration: number | null
  streamProvider: string | null
  allowAnonymousChat: boolean | null
  streamConfig?: EventConfig
  ticketCap: number
  openGraphSrc?: any | null
}

export type DeviceInfo = {
  os: string
  source: string
  browser: string
  version: string
  platform: string
}

export type Ticket = {
  id: string
  stripePaymentId: string | null
  email: string
  lastCookieIssuedAt: Date
  createdAt: Date
  updatedAt: Date | null
  referrer: any | null
  ticketType: string
  ticketTemplateId: string | null
  location: any
  timezone: any | null
  deletedAt: Date | null
  deviceInfo: DeviceInfo
  timeSlot: any | null
  payoutProcessed: boolean
  completedAt: Date | null
  roomSid: string | null
  compositionSid: string | null
  compositionStatus: any | null
  lang: string
  externalId: string | null
  gifting: any
  events: Event[]
}

export type User = {
  id: string
  firstName: string
  lastName: string
  slug: string
  email: string
  passwordHash: string
  createdAt: Date
  updatedAt: Date
  isSuper: boolean
  stripeAccountId: string
  phone: any | null
  resetPasswordToken: string
  isVerified: boolean
  paypal: any | null
  stripeCustomerId: null
  externalBillingId: string
  lang: string
  timezone: string
  shippingAddresses: BaseTypesShippingAddress[]
  paymentMethods: PaymentMethod[]
  bio?: string
  image?: string
  instagram?: string
  access?: string
}

export type UserPublic = {
  id: string
  slug: string
  firstName: string
  lastName: string
  bio: string | null
  image: string | null
  instagram: string | null
  isSuper: boolean
  createdAt: Date
}

export type BaseTypesShippingAddress = {
  city: string
  country: string
  id: string
  userId: string
  fullName: string
  line1: string
  line2: string | null
  province: string
  zip: string | number | null
  rawAddress: string
  createdAt: Date
  updatedAt: Date | null
  deletedAt: Date | null
}

export type PaymentMethod = {
  id: string
  userId: string
  stripeCustomerId: string
  isDefault: boolean
  paymentMethodType: string
  billingName: string
  cardBrand: string
  cardCountry: string
  cardExpMonth: string | number
  cardExpYear: string | number
  cardLast4: string | number
  cardFunding: string
  deletedAt: Date | null
  createdAt: Date
}

export type ApiBaseTypeHouse = {
  accessCode: string
  id: string
  isPublic: boolean
  memberCount: number
  members: HouseMemeber[]
  name: string
  owner: string
}

export type HouseMemeber = {
  bio: null | string
  createdAt: Date
  image: null | string
  instagram: null | string
  isArtist: boolean
  muted: boolean
  name: string
  uid: string
}

export type AverageSalePrice = {
  avg_price: string
  datePurchased: Date
}

export type TicketSalePerDay = {
  Revenue: string
  datePurchased: Date
  ticketsSold: string
}

export type TopCountry = {
  Country: string
  count: string
}

export type MerchSale = {
  datepurchased: string
  quantity: string
  revenue: string
}

export type Demo = {
  chatLogs: null
  createdAt: Date
  description: string
  event: Event
  eventId: string
  id: string
  isPublic: boolean
  streamId: null | string
}
