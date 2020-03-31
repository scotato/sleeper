import { createGlobalStyle } from 'styled-components'
import reboot from 'styled-reboot'

const rebootCss = reboot({
  fontFamilyBase:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontFamilyMonospace:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  fontWeightBase: 400,
  lineHeightBase: 1.5,
})

const GlobalStyle = createGlobalStyle`
  ${rebootCss}

  body {
    background-color: ${props => props.theme.color.white};

    &.dark-mode {
      background-color: ${props => props.theme.color.black};
    }
  }
`

export default GlobalStyle
