import { useEffect, useRef, useState } from 'react'

declare global {
  interface Window {
    ShopifyBuy: any
  }
}

type Component = 'product' | 'collection' | 'productSet' | 'cart'

type CreateComponentConfig = any

type Config = {
  domain: string
  storefrontAccessToken: string
}

export type ShopifyBuy = {
  buildClient: (config: Config) => void
  UI: UIType
}

export type UIType = {
  onReady: (client: any) => Promise<UIReturn>
  init: (client: any) => UIReturn
}

export type UIReturn = {
  createComponent: (component: Component, config: CreateComponentConfig) => void
}

type ReturnType = {
  loaded: boolean
  shopifyBuy: ShopifyBuy | null
}

const url =
  'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'

const useShopifyBuyScript = (): ReturnType => {
  const shopifyBuy = useRef<ShopifyBuy | null>(null)
  const [loaded, setLoaded] = useState<boolean>(false)

  const onLoad = () => {
    shopifyBuy.current = window.ShopifyBuy
    setLoaded(true)
  }

  useEffect(() => {
    setLoaded(false)
    let script = document.createElement('script')
    script.src = url
    script.async = true
    script.onload = onLoad
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return { shopifyBuy: shopifyBuy.current, loaded }
}

export default useShopifyBuyScript
