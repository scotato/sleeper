import createPersistedState from 'use-persisted-state'
const useSettingsState = createPersistedState('settings')

const useSettings = () => {
  const [settings, setSettings] = useSettingsState({
    isTopSitesEnabled: false,
    isTopSitesDetailsEnabled: false
  })

  return {
    settings,
    setTopSitesEnabled: isTopSitesEnabled => setSettings({
      ...settings,
      isTopSitesEnabled
    }),
    setTopSitesDetailsEnabled: isTopSitesDetailsEnabled => setSettings({
      ...settings,
      isTopSitesDetailsEnabled
    })
  }
}

export default useSettings
