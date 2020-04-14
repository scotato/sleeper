import React from 'react'
import browser from "webextension-polyfill"

import useSettings from '../store/settings'
import Switch from './Switch'
import Group from './Group'
import Row from './Row'
import { permissions } from './TopSites'

export default () => {
  const {
    isTopSites,
    isTopSitesDetails,
    setTopSites,
    setTopSitesDetails,
  } = useSettings()

  const toggleTopSites = () =>
    isTopSites
      ? setTopSites(false)
      : browser.permissions
        .request(permissions)
        .then(granted => granted
          ? setTopSites(true)
          : console.log('no permission')
        )

  return (
    <Group>
      <Row
        icon="star"
        title="Top Sites"
        detail={(
          <Switch
            checked={isTopSites}
            onChange={toggleTopSites}
          />
        )}
      />

      <Row
        icon="globe"
        title="Top Sites Urls"
        detail={(
          <Switch
            checked={isTopSites && isTopSitesDetails}
            onChange={setTopSitesDetails}
            disabled={!isTopSites}
          />
        )}
      />
    </Group>
  )
}
