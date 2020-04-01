import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'react-ga'

import Logo from './Logo'

const Notification = styled(OutboundLink)`
  display: grid;
  margin: 8px;
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

const notifications = [{
    id: 'sleeper',
    name: 'Sleeper',
    to: process.env.REACT_APP_GITHUB_REPO,
    message: 'An ambient new tab browser extension'
  }, {
    id: 'chrome',
    name: 'Chrome',
    to: process.env.REACT_APP_CHROME_STORE,
    message: 'Install Sleeper for Chrome'
  }, {
    id: 'firefox',
    name: 'Firefox',
    to: process.env.REACT_APP_FIREFOX_STORE,
    message: 'Install Sleeper for Firefox'
}]

export default () => notifications.map(notification => (
  <Notification
    key={notification.id}
    eventLabel="outbound"
    to={notification.to}
    onClick={e => e.stopPropagation()}
    target="_blank"
  >
    <NotificationLogo>
      <Logo brand={notification.id} />
    </NotificationLogo>
    <NotificationTitle>{notification.name}</NotificationTitle>
    <NotificationDescription>{notification.message}</NotificationDescription>
  </Notification>
))
