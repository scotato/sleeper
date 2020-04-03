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
  const isLandscape = width > height

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
        complexity={0.66}
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
        cy={isLandscape ? height * -0.5 : height * -0.2}
      />

      <Blob
        gradient={isDarkMode ? 'purpleAlphaRadial' : 'redRadial'}
        size={size.md}
        complexity={0.75}
        contrast={0.3}
        cx={width * 0.9}
        cy={isLandscape ? height * -0.25 : height * -0.1}
      />

      <Blob
        gradient={isDarkMode ? 'yellowPinkLinearAlpha' : 'yellowPinkLinear'}
        size={size.sm}
        complexity={0.75}
        contrast={0.3}
        cx={isLandscape ? width * -0.15 : width * -0.25}
        cy={height * 0.55}
      />

      <Blob
        gradient={isDarkMode ? 'yellowRadial' : 'yellowAlphaRadial'}
        size={size.sm}
        complexity={0.5}
        contrast={0.3}
        cx={isLandscape ? width * -0.175 : width * -0.25}
        cy={height * 0.55}
      />

      <Blob
        gradient={isDarkMode ? 'pinkAlphaRadial' : 'pinkRadial'}
        size={size.sm}
        complexity={0.5}
        contrast={0.3}
        cx={width * 0.45}
        cy={isLandscape? height * 1.25 : height * 1.1}
      />

      <Blob
        gradient={isDarkMode ? 'purpleLinear' : 'purpleLinear'}
        size={size.sm}
        complexity={0.75}
        contrast={0.3}
        cx={width * 0.55}
        cy={isLandscape? height * 1.25 : height * 1.1}
      />
    </SVG>
  )
}
