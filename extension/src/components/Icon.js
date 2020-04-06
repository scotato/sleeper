import React from 'react'
import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"

import Logo from './Logo'

const IconStyled = styled.div`
  display: grid;
  place-items: center;
  line-height: 1;

  ${props => props.size && css`
    font-size: ${props.theme.size[props.size]};
    width: ${props.theme.size[props.size]};
  `}
`

const iconSwitch = icon => {
  switch (icon) {
    case 'chrome':
    case 'edge':
    case 'github':
    case 'twitter':
      return ['fab', icon]
    case 'firefox':
      return ['fab', 'firefox-browser']
    default:
        return ['fas', icon]
  }
}

const Icon = ({ size, name, fixedWidth, spin, ...props }) => (
  <IconStyled size={size} {...props}>
    <FontAwesomeIcon icon={iconSwitch(name)} fixedWidth={fixedWidth} spin={spin} />
  </IconStyled>
)

const LoadingContainer = styled(motion.div)`
  place-self: center;
`

const LoadingIcon = styled(Logo).attrs({brand: 'loading'})`
  width: 128px;
  height: 128px;
`

export const Loading = props => (
  <LoadingContainer
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    transition={{
      type: 'spring',
      delay: 0.5
    }}
  >
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ type: 'spring', loop: Infinity }}
    >
      <LoadingIcon />
    </motion.div>
  </LoadingContainer>
)

export const IconPlaceholder = styled(Icon)`
  color: ${props => props.theme.grayscale[200]};

  .dark-mode & {
    color: ${props => props.theme.grayscale[800]};
  }
`

export default Icon
