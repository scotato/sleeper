import React from 'react'
import styled, { css } from 'styled-components'
import { motion } from "framer-motion"

import Link from './Link'
import Icon from './Icon'
import { blurStyle } from './Blur'

const indicatorStyle = css`
  position: absolute;
  content: " ";
  width: 12px;
  height: 12px;
  background-color: ${props => props.theme.color.blue};
  border-radius: 6px;
  left: -24px;
  align-self: center;
  transform: scale(0);
  opacity: 0;
  will-change: transform, opacity;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;

  @media (max-width: 720px) {
    display: none;
  }
`

const indicatorStyleActive = css`
  transform: scale(1);
  opacity: 1;
`

const Notification = styled(Link)`
  display: grid;
  position: relative;
  margin: 8px auto;
  padding: 12px;
  max-width: 600px;
  grid-template-columns: 24px auto auto 24px;
  grid-template-rows: 24px auto;
  grid-column-gap: 8px;
  grid-template-areas: "logo title description icon";
  align-items: center;
  color: ${props => props.theme.color.black};
  border-radius: 16px;
  pointer-events: all;

  ${blurStyle}

  .dark-mode & {
    color: ${props => props.theme.color.white};

    &:hover {
      color: ${props => props.theme.color.white};
    }
  }

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.color.black};
  }

  &:after {
    ${indicatorStyle}
  }

  &:focus {
    outline: none;

    &:after {
      ${indicatorStyleActive}
    }
  }
`

const NotificationLogo = styled.div`
  grid-area: logo;
  line-height: 1;

  img {
    width: 100%;
    line-height: 1;
  }

  svg {
    display: block;
  }
`

const NotificationTitle = styled.span`
  grid-area: title;
  text-transform: uppercase;
  opacity: 0.5;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1;
  overflow: hidden;
  align-self: center;
`

const NotificationDescription = styled.span`
  grid-area: description;
  padding: 0 4px;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 1.1;
  overflow: hidden;
  text-align: right;
  opacity: 0.66;
`

const NotificationIcon = styled(Icon)`
  grid-area: icon;
  font-size: 18px;
  color: hsla(0, 0%, 0%, 10%);

  .dark-mode & {
    color: hsla(0, 0%, 100%, 20%);
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

const PlaceholderIcon = styled(Icon).attrs({
  name: 'star'
})`
  color: ${props => props.theme.color.yellow};
  font-size: 20px;
`

export default props => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.99 }}
    variants={variants}
    transition={spring}
  >
    <Notification to={props.to} onClick={e => e.stopPropagation()}>
      <NotificationLogo>
        {props.logo || <PlaceholderIcon />}
      </NotificationLogo>
      <NotificationTitle>{props.title}</NotificationTitle>
      <NotificationDescription>{props.description}</NotificationDescription>
      <NotificationIcon name={props.icon} />
    </Notification>
  </motion.div>
)
