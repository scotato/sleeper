import createPersistedState from 'use-persisted-state'
const useSettingsState = createPersistedState('settings')

const useSettings = () => {
  const [settings, setSettings] = useSettingsState({
    isTopSitesEnabled: false
  })

  return {
    settings,
    setTopSitesEnabled: isTopSitesEnabled => setSettings({
      ...settings,
      isTopSitesEnabled
    })
  }
}

export default useSettings
