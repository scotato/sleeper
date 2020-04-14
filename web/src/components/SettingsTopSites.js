import React from 'react'

import Switch from 'extension/src/components/Switch'
import Group from 'extension/src/components/Group'
import Row from 'extension/src/components/Row'

export default () => {
  return (
    <Group caption="Top Sites available in browser extension">
      <Row
        icon="star"
        title="Top Sites"
        detail={(
          <Switch disabled />
        )}
      />

      <Row
        icon="globe"
        title="Top Sites Urls"
        detail={(
          <Switch disabled />
        )}
      />
    </Group>
  )
}
