import React, { useEffect, useState, useContext } from 'react'
import { motion } from "framer-motion"
import { useWindowSize } from "@reach/window-size"
import blobs from 'blobs'

import { Context } from './Context'

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
  const { state } = useContext(Context)
  const { width, height } = useWindowSize()
  const [ newBlob, setNewBlob ] = useState(randBlob(blobProps))
  const [ isAnimating, setIsAnimating ] = useState(false)
  const length = width > height ? width : height
  const setNewBlobRand = () => setNewBlob(randBlob(blobProps))
  const onClick = e => { e.stopPropagation(); setNewBlobRand() }

  const transform = `translate(${cx - (size / 2)},${cy - (size / 2)})`
  const fill = `url(#${gradient})`

  // animate on load and when minute or screen changes if not currently animating
  useEffect(() => {
    if (!isAnimating) setNewBlobRand()
    // eslint-disable-next-line
  }, [state.time, width, height])

  return (
    <g transform={transform}>
      <motion.path
        fill={fill}
        initial={{ d: randBlob(blobProps) }}
        animate={{ d: newBlob }}
        transition={{
          type: 'spring',
          damping: 10,
          stiffness: 10,
          mass: size / length * 10,
        }}
        onAnimationStart={() => setIsAnimating(true)}
        onAnimationComplete={() => setIsAnimating(false)}
        onClick={onClick}
      />
    </g>
  )
}
