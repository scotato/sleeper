import React from 'react'
import { createGlobalStyle } from 'styled-components'
import moment from 'moment'

import { SECONDSPERMINUTE, SECONDSPERHOUR, SECONDSPERDAY } from './Time'

const getHSL = timestamp => {
  const date = moment(timestamp)
  
  // const secondsPerMinutePortion = date.seconds() / SECONDSPERMINUTE
  // const secondsPerHourPortion = (date.seconds() + (date.minutes() * SECONDSPERMINUTE)) / SECONDSPERHOUR
  const secondsPerDayPortion = (date.seconds() + (date.minutes() * SECONDSPERMINUTE) + (date.hours() * SECONDSPERHOUR)) / SECONDSPERDAY
  const saturationPortion = 0.5 - ((Math.abs((12 * SECONDSPERHOUR) - (date.seconds() + (date.minutes() * SECONDSPERMINUTE) + (date.hours() * SECONDSPERHOUR)))) / SECONDSPERDAY)
  const lightnessPortion = 0.5 - ((Math.abs((12 * SECONDSPERHOUR) - (date.seconds() + (date.minutes() * SECONDSPERMINUTE) + (date.hours() * SECONDSPERHOUR)))) / SECONDSPERDAY)

  const hueMin = 0
  const hueMax = 360
  const saturationMin = 30
  const saturationMax = 100
  const lightnessMin = 30
  const lightnessMax = 70
  
  const hue = secondsPerDayPortion * hueMax
  const saturation = (saturationPortion * (saturationMax - saturationMin)) + saturationMin // highest saturation at 12
  const lightness = (lightnessPortion * (lightnessMax - lightnessMin)) + lightnessMin // highest lightness at 12

  return {
    hue,
    hueMin,
    hueMax,
    saturation,
    saturationMin,
    saturationMax,
    lightness,
    lightnessMin,
    lightnessMax,
    string: `hsl(${hue}, ${saturation}%, ${lightness}%)`
  }
}

const GlobalStyle = createGlobalStyle`
  html, body {
    background: ${props => gradient(props.hsl)};
  }
`

const gradient = hsl => `linear-gradient(0deg, ${hslString(hsl)}, ${hslString({
  hue: hsl.hue + 90,
  saturation: hsl.saturation,
  lightness: hsl.lightness
})})`
const hslString = ({ hue, saturation, lightness}) => `hsl(${hue}, ${saturation}%, ${lightness}%)`

export default ({ timestamp, children }) => {
  const hsl = getHSL(timestamp)

  return children ? (
    <>
      <GlobalStyle hsl={hsl} />
      {children(hsl)}
    </>
  ) : <GlobalStyle hsl={hsl} />
}
