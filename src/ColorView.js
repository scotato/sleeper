import React from 'react'
import { createGlobalStyle } from 'styled-components'
import moment from 'moment'

// const dateToSeconds = date => 
//   date.seconds() + (date.minutes() * 60) + (date.hours() * 60 * 60)

const getHSL = timestamp => {
  const date = moment(timestamp)
  // const dateSeconds = dateToSeconds(date)
  const secondsInMinute = 60
  const minutesInHour = 60
  const hoursInDay = 24
  // const daysInMonth = moment().daysInMonth()
  // const monthsInYear = 12

  const secondsInHour = secondsInMinute * minutesInHour
  const secondsInDay = secondsInHour * hoursInDay
  // const secondsInMonth = secondsInDay * daysInMonth
  // const secondsInYear = secondsInMonth * monthsInYear

  // const minutesInDay = minutesInHour * hoursInDay
  // const minutesInMonth = minutesInDay * daysInMonth
  // const minutesInYear = minutesInMonth * monthsInYear

  // const hoursInMonth = hoursInDay * daysInMonth
  // const hoursInYear = hoursInMonth * monthsInYear

  // const daysInYear = daysInMonth * monthsInYear

  // const secondsInMinutePortion = timeMoment.seconds() / secondsInMinute
  const secondsInHourPortion = (date.seconds() + (date.minutes() * secondsInMinute)) / secondsInHour
  const secondsInDayPortion = (date.seconds() + (date.minutes() * secondsInMinute) + (date.hours() * secondsInHour)) / secondsInDay

  const hueMin = 0 // secon
  const hueMax = 360 // month / day / minute
  const saturationMin = 30 // day
  const saturationMax = 100 // day
  const lightnessMin = 30 // day
  const lightnessMax = 70 // day

  const hue = secondsInDayPortion * hueMax
  const saturation = (secondsInDayPortion * 70) + saturationMin
  const lightness = (secondsInDayPortion * 40) + lightnessMin
  console.log(hue, saturation, lightness, timestamp, date.valueOf())

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
    background: ${props => props.background};
  }
`

export default ({ timestamp, children }) => {
  const hsl = getHSL(timestamp)

  return children ? (
    <>
      <GlobalStyle background={hsl.string} />
      {children(hsl)}
    </>
  ) : <GlobalStyle background={hsl.string} />
}
