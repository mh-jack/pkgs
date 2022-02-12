import { CreatorPageThemeEnum } from './theme'
import { PatreonPromotionTier } from './patreon'

export enum VerificationStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  DECLINED = 'DECLINED',
}

export type ArtistBrandProps = {
  id: string
  verificationStatus: VerificationStatus
  displayName: string
  slug: string
  bio: string
  image: string
  logoBlack: string
  logoWhite: string
  merch: string
  spotify: string
  soundcloud: string
  applemusic: string
  youtube: string
  facebook: string
  instagram: string
  twitter: string
  venmo: string
  cashApp: string
  isVerified: boolean
  housesEnabled: boolean
  videoHousesEnabled: boolean
  pollsEnabled: boolean
  closedCaptionEnabled: boolean
  dmEnabled?: boolean
  hasAmbientNoise: boolean
  chatEnabled?: boolean
  chatRateLimit: number
  customConfirmation: string
  tippingEnabled: boolean
  payoutDelay: number
  privacyPolicy: {
    text: string
    url: {
      text: string
      link: string
    }
  }
  customButton?: {
    buttons: {
      text: string
      url: string
      icon: string
    }[]
  }
  theme?: {
    artistBrand?: string
    color?: {
      [key: string]: string
    }
    font?: {
      [key: string]: string
    }
    logo?: {
      [key: string]: string
    }
  }
  retargetPixel: string
  conversionPixel: string
  googleRetargetPixel: string
  googleConversionPixel: string
  stripeErrors: any
  stripeAccountId: string
  paypalAccountId: string
  serviceFeePct: number
  merchServiceFeePct: number
  tippingServiceFeePct: number
  needsAccessCode?: boolean
  maxTicketQuantity?: boolean
  accessCodeDropDate?: string
  shopify?: string
  defaultCurrency?: string
  backgroundImage?: string
  tidal?: string
  seo?: any
  showAttendeesCount?: boolean
  reminderConfig: {
    reminders: any[]
  }
  productionAdvance?: boolean
  creatorPageTheme?: CreatorPageThemeEnum
  pageBackgroundImage?: string
  pagePrimaryColor?: string
  patreon?: PatreonPromotionTier[]
  badWordFilter?: {
    words: string[]
  }
  shopifyBuyButton?: {
    domain: string
    storefrontAccessToken: string
    productIds: string[]
    options?: any
  }
  showAvroomSourceControls?: boolean
  source?: string
}
