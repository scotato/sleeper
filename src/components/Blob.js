import React from 'react'
import { useSpring, animated } from 'react-spring'
import blobs from 'blobs'

export default ({ size, complexity, contrast, gradient, cx, cy }) => {
  const randBlob = () => blobs.editable({
    size,
    complexity,
    contrast,
    color: "#fff",
    guides: false,
  }).children[0].children[0].attributes.d

  const [{ shape }, set] = useSpring(() => ({shape: randBlob(), config: { 
    mass: 500, tension: 500, friction: 500
  }}))

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
