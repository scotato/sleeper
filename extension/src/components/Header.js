import React from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Icon from './Icon'
import { Container } from './Layout'
import Link, { Back } from './Link'
import { useTimestamp, timestampToClock } from './Time'

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 64px 1fr;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  align-items: center;

  a {
    color: white;
    justify-self: start;

    &:hover {
      color: white;
      text-decoration: none;
    }
  }
`

const Social = styled.div`
  display: grid;
  grid-template-columns: 32px 32px;
  grid-column-gap: 8px;
  justify-self: flex-end;
`

export default () => {
  const timestamp = useTimestamp()
  const clock = timestampToClock(timestamp)

  return (
    <Container>
      <Header>
        <Back>{clock}</Back>
        <Logo />
        <Social>
          <Link to={process.env.REACT_APP_GITHUB_REPO}>
            <Icon name="github" />
          </Link>

          <Link to={process.env.REACT_APP_TWITTER}>
            <Icon name="twitter" />
          </Link>
        </Social>
      </Header>
    </Container>
  )

}
