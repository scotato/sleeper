import React from 'react'

import { ReactComponent as SleeperLogo } from '../logos/sleeper.svg'
import { ReactComponent as ChromeLogo } from '../logos/chrome.svg'
import { ReactComponent as FirefoxLogo } from '../logos/firefox.svg'
import { ReactComponent as GitHubLogo } from '../logos/github.svg'

export default props => {
  switch (props.brand) {
    case "chrome":
      return <ChromeLogo {...props} />
    case "firefox":
      return <FirefoxLogo {...props} />
    case "github":
      return <GitHubLogo {...props} />
    case "sleeper":
    default:
      return <SleeperLogo {...props} />
  }
}
