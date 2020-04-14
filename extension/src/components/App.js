import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ContextProvider } from "./Context"

import theme from '../theme'
import Layout from './Layout'
import Time from './Time'
import TopSites from './TopSites'
import Settings, { SettingsButton } from './Settings'
import SettingsTopSites from './SettingsTopSites'
import SettingsDarkMode from './SettingsDarkMode'
import GlobalStyle from './GlobalStyle'

export default () => (
  <ThemeProvider theme={theme}>
    <ContextProvider>
      <>
        <GlobalStyle />
        <Layout>
          <Time />
          <TopSites />
          <SettingsButton />
        </Layout>
        <Settings>
          <SettingsTopSites />
          <SettingsDarkMode />
        </Settings>
      </>
    </ContextProvider>
  </ThemeProvider>
)
