import React, { useState } from 'react'
import styled from 'styled-components'
// import { createGlobalStyle } from 'styled-components'
import {useSpring, animated} from 'react-spring'
import moment from 'moment'
import { useWindowSize } from "@reach/window-size"

import { SECONDSPERMINUTE, SECONDSPERHOUR, SECONDSPERDAY } from './Time'
// import Wave from './Wave'

export const GRADIENTOFFSET = 30
export const GRADIENTROTATION = 60
export const HUEMIN = 0
export const HUEMAX = 360
export const SATURATIONMIN = 75
export const SATURATIONMAX = 85
export const LIGHTNESSMIN = 10
export const LIGHTNESSMAX = 50

export const gradient = hsl => `linear-gradient(
  ${hsl.hue}deg, 
  ${hslString({
    hue: hsl.hue + GRADIENTOFFSET,
    saturation: hsl.saturation,
    lightness: hsl.lightness
  })}, 
  ${hslString({
    hue: hsl.hue + GRADIENTOFFSET + GRADIENTROTATION,
    saturation: hsl.saturation,
    lightness: hsl.lightness
  })})
`

export const hslString = ({ hue, saturation, lightness}) => `hsl(${hue}, ${saturation}%, ${lightness}%)`

const getHSL = timestamp => {
  const date = moment(timestamp)
  const dateSeconds = date.seconds() + (date.minutes() * SECONDSPERMINUTE) + (date.hours() * SECONDSPERHOUR)
  
  // const secondsPerMinutePortion = date.seconds() / SECONDSPERMINUTE
  // const secondsPerHourPortion = (date.seconds() + (date.minutes() * SECONDSPERMINUTE)) / SECONDSPERHOUR
  const secondsPerDayPortion = dateSeconds / SECONDSPERDAY
  const saturationPortion = 1 - (2 * (Math.abs(12 * SECONDSPERHOUR - dateSeconds)) / SECONDSPERDAY)
  const lightnessPortion = 1 - (2 * (Math.abs(12 * SECONDSPERHOUR - dateSeconds)) / SECONDSPERDAY)
  
  const hue = (secondsPerDayPortion * (HUEMAX - HUEMIN)) + HUEMIN
  const saturation = (saturationPortion * (SATURATIONMAX - SATURATIONMIN)) + SATURATIONMIN // highest saturation at 12
  const lightness = (lightnessPortion * (LIGHTNESSMAX - LIGHTNESSMIN)) + LIGHTNESSMIN // highest lightness at 12
  
  return { hue, saturation, lightness }
}

// const GlobalStyle = createGlobalStyle`
//   html, body {
//     background: ${props => gradient(props.hsl)};
//   }
// `

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  align-content: end;
`

const Wave = styled(animated.path)``

export default ({ timestamp, children }) => {
  // const hsl = getHSL(timestamp)
  const [ large, setLarge ] = useState(false)
  // const { number } = useSpring({ number: 200, from: { number: 0 } })
  const { width, height } = useWindowSize()
  const minSize = width > height ? height : width
  const spring = useSpring({ r: large ? minSize / 3 : minSize /  4 })

  return (
    <Container>
      <svg width={width} height={height}>
        <animated.circle
          cx={width / 2}
          cy={height / 2}
          style={spring}
          fill="red"
          onClick={e => { e.stopPropagation(); setLarge(!large) }}
        />
      </svg> 
    </Container>
  )

  // return (
  //   <Container>
  //     <svg viewBox="0 0 1440 320">
  //       <defs>
  //         <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
  //           <stop offset="0%" style={{stopColor: 'rgb(255,0,0)', stopOpacity: 1}} />
  //           <stop offset="100%" style={{stopColor: 'rgb(255,255,0)', stopOpacity: 1}} />
  //         </linearGradient>
  //       </defs>
  //       <Wave fill="url(#gradient)" d={`
  //         M0 32
  //         L60 64
  //         C120 96 240 160 360 165.3
  //         C480 171 600 117 720 85.3
  //         C840 53 960 43 1080 69.3
  //         C1200 96 1320 160 1380 192
  //         L${number.value} 224
  //         L${number.value} 320
  //         L1380 320
  //         C1320 320 1200 320 1080 320
  //         C960 320 840 320 720 320
  //         C600 320 480 320 360 320
  //         C240 320 120 320 60 320
  //         L0 320Z
  //       `} />
  //     </svg>
  //   </Container>
  // )

  // return children ? (
  //   <>
  //     <GlobalStyle hsl={hsl} />
  //     {children(hsl)}
  //   </>
  // ) : <GlobalStyle hsl={hsl} />
}
