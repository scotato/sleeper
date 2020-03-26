import React, { useState } from 'react'
import { useWindowSize } from "@reach/window-size"
import { useSpring, animated } from 'react-spring'
import blobs from 'blobs'
import cheerio from 'cheerio'
import styled from 'styled-components'

import { useTimestamp, timestampToClock, timestampToCalendar } from './Time'

// export const GRADIENTOFFSET = 30
// export const GRADIENTROTATION = 60
// export const HUEMIN = 0
// export const HUEMAX = 360
// export const SATURATIONMIN = 75
// export const SATURATIONMAX = 85
// export const LIGHTNESSMIN = 10
// export const LIGHTNESSMAX = 50

// export const gradient = hsl => `linear-gradient(
//   ${hsl.hue}deg, 
//   ${hslString({
//     hue: hsl.hue + GRADIENTOFFSET,
//     saturation: hsl.saturation,
//     lightness: hsl.lightness
//   })}, 
//   ${hslString({
//     hue: hsl.hue + GRADIENTOFFSET + GRADIENTROTATION,
//     saturation: hsl.saturation,
//     lightness: hsl.lightness
//   })})
// `

// export const hslString = ({ hue, saturation, lightness}) => `hsl(${hue}, ${saturation}%, ${lightness}%)`

// const getHSL = timestamp => {
//   const date = moment(timestamp)
//   const dateSeconds = date.seconds() + (date.minutes() * SECONDSPERMINUTE) + (date.hours() * SECONDSPERHOUR)
  
//   const secondsPerMinutePortion = date.seconds() / SECONDSPERMINUTE
//   const secondsPerHourPortion = (date.seconds() + (date.minutes() * SECONDSPERMINUTE)) / SECONDSPERHOUR
//   const secondsPerDayPortion = dateSeconds / SECONDSPERDAY
//   const saturationPortion = 1 - (2 * (Math.abs(12 * SECONDSPERHOUR - dateSeconds)) / SECONDSPERDAY)
//   const lightnessPortion = 1 - (2 * (Math.abs(12 * SECONDSPERHOUR - dateSeconds)) / SECONDSPERDAY)
  
//   const hue = (secondsPerDayPortion * (HUEMAX - HUEMIN)) + HUEMIN
//   const saturation = (saturationPortion * (SATURATIONMAX - SATURATIONMIN)) + SATURATIONMIN // highest saturation at 12
//   const lightness = (lightnessPortion * (LIGHTNESSMAX - LIGHTNESSMIN)) + LIGHTNESSMIN // highest lightness at 12
  
//   return { hue, saturation, lightness }
// }

const Wave = styled(animated.path)`
  opacity: 0.875;
`

const Circle = styled(animated.circle)`
  opacity: 0.875;
`

const Clock = styled(animated.text)`
  font-size: 96px;
  fill: white;
  line-height: 1;
  user-select: none;
  font-weight: 200;
`

const Calendar = styled(animated.text)`
  font-size: 20px;
  fill: white;
  line-height: 1;
  user-select: none;
`

export default () => {
  const timestamp = useTimestamp()
  const [ large, setLarge ] = useState(false)
  const { number } = useSpring({ number: 200, from: { number: 0 } })
  const { width, height } = useWindowSize()
  const square = width > height ? height : width
  const cx = width / 2
  const cy = height / 2
  const blobWidth = large ? square / 3 : square /  4
  const spring = useSpring({ r: blobWidth })
  const clock = timestampToClock(timestamp)
  const calendar = timestampToCalendar(timestamp)
  const blobStartX = cx / 4
  const blobStartY = cy / 5
  const blobBottomY = cy / 4
  
  const blob = blobs({
    size: 600,
    complexity: 0.2,
    contrast: 0.4,
    color: "#ec576b",
    stroke: {
       width: 0,
       color: "black",
    },
    guides: false,
    seed: `${timestamp}`,
 })

  return (
    <div dangerouslySetInnerHTML={{ __html: blob}} />
    // <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
    //   <defs>
    //     <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
    //       <stop offset="0%" style={{stopColor: 'rgb(255,0,0)', stopOpacity: 1}} />
    //       <stop offset="100%" style={{stopColor: 'rgb(255,255,0)', stopOpacity: 1}} />
    //     </linearGradient>
    //   </defs>

    //   <Wave
    //     fill="url(#gradient)"
    //     d={number.interpolate(n => `
    //       M 0,${height}
    //       L 0,${height * 0.75}
    //       C 120,96 240,160 ${width},${height * 0.75}
    //       L ${width},${height} z
    //     `)}
    //   />


    //   <g transform={`translate(${cx},${cy})`}>
    //     {/* <path
    //       fill="url(#gradient)"
    //       fillOpacity={0.8}
    //       d={`
    //         M ${square / 5},${square / 8}
    //         C ${square / 7},${square / 4}, -${square / 7},${square / 4}, -${square / 5},${square / 8}
    //         C -${square / 3},0, -${square / 7},-${square / 4},0,-${square / 4}
    //         C ${square / 7},-${square / 4}, ${square / 3},0, ${square / 5},${square / 8}
    //         Z
    //       `}
    //     /> */}

    //     <path
    //       fill="url(#gradient)"
    //       fillOpacity={0.8}
    //       d={`
    //         M ${square / 5},${square / 8}
    //         C -${square / 5},${square / 8} -${square / 5},${square / 8} -${square / 5},${square / 8}
    //         C 0,-${square / 4} 0,-${square / 4} 0,-${square / 4}
    //         C ${square / 5},${square / 8} ${square / 5},${square / 8} ${square / 5},${square / 8}
    //         Z
    //       `}
    //     />

    //     {/* <path
    //       fill="url(#gradient)"
    //       fillOpacity={0.8}
    //       d={`
    //         M 129,75
    //         C 86,150, -86,150, -129,75
    //         C -173,0, -86,-150,0,-150
    //         C 86,-150, 173,0, 129,75
    //         Z
    //       `}
    //     /> */}
        

    //   {/* <Circle
    //     style={spring}
    //     fill="url(#gradient)"
    //     onClick={e => { e.stopPropagation(); setLarge(!large) }}
    //   /> */}
    //   </g>

    //   <Clock x={cx} y={cy + 16} startOffset="50%" textAnchor="middle">
    //     {clock}
    //   </Clock>

    //   <Calendar x={cx} y={cy + 48} startOffset="50%" textAnchor="middle">
    //     {calendar}
    //   </Calendar>
    // </svg>
  )
}
