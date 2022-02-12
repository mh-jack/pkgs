import { BundleProps, TieredPricingProps } from './checkout'
import { GeofenceProps } from './geofence'
import { TicketTemplateProps } from './ticket'
import { ArtistBrandProps } from './artist'
import { StreamProps } from './stream'

export type EventConfig = {
  backupStreamProvider?: string
  isDvr?: string
  streamType?: string
  vodDuration?: number
  isRTMPVideoUploading?: boolean
  isRTMPVideoUploaded?: boolean
  editedPreRollDuration?: number
  newFileDuration?: number
  newKey?: string
}

export type EventProps = {
  id?: string
  slug?: string
  displayName?: string
  description?: string
  ticketPrice?: number
  ticketsSold?: number
  ticketCap?: number
  soldOut?: boolean
  availBundles?: boolean
  datetime?: string
  duration?: number
  image?: string
  state?: string
  pinnedMessage?: string
  streamState?: string
  actualEnd?: boolean | string
  actualStart?: boolean | string
  region?: string
  geofenceTitle?: string
  geofences?: GeofenceProps[]
  merchCountries?: string[]
  dropDate?: string
  accessCodeDropDate?: string
  groupEventId?: string
  groupEvents?: EventProps[]
  checkoutOverrideUrl?: string

  geoLocation?: string
  geoLatitude?: number
  geoLongitude?: number
  geoMilesLimit?: number
  chatModulo?: number

  sponsorImage?: string
  isPublic?: boolean
  isPrivate?: boolean
  isFree?: boolean
  needsAccessCode?: boolean
  pwyw?: boolean
  pwywMinPrice?: number
  isWaitlist?: boolean
  isEmailVerified?: boolean
  artistBrandId?: string
  hideChat?: boolean
  bundles?: BundleProps[]
  merchGalleryBundles?: BundleProps[]
  merchAddOnBundles?: BundleProps[]
  externalAddOnBundles?: BundleProps[]
  freeNFTBundle?: BundleProps
  tours?: TourProps[]
  hasFreeNFTBundle?: boolean
  allowQuestions?: boolean
  vodStreamId?: string
  vodDelayMin?: number
  eventEndLengthHours?: number
  allowAnonymousChat?: boolean
  // Hacky
  artistBrandName?: string
  artistBrand?: ArtistBrandProps
  earnings?: number
  enableDiscountCode?: boolean // DEPRECATED
  eventType?: string
  meetInterval?: number
  unsplashImage?: string | null // QR code position

  parentId?: string
  parentEvent?: EventProps
  childEvents?: EventProps[]
  prevEventId?: string
  prevEvent?: EventProps
  nextEventId?: string
  nextEvent?: EventProps
  activeStreamId?: string
  activeStream?: StreamProps
  vodStream?: StreamProps
  modulo?: number

  tieredPricing?: TieredPricingProps

  upsellEvent?: EventProps

  copyCustomization?: any

  streamConfig?: EventConfig
  streamProvider?: string
  tippingEnabled?: boolean
  vodDuration?: number
  ticketCountNotification?: boolean
  ticketCountEmails?: TicketCountEmails[]

  customTitle?: string
  streamType?: string
  streamVideoUrl?: string
  preRollDuration?: number
}

export type TourProps = {
  id: string
  artistBrandId: string
  name: string
  description: string
  image: string
  isPublic: string
  events: EventProps[]
  ticketTemplates: TicketTemplateProps[]
  slug?: string
}

export type TicketCountEmails = {
  id?: string
  eventId?: string
  email?: string
  frequency?: string
  lastSent?: string
  createdAt?: string
}
