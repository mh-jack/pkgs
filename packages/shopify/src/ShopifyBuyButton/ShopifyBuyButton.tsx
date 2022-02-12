import styled, { css } from 'styled-components'
import React, { FC, useEffect } from 'react'
import { shopifyBuyBtnDefaultOptions } from './shopifyBuyButtonOptions'
import { UIReturn } from '../hooks/useShopifyBuyScript'

export type ShopifyBuyButtonProps = {
  productId: string
  shopifyBuyButtonOptions: any
  shopifyUI: UIReturn
}

const ShopifyBuyButton: FC<ShopifyBuyButtonProps> = ({ shopifyUI, productId, shopifyBuyButtonOptions }) => {
  useEffect(() => {
    if (shopifyUI) {
      shopifyUI.createComponent('product', {
        id: productId,
        node: document.getElementById(productId),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options:
          shopifyBuyButtonOptions || shopifyBuyBtnDefaultOptions,
      })
    }
  }, [shopifyUI])

  return (
    <ShopifyBuyButtonItem
      id={productId}
    />
  )
}

export default ShopifyBuyButton

const ShopifyBuyButtonCSS = css`
  max-width: 100%;
  padding: 10px 25px 25px;
  border-radius: 4px;
  text-align: center;
  outline: none;
  transition: background 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);

  &.shopify-buy__product {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &:hover {
    background: rgba(255, 254, 252, 0.7);

    .shopify-buy__product-img-wrapper .shopify-buy__product__variant-img,
    .cover .image {
      transform: scale(1);
      opacity: 0.5;
    }

    .shopify-buy__product-img-wrapper .shopify-buy__btn,
    .cover .bagBtn,
    .variants {
      opacity: 1;
    }

    .shopify-buy__product__variant-selectors {
      opacity: 1;
    }
  }

  .shopify-buy__product-img-wrapper {
    flex: 1;
  }

  .shopify-buy__product-img-wrapper,
  .cover {
    position: relative;
    overflow: hidden;

    .shopify-buy__product__variant-img,
    .image {
      max-height: 400px;
      width: 100%;
      max-width: 100%;
      height: 100%;
      object-fit: contain;
      vertical-align: middle;
      transform: scale(0.9);
      opacity: 1;
      transition: opacity 0.2s ease-out,
        transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }

    .shopify-buy__btn,
    .bagBtn {
      position: absolute;
      top: 50%;
      left: 50%;
      color: #FFFF;
      background-color: #000000;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.2s ease-out;
      padding: 12px 18px;
      outline: none;
      text-decoration: none;
      border: none;
      cursor: pointer;
      border-radius: 4px;
      font-weight: 700;
      font-size: 15px;
    }

    @media (min-width: 1024px) {
      height: 400px;
    }
  }

  .variants {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    margin: 10px auto;
    opacity: 0;
    transition: opacity 0.2s ease-out;

    .optionLabel {
      margin-right: 10px;
      cursor: pointer;

      &:last-of-type {
        margin: 0;
      }

      &:hover {
        > span {
          background: #e2e2e2;
        }
      }

      > span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border: 2px solid  #000000;
        border-radius: 100px;
        color: #000000;
        font-weight: bold;
        line-height: 100%;
        text-align: center;
        transition: all 0.2s ease-out;
      }
    }

    .optionInput {
      display: none;
    }

    .optionInput:checked + .optionLabel > span {
      color: #FFFF;
      background: #000000;
    }

    .optionInput:disabled,
    .optionInput[disabled] {
      + .optionLabel {
        cursor: not-allowed;

        &:hover {
          > span {
            background: none;
          }
        }

        > span {
          opacity: 0.5;
        }
      }
    }
  }

  .shopify-buy__product__title,
  .title {
    margin-top: 20px;
    margin-bottom: 10px;
    color: #000000;
    font-weight: bold;
    font-size: 16px;
    font-family: var(--font-text);
    line-height: 110%;
    overflow-wrap: break-word;
  }

  .shopify-buy__product__price,
  .price {
    margin: 0;
    color: #656565;
    font-size: 16px !important;
  }

  .shopify-buy__product__variant-selectors {
    opacity: 0;
    transition: opacity 0.2s ease-out;

    .shopify-buy__option-select {
      position: relative;
    }

    label {
      pointer-events: none;
      position: absolute;
      z-index: 1;
      text-align: left;
      display: block;
      left: 17px;
      right: 17px;
      top: 8px;
      overflow: hidden;
      padding: 0;
      text-overflow: ellipsis;
      color: #656565;
      font-size: 12px;
      letter-spacing: -0.01em;
      line-height: 1.75;
      transition: all 0.125s ease 0s;
      white-space: nowrap;
      font-weight: 600;
    }

    .shopify-buy__select-icon {
      display: none;
    }

    .shopify-buy__option-select__select {
      cursor: pointer;
      display: inline-block;
      appearance: none;
      width: 100%;
      backdrop-filter: var(--vibrancy);
      background: #f7f5f5;
      border: 1px solid #e2e2e2;
      border-radius: 4px;
      color: #000000;
      font-size: 17px;
      height: 3.3em;
      letter-spacing: -0.022em;
      line-height: 1.23543;
      padding: 18px 35px 0px 16px;
      -webkit-rtl-ordering: logical;
      text-overflow: ellipsis;
      text-rendering: auto;
      text-transform: none;
      transition: all 0.125s ease 0s;
      transition-property: background, border, color, opacity;
      vertical-align: top;
      word-spacing: normal;

      &:focus {
        border-color: #ffbb33;
        box-shadow: 0px 0px 0px 3px rgb(245 61 61 / 30%);
        outline: 0;
        outline-offset: 1px;
      }
    }
  }
`

const ShopifyBuyButtonItem = styled.div`
  height: 100%;

  > div {
    ${ShopifyBuyButtonCSS}
  }
`
