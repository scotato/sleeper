import React from 'react'
import GlobalStyle from './GlobalStyle'
import Time from './Time'

function App() {
  return (
    <>
      <GlobalStyle />
      <Time format="h:mm" />
    </>
  );
}

export default App;
