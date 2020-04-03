import React, { useEffect } from 'react'
import { motion, useCycle } from "framer-motion"

import Notification from './Notification'

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

  useEffect(() => toggleVisible(), [])

  return (
    <motion.div
      variants={variants}
      animate={isVisible ? "visible" : "hidden"}
      initial={false}
      onClick={toggleVisible}
    >
      <Notification
        id='sleeper'
        title='Sleeper'
        description='An ambient new tab browser extension'
        to={process.env.REACT_APP_GITHUB_REPO}
      />
      <Notification
        id='chrome'
        title='Chrome'
        description='Install Sleeper for Chrome'
        to={process.env.REACT_APP_CHROME_STORE}
      />
      <Notification
        id='firefox'
        title='Firefox'
        description='Install Sleeper for Firefox'
        to={process.env.REACT_APP_FIREFOX_STORE}
      />
      <Notification
        id='edge'
        title='Edge'
        description='Install Sleeper for Edge'
        to={process.env.REACT_APP_MICROSOFT_STORE}
      />
    </motion.div>
  )
}
