import React from 'react'
import styled, { css } from 'styled-components'
import Link from './Link'
import Icon from './Icon'

export const rowStyle = css`
  display: grid;
  position: relative;
  margin-bottom: 16px;
  padding: 16px;
  border-radius: 20px;
  grid-template-areas: "badge title detail";
  grid-template-columns: 32px 1fr auto;
  grid-column-gap: 12px;
  line-height: 32px;
  align-items: center;
  width: 600px;
  max-width: 100%;
  background-color: hsla(0, 0%, 100%, 25%);
  border-bottom: 2px solid hsla(0, 0%, 0%, 10%);

  ${props => props.theme.browser.firefox`
    background-color: hsla(0, 0%, 0%, 5%);
  `}

  .dark-mode & {
    background-color: hsla(0, 0%, 0%, 25%);
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const Row = styled.div`
  ${rowStyle}
`

const LinkRow = styled(Link)`
  ${rowStyle}
  grid-template-areas: "badge title detail arrow";
  grid-template-columns: 32px auto auto 20px;
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
    text-decoration: none;
  }

  &:focus svg {
    color: ${props => props.theme.color.info};
  }
`

export const Badge = styled(Icon)`
  grid-area: badge;
  justify-self: center;
  color: hsl(0, 0%, 70%);
  transform: scale(1.25);
  z-index: 1;
  font-size: 22px;

  .dark-mode & {
    color: hsl(0, 0%, 50%);
  }
`

export const Title = styled.span`
  grid-area: title;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 20px;
  z-index: 1.1;
`

export const Detail = styled.span`
  grid-area: detail;
  text-align: right;
  color: hsl(0, 0%, 50%);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  line-height: 1.1;
  max-height: 32px;
  font-size: 20px;
  z-index: 1;
`

const Arrow = styled(Icon).attrs({
  name: props => props.external ? 'external-link-alt' : 'chevron-right'
})`
  margin: auto 0;
  grid-area: arrow;
  color: hsl(0, 0%, 40%);
  font-size: 20px;
`

export default props => {
  if (props.hidden) return null

  return props.to ? (
    <LinkRow to={props.to}>
      <Badge name={props.icon} />
      <Title>{props.title}</Title>
      <Detail>{props.detail}</Detail>
      <Arrow external={props.to.includes('http')} />
    </LinkRow>
  ) : (
    <Row>
      <Badge name={props.icon} />
      <Title>{props.title}</Title>
      <Detail>{props.detail}</Detail>
    </Row>
  )
}
