import styled from 'styled-components'
import React, { FC, useState, useEffect } from 'react'
import { map, isNil } from 'lodash'
import useShopifyBuyScript from '../hooks/useShopifyBuyScript'
import ShopifyBuyButton from '../ShopifyBuyButton'

export type ShopifyMerchGalleryProps = {
  isTheatreMode?: boolean
  isVisibleOnMobile?: boolean
  productIds?: string[]
  shopifyBuyButtonOptions?: any
  shopifyDomain?: string
  storefrontAccessToken: string
}

const ShopifyMerchGallery: FC<ShopifyMerchGalleryProps> = ({
  isTheatreMode,
  isVisibleOnMobile,
  productIds,
  shopifyBuyButtonOptions,
  shopifyDomain,
  storefrontAccessToken,
}) => {
  const [shopifyUI, setShopifyUI] = useState(null)
  const { shopifyBuy, loaded } = useShopifyBuyScript()

  const initializeShopify = () => {
    if (isNil(shopifyDomain) || isNil(shopifyBuy)) {
      return
    }
    const client = shopifyBuy.buildClient({
      domain: shopifyDomain,
      storefrontAccessToken: storefrontAccessToken,
    })

    const shopifyUI = shopifyBuy.UI.init(client)
    setShopifyUI(shopifyUI)
  }

  useEffect(() => {
    if (loaded) initializeShopify()
  }, [loaded])

  return (
    <Merch
      isVisible={isVisibleOnMobile}
      isTheatreMode={isTheatreMode}
    >
      <ShopifyGrid>
        {map(productIds, (productId) => (
          <ShopifyBuyButton
            key={productId}
            productId={productId}
            shopifyBuyButtonOptions={shopifyBuyButtonOptions}
            shopifyUI={shopifyUI}
          />
        ))}
      </ShopifyGrid>
    </Merch>
  )
}

export default ShopifyMerchGallery

const ShopifyGrid = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
  justify-content: center;
  margin: 0 auto;
  justify-items: center;
  align-items: center;
`

const Merch = styled.div<{ isVisible: boolean, isTheatreMode: boolean }>`
  margin-bottom: 20px;
  padding: 20px 0;
  z-index: 0;
  display: none;

  @media (min-width: 1024px) {
    display: block;
    margin-bottom: 50px;
  }

  ${({ isVisible }) => isVisible && 'display: block'};
  ${({ isTheatreMode }) => isTheatreMode && 'color: #fff'};
`
