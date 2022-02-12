// import { ManageChannelMembersResponse, ManageMembershipsResponse, UUIDMembershipObject } from 'pubnub'
  
  /** Channel membership custom data */
  export type ChannelMemberCustomObj = {
    /** fan complete name */
    name: string
    /** image url */
    image?: string
    /** Bio */
    bio?: string
    /** instagram handle */
    insta?: string
    /** the direct message channel */
    dmChannel?: string
    /** indicator for fan interaction with the dm request. ie: reply & ignore */
    dmRequestSeen?: boolean
  }
  
  /** channel member type */
  export type ChannelMember = any
  
  /** get channel members response with explicit custom object type
   * @see https://www.pubnub.com/docs/sdks/javascript/api-reference/objects#get-channel-members */
  export type ChannelMembersResponse = any
  
  export type ChannelMembershipsResponse = any
  