import React from 'react'
import { useSpring, animated } from 'react-spring'
import { useWindowSize } from "@reach/window-size"
import blobs from 'blobs'

export default ({ size, complexity, contrast, gradient, cx, cy }) => {
  const { width, height } = useWindowSize()
  const length = width > height ? width : height
  const config = {
    mass: size / length * 400,
    tension: 250,
    friction: 250,
  }
  
  const randBlob = () => blobs.editable({
    size,
    complexity,
    contrast,
    color: "#fff",
    guides: false,
  }).children[0].children[0].attributes.d

  const [{ shape }, set] = useSpring(() => ({ shape: randBlob(), config }))

  set({shape: randBlob()})

  return (
    <g transform={`translate(${cx - (size / 2)},${cy - (size / 2)})`}>
      <animated.path
        fill={`url(#gradient${gradient})`}
        fillOpacity={0.8}
        d={shape}
      />
    </g>
  )
}
