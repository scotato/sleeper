import React from 'react'
import { useWindowSize } from "@reach/window-size"
import { useSpring, animated } from 'react-spring'
import blobs from 'blobs'

export default () => {
  const { width, height } = useWindowSize()
  const square = width > height ? height : width
  const cx = width / 2
  const cy = height / 2

  const randBlob = () => blobs.editable({
    size: square,
    complexity: 0.2,
    contrast: 0.4,
    color: "#fff",
    guides: false,
  }).children[0].children[0].attributes.d

  const [{ shape }, set] = useSpring(() => ({shape: randBlob(), config: { 
    mass: 500, tension: 500, friction: 500
  }}))

  set({shape: randBlob()})

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="gradient0" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: 'rgb(255,0,0)', stopOpacity: 1}} />
          <stop offset="100%" style={{stopColor: 'rgb(255,255,0)', stopOpacity: 1}} />
        </linearGradient>
      </defs>

      <g transform={`translate(${cx - (square / 2)},${cy - (square / 2)})`}>
        <animated.path
          fill="url(#gradient0)"
          fillOpacity={0.8}
          d={shape}
        />
      </g>
    </svg>
  )
}
