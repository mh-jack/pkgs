export type PromotionProps = {
  id: string
  name: string
  slug: string
  sales?: {
    ticketsSold: number
    ticketRevenue: number
    ticketsRevenue: number
    merchRevenue: number
    totalRevenue: number
  }
}
