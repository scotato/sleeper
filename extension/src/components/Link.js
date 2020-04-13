import React from 'react'
import styled, { css } from 'styled-components'
import { Link as LinkRouter } from "@reach/router"
import { OutboundLink } from 'react-ga'

import Icon from './Icon'

const link = css`
  pointer-events: all;

  &:focus {
    outline: none;
  }
`

const LinkInternal = styled(LinkRouter)`
  ${link}
`

const LinkExternal = styled(OutboundLink).attrs({
  eventLabel: 'outbound'
})`
  ${link}
`

const Link = ({to, ...props}) => to.includes('http') ? (
  <LinkExternal to={to} {...props} />
) : (
  <LinkInternal to={to} {...props} />
)

const BackLink = styled(Link)`
  display: grid;
  padding: 0 8px;
  grid-template-columns: auto 1fr;
  grid-column-gap: 8px;
  align-items: center;
`

export const Back = props => (
  <BackLink to={props.to || '../'}>
    <Icon name="chevron-left" /> {props.children || 'Back'}
  </BackLink>
)

export default Link
