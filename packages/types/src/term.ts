import { ReactNode } from 'react'

export type TermsSection = {
  anchor?: string
  heading?: string
  content?: ReactNode
  list?: TermsSection[]
}
