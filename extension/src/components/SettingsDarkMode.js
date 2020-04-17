import React, { useEffect } from 'react'
import useDarkMode from 'use-dark-mode'

import useSettings from '../store/settings'
import Switch from './Switch'
import Group from './Group'
import Row from './Row'

export default () => {
  const { toggle: toggleDarkMode, value: isDarkMode } = useDarkMode()
  const { isDarkModeAutomatic, toggleDarkModeAutomatic } = useSettings()

  // automatic dark mode
  useEffect(() => {
    const isDarkModeSystem = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDarkModeSync = isDarkMode === isDarkModeSystem
    const shouldToggleDarkMode = isDarkModeAutomatic && !isDarkModeSync
    if (shouldToggleDarkMode) toggleDarkMode()
    // eslint-disable-next-line
  }, [isDarkMode, isDarkModeAutomatic])

  return (
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
  )
}
