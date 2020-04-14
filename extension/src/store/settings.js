import { useContext } from 'react'
import createPersistedState from 'use-persisted-state'
import { Context } from '../components/Context'
import { version } from '../../package.json'

const useTopSites = createPersistedState('isTopSites')
const useTopSitesDetails = createPersistedState('isTopSitesDetails')
const useDarkModeAutomatic = createPersistedState('isDarkModeAutomatic')

const useSettingsContainer = () => {
  const { state, dispatch } = useContext(Context)
  const toggleSettings = () => dispatch({type: 'toggleSettings'})
  const { isSettingsOpen } = state
  return [isSettingsOpen, toggleSettings]
}

const useSettings = () => {
  const [isSettingsOpen, toggleSettingsOpen] = useSettingsContainer()
  const [isTopSites, setTopSites] = useTopSites(false)
  const [isTopSitesDetails, setTopSitesDetails] = useTopSitesDetails(false)
  const [isDarkModeAutomatic, setDarkModeAutomatic] = useDarkModeAutomatic(true)
  const toggleDarkModeAutomatic = () => setDarkModeAutomatic(!isDarkModeAutomatic)

  return {
    version,
    isSettingsOpen,
    isTopSites,
    isTopSitesDetails,
    isDarkModeAutomatic,
    toggleSettingsOpen,
    setTopSites,
    setTopSitesDetails,
    toggleDarkModeAutomatic
  }
}

export default useSettings
