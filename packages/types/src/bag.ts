import {BundleProps, EventProps} from './index'

export type BagItem = {
    id: string
    bundle?: BundleProps
    event?: EventProps
    quantity?: number
    variant?: {
      [key: string]: BagItemVariant // key = PhysicalGood.productId
    }
    // Clive Seat props
    row?: string
    seat?: string
    purchaser?: string
    available?: boolean
  }
  
  export type BagItemVariant = {
    [key: string]: string // product option name (Size) : product option value (XS)
  }
  