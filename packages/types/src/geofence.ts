export type GeofenceProps = {
  eventId: string
  id: string
  latitude: number
  longitude: number
  milesLimit: number
  location: string
  locationType: string
  city?: string
  state?: string
  country?: string
  restricted?: boolean
}
