import React, { useState } from 'react'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import Time from './Time'
import TimeVisualizer from './TimeVisualizer'
import ColorBox from './ColorBox'

const Dashboard = styled.main`
  font-size: 20vw;
`

const VisualizeButton = styled.button`
  position: fixed;
  bottom: 2vw;
  right: 2vw;
  background: 0;
  border: 0;
  font-size: 1vw;
  color: rgba(255, 255, 255, 0.25);
`

function App() {
  const [isVisualize, setIsVisualize] = useState(false)
  const toggleVisualize = () => setIsVisualize(!isVisualize)
  
  return (
    <>
      <GlobalStyle />
      { isVisualize
        ? <TimeVisualizer  />
        : (
          <Dashboard>
            <Time format="h:mm" />
            <ColorBox />
          </Dashboard>
        )
      }
      <VisualizeButton onClick={toggleVisualize}>
        <span role="img" aria-label="Visualize">
          {isVisualize ? "dashboard" : "visualize"}
        </span>
      </VisualizeButton>
    </>
  );
}

export default App;
