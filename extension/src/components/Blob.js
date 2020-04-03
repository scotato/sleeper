import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { useWindowSize } from "@reach/window-size"
import blobs from 'blobs'
import moment from 'moment'

// blobs returns an entire SVG structure, we just want the d from the path
const randBlob = ({ size, complexity, contrast }) => blobs.editable({
  size,
  complexity,
  contrast,
  color: "#fff",
  guides: false,
}).children[0].children[0].attributes.d

export default ({ size, complexity, contrast, gradient, cx, cy }) => {
  const blobProps = { size, complexity, contrast }
  const { width, height } = useWindowSize()
  const [ time, setTime ] = useState(moment().format())
  const [ newBlob, setNewBlob ] = useState(randBlob(blobProps))
  const [ isAnimating, setIsAnimating ] = useState(false)
  const length = width > height ? width : height
  const setNewBlobRand = () => setNewBlob(randBlob(blobProps))

  const transform = `translate(${cx - (size / 2)},${cy - (size / 2)})`
  const fill = `url(#${gradient})`

  // reanimate on minute change unless already animating
  useEffect(() => {
    const timer = setInterval(() => {
      const previousMinute = moment(time).minute()
      const currentMinute = moment().minute()
      const isNewMinute = previousMinute !== currentMinute
      const shouldReanimate = isNewMinute && !isAnimating

      if (shouldReanimate) {
        setNewBlobRand()
      }
      setTime(moment().format())
    }, 1000)
    return () => clearInterval(timer)
  })

  // reanimate on load
  // eslint-disable-next-line
  useEffect(setNewBlobRand, [])

  return (
    <g transform={transform}>
      <motion.path
        fill={fill}
        initial={{ d: randBlob(blobProps) }}
        animate={{ d: newBlob }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 10,
          mass: size / length * 10,
        }}
        onAnimationStart={() => setIsAnimating(true)}
        onAnimationComplete={() => setIsAnimating(false)}
        onClick={setNewBlobRand}
      />
    </g>
  )
}
