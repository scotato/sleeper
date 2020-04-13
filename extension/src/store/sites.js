import createPersistedState from 'use-persisted-state'
const useSitesState = createPersistedState('sites')

const useSites = () => {
  const [sites, setSites] = useSitesState([])

  return {
    sites,
    setSites
  }
}

export default useSites
