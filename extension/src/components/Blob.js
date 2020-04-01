import React, { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import { useWindowSize } from "@reach/window-size"
import blobs from 'blobs'
import moment from 'moment'

export default ({ size, complexity, contrast, gradient, cx, cy }) => {
  const { width, height } = useWindowSize()
  const [ time, setTime ] = useState(moment().format())
  const length = width > height ? width : height
  const config = {
    mass: size / length * 400,
    tension: 350,
    friction: 350,
  }
  
  // blobs returns an entire SVG structure, we just want the d from the path
  const randBlob = () => blobs.editable({
    size,
    complexity,
    contrast,
    color: "#fff",
    guides: false,
  }).children[0].children[0].attributes.d

  const [{ shape }, set] = useSpring(() => ({ shape: randBlob(), config }))
  const transform = `translate(${cx - (size / 2)},${cy - (size / 2)})`
  const fill = `url(#${gradient})`

  useEffect(() => {
    const timer = setInterval(() => {
      const previousMinute = moment(time).minute()
      const currentMinute = moment().minute()
      const isNewMinute = previousMinute !== currentMinute

      if (isNewMinute) {
        setTime(moment().format())
      }
    }, 1000)
    return () => clearInterval(timer)
  })

  set({shape: randBlob()})

  return (
    <g transform={transform}>
      <animated.path fill={fill} d={shape} />
    </g>
  )
}