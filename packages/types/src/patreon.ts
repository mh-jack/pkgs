export type PatreonPromotionTier = {
  artistBrandId?: string
  campaignId?: string
  eventId?: string | null | undefined // if isNil, promotion applies to all events for artistBrand
  tierId: string // should match tier id from patreon campaign
  discountValue: number
  excludeMerch?: boolean
}
