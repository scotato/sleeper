import React, { useEffect } from 'react'
import styled from 'styled-components'
import browser from "webextension-polyfill"
import { motion } from "framer-motion"

import useFavicons, { urlToHostname } from '../store/favicon'
import useSites from '../store/sites'
import useSettings from '../store/settings'
import Notification from './Notification'

const Notifications = styled(motion.div)`
  margin: 0 auto;
  padding: 0 16px;
  grid-template-rows: auto 1fr;
`

const variants = {
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 1 }
  },
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

export const permissions = { permissions: ['topSites'] }

const cleanUrl = url => {
  const cleaned = url
    .replace('http://', '')
    .replace('https://', '')
    .replace('www.', '')

  if (cleaned[cleaned.length - 1] === '/') {
    return cleaned.substring(0, cleaned.length - 1)
  } else {
    return cleaned
  }
}

export default () => {
  const { sites, setSites } = useSites()
  const { favicons, addFavicons } = useFavicons()
  const { settings } = useSettings()
  const { isTopSitesEnabled } = settings

  const hydrateSites = list => list.map(sitesWithHostnames).map(sitesWithIcons)
  const sitesWithHostnames = site => ({...site, hostname: urlToHostname(site.url)})
  const sitesWithIcons = site => {
    const faviconStored = favicons.find(favicon => favicon.hostname === site.hostname)

    return {
      ...site,
      logo: faviconStored ? faviconStored.logo : undefined,
      title: site.title || (faviconStored ? faviconStored.title : site.url)
    }
  }

  useEffect(() => {
    isTopSitesEnabled && browser.permissions
      .contains(permissions)
      .then(granted => granted
        ? browser.topSites.get().then(topSites => {
          const hydratedSites = hydrateSites(topSites).slice(0, 8) // first 8
          const missingFavicons = hydratedSites
            .filter(site => site.logo === undefined)
            .map(site => site.hostname)
          const faviconsUnique = [...new Set(missingFavicons)]
          setSites(hydratedSites)

          fetch("http://localhost:9000/.netlify/functions/scraper", {
            method: 'POST',
            body: JSON.stringify(faviconsUnique)
          })
            .then(response => response.json())
            .then(addFavicons)
            .catch(console.error)
          })
        : console.log('permission not granted')
      )
  }, [isTopSitesEnabled])

  const hydratedSites = hydrateSites(sites)

  return isTopSitesEnabled ? (
    <Notifications
      variants={variants}
      animate={"visible"}
      initial={"hidden"}
      transition={{ type: 'spring' }}
    >
      {hydratedSites.map(site => (
        <Notification
          key={site.url}
          to={site.url}
          logo={site.logo && <img src={site.logo} />}
          title={site.title}
          // description={cleanUrl(site.url)}
          icon="external-link-alt"
        />
      ))}
    </Notifications>
  ) : null
}
