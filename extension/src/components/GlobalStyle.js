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
    color: hsl(0, 0%, 0%);
    background-color: ${props => props.theme.color.white};

    &.dark-mode {
      color: hsl(0, 0%, 100%);
      background-color: ${props => props.theme.color.black};
    }
  }

  h1 {
    margin-bottom: 16px;
    font-size: 48px;
    line-height: 1;
  }

  h2 {
    font-size: 32px;
    margin-top: 32px;
  }

  h3 {
    margin-top: 24px;
  }

  p,
  li {
    font-weight: 300;
    line-height: 1.6;
  }
`

export default GlobalStyle
