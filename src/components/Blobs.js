import React from 'react'
import { useWindowSize } from "@reach/window-size"

import Blob from './Blob'

export default () => {
  const { width, height } = useWindowSize()
  const length = width > height ? width : height

  const size = {
    xl: length * 1.25,
    lg: length * 1.00,
    md: length * 0.75,
    sm: length * 0.66,
    xs: length * 0.50
  }

  return (
    <>
      <Blob
        gradient={0}
        size={size.xl}
        complexity={0.75}
        contrast={0.3}
        cx={width * 0.66}
        cy={height * -0.1}
      />

      <Blob
        gradient={0}
        size={size.lg}
        complexity={0.5}
        contrast={0.3}
        cx={width}
        cy={height * 0.2}
      />

      <Blob
        gradient={0}
        size={size.md}
        complexity={0.25}
        contrast={0.5}
        cx={width * 0.8}
        cy={height * -0.1}
      />

      <Blob
        gradient={0}
        size={size.sm}
        complexity={0.2}
        contrast={0.4}
        cx={0}
        cy={height * 0.5}
      />

      <Blob
        gradient={0}
        size={size.sm}
        complexity={0.2}
        contrast={0.4}
        cx={0}
        cy={height * 0.5}
      />

      <Blob
        gradient={0}
        size={size.xs}
        complexity={0.2}
        contrast={0.4}
        cx={width / 2}
        cy={height}
      />

      <Blob
        gradient={0}
        size={size.xs}
        complexity={0.2}
        contrast={0.4}
        cx={width / 2}
        cy={height}
      />
    </>
  )
}
