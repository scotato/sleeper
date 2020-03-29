import React from 'react'
import { useWindowSize } from "@reach/window-size"

import Blob from './Blob'

export default () => {
  const { width, height } = useWindowSize()
  const square = width > height ? height : width
  const cx = width / 2
  const cy = height / 2

  const blobs = [{
    key: 0,
    gradient: 0,
    size: square,
    complexity: 0.2,
    contrast: 0.4,
    cx: 0,
    cy: 0,
  }, {
    key: 1,
    gradient: 0,
    size: square * 2,
    complexity: 0.4,
    contrast: 0.6,
    cx: cx / 2,
    cy: cy / 2,
  }, {
    key: 2,
    gradient: 0,
    size: square / 2,
    complexity: 0.2,
    contrast: 0.4,
    cx: cx * -1 / 4,
    cy: cy * -1 / 4,
  }]

  return blobs.map(blob => <Blob {...blob} />)
}
