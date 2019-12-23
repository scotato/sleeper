import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Color = styled.div`
  display: block;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  top: 0;
  left: 0;
  background-color: ${props => `hsl(${props.percent * 360}, 100%, 25%)`};
`

const getSeconds = () => {
  var date = new Date();
  return date.getSeconds() + (60 * date.getMinutes()) + (60 * 60 * date.getHours());
}

const ColorBox = () => {
  const [seconds, setSeconds] = useState(getSeconds())
  
  useEffect(() => {
    const colorBox = setInterval(() =>
      setSeconds(getSeconds())
    , 1000)
    return () => clearInterval(colorBox)
  })

  return <Color percent={seconds / (60 * 60 * 24)} />
}

export default ColorBox
