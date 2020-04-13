import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import useDarkMode from 'use-dark-mode'
import browser from "webextension-polyfill"

import useSettings from '../store/settings'
import { Context } from './Context'
import { blurStyle } from './Blur'
import Switch from './Switch'
import Group from './Group'
import Row from './Row'
import Icon from './Icon'
import { permissions } from './TopSites'

const Settings = styled(motion.div)`
  display: grid;
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  top: 0;
  z-index: 10;
  justify-items: center;
  grid-template-rows: auto 1fr;
  ${blurStyle}
`

const SettingsBar = styled.div`
  width: 128px;
  height: 8px;
  background-color: hsla(0, 0%, 100%, 25%);
  border-radius: 4px;

  .dark-mode & {
    background-color: hsla(0, 0%, 0%, 25%);
  }
`

const Button = styled(motion.button)`
  position: absolute;
  margin: 0;
  padding: 16px;
  bottom: 16px;
  cursor: pointer;
  pointer-events: all;
  border: 0;
  border-radius: 36px;
  background-color: transparent;
  align-self: center;

  &:focus {
    outline: none;
    > div {
      background-color: hsla(0, 0%, 100%, 75%);

      .dark-mode & {
        background-color: hsla(0, 0%, 0%, 75%);
      }
    }
  }
`

export const SettingsButton = props => (
  <Button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{
      type: 'spring',
      damping: 15,
      stiffness: 500,
      restSpeed: 0.001,
      restDelta: 0.001
    }}
    initial={false}
    {...props}
  >
    <SettingsBar />
  </Button>
)

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "100%" },
}

const spring = {
  type: 'spring',
  damping: 75,
  stiffness: 500,
  mass: 2
}

const SettingsDismissButton = styled.button`
  margin: 16px;
  padding: 16px;
  border: 0;
  background: 0;
  font-size: 48px;
  color: hsla(0, 0%, 0%, 25%);
  border-radius: 46px;

  @-moz-document url-prefix() {
    color: hsla(0, 0%, 0%, 10%);

    .dark-mode & {
      color: hsla(0, 0%, 100%, 10%);
    }
  }

  &:focus {
    outline: none;
  }
`

export default () => {
  const { state, dispatch } = useContext(Context)
  const { toggle: toggleDarkMode, value: isDarkMode } = useDarkMode()
  const toggleSettings = () => dispatch({type: 'toggleSettings'})
  const { isSettingsOpen } = state
  const {
    isTopSites,
    isTopSitesDetails,
    isDarkModeAutomatic,
    setTopSites,
    setTopSitesDetails,
    toggleDarkModeAutomatic
  } = useSettings()

  // to enable we have to request permission
  const toggleTopSites = () => {
    isTopSites
      ? setTopSites(false)
      : browser.permissions
        .request(permissions)
        .then(granted => granted
          ? setTopSites(true)
          : console.log('no permission')
        )
  }

  // automatic dark mode
  useEffect(() => {
    const isDarkModeSystem = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDarkModeSync = isDarkMode === isDarkModeSystem
    const shouldToggleDarkMode = isDarkModeAutomatic && !isDarkModeSync
    if (shouldToggleDarkMode) toggleDarkMode()
  }, [isDarkMode, isDarkModeAutomatic])

  return (
    <Settings
      animate={isSettingsOpen ? "open" : "closed"}
      variants={variants}
      transition={spring}
      initial={false}
    >
      <SettingsDismissButton onClick={toggleSettings}>
        <Icon name="chevron-down" fixedWidth />
      </SettingsDismissButton>

      <div>
        <Group>
          <Row icon="star" title="Top Sites" detail={
            <Switch
              checked={isTopSites}
              onChange={toggleTopSites}
            />
          }/>

          <Row icon="globe" title="Top Sites Urls" detail={
            <Switch
              checked={isTopSites && isTopSitesDetails}
              onChange={setTopSitesDetails}
              disabled={!isTopSites}
            />
          }/>
        </Group>

        <Group caption="Automatic Dark Mode matches system dark mode settings">
          <Row icon="moon" title="Dark Mode" detail={
            <Switch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              disabled={isDarkModeAutomatic}
            />
          }/>

          <Row icon="magic" title="Automatic Dark Mode" detail={
            <Switch
              checked={isDarkModeAutomatic}
              onChange={toggleDarkModeAutomatic}
            />
          }/>
        </Group>
      </div>
    </Settings>
  )
}
