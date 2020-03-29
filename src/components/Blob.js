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
    <g transform={`translate(${cx - (square / 2)},${cy - (square / 2)})`}>
      <animated.path
        fill="url(#gradient0)"
        fillOpacity={0.8}
        d={shape}
      />
    </g>
  )
}

// const groups = [{
  //   id: 0,
  //   gradient: 0,
  //   size: square,
  //   complexity: 0.2,
  //   contrast: 0.4,
  //   cx: 0,
  //   cy: 0,
  // }, {
  //   id: 1,
  //   gradient: 0,
  //   size: square * 2,
  //   complexity: 0.4,
  //   contrast: 0.6,
  //   cx: cx / 2,
  //   cy: cy / 2,
  // }, {
  //   id: 2,
  //   gradient: 0,
  //   size: square / 2,
  //   complexity: 0.2,
  //   contrast: 0.4,
  //   cx: cx * -1 / 4,
  //   cy: cy * -1 / 4,
  // }]

