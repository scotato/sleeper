import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'

const options = {
  black: '#000',
  fontFamilyBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontFamilyMonospace:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontSizeBase: `${24 / 1280 * 100}vw`,
  fontWeightBase: 400,
  lineHeightBase: 1.5,
  bodyColor: 'rgba(255, 255, 255, 0.75)',
  bodyBg: 'rgb(25, 25, 25)',
}

const rebootCss = reboot(options)

const GlobalStyle = createGlobalStyle`
  ${rebootCss}

  html, body {
    will-change: background;
    transition: background 0.2s ease-out;
  }
  
  #root {
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
`

export default GlobalStyle