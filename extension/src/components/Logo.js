import React from 'react'

import { ReactComponent as SleeperLogo } from '../logos/sleeper.svg'
import { ReactComponent as SleeperWhiteLogo } from '../logos/sleeper-white.svg'
import { ReactComponent as SleeperBlackLogo } from '../logos/sleeper-black.svg'
import { ReactComponent as Loading } from '../logos/loading.svg'
import { ReactComponent as ChromeLogo } from '../logos/chrome.svg'
import { ReactComponent as FirefoxLogo } from '../logos/firefox.svg'
import { ReactComponent as EdgeLogo } from '../logos/edge.svg'
import { ReactComponent as GitHubLogo } from '../logos/github.svg'

export default props => {
  switch (props.brand) {
    case "chrome":
      return <ChromeLogo {...props} />
    case "edge":
      return <EdgeLogo {...props} />
    case "firefox":
      return <FirefoxLogo {...props} />
    case "github":
      return <GitHubLogo {...props} />
    case "loading":
      return <Loading {...props} />
    case "sleeper":
      return <SleeperLogo {...props} />
    case "sleeper-black":
      return <SleeperBlackLogo {...props} />
    case "sleeper-white":
    default:
    return <SleeperWhiteLogo {...props} />
  }
}
