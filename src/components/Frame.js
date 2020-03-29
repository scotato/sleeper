import React from 'react'
import { useWindowSize } from '@reach/window-size'
import useDarkMode from 'use-dark-mode'

import GlobalStyle from './GlobalStyle'
import Gradient from './Gradient'

const SVG = props => {
  const { width, height } = useWindowSize()
  const { toggle } = useDarkMode()

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      onClick={toggle}
    >
      <defs>
        <Gradient />
      </defs>

      {props.children}
    </svg>
  )
}

export default props => (
  <>
    <GlobalStyle />
    <SVG>
      {props.children}
    </SVG>
  </>
)
