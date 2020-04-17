import React from 'react'

import useSettings from '../store/settings'
import Group from './Group'
import Row from './Row'

export default () => {
  const { version } = useSettings()

  return (
    <Group>
      <Row
        icon="bug"
        title="Support"
        detail="github.com/scotato/sleeper"
        to="https://github.com/scotato/sleeper"
      />

      <Row
        icon="code-branch"
        title="Version"
        detail={version}
      />
    </Group>
  )
}
