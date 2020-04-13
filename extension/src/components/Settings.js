import React, { useContext } from 'react'
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
  const { settings, setTopSitesEnabled } = useSettings()
  const { isSettingsOpen } = state
  const { isTopSitesEnabled } = settings

  // to enable we have to request permission
  const toggleTopSites = () => {
    isTopSitesEnabled
      ? setTopSitesEnabled(false)
      : browser.permissions
        .request(permissions)
        .then(granted => granted
          ? setTopSitesEnabled(true)
          : console.log('no permission')
        )
  }

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

      <Group>
        <Row icon="splotch" title="Top Sites" detail={
          <Switch checked={isTopSitesEnabled} onChange={toggleTopSites} />
        } />

        <Row icon="moon" title="Dark Mode" detail={
          <Switch checked={isDarkMode} onChange={toggleDarkMode} />
        } />
      </Group>
    </Settings>
  )
}
