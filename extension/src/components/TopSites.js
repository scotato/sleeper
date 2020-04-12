import React, { useState, useContext, useEffect } from 'react'
import browser from "webextension-polyfill"

import Switch from './Switch'
import { Context } from './Context'

const permissions = { permissions: ['topSites'] }

export default () => {
  const { state, dispatch } = useContext(Context)
  const [ sites, setSites ] = useState([])
  const { isTopSitesEnabled } = state

  // to enable we have to request permission
  const toggleTopSites = () => {
    isTopSitesEnabled
    ? dispatch({type: 'toggleTopSites'})
    : browser.permissions
      .request(permissions)
      .then(granted => granted
        ? dispatch({type: 'toggleTopSites'})
        : console.log('no permission')
      )
  }

  useEffect(() => {
    isTopSitesEnabled && browser.permissions
      .contains(permissions)
      .then(granted => granted
        ? browser.topSites.get().then(setSites)
        : console.log('permission not granted')
      )
  }, [isTopSitesEnabled])

  console.log(sites)

  return (
    <span>
      {sites.map(JSON.stringify)}
      <Switch checked={isTopSitesEnabled} onChange={toggleTopSites} />
    </span>
  )
}
