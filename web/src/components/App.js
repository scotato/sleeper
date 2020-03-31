import React from 'react'
import { ThemeProvider } from 'styled-components'
import ReactGA from 'react-ga'

import Layout from 'extension/src/components/Layout'
import Time from 'extension/src/components/Time'
import theme from 'extension/src/theme'

import Notifications from './Notifications'

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS)
ReactGA.pageview(window.location.pathname + window.location.search)

export default () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Time />
      <Notifications />
    </Layout>
  </ThemeProvider>
)
