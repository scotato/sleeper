import React from 'react'
import { ThemeProvider } from 'styled-components'
import ReactGA from 'react-ga'
import { Router } from "@reach/router"

import Layout from 'extension/src/components/Layout'
import theme from 'extension/src/theme'
import { ContextProvider } from "extension/src/components/Context"

import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import { About, Privacy } from '../pages'

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS)
ReactGA.pageview(window.location.pathname + window.location.search)

export default () => (
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <Layout>
        <Router>
          <Home path="/" />
          <About path="about" />
          <Privacy path="privacy" />
          <NotFound default />
        </Router>
      </Layout>
    </ContextProvider>
  </ThemeProvider>
)
