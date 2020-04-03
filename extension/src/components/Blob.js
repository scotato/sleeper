import React, { useEffect, useState, useContext } from 'react'
import { motion } from "framer-motion"
import blobs from 'blobs'
import useDarkMode from 'use-dark-mode'

import { Context } from './Context'

// blobs returns an entire SVG structure, we just want the d from the path
const blob = ({ size, complexity, contrast }) => blobs.editable({
  size,
  complexity,
  contrast,
  color: "#fff",
  guides: false,
}).children[0].children[0].attributes.d

export default ({ size, complexity, contrast, gradient, cx, cy }) => {
  const blobProps = { size, complexity, contrast }
  const { state } = useContext(Context)
  const { value: isDarkMode } = useDarkMode()
  const [ newBlob, setNewBlob ] = useState(blob(blobProps))
  const [ isAnimating, setIsAnimating ] = useState(false)
  const refreshBlobs = () => setNewBlob(blob(blobProps))
  const onClick = e => { e.stopPropagation(); refreshBlobs() }
  const transform = `translate(${cx - (size / 2)},${cy - (size / 2)})`
  const fill = `url(#${gradient})`

  // animate on minute and dark mode change if not currently animating
  // eslint-disable-next-line
  useEffect(() => { if (!isAnimating) refreshBlobs() }, [state.time, isDarkMode])

  // animate on load and size change
  // eslint-disable-next-line
  useEffect(refreshBlobs, [size])

  return (
    <g transform={transform}>
      <motion.path
        fill={fill}
        initial={{ d: blob(blobProps) }}
        animate={{ d: newBlob }}
        transition={{
          type: 'spring',
          damping: 10,
          stiffness: 10,
          mass: size / 200,
        }}
        onAnimationStart={() => setIsAnimating(true)}
        onAnimationComplete={() => setIsAnimating(false)}
        onClick={onClick}
      />
    </g>
  )
}
