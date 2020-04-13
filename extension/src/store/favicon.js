import createPersistedState from 'use-persisted-state'
const useFaviconsState = createPersistedState('favicons')

export const urlToHostname = url => {
  const { hostname, protocol } = new URL(url)
  const hostnameFiltered = hostname.replace('www.', '')
  return `${protocol}//${hostnameFiltered}`
}

const useFavicons = () => {
  const [favicons, setFavicons] = useFaviconsState([])

  return {
    favicons,
    addFavicons: favicons => setFavicons(currentList => [...currentList, ...favicons])
  }
}

export default useFavicons
