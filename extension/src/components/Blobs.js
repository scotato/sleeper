import React from 'react'
import { useWindowSize } from "@reach/window-size"
import useDarkMode from 'use-dark-mode'

import Blob from './Blob'
import Gradients from './Gradients'

const SVG = props => {
  const { width, height } = useWindowSize()

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.children}
    </svg>
  )
}

export default () => {
  const { width, height } = useWindowSize()
  const { value: isDarkMode } = useDarkMode()
  const length = width > height ? width : height

  const size = {
    xl: length * 2,
    lg: length * 1.50,
    md: length * 1,
    sm: length * 0.75,
    xs: length * 0.50
  }

  return (
    <SVG>
      <Gradients />
      <Blob
        gradient={isDarkMode ? 'pinkRadial' : 'pinkRadial'}
        size={size.lg}
        complexity={0.75}
        contrast={0.4}
        cx={width * 0.8}
        cy={height * 0}
      />

      <Blob
        gradient={isDarkMode ? 'purpleAlphaRadial' : 'yellowRadial'}
        size={size.xl}
        complexity={0.75}
        contrast={0.4}
        cx={width * 0.6}
        cy={height * -0.5}
      />

      <Blob
        gradient={isDarkMode ? 'purpleAlphaRadial' : 'redRadial'}
        size={size.md}
        complexity={0.75}
        contrast={0.3}
        cx={width * 0.9}
        cy={height * -0.25}
      />

      <Blob
        gradient={isDarkMode ? 'yellowPinkLinearAlpha' : 'yellowPinkLinear'}
        size={size.sm}
        complexity={0.75}
        contrast={0.3}
        cx={width * -0.15}
        cy={height * 0.55}
      />

      <Blob
        gradient={isDarkMode ? 'yellowRadial' : 'yellowAlphaRadial'}
        size={size.sm}
        complexity={0.5}
        contrast={0.3}
        cx={width * -0.175}
        cy={height * 0.55}
      />

      <Blob
        gradient={isDarkMode ? 'pinkAlphaRadial' : 'pinkRadial'}
        size={size.sm}
        complexity={0.5}
        contrast={0.3}
        cx={width * 0.45}
        cy={height * 1.25}
      />

      <Blob
        gradient={isDarkMode ? 'purpleLinear' : 'purpleLinear'}
        size={size.sm}
        complexity={0.75}
        contrast={0.3}
        cx={width * 0.55}
        cy={height * 1.25}
      />
    </SVG>
  )
}
