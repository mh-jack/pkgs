import type * as Stitches from '@stitches/react'
import { globalCss } from './stitches.config'

export const globalStylesObj = {
  '@font-face': [
    {
      'font-family': 'NoeDisplay',
      'font-weight': 'bold',
      'font-style': 'normal',
      'font-display': 'swap',
      src: `url('/fonts/noe-display-bold.woff2') format('woff2')`,
    },
    {
      'font-family': 'Inter',
      'font-weight': '100 900',
      'font-style': 'normal',
      'font-display': 'optional',
      src: `url(/fonts/inter-var-latin.woff2) format('woff2')`,
    },
  ],
  ':root': {
    '--font-text': [
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu', 'Helvetica Neue', sans-serif",
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Noto Sans', 'Ubuntu', 'Helvetica Neue', sans-serif",
    ],
    '--font-display': ['NoeDisplay, sans-serif', 'NoeDisplay, sans-serif'],
    '--font-mono': [
      "'Lucida Console', Courier, monospace",
      "SFMono, 'Lucida Console', Courier, monospace",
    ],
    '--font-regular': [
      'Helvetica Neue, Helvetica, Arial, sans-serif',
      'SFRegular, Helvetica Neue, Helvetica, Arial, sans-serif',
    ],
    '--font-medium': [
      'Helvetica Neue, Helvetica, Arial, sans-serif',
      'SFMedium, Helvetica Neue, Helvetica, Arial, sans-serif',
    ],
    '--font-semibold': [
      'Helvetica Neue, Helvetica, Arial, sans-serif',
      'SFSemibold, Helvetica Neue, Helvetica, Arial, sans-serif',
    ],
    '--font-bold': [
      'Helvetica Neue, Helvetica, Arial, sans-serif',
      'SFBold, Helvetica Neue, Helvetica, Arial, sans-serif',
    ],
    '--navigation-height': '64px',
    '--navigation-beta-height': '64px',
    '--sidebar-width': '280px',
    '--sidebar-header-height': '60px',
    '--sidebar-nav-width': '280px',
    '--background': '#eff0f4',
    '--background-light': '#ffffff',
    '--background-dark': '#000000',
    '--background-chat': '#f1e0c8',
    '--background-translucent': 'rgba(255, 255, 255, 0.72)',
    '--background-translucent-dark': 'rgba(0, 0, 0, 0.6)',
    '--background-translucent-extra-dark': 'rgba(0, 0, 0, 0.85)',
    '--background-translucent-input': 'rgba(255, 255, 255, 0.3)',
    '--background-translucent-input-dark': 'rgba(0, 0, 0, 0.3)',
    '--background-gradient-large':
      'linear-gradient( 167deg, #f7f6f8 5%, rgba(255, 255, 255, 0) 35%), linear-gradient(225deg, rgba(255, 255, 255, 0) 30%, #f5e0df 100%), linear-gradient(180deg, rgba(226, 213, 194, 0.15) 30%, #fbe6c9 100%)',
    '--background-gradient-dark':
      'linear-gradient( 167deg, #252629 5%, rgba(0, 0, 0, 0) 35%), linear-gradient(225deg, rgba(0, 0, 0, 0) 30%, #22140f 100%), linear-gradient(180deg, rgba(38, 31, 27, 0.15) 30%, #221500 100%)',
    '--background-gradient-blue':
      'linear-gradient( 167deg, #f7f6f8 5%, rgba(255, 255, 255, 0) 35%), linear-gradient(225deg, rgba(255, 255, 255, 0) 30%, #b9e4f8 100%), linear-gradient(180deg, rgba(226, 213, 194, 0.15) 30%, #ffd3d9 100%)',
    '--background-gradient-blue-dark':
      'linear-gradient( 167deg, #252629 5%, rgba(0, 0, 0, 0) 35%), linear-gradient(225deg, rgba(0, 0, 0, 0) 30%, #02181c 100%), linear-gradient(180deg, rgba(36, 31, 31, 0.15) 30%, #201314 100%)',
    '--background-gradient-dim':
      'linear-gradient( 167deg, #f7f6f8 5%, rgba(255, 255, 255, 0) 70%), linear-gradient(225deg, rgba(255, 255, 255, 0) 30%, #f4ecee 100%), linear-gradient(180deg, rgba(226, 213, 194, 0.15) 30%, #f8e9dc 100%)',
    '--backdrop-light': 'rgba(255, 255, 255, 0.72)',
    '--backdrop-dark': 'rgba(0, 0, 0, 0.6)',
    '--backdrop': 'var(--backdrop-dark)',
    '--vibrancy': 'saturate(180%) blur(20px)',
    '--primary': '#ffcc66',
    '--primary-dark': '#ffbb33',
    '--primary-light': '#fff6e5',
    '--primary-light-rgba': 'rgba(255, 221, 153, 0.4)',
    '--primary-text': '#000000',
    '--commerce': '#00aaff',
    '--error': '#de071c',
    '--error-light': '#fef0f0',
    '--error-dark': '#c02c2c',
    '--success': '#67ce67',
    '--success-light': '#f0faf0',
    '--warning': '#f7be52',
    '--warning-light': '#fffaf5',
    '--danger': '#e14949',
    '--danger-light': '#fef0f0',
    '--danger-dark': '#c02c2c',
    '--live': '#dd5d56',
    '--running': '#89dc1f',
    '--finished': '#7a7a85',
    '--ready': '#3a82ff',
    '--patreon': 'rgb(255, 66, 77)',
    '--patreon-hover': 'rgb(255, 53, 65)',
    '--offset': '10px',
    '--font-sans':
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    '--ease': 'cubic-bezier(0.19, 1, 0.22, 1)',
    '--border-radius-small': '4px',
    '--border-radius-large': '12px',
    '--border-radius-round': '100px',
    '--shadow':
      '0px 20px 40px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.1), 0px 0px 2px rgba(0, 0, 0, 0.1)',
    '--gray-02': '#fafafa',
    '--gray-05': '#e0d9d1',
    '--gray-10': '#e4e4e7',
    '--gray-15': '#d7d9da',
    '--gray-40': '#959a9d',
    '--gray-50': '#7a7a85',
    '--gray-60': '#656565',
    '--gray-80': '#313135',
    '--gray-90': '#18181b',
    '--gray-100': '#000000',
  },
  'html, body': {
    minWidth: '320px',
    textSizeAdjust: '100%',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  },
  body: {
    margin: '0px',
    padding: '0px',
    overflowX: 'hidden',
    color: 'var(--grey-90)',
    fontWeight: 400,
    fontSize: '17px',
    fontFamily: 'var(--font-text)',
    fontStyle: 'normal',
    lineHeight: 1.47059,
    letterSpacing: '-0.022em',
    backgroundColor: 'var(--background)',
    textRendering: 'optimizelegibility',
    transition: 'background-color 0.2s ease',
  },
  'body, body #root': {
    minHeight: '100vh',
  },
  '@supports (-webkit-touch-callout: none)': {
    'body, body #root': { minHeight: '-webkit-fill-available' },
  },
  '#root': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  'body, button, input, select, textarea': {
    direction: 'ltr',
    textAlign: 'left',
    fontSynthesis: 'none',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    MozFontFeatureSettings: "'kern'",
  },
  svg: { maxWidth: '100%', verticalAlign: 'middle' },
  ul: { margin: '0', padding: '0', listStyle: 'none' },
  a: { color: 'inherit', textDecoration: 'none' },
  '::selection': { background: 'rgba(0, 85, 255, 0.2)' },
  html: { boxSizing: 'border-box', height: '100%', quotes: `'"' '"'` },
  '*': { boxSizing: 'inherit' },
  '.grecaptcha-badge': {
    visibility: 'hidden',
  },
  'body.ReactModal__Body--open': {
    position: 'fixed',
    width: '100%',
    overflowY: 'scroll',
  },
  '.backdrop > .layer': {
    background: 'rgba(245, 241, 236, 0.5) !important',
    opacity: '1 !important',
    WebkitBackdropFilter: 'blur(8px) !important',
    backdropFilter: 'blur(8px) !important',
  },
  '.ReactModal__Overlay--before-close .ReactModal__Content': {
    WebkitTransform: 'translate3d(0, 50px, 0)',
    MozTransform: 'translate3d(0, 50px, 0)',
    transform: 'translate3d(0, 50px, 0)',
    opacity: 0,
  },
  '@media (max-width: 767px)': {
    '.intercom-launcher': { display: 'none' },
  },
  '@media (min-width: 768px)': { ':root': { '--offset': '20px' } },
  '@media (min-width: 820px)': {
    ':root': {
      '--navigation-height': '72px',
      '--navigation-beta-height': '72px',
    },
  },
  '@media (min-width: 1100px)': { ':root': { '--sidebar-width': '365px' } },
}

export const globalStyles = globalCss(globalStylesObj)
