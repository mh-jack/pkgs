export type TicketTemplateProps = {
  id: string
  tourId: string
  name: string
  description: string
  image: string
  ticketPrice: number
  ticketCap: number
  ticketsSold?: number // private
  soldOut: boolean
  serviceFeePct: number
  serviceFeeFixed: number
  generalConfig: any
  eventConfig: any
  pwyw?: boolean
}
