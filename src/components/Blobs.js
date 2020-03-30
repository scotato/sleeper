import React from 'react'
import { useWindowSize } from "@reach/window-size"
import useDarkMode from 'use-dark-mode'

import Blob from './Blob'

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
    <>
      <Blob
        gradient={isDarkMode ? 'orangeAlpha' : 'orange'}
        size={size.lg}
        complexity={0.75}
        contrast={0.4}
        cx={width * 0.8}
        cy={height * 0}
      />

      <Blob
        gradient={isDarkMode ? 'orangeAlpha' : 'orange'}
        size={size.xl}
        complexity={0.75}
        contrast={0.4}
        cx={width * 0.6}
        cy={height * -0.5}
      />

      <Blob
        gradient={isDarkMode ? 'pinkAlpha' : 'pink'}
        size={size.md}
        complexity={0.75}
        contrast={0.3}
        cx={width * 0.8}
        cy={height * -0.25}
      />

      <Blob
        gradient={isDarkMode ? 'orangeAlpha' : 'orange'}
        size={size.sm}
        complexity={0.5}
        contrast={0.3}
        cx={width * -0.2}
        cy={height * 0.56}
      />

      <Blob
        gradient={isDarkMode ? 'pinkAlpha' : 'pink'}
        size={size.sm}
        complexity={0.75}
        contrast={0.3}
        cx={width * -0.2}
        cy={height * 0.66}
      />

      <Blob
        gradient={isDarkMode ? 'pinkAlpha' : 'pink'}
        size={size.sm}
        complexity={0.5}
        contrast={0.3}
        cx={width * 0.45}
        cy={height * 1.25}
      />

      <Blob
        gradient={isDarkMode ? 'purpleAlpha' : 'purple'}
        size={size.sm}
        complexity={0.75}
        contrast={0.3}
        cx={width * 0.55}
        cy={height * 1.25}
      />
    </>
  )
}
