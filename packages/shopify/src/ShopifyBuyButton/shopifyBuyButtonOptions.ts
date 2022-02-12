// https://github.com/Shopify/buy-button-js/blob/master/src/defaults/components.js
// https://shopify.github.io/buy-button-js/

const imgTemplate = `
{{#data.currentImage.srcLarge}}
<div class="{{data.classes.product.imgWrapper}}" data-element="product.imgWrapper">
  <img alt="{{data.currentImage.altText}}" data-element="product.img" class="{{data.classes.product.img}}" src="{{data.currentImage.srcLarge}}" />
  <button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.product.button}} {{data.buttonClass}}" data-element="product.button">{{data.buttonText}}</button>
</div>
{{/data.currentImage.srcLarge}}`

const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"

const border = '1px solid rgba(0, 0, 0, 0.1)'

export const productOptions = {
  order: [
    'img',
    'imgWithCarousel',
    'options',
    'title',
    'variantTitle',
    'quantity',
    'button',
    'buttonWithQuantity',
    // 'description',
    'price',
  ],

  /** making this false will ignore styles below for this option */
  iframe: false,

  contents: {
    details: true,
    price: true,
    description: true,
    button: false,
  },

  templates: {
    img: imgTemplate,
  },

  text: {
    button: 'Add to Bag',
  },

  styles: {
    options: {
      'margin-top': '10px',
      'margin-bottom': '10px',
    },

    product: {
      display: 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'border-radius': '10px',
      width: '100%',
      'max-width': '100%',
      outline: 'none',
      padding: '10px 25px 25px',
      'text-align': 'center',
      transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
      margin: 0,

      imgWrapper: {
        flex: 1,
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        height: '300px',
        overflow: 'hidden',
        position: 'relative',
      },

      img: {
        height: '100%',
        'max-width': '100%',
        'object-fit': 'contain',
        opacity: 1,
        transform: 'scale(0.9)',
        width: '100%',
        margin: 0,
        transition:
          'opacity 0.2s ease-out, transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
      },

      button: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        'margin-right': '-50%',
        transform: 'translate(-50%, -50%)',
        opacity: 0,
        'background-color': 'black',
        transition:
          'opacity 0.2s ease-out, transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
      },

      select: {
        'background-color': 'black',
      },

      title: {
        'font-size': 16,
        color: 'black',
        margin: '0',
        'margin-bottom': '10px',
      },

      description: {
        margin: 0,
      },

      ':hover': {
        background: 'rgba(255, 255, 255, 0.6)',

        img: {
          opacity: '0.5',
          transform: 'scale(1)',
        },

        button: {
          opacity: 1,
        },
      },
    },
  },
}

export const optionOpt = {
  styles: {
    wrapper: {
      appearance: 'none',
      'backdrop-filter': 'saturate(180%) blur(20px)',
      background: 'rgba(255, 255, 255, 0.3)',
      border: `1px solid ${border}`,
      'border-radius': '5px',
      cursor: 'pointer',
      height: '3.3em',
    },

    select: {
      'font-size': '17px',
      height: '100%',
      margin: 0,

      ':focus': {
        'box-shadow': '0 0 0 3px rgba(255, 221, 153, 0.4)',
        outline: 0,
        'outline-offset': '1px',
      },
    },
  },
}

export const productSetOpt = {
  styles: {
    products: {
      'font-family': fontFamily,
      display: 'grid',
      'grid-template-columns': 'repeat(auto-fill, minmax(336px, 1fr))',
      'justify-content': 'center',
      margin: '0 auto',
      position: 'relative',
      'z-index': 2,
    },
  },
}

export const toggleOpt = {
  styles: {
    toggle: {
      background: 'black',
      ':hover': {
        background: 'black',
      },
    },
  },
  text: {
    title: 'bag',
  },
}

export const cartOpt = {
  text: {
    title: 'Bag',
    empty: 'Your bag is empty.',
    total: 'Subtotal',
    button: 'Checkout',
  },

  styles: {
    cart: {
      'font-family': fontFamily,
    },

    button: {
      background: 'black',

      ':hover': {
        background: 'black',
      },
    },
  },
}

export const lineItemOpt = {
  styles: {
    quantityButton: {
      border: border,
    },
    quantityInput: {
      'border-top': border,
      'border-bottom': border,
    },
  },
}

export const modalProductOpt = {
  contents: {
    img: false,
    imgWithCarousel: true,
    button: false,
    buttonWithQuantity: true,
  },

  styles: {
    product: {
      'max-width': '100%',
      'margin-left': '0px',
      'margin-bottom': '0px',
    },
  },

  text: {
    button: 'Add to bag',
  },
}

export const shopifyBuyBtnDefaultOptions = {
  product: productOptions,
  option: optionOpt,
  productSet: productSetOpt,
  modalProduct: modalProductOpt,
  toggle: toggleOpt,
  cart: cartOpt,
  lineItem: lineItemOpt,
}
