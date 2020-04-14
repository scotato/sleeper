import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import useSettings from '../store/settings'
import { blurStyle } from './Blur'
import Icon from './Icon'

const Settings = styled(motion.div)`
  display: grid;
  position: fixed;
  width: 100vw;
  min-height: 100vh;
  top: 0;
  z-index: 10;
  justify-items: center;
  grid-template-rows: auto 1fr;
  ${blurStyle}
`

const SettingsBar = styled.div`
  width: 128px;
  height: 8px;
  background-color: hsla(0, 0%, 100%, 25%);
  border-radius: 4px;

  .dark-mode & {
    background-color: hsla(0, 0%, 0%, 25%);
  }
`

const Button = styled(motion.button)`
  position: absolute;
  margin: 0;
  padding: 16px;
  bottom: 16px;
  cursor: pointer;
  pointer-events: all;
  border: 0;
  border-radius: 36px;
  background-color: transparent;
  align-self: center;

  &:focus {
    outline: none;
    > div {
      background-color: hsla(0, 0%, 100%, 75%);

      .dark-mode & {
        background-color: hsla(0, 0%, 0%, 75%);
      }
    }
  }
`

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "100%" },
}

const spring = {
  type: 'spring',
  damping: 75,
  stiffness: 500,
  mass: 2
}

const SettingsDismissButton = styled.button`
  margin: 16px;
  padding: 16px;
  border: 0;
  background: 0;
  font-size: 48px;
  color: hsla(0, 0%, 0%, 25%);
  border-radius: 46px;

  ${props => props.theme.browser.firefox`
      color: hsla(0, 0%, 0%, 10%);

    .dark-mode & {
      color: hsla(0, 0%, 100%, 10%);
    }
  `}

  &:focus {
    outline: none;
  }
`

export const SettingsButton = props => {
  const { toggleSettingsOpen } = useSettings()

  return (
  <Button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{
      type: 'spring',
      damping: 15,
      stiffness: 500,
      restSpeed: 0.001,
      restDelta: 0.001
    }}
    initial={false}
    onClick={toggleSettingsOpen}
    {...props}
  >
    <SettingsBar />
  </Button>
)}

export default props => {
  const { isSettingsOpen, toggleSettingsOpen } = useSettings()

  return (
    <Settings
      animate={isSettingsOpen ? "open" : "closed"}
      variants={variants}
      transition={spring}
      initial={false}
    >
      <SettingsDismissButton onClick={toggleSettingsOpen}>
        <Icon name="chevron-down" fixedWidth />
      </SettingsDismissButton>

      <div>{props.children}</div>
    </Settings>
  )
}
