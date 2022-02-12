import { UserProps } from '../index'
//import { Moment } from 'moment'
import {
  CheckoutDigitalGoods,
  EventConfig,
  EventProps,
  GeofenceProps,
  BagItem,
  CheckoutPhysicalGoods,
  GuestProps,
  PromotionProps,
  PurchasedPhyicalGoods,
  SongProps,
  Variant
} from '..'
import {
  ArtistBrand,
  AverageSalePrice,
  Demo,
  Event,
  ApiBaseTypeHouse,
  MerchSale,
  Stream,
  Ticket,
  TicketSalePerDay,
  TopCountry,
  User,
  UserPublic,
} from './baseTypes'
import { ApiConfig } from './helperTypes'

//This is where all the type information about the frontend is located
// EXAMPLE:
// export type EndpointReqData = undefined
// export type EndpointReqParams = undefined
// export type EndpointReqPaths = undefined
// export type EndpointReqRes = undefined

// export type EndpointApiConfig = ApiConfig<
//   EndpointReqData,
//   EndpointReqParams,
//   EndpointReqPaths
// >
// export type EndpointApiRes = ApiResponse<EndpointReqRes>

export type EventAndSuccessApiRes = { event?: EventProps; success?: string[] }

//**************************************************************************/

export type LoginReqData = { email: string; password: string }
export type LoginReqRes = { token: string; user: Partial<UserProps> }

export type LoginApiConfig = ApiConfig<LoginReqData, undefined, undefined>
export type LoginApiRes = LoginReqRes

//**************************************************************************/

export type LogoutReqRes = {} // no outputs

export type LogoutApiConfig = ApiConfig
export type LogoutApiRes = LogoutReqRes

//**************************************************************************/

export type CreateAccessCode = {
  accessCodeGroupId?: string
  eventId?: string
  customId?: string
  discountValue?: number
  markIfUsed?: boolean
  excludeMerch?: boolean
  quantity?: number
}

type AccessCode = {
  accessCodeCount?: string
  accessCodeGroupId?: string
  accessCodeUsed?: string
  discountValue?: number
  excludeMerch?: boolean
  isPatreon?: boolean
  markIfUsed?: boolean
}

export type CreateAccessCodeReqBody = CreateAccessCode
export type CreateAccessCodeReqRes = AccessCode

export type CreateAccessCodeApiConfig = ApiConfig<
  CreateAccessCodeReqBody,
  undefined,
  undefined
>

export type CreateAccessCodeApiRes = ApiConfig<CreateAccessCodeReqRes>

export type RequireAccessCodeCheck = { eventId?: string }

export type RequireAccessCodeCheckApiConfig = ApiConfig<
  { needsAccessCode: boolean },
  undefined,
  RequireAccessCodeCheck
>

export type RequireAccessCodeCheckApiRes = EventAndSuccessApiRes

//**************************************************************************/

export type UpdateAccessCodeReqBody = Partial<CreateAccessCode>
export type UpdateAccessCodeReqRes = AccessCode

export type UpdateAccessCodeApiConfig = ApiConfig<
  UpdateAccessCodeReqBody,
  { eventId?: string },
  undefined
>

export type UpdateAccessCodeApiRes = ApiConfig<UpdateAccessCodeReqRes>

//**************************************************************************/

export type GetCSVCodeApiConfig = ApiConfig<
  undefined,
  { eventId?: string },
  { accessCodeGroupId?: string }
>

export type DeleteAccessCodeApiConfig = ApiConfig<
  undefined,
  { eventId?: string },
  { accessCodeGroupId?: string }
>

//**************************************************************************/

export type AccessCodeDropDateApiConfig = ApiConfig<
  { dropDate?: string },
  { eventId?: string },
  undefined
>

//**************************************************************************/

export type CreateGeofenceReqBody = Partial<GeofenceProps>
export type CreateGeofenceReqRes = {
  geofences: GeofenceProps[]
  success: string[]
}

export type CreateGeofenceApiConfig = ApiConfig<
  CreateGeofenceReqBody,
  undefined,
  { eventId?: string }
>

export type UpdateGeofenceApiConfig = ApiConfig<
  CreateGeofenceReqBody,
  undefined,
  { eventId?: string; geofenceId?: string }
>

export type DeleteGeofenceApiConfig = ApiConfig<
  undefined,
  undefined,
  { eventId?: string; geofenceId?: string }
>

export type CreateGeofenceApiRes = ApiConfig<CreateGeofenceReqRes>
export type DeleteGeofenceApiRes = CreateGeofenceReqRes

//**************************************************************************/

export type Question = {
  email?: string
  event?: Partial<EventProps>
  eventId?: string
  id?: string
  question: string
}

export type GetQuestionsReqPaths = { eventId: string }
export type GetQuestionsReqRes = { questions: Question[] }

export type GetQuestionsApiConfig = ApiConfig<
  undefined,
  undefined,
  GetQuestionsReqPaths
>
export type GetQuestionsApiRes = GetQuestionsReqRes

//**************************************************************************/

export type ToggleQuestionsReqPaths = { eventId: string }

export type ToggleQuestionsApiConfig = ApiConfig<
  { allowQuestions?: boolean },
  undefined,
  ToggleQuestionsReqPaths
>
export type ToggleQuestionsApiRes = EventAndSuccessApiRes

//**************************************************************************/

export type UploadISponsorImageApiConfig = ApiConfig<
  FormData,
  undefined,
  { eventId: string }
>
export type UploadSponsorImageApiRes = { event: EventProps }

export type RemoveSponsorImageReqBody = {
  sponsorImage?: string
  deleteSponsor?: boolean
}
export type RemoveSponsorImageApiConfig = ApiConfig<
  RemoveSponsorImageReqBody,
  undefined,
  { eventId: string }
>

//**************************************************************************/

export type Tier = {
  name?: string
  increase?: number
  increaseType?: string
  datetime?: any
  applyToBundles?: boolean
  isBase?: boolean
  price?: string
}

export type AddTierReqBody = Tier
export type AddTierReqPaths = { eventId: string }
export type AddTierReqRes = EventAndSuccessApiRes & { error?: string }

export type AddTierApiConfig = ApiConfig<
  AddTierReqBody,
  undefined,
  AddTierReqPaths
>
export type AddTierApiRes = AddTierReqRes

export type DeleteTierReqPaths = { eventId: string; dateTime: string }
export type DeleteTierApiConfig = ApiConfig<
  undefined,
  undefined,
  DeleteTierReqPaths
>

//**************************************************************************/

export type SetBundleOrderReqBody = { orderedBundleIds: string[] }
export type SetBundleOrderReqPaths = { eventIdOrSlug: string }
export type SetBundleOrderReqRes = EventAndSuccessApiRes

export type SetBundleOrderApiConfig = ApiConfig<
  SetBundleOrderReqBody,
  undefined,
  SetBundleOrderReqPaths
>
export type SetBundleOrderApiRes = ApiConfig<SetBundleOrderReqRes>

//**************************************************************************/

export type UpdateEventReqBody = EventProps & EventConfig
export type UpdateEventReqPaths = { eventIdOrSlug: string }

export type UpdateEventApiConfig = ApiConfig<
  UpdateEventReqBody,
  undefined,
  UpdateEventReqPaths
>
export type UpdateEventApiRes = EventAndSuccessApiRes

//**************************************************************************/

export type CreateAfterPartyEventReqBody = EventProps & EventConfig
export type CreateAfterPartyReqPaths = { eventId: string }

export type CreateAfterPartyApiConfig = ApiConfig<
  CreateAfterPartyEventReqBody,
  undefined,
  CreateAfterPartyReqPaths
>

export type DeleteAfterPartyApiConfig = ApiConfig<
  undefined,
  undefined,
  CreateAfterPartyReqPaths
>

export type DeleteAfterPartyApiRes = EventAndSuccessApiRes

//**************************************************************************/

export type GetPrivateEventsReqPaths = { artistBrandId: string }

export type GetPrivateEventsApiConfig = ApiConfig<
  undefined,
  undefined,
  GetPrivateEventsReqPaths
>

export type GetPrivateEventsApiRes = { events: EventProps[] }

//**************************************************************************/

export type RefundAfterPartyReqBody = {
  artistMessage?: string
}
export type RefundAfterPartyReqPaths = { eventId: string }

export type RefundAfterPartyApiConfig = ApiConfig<
  RefundAfterPartyReqBody,
  undefined,
  RefundAfterPartyReqPaths
>
export type RefundAfterPartyApiRes = EventAndSuccessApiRes

//**************************************************************************/

export type GuestPost = {
  email?: string
  eventId?: string
  ticketType?: string
  sendEmail?: boolean
  timezone?: string
}

export type AddNewGuestReqBody = GuestPost
export type ResendNewGuestTicketReqBody = {
  id?: string
  eventId?: string
  artistBrandSlug?: string
}

export type AddNewGuestApiConfig = ApiConfig<
  AddNewGuestReqBody,
  undefined,
  undefined
>
export type ResendNewGuestTicketApiConfig = ApiConfig<
  ResendNewGuestTicketReqBody,
  undefined,
  undefined
>
export type DeleteGuestApiConfig = ApiConfig<
  undefined,
  undefined,
  { ticketId?: string }
>
export type AddNewGuestApiRes = GuestProps

//**************************************************************************/

export type ToggleWaitListReqBody = {
  isWaitlist?: boolean
}
export type ToggleWaitListReqPaths = { eventId: string }

export type ToggleWaitListApiConfig = ApiConfig<
  ToggleWaitListReqBody,
  undefined,
  ToggleWaitListReqPaths
>
export type ToggleWaitListApiRes = EventAndSuccessApiRes

//**************************************************************************/

export type WaitlistForm = {
  email: string
  id?: string
}

export type GetWaitListReqPaths = { eventId: string }

export type GetWaitListApiConfig = ApiConfig<
  undefined,
  undefined,
  GetWaitListReqPaths
>
export type GetWaitListApiRes = WaitlistForm[]

//**************************************************************************/

export type SendEmailToWaitListReqBody = { eventId: string }

export type SendEmailToWaitListApiConfig = ApiConfig<
  SendEmailToWaitListReqBody,
  undefined,
  undefined
>
export type SendEmailToWaitListApiRes = EventAndSuccessApiRes

//**************************************************************************/

export type RescheduleEventReqBody = {
  artistMessage?: string
  datetime?: string
}
export type RescheduleEventReqPaths = { eventId: string }

export type RescheduleEventApiConfig = ApiConfig<
  RescheduleEventReqBody,
  undefined,
  RescheduleEventReqPaths
>
export type RescheduleEventApiRes = EventAndSuccessApiRes & { error?: string }

//**************************************************************************/

export type AddPromotionReqBody = { name?: string }
export type AddPromotionReqPaths = { eventId: string }

export type AddPromotionApiConfig = ApiConfig<
  AddPromotionReqBody,
  undefined,
  AddPromotionReqPaths
>
export type AddPromotionsApiRes = { promotion: PromotionProps }

//**************************************************************************/

export type GetPromotionsReqPaths = { eventId: string }

export type GetPromotionsApiConfig = ApiConfig<
  undefined,
  undefined,
  GetPromotionsReqPaths
>
export type GetPromotionsApiRes = { promotions: PromotionProps[] }

//**************************************************************************/

export type UpdatePromotionReqBody = { name?: string }
export type UpdatePromotionReqPaths = { eventId: string; promotionId: string }

export type UpdatePromotionApiConfig = ApiConfig<
  UpdatePromotionReqBody,
  undefined,
  UpdatePromotionReqPaths
>
export type UpdatePromotionsApiRes = { promotion: PromotionProps }

//**************************************************************************/

export type DeletePromotionReqPaths = { eventId: string; promotionId: string }

export type DeletePromotionApiConfig = ApiConfig<
  undefined,
  undefined,
  DeletePromotionReqPaths
>
export type DeletePromotionsApiRes = { promotion: PromotionProps }

//**************************************************************************/

export type DeleteBundleReqBody = { bundleId: string }
export type DeleteBundleReqPaths = { eventIdOrSlug: string }

export type DeleteBundleApiConfig = ApiConfig<
  DeleteBundleReqBody,
  undefined,
  DeleteBundleReqPaths
>
export type DeleteBundleApiRes = EventAndSuccessApiRes

//**************************************************************************/

export type AddSongReqBody = { eventId: string; songTitle: string }

export type AddSongApiConfig = ApiConfig<AddSongReqBody, undefined, undefined>
export type AddSongApiRes = SongProps

//**************************************************************************/

export type DeleteSongReqPath = { eventId: string; songId: string }

export type DeleteSongApiConfig = ApiConfig<
  undefined,
  undefined,
  DeleteSongReqPath
>
export type DeleteSongApiRes = {}

//**************************************************************************/

export type UpdateBundlePrintFul = {
  id?: string
  name?: string
  description?: string
  price?: string | number
  limitedInventory?: boolean
  bundleCap?: number
  physicalGoods?: CheckoutPhysicalGoods[]
  digitalGoods?: CheckoutDigitalGoods[]
  merchType?: string
  shippingRates?: string
  geofenceRestrictions?: string
}

export type UpdateBundleReqBody = FormData
export type UpdateBundleReqPaths = { eventIdOrSlug: string }

export type UpdateBundleApiConfig = ApiConfig<
  UpdateBundleReqBody,
  undefined,
  UpdateBundleReqPaths
>
export type UpdateBundleApiRes = EventAndSuccessApiRes
export type UpdateBundlePrintFulApiConfig = ApiConfig<
  UpdateBundlePrintFul,
  undefined,
  UpdateBundleReqPaths
>

//**************************************************************************/

export type SaveAddOnReqBody = {
  id?: string
  name?: string
  price?: number
  bundleCap?: number
  description?: string
  merchType?: string
  addOnInfo?: string
}
export type SaveAddOnReqPaths = { eventIdOrSlug: string }
export type SaveAddOnReqRes = EventAndSuccessApiRes

export type SaveAddOnApiConfig = ApiConfig<
  SaveAddOnReqBody,
  undefined,
  SaveAddOnReqPaths
>
export type SaveAddOnApiRes = ApiConfig<SaveAddOnReqRes>

//**************************************************************************/

export type ExportExternalAddOnPurchaseReqPaths = {
  eventIdOrSlug: string
  artistBrandId: string
}
export type ExportExternalAddOnPurchaseReqRes = {
  event?: EventProps
  success?: string[]
}

export type ExportExternalAddOnPurchaseApiConfig = ApiConfig<
  undefined,
  undefined,
  ExportExternalAddOnPurchaseReqPaths
>
export type ExportExternalAddOnPurchaseApiRes = string

//**************************************************************************/

export type DeleteAddOnReqBody = { bundleId: string }
export type DeleteAddOnReqPaths = { eventIdOrSlug: string }
export type DeleteAddOnReqRes = EventAndSuccessApiRes

export type DeleteAddOnApiConfig = ApiConfig<
  DeleteAddOnReqBody,
  undefined,
  DeleteAddOnReqPaths
>
export type DeleteAddOnApiRes = DeleteAddOnReqRes

//**************************************************************************/

export type DeleteEventImageReqBody = { deleteImage: boolean }
export type DeleteEventImageReqPaths = { eventIdOrSlug: string }
export type DeleteEventImageReqRes = EventAndSuccessApiRes

export type DeleteEventImageApiConfig = ApiConfig<
  DeleteEventImageReqBody,
  undefined,
  DeleteEventImageReqPaths
>
export type DeleteEventImageApiRes = DeleteEventImageReqRes

//**************************************************************************/

export type UploadImageReqBody = FormData
export type UploadEventImageReqPaths = { eventIdOrSlug: string }
export type UploadUserImageReqPaths = { userId: string }
export type UploadArtistBrandImageReqPaths = { artistBrandId: string }
export type UploadImageReqRes = { imageUrl?: string }
export type UploadUserOrArtistImageReqRes = { newFile?: string }

export type UploadEventImageApiConfig = ApiConfig<
  UploadImageReqBody,
  undefined,
  UploadEventImageReqPaths
>
export type UploadUserImageApiConfig = ApiConfig<
  UploadImageReqBody,
  undefined,
  UploadUserImageReqPaths
>
export type UploadArtistBrandImageApiConfig = ApiConfig<
  UploadImageReqBody,
  undefined,
  UploadArtistBrandImageReqPaths
>
export type UploadImageApiRes = UploadImageReqRes
export type UploadUserOrArtistImageApiRes = UploadUserOrArtistImageReqRes

//**************************************************************************/

export type UpdateUserProps = {
  bio?: string
  image?: string
  instagram?: string
}

export type UpdateUserReqBody = UpdateUserProps
export type UpdateUserReqPaths = { userId: string }
export type UpdateUserReqRes = { success?: string[] }

export type UpdateUserApiConfig = ApiConfig<
  UpdateUserReqBody,
  undefined,
  UpdateUserReqPaths
>
export type UpdateUserApiRes = UpdateUserReqRes

//**************************************************************************/

// todo proper type
export type ConfirmPayIntentData = {
  paymentMethodId: string
  method: any
  eventIds: string[]
  price: any
  location: any
  quantity: any
  selectedCurrency: any
  timezone: any
  mailingList: any
  selectedBundle: any
  saveCard: any
  bundleDetails: any
  accessCode: any
  userInfo: any
  shoppingBag?: BagItem[]
  addOns: any
  addOnId?: string
}
export type ConfirmPayIntentRes = { error: string; data: any }

export type ConfirmPayIntentApiConfig = ApiConfig<ConfirmPayIntentData>
export type ConfirmPayIntentApiRes = ConfirmPayIntentRes

//**************************************************************************/

export type ConfirmClivePayIntentApiConfig = ApiConfig<ConfirmPayIntentData>
export type ConfirmClivePayIntentApiRes = ConfirmPayIntentRes

export type ConfirmMerchGalleryPayIntentApiConfig =
  ApiConfig<ConfirmPayIntentData>
export type ConfirmMerchGalleryPayIntentApiRes = ConfirmPayIntentRes

export type ConfirmAddOnPayIntentApiConfig = ApiConfig<ConfirmPayIntentData>
export type ConfirmAddOnPayIntentApiRes = ConfirmPayIntentRes

export type ConfirmTippingPayIntentApiConfig = ApiConfig<ConfirmPayIntentData>
export type ConfirmTippingPayIntentApiRes = ConfirmPayIntentRes

//**************************************************************************/
export type GetLocationRes = {
  continent: string
  country: string
  countryCode: string
  lat: number
  lon: number
  query: string
  region: string
  regionName: string
  status: string // 'success'
  timezone: string
  price: number
}

export type GetLocationApiConfig = ApiConfig
export type GetLocationApiRes = GetLocationRes

//**************************************************************************/

export type ImportedGoods = {
  id?: string
  name: string
  images: [{ src: string }]
  options: [{ name: string; values: string[] }]
  description?: string
}

/**
 * @typedef {object} Merch
 * @prop {string} id
 * @prop {string} bundleId
 * @prop {string} productId
 * @prop {string} type
 * @prop {ImportedGoods} importedGood
 * @prop {string} provider
 * @prop {string} artistBrandId
 * @prop {null | Date} createdAt
 * @prop {null | Date} deletedAt
 * @prop {boolean=} walletRequired
 * @prop {boolean=} shippingAddressRequired
 * @prop {any=} geofenceRestrictions
 * @prop {number=} cap
 * @prop {{ [key: string]: Variant }=} variantCaps
 */
export type Merch = {
  id: string
  bundleId: string
  productId: string
  type: string
  importedGood: ImportedGoods
  provider: string
  artistBrandId: string
  createdAt: null | Date
  deletedAt: null | Date
  walletRequired?: boolean
  shippingAddressRequired?: boolean
  geofenceRestrictions?: any
  cap?: number
  variantCaps?: { [key: string]: Variant }
}

export type GetMerchsPaths = { artistBrandId: string }
export type GetMerchsRes = { merchs: Merch[] }

export type GetMerchsApiConfig = ApiConfig<undefined, undefined, GetMerchsPaths>
export type GetMerchsApiRes = GetMerchsRes

//**************************************************************************/

export type AddMerchsRes = { id: string; message: string }
export type AddMerchsReqBody = FormData

export type AddMerchsApiConfig = ApiConfig<
  AddMerchsReqBody,
  undefined,
  undefined
>
export type AddMerchsApiRes = AddMerchsRes

//**************************************************************************/

export type UpdateMerchPaths = { merchId: string }
export type UpdateMerchsRes = { id: string; message: string }
export type UpdateMerchsReqBody = FormData

export type UpdateMerchsApiConfig = ApiConfig<
  UpdateMerchsReqBody,
  undefined,
  UpdateMerchPaths
>
export type UpdateMerchsApiRes = UpdateMerchsRes

//**************************************************************************/

export type DeleteMerchPaths = { artistBrandId: string }
export type DeleteMerchRes = { message: string }

export type DeleteMerchApiConfig = ApiConfig<
  undefined,
  undefined,
  DeleteMerchPaths
>
export type DeleteMerchApiRes = DeleteMerchRes

//**************************************************************************/

export type UpdatePayMentMethodPaths = { paymentMethodID: string }

export type UpdatePayMentMethodApiConfig = ApiConfig<
  undefined,
  undefined,
  UpdatePayMentMethodPaths
>
export type UpdatePayMentMethodApiRes = {
  id: string
  user: Partial<UserProps>
  error: any
}

//**************************************************************************/

export type AddShippingAddressBody = {
  location: {
    address: {
      fullName: string
      address1: string
      line2?: string
      city: string
      province_code: string
      country_code: string
      zip?: string
      raw: string
      manual: boolean
      phone?: string
    }
  }
  noLogin: null | boolean
}

export type AddDigitalAddressBody = {
  fullName: string
  raw: string
}

export type AddShippingAddressRes = {
  city: string
  country: string
  createdAt: Date
  deletedAt?: null | string
  fullName: string
  id: string
  line1: string
  line2?: null | string
  province: string
  rawAddress: string
  updatedAt: Date
  userId: string
  zip: null | string
  error?: string
}

export type AddDigitalAddressRes = {
  fullName: string
  raw: string
}

export type AddShippingAddressApiConfig = ApiConfig<AddShippingAddressBody>
export type AddDigitalAddressApiConfig = ApiConfig<AddDigitalAddressBody>

export type AddShippingAddressApiRes = AddShippingAddressRes

//**************************************************************************/

export type DeleteShippingAddressPaths = { shippingAddressId: string }

export type DeleteShippingAddressApiConfig = ApiConfig<
  undefined,
  undefined,
  DeleteShippingAddressPaths
>
export type DeleteShippingAddressApiRes = any

//**************************************************************************/

export type GetEventPaths = { slug: string }
export type GetEventRes = {
  event: Event
  stream: Stream
}

export type GetEventApiConfig = ApiConfig<undefined, undefined, GetEventPaths>
export type GetEventApiRes = GetEventRes

//**************************************************************************/

export type RegisterDeviceData = {
  eventId: string
  ticketId: string
}
export type RegisterDeviceRes = { token: string; ticket: Ticket }

export type RegisterDeviceApiConfig = ApiConfig<RegisterDeviceData>
export type RegisterDeviceApiRes = RegisterDeviceRes

//**************************************************************************/

export type GetCookiesPaths = {
  streamId: string
}
export type GetCookiesRes = {
  eventState: Event
  rateLimited: boolean
}

export type GetCookiesApiConfig = ApiConfig<
  undefined,
  undefined,
  GetCookiesPaths
>
export type GetCookiesApiRes = GetCookiesRes

//**************************************************************************/

export type GetUserPaths = {
  userId: string
}

export type GetUserRes = User

export type GetUserApiConfig = ApiConfig<undefined, undefined, GetUserPaths>
export type GetUserApiRes = GetUserRes

//**************************************************************************/

export type GetUserPublicPaths = {
  userId: string
}

export type GetUserPublicRes = { user: UserPublic }

export type GetUserPublicApiConfig = ApiConfig<
  undefined,
  undefined,
  GetUserPublicPaths
>
export type GetUserPublicApiRes = GetUserPublicRes

//**************************************************************************/

export type GetTicketPaths = {
  eventId: string
  ticketId: string
}

export type GetTicketRes = {
  ticketId: string
  eventId: string
}

export type GetTicketApiConfig = ApiConfig<undefined, undefined, GetTicketPaths>
export type GetTicketApiRes = GetTicketRes

//**************************************************************************/

export type SubmitFeedbackData = {
  ticketId: string
  submission: string
}
export type SubmitFeedbackRes = any

export type SubmitFeedbackApiConfig = ApiConfig<SubmitFeedbackData>
export type SubmitFeedbackApiRes = SubmitFeedbackRes

//**************************************************************************/

export type GetChatMutedPaths = { eventIdOrSlug: string }
export type GetChatMutedRes = string[]

export type GetChatMutedApiConfig = ApiConfig<
  undefined,
  undefined,
  GetChatMutedPaths
>
export type GetChatMutedbackApiRes = GetChatMutedRes

//**************************************************************************/

export type PatchUserData = { user: string }
export type PatchUserPaths = { userId: string }
export type PatchUserApiConfig = ApiConfig<
  PatchUserData,
  undefined,
  PatchUserPaths
>
export type PatchUserApiRes = any

//**************************************************************************/

export type GetStreamInputsPaths = { streamId: string }
export type GetStreamInputsRes = {
  primary: string
  backup: string
}
export type GetStreamInputsApiConfig = ApiConfig<
  undefined,
  undefined,
  GetStreamInputsPaths
>
export type GetStreamInputsApiRes = GetStreamInputsRes

//**************************************************************************/

export enum EStreamProvider {
  agora = 'agora',
  mux = 'mux',
}

export type Resolution = {
  height: Number
  width: Number
  bitrate: Number
  fps: Number
}

export type StartEventData = Event
export type StartEventPaths = { eventId: string }
export type StartEventBody = {
  provider?: EStreamProvider
  resolution?: Resolution
}
export type StartEventApiConfig = ApiConfig<
  StartEventBody,
  undefined,
  StartEventPaths
>
export type StartEventApiRes = StartEventData

//**************************************************************************/

export type EndEventData = Event
export type EndEventPaths = { eventId: string }
export type EndEventBody = {
  provider?: EStreamProvider
}
export type EndEventApiConfig = ApiConfig<
  EndEventBody | undefined,
  undefined,
  EndEventPaths
>
export type EndEventApiRes = EndEventData

//**************************************************************************/

export type PauseEventData = Event
export type PauseEventPaths = { eventId: string }
export type PauseEventApiConfig = ApiConfig<
  undefined,
  undefined,
  PauseEventPaths
>
export type PauseEventApiRes = PauseEventData

//**************************************************************************/

export type MuteUserData = { userId: string }
export type MuteUserPaths = { eventId: string }
export type MuteUserRes = any
export type MuteUserApiConfig = ApiConfig<
  MuteUserData,
  undefined,
  MuteUserPaths
>
export type MuteUserApiRes = MuteUserRes

//**************************************************************************/

export type PatchEventData = Partial<Event>
export type PatchEventPaths = { eventId: string }
export type PatchEventApiConfig = ApiConfig<
  PatchEventData,
  undefined,
  PatchEventPaths
>
export type PatchEventApiRes = MuteUserRes

//**************************************************************************/

export type GetDemoSessionPaths = { artistBrandId: string }
export type GetDemoSessionRes = {
  event: Event
}
export type GetDemoSessionApiConfig = ApiConfig<
  undefined,
  undefined,
  GetDemoSessionPaths
>
export type GetDemoSessionApiRes = GetDemoSessionRes

//**************************************************************************/
// Notifications
export type Notification = {
  createdAt?: string
  deletedAt?: string
  email?: string
  eventId?: string
  frequency?: string
  id?: string
  lastSent?: string
}
export type GetNotificationsPaths = { eventId: string }
export type GetNotificationsApiConfig = ApiConfig<
  undefined,
  undefined,
  GetNotificationsPaths
>
export type GetNotificationsApiRes = Notification[]

export type NotificationEmailForm = {
  email: string
  frequency: String
}

export type AddNotificationEmailApiConfig = ApiConfig<
  NotificationEmailForm,
  undefined,
  GetNotificationsPaths
>

export type UpdateNotificationEmailApiConfig = ApiConfig<
  NotificationEmailForm,
  undefined,
  { emailId: string }
>

export type DeleteNotificationEmailApiConfig = ApiConfig<
  undefined,
  undefined,
  { emailId: string }
>

export type SendNotificationEmailApiConfig = ApiConfig<
  { emailId: string },
  undefined,
  { eventId: string }
>

//**************************************************************************/

export type GetDemoSessionLeftPaths = { artistBrandId: string }
export type GetDemoSessionLeftRes = {
  activeDemoSession: {
    eventId: string
    id: string
    region: string
    startedAt: Date
    stoppedAt: Date | null
    streamId: string
  }
  totalTimeLeft: number
  totalTimeSpent: number
  activeDemoSessionExpectedEnd: Date
}
export type GetDemoSessionLeftApiConfig = ApiConfig<
  undefined,
  undefined,
  GetDemoSessionLeftPaths
>
export type GetDemoSessionLeftApiRes = GetDemoSessionLeftRes

//**************************************************************************/

export type EndDemoSessonPaths = { eventId: string }
export type EndDemoSessonRes = any
export type EndDemoSessonApiConfig = ApiConfig<
  undefined,
  undefined,
  EndDemoSessonPaths
>
export type EndDemoSessonApiRes = GetDemoSessionLeftRes

//**************************************************************************/

export type CreateVodData = { startSeconds: number; endSeconds: number }
export type CreateVodPaths = { eventId: string }
export type CreateVodRes = any
export type CreateVodApiConfig = ApiConfig<
  CreateVodData,
  undefined,
  CreateVodPaths
>
export type CreateVodApiRes = CreateVodRes

//**************************************************************************/

export type SearchArtistsParams = { query: string }
export type SearchArtistsRes = Pick<
  ArtistBrand,
  'id' | 'displayName' | 'slug'
>[]

export type SearchArtistsApiConfig = ApiConfig<
  undefined,
  SearchArtistsParams,
  undefined
>
export type SearchArtistsApiRes = SearchArtistsRes

//**************************************************************************/

export type SwitchArtistBrandData = { artistBrandId: string }
export type SwitchArtistBrandRes = { token: string }

export type SwitchArtistBrandApiConfig = ApiConfig<SwitchArtistBrandData>
export type SwitchArtistBrandApiRes = SwitchArtistBrandRes

//**************************************************************************/

export type PurchasedMerchsParams = { paymentInfoId: string } | any
export type PurchasedMerchsRes = PurchasedPhyicalGoods[]

export type PurchasedMerchsApiConfig = ApiConfig<
  undefined,
  PurchasedMerchsParams,
  undefined
>
export type PurchasedMerchsApiRes = PurchasedMerchsRes

//**************************************************************************/

export type CreateHouseData = {
  displayName: string
  isPublic: boolean
}
export type CreateHousePaths = { evId: string }
export type CreateHouseRes = ApiBaseTypeHouse

export type CreateHouseApiConfig = ApiConfig<
  CreateHouseData,
  undefined,
  CreateHousePaths
>

export type CreateHouseApiRes = CreateHouseRes

//**************************************************************************/

export type GetArtistPublicEventsPaths = { artistBrandId: string }
export type GetArtistPublicEventsRes = Event[]

export type GetArtistPublicEventsApiConfig = ApiConfig<
  undefined,
  undefined,
  GetArtistPublicEventsPaths
>

export type GetArtistPublicEventsApiRes = GetArtistPublicEventsRes

//**************************************************************************/

export type GetSalesLineGraphParams = {
  tz?: string
  target?: string
  targetIds?: string
  dateRange?: '7_days' | '30_days' | '90_days' | 'all_time'
  csv?: 1
}
export type GetSalesLineGraphRes = {
  averageSalesPrice: AverageSalePrice[]
  merchSales: MerchSale[]
  ticketSalesPerDay: TicketSalePerDay[]
  topCountries: TopCountry[]
}

export type GetSalesLineGraphApiConfig = ApiConfig<
  undefined,
  GetSalesLineGraphParams
>

export type GetSalesLineGraphApiRes<D extends 'csv' | object = object> =
  D extends 'csv' ? string : GetSalesLineGraphRes

//**************************************************************************/

export type GetSalesViewCountData = undefined
export type GetSalesViewCountParams = {
  target?: string
  targetIds?: string
  dateRange?: '7_days' | '30_days' | '90_days' | 'all_time'
  groupBy?: string
}
export type GetSalesViewCountPaths = undefined
export type GetSalesViewCountRes = {
  respData: { date: number; totalViews: number }[]
}

export type GetSalesViewCountApiConfig = ApiConfig<
  undefined,
  GetSalesViewCountParams
>

export type GetSalesViewCountApiRes = GetSalesViewCountRes

//**************************************************************************/

export type GetArtistBrandPublicPaths = { userId: string }
export type GetArtistBrandPublicRes = ArtistBrand

export type GetArtistBrandPublicApiConfig = ApiConfig<
  undefined,
  undefined,
  GetArtistBrandPublicPaths
>

export type GetArtistBrandPublicApiRes = GetArtistBrandPublicRes

//**************************************************************************/

export type AddPhoneData = {
  phoneNumber: string
  source: string
  artistBrandIdOrSlug: string
  countryCode: string
}
export type AddPhoneRes = {}

export type AddPhoneApiConfig = ApiConfig<AddPhoneData>

export type AddPhoneApiRes = AddPhoneRes

//**************************************************************************/

export type AddMarketingEmailData = {
  email: string
  artistBrandId: string
  description: string
  userId: string
}
export type AddMarketingEmailRes = {}

export type AddMarketingEmailApiConfig = ApiConfig<AddMarketingEmailData>

export type AddMarketingEmailApiRes = AddMarketingEmailRes

//**************************************************************************/

export type GetDemoConfigsPaths = {}
export type GetDemoConfigsRes = {
  demos: Demo[]
}
export type GetDemoConfigsApiConfig = ApiConfig<
  undefined,
  undefined,
  GetDemoConfigsPaths
>
export type GetDemoConfigsApiRes = GetDemoConfigsRes

//**************************************************************************/

export type RefundEventData = { artistMessage: string }
export type RefundEventParams = undefined
export type RefundEventPaths = { eventId: string }
export type RefundEventRes = { error?: string }

export type RefundEventApiConfig = ApiConfig<
  RefundEventData,
  RefundEventParams,
  RefundEventPaths
>

export type RefundEventApiRes = RefundEventRes

//**************************************************************************/

export type UpdateMomentBackgroundImageRes = {
  newFile: string
}

export type ModMomentSettingsPaths = {
  artistBrandId: string
}

export type UpdateMomentBackgroundImageConfig = ApiConfig<
  FormData,
  undefined,
  ModMomentSettingsPaths
>

export type UpdateAllMomentSettingsData = {
  backgroundImage?: string
  chatRateLimit?: number
  merch?: string
  spotify?: string
  soundcloud?: string
  applemusic?: string
  tidal?: string
  facebook?: string
  instagram?: string
  twitter?: string
  youtube?: string
}

export type UpdateAllMomentSettingsRes = {
  success?: Array<any>
  message?: string
}

export type UpdateAllMomentSettingsConfig = ApiConfig<
  UpdateAllMomentSettingsData,
  undefined,
  ModMomentSettingsPaths
>

export type DeleteCurrentMomentBackgroundRes = {
  success?: Array<any>
  message?: string
}

export type DeleteCurrentMomentBackgroundData = {
  backgroundImage?: string
}

export type DeleteCurrentMomentBackgroundConfig = ApiConfig<
  DeleteCurrentMomentBackgroundData,
  undefined,
  ModMomentSettingsPaths
>

//**************************************************************************/

export type GetArtistBrandInfoPaths = { artistBrandId: string }
export type GetArtistBrandInfoRes = ArtistBrand

export type GetArtistBrandInfoApiConfig = ApiConfig<
  undefined,
  undefined,
  GetArtistBrandInfoPaths
>

export type GetArtistBrandInfoApiRes = GetArtistBrandInfoRes

//**************************************************************************/
