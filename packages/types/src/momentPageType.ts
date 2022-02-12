import { ArtistBrand, Event, ApiBaseTypeHouse as BaseHouse } from './api/baseTypes'
//import Pubnub from 'pubnub'
import { Merge, Overwrite } from './helperTypes'

export type MatchProp = {
  eventSlug: string
  ticketId: string
}

export type AvrMatchProp = {
  slug: string
}

export type LocationProp = {
  redirectedFromPage: string
  isPreview?: boolean
  parentMomentRoute?: string
}

export type VirtualMsgData = {
  msgs: PbMsg[]
  dispatch?: any
  setSize: (index: number, size: number) => void
  onDeleteClick?: (msg: PbMsg<Merge<MsgData<'NEW' | 'REPLY'>>>) => void
  onMuteClick?: (msg: PbMsg<Merge<MsgData<'NEW' | 'REPLY'>>>) => void
  onReplyClick?: (e: MsgData<'REPLY'>) => void
  onTipClick?: (data: MsgData<'TIP'>) => void
  /** on bought merch callback */
  onBoughtMerchClick?: (
    /** selected merch bundle */
    bundle: MsgBundlePurchase,
    /** element reference */
    elem?: HTMLDivElement
  ) => void
  onHouseClick?: (data: PbMsg<'JOIN_HOUSE'>) => void
  onDmClick?: (uuid: string) => void
  /** the timeToken to be deleted */
  deletingTimeToken?: string
  /** the timeToken to be muted */
  mutingTimeToken?: string
  /** the current message time token on reply mode  */
  replyTimeToken?: string
}

export type Level = {
  name: string
  width: number
  height: number
  level: number
}

export type BufferStats = {
  buffered?: number[][]
  corruptedVideoFrames?: number
  creationTime?: number
  droppedVideoFrames?: number
  played?: number[][]
  seekable?: number[][]
  totalFrameDelay?: number
  totalVideoFrames?: number
}

export type LatencyStats = {
  latencyTime?: number
  localTime?: number
  streamTime?: number
}

export type LevelStats = {
  audioCodec?: string
  bitrate?: number
  levelIndex?: number
  name?: string
  videoCodec?: string
}

export type VideoStats = {
  buffer?: BufferStats
  latency?: LatencyStats
  level?: LevelStats
}

export type MsgBundlePurchase = {
  id: string
  name: string
  variantName: string
}

export type MomentPageTypeHouse = {
  isHouse: boolean
  id: string
  name: string
  accessCode: string
  memberCount: number
}

export type MsgType =
  | 'NEW'
  | 'REPLY'
  | 'PINNED'
  | 'DELETE'
  | 'MUTED'
  | 'EV_UPDATE'
  | 'ARTIST_UPDATE'
  | 'HARD_REFRESH'
  | 'TIP'
  | 'BOUGHT_BUNDLE'
  | 'POLL'
  | 'DELETE_POLL'
  | 'JOIN_HOUSE'
  | 'LEAVE_HOUSE'
  | 'HOUSE_UPDATES'
  | 'VOD_UPDATE'

type EVIdentifier = { evId?: string }

type UserIdentifier = { userId: string }

export type MsgDeleteData = EVIdentifier & { timetoken: string }

export type MsgMuteData = EVIdentifier & UserIdentifier

export type MsgEvUpdateData = EVIdentifier & Partial<Event>

export type MsgArtistUpdateData = { artistId: string } & Partial<ArtistBrand>

export type MsgHardRefreshData = EVIdentifier

export type MsgTipData = {
  tipValue: number
  tipVerb?: string
}

export type MsgBundlePurchaseData = {
  bundles?: MsgBundlePurchase[]
}

export type MsgPollData = EVIdentifier & {
  poll: any // ?? need to type poll
  action: string
  id: string
  question?: string
}

export type MsgDeletePoll = EVIdentifier & {
  userName: string
}

export type MsgJoinHouseData = Partial<EVIdentifier> & {
  isNew?: boolean
} & Partial<BaseHouse>

export type MsgLeaveHouseData = EVIdentifier & {
  userId: string
  houseId: string
}

export type MsgHouseUpdateData = {
  type:
    | 'ADD_HOST_MUTED_MEMBERS'
    | 'REMOVE_HOST_MUTED_MEMBERS'
    | 'USER_LEFT_ON_REFRESH'
    | 'ADD_HOST_BANNED_USER'
  uid: string
  isHouseOwner?: boolean
}

export type MsgReplyData = {
  userId: string
  userName: string
  timetoken: string
  channel: string
}

export type MsgData<T extends MsgType> = T extends 'NEW'
  ? never
  : T extends 'PINNED'
  ? EVIdentifier
  : T extends 'DELETE'
  ? MsgDeleteData
  : T extends 'MUTED'
  ? MsgMuteData
  : T extends 'EV_UPDATE'
  ? MsgEvUpdateData
  : T extends 'ARTIST_UPDATE'
  ? MsgArtistUpdateData
  : T extends 'HARD_REFRESH'
  ? MsgHardRefreshData
  : T extends 'TIP'
  ? MsgTipData
  : T extends 'BOUGHT_BUNDLE'
  ? MsgBundlePurchaseData
  : T extends 'POLL'
  ? MsgPollData
  : T extends 'DELETE_POLL'
  ? MsgDeletePoll
  : T extends 'JOIN_HOUSE'
  ? MsgJoinHouseData
  : T extends 'LEAVE_HOUSE'
  ? MsgLeaveHouseData
  : T extends 'HOUSE_UPDATES'
  ? MsgHouseUpdateData
  : T extends 'REPLY'
  ? MsgReplyData
  : never

export type AllMsgDataTypes = Merge<MsgData<MsgType>>

type IMsgPayload = MsgType | AllMsgDataTypes

export type MsgPayload<D extends IMsgPayload = AllMsgDataTypes> = {
  /** message type */
  type: D extends MsgType ? D : MsgType
  /** sender user name */
  userName: string
  /** sender user id */
  userId: string
  /** no needed back compat, channel is optional */
  channel?: string
  /** msg */
  text?: string
  /** sender image */
  userImage?: string
  /** msg data */
  data?: D extends MsgType ? MsgData<D> : D
  /** if msg is hidden */
  isHidden?: boolean
  /** if sender is host */
  isHost?: boolean
  /** is sender logged in */
  isLoggedIn?: boolean
  /** sender artist id */
  artistId?: string
}

export type PubnubMessageEvent = any

/*
export type PubnubMessageEvent = Overwrite<
  Pubnub.MessageEvent,
  { message: MsgPayload }
>
*/

export type PbMsg<D extends IMsgPayload = AllMsgDataTypes> = {
  channel: string
  message: MsgPayload<D>
  timetoken: string
  uuid: string
}

export type LastMsg = {
  /** the message string */
  msg: string
  /** the message time token */
  timeToken: number
}

/** last message map */
export type LastMsgsMap = { [channel: string]: LastMsg }
