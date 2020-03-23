import React from 'react'
import useDarkMode from 'use-dark-mode'

import Layout from './Layout'
// import Time from './Time'
import ColorView from './ColorView'

function App() {
  const { toggle } = useDarkMode()
  
  return (
    <Layout onClick={toggle}>
      {/* <Time format="h:mm" /> */}
      <ColorView />
    </Layout>
  )
}

export default App
