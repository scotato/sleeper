import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"

import Link from './Link'
import Logo from './Logo'
import Icon from './Icon'

const Notification = styled(Link)`
  display: grid;
  margin: 16px auto;
  padding: 12px;
  max-width: 512px;
  grid-template-columns: 24px 1fr 48px;
  grid-template-rows: 24px auto;
  grid-column-gap: 8px;
  grid-row-gap: 12px;
  grid-template-areas:
    "logo title icon"
    "description description icon";
  color: ${props => props.theme.color.black};
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(64px);
  border-radius: 16px;
  pointer-events: all;
  will-change: background-color;
  transition: background-color 0.2s ease-in-out;

  .dark-mode & {
    color: ${props => props.theme.color.white};
    background-color: rgba(0, 0, 0, 0.5);

    &:hover {
      color: ${props => props.theme.color.white};
    }

    @-moz-document url-prefix() {
      background-color: rgba(0, 0, 0, 0.9);
    }
  }

  @-moz-document url-prefix() {
    background-color: rgba(255, 255, 255, 0.9);
  }

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.color.black};
  }

  &:focus {
    outline: none;
    background-color: hsla(0, 0%, 100%, 75%);

    .dark-mode & {
      background-color: hsla(0, 0%, 0%, 75%);
    }
  }
`

const NotificationLogo = styled.div`
  grid-area: logo;
`

const NotificationTitle = styled.span`
  grid-area: title;
  text-transform: uppercase;
  opacity: 0.5;
`

const NotificationDescription = styled.span`
  grid-area: description;
  padding: 0 4px;
  font-size: 20px;
  line-height: 1;
`

const NotificationIcon = styled(Icon)`
  grid-area: icon;
  font-size: 24px;
  color: hsla(0, 0%, 0%, 10%);

  .dark-mode & {
    color: hsla(0, 0%, 100%, 10%);
  }
`

const spring = {
  type: 'spring',
  damping: 15,
  stiffness: 500,
  restSpeed: 0.001,
  restDelta: 0.001
}

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { y: spring }
  },
  hidden: {
    y: 8,
    opacity: 0,
    transition: { y: spring }
  }
}

export default props => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.99 }}
    variants={variants}
    transition={spring}
  >
    <Notification to={props.to} onClick={e => e.stopPropagation()}>
      <NotificationLogo>
        <Logo brand={props.id} />
      </NotificationLogo>
      <NotificationTitle>{props.title}</NotificationTitle>
      <NotificationDescription>{props.description}</NotificationDescription>
      <NotificationIcon name={props.icon} fixedWidth />
    </Notification>
  </motion.div>
)
