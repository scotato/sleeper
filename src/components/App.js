import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../theme'

import Frame from './Frame'
import Blobs from './Blobs'
import Time from './Time'

export default () => (
  <ThemeProvider theme={theme}>
    <Frame>
      <Blobs />
      <Time />
    </Frame>
  </ThemeProvider>
)
