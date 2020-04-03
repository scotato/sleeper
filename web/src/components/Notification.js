import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'react-ga'
import { motion } from "framer-motion"

import Logo from './Logo'

const Notification = styled(OutboundLink)`
  display: grid;
  margin: 16px 0;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(64px);
  border-radius: 16px;
  grid-template-columns: 24px 1fr;
  grid-template-rows: 24px auto;
  grid-column-gap: 8px;
  grid-row-gap: 12px;
  grid-template-areas:
    "logo title"
    "description description";
  color: ${props => props.theme.color.black};
  pointer-events: all;

  @-moz-document url-prefix() {
    background-color: rgba(255, 255, 255, 0.9);
  }

  .dark-mode & {
    color: ${props => props.theme.color.white};
    background-color: rgba(0, 0, 0, 0.5);

    @-moz-document url-prefix() {
      background-color: rgba(0, 0, 0, 0.9);
    }

    &:hover {
      color: ${props => props.theme.color.white};
    }
  }

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.color.black};
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

const variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: {
        type: 'spring',
        damping: 17.5,
        stiffness: 500,
        restSpeed: 0.001,
        restDelta: 0.001
      }
    }
  },
  hidden: {
    y: 8,
    opacity: 0,
    transition: {
      y: {
        type: 'spring',
        damping: 17.5,
        stiffness: 500,
        restSpeed: 0.001,
        restDelta: 0.001
      }
    }
  }
}

export default props => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.99 }}
    variants={variants}
  >
    <Notification
      key={props.id}
      eventLabel="outbound"
      to={props.to}
      onClick={e => e.stopPropagation()}
      target="_blank"
    >
      <NotificationLogo>
        <Logo brand={props.id} />
      </NotificationLogo>
      <NotificationTitle>{props.title}</NotificationTitle>
      <NotificationDescription>{props.description}</NotificationDescription>
    </Notification>
  </motion.div>
)
