import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ContextProvider } from "./Context"

import theme from '../theme'
import Layout from './Layout'
import Time from './Time'
import TopSites from './TopSites'

export default () => (
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <Layout>
        <Time />
        <TopSites />
      </Layout>
    </ContextProvider>
  </ThemeProvider>
)
