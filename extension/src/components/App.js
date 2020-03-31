import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '../theme'
import Layout from './Layout'
import Time from './Time'

export default () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Time />
    </Layout>
  </ThemeProvider>
)
