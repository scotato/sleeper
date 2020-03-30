import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'

const rebootCss = reboot({
  black: '#000',
  fontFamilyBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontFamilyMonospace:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontWeightBase: 400,
  lineHeightBase: 1.5,
  bodyColor: 'rgba(255, 255, 255, 0.75)'
})

const GlobalStyle = createGlobalStyle`
  ${rebootCss}

  body {
    will-change: background;
    transition: background 0.2s ease-out;
    background-color: #E6E6E6;

    &.dark-mode {
      background-color: #010101;
    }
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
