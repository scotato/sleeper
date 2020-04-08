import React, { useContext } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Context } from './Context'
import { blurStyle } from './Blur'
import Icon from './Icon'

const Settings = styled(motion.div)`
  display: grid;
  position: fixed;
  width: 100vw;
  height: 125vh;
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
  position: fixed;
  margin: 0;
  padding: 16px;
  bottom: 8px;
  left: calc(50% - 96px);
  cursor: pointer;
  pointer-events: all;
  border: 0;
  border-radius: 36px;
  background-color: transparent;

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

export const SettingsButton = props => (
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
    {...props}
  >
    <SettingsBar />
  </Button>
)

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

  @-moz-document url-prefix() {
    color: hsla(0, 0%, 0%, 10%);

    .dark-mode & {
      color: hsla(0, 0%, 100%, 10%);
    }
  }

  &:focus {
    outline: none;
  }
`

export default () => {
  const { state, dispatch } = useContext(Context)
  const toggleSettings = () => dispatch({type: 'toggleSettings'})

  return (
    <Settings
      animate={state.isSettingsOpen ? "open" : "closed"}
      variants={variants}
      transition={spring}
      initial={false}
    >
      <SettingsDismissButton onClick={toggleSettings}>
        <Icon name="chevron-down" fixedWidth />
      </SettingsDismissButton>
    </Settings>
  )
}
