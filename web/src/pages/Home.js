import React, { useEffect } from 'react'
import { motion, useCycle } from "framer-motion"
import styled from 'styled-components'

import Time from 'extension/src/components/Time'
import Notification from '../components/Notification'

const Notifications = styled(motion.div)`
  margin: 0 auto;
  padding: 0 16px;
  grid-template-rows: auto 1fr;
  overflow-x: hidden;
`

const variants = {
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  },
  hidden: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

export default () => {
  const [isVisible, toggleVisible] = useCycle(false, true)

  // eslint-disable-next-line
  useEffect(() => toggleVisible(), [])

  return (
    <Notifications
      variants={variants}
      animate={isVisible ? "visible" : "hidden"}
      initial={false}
      onClick={toggleVisible}
    >
      <Time />

      <Notification
        id="sleeper"
        title="Sleeper"
        description="An ambient new tab browser extension"
        icon="chevron-right"
        to="about"
      />

      <Notification
        id="chrome"
        title="Chrome"
        description="Install Sleeper for Chrome"
        icon="external-link-alt"
        to={process.env.REACT_APP_CHROME_STORE}
      />

      <Notification
        id="firefox"
        title="Firefox"
        description="Install Sleeper for Firefox"
        icon="external-link-alt"
        to={process.env.REACT_APP_FIREFOX_STORE}
      />

      <Notification
        id="edge"
        title="Edge"
        description="Install Sleeper for Edge"
        icon="external-link-alt"
        to={process.env.REACT_APP_MICROSOFT_STORE}
      />
    </Notifications>
  )
}
