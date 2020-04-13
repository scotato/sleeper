import createPersistedState from 'use-persisted-state'
const useTopSites = createPersistedState('isTopSites')
const useTopSitesDetails = createPersistedState('isTopSitesDetails')
const useDarkModeAutomatic = createPersistedState('isDarkModeAutomatic')

const useSettings = () => {
  const [isTopSites, setTopSites] = useTopSites(false)
  const [isTopSitesDetails, setTopSitesDetails] = useTopSitesDetails(false)
  const [isDarkModeAutomatic, setDarkModeAutomatic] = useDarkModeAutomatic(true)

  return {
    isTopSites,
    isTopSitesDetails,
    isDarkModeAutomatic,
    setTopSites,
    setTopSitesDetails,
    toggleDarkModeAutomatic: () => setDarkModeAutomatic(!isDarkModeAutomatic)
  }
}

export default useSettings
