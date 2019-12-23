import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'

const Dashboard = styled.main`
  display: grid;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  padding: 10vw;
  top: 0;
  left: 0;
  font-family: monospace;
  background-color: ${props => `hsl(${props.hue}, ${props.saturation}%, ${props.lightness}%)`};
  grid-gap: 2vw 2vw;
  grid-template-columns: 39vw 39vw;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header"
    "colors time"
    "footer footer";
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-area: header;
`

const Button = styled.button`
  padding: 0.25em 1em;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(0, 0, 0, 0.25);
  min-width: 128px;
  border-radius: 64px;
  border: 0;
`

const Range = styled.input.attrs({type: 'range'})`
`

const Panel = styled.div`
  display: flex;
  flex-direction: column;
`

const Colors = styled(Panel)`
  grid-area: colors;
`

const Time = styled(Panel)`
  grid-area: time;
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  grid-area: footer;
`

// 0h - 24h
// brightest at 12h
// 0h 0l - 12h 1l - 2h 0l

const dateToSeconds = date => 
  date.seconds() + (date.minutes() * 60) + (date.hours() * 60 * 60)

const TimeVisualizer = () => {
  const now = moment()
  const nowSeconds = dateToSeconds(now)
  const [time, setTime] = useState(nowSeconds) // seconds
  const [isPlaying, setIsPlaying] = useState(false)
  const date = moment().hours(0).minutes(0).seconds(time)
  const timePretty = date.format('h:mm:ss A')
  
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

  const timeMax = 86400
  // const hueMin = 0 // secon
  const hueMax = 360 // month / day / minute
  const saturationMin = 30 // day
  // const saturationMax = 100 // day
  const lightnessMin = 30 // day
  // const lightnessMax = 70 // day

  const hue = secondsInDayPortion * hueMax
  const saturation = (secondsInDayPortion * 70) + saturationMin
  const lightness = (secondsInDayPortion * 40) + lightnessMin
  
  // play
  useEffect(() => {
    const timer = setInterval(() =>
      isPlaying && setTime(time >= timeMax ? 0 : time + 100)
    , 60)
    return () => clearInterval(timer)
  })

  return (
    <Dashboard hue={hue} saturation={saturation} lightness={lightness}>
      <Header>
        <h1>{timePretty}</h1>
        <Button onClick={() => setIsPlaying(!isPlaying)}>
          { isPlaying ? "Pause" : "Play" }
        </Button>
      </Header>

      <Colors>
        <p><strong>Hue:</strong> {Math.round(hue)}</p>
        <Range value={hue} min={0} max={360} />
        <p><strong>Saturation:</strong> {Math.round(saturation)}</p>
        <Range value={saturation} min={0} max={100} />
        <p><strong>Lightness:</strong> {Math.round(lightness)}</p>
        <Range value={lightness} min={0} max={100} />
      </Colors>

      <Time>
        <p><strong>Seconds / Minute:</strong> {date.seconds()} / {60} {Math.round(secondsInHourPortion * 100)}%</p>
        <Range value={date.seconds()} min={0} max={60} />
        <p><strong>Seconds / Hour:</strong> {date.seconds() + (date.minutes() * 60)} / {secondsInHour} {Math.round(secondsInHourPortion * 100)}%</p>
        <Range value={date.seconds() + (date.minutes() * 60)} min={0} max={60 * 60} />
        <p><strong>Seconds / Day:</strong> {time} / {secondsInDay} {Math.round(secondsInDayPortion * 100)}%</p>  
        <Range value={time} min={0} max={60 * 60 * 24} />
      </Time>
      
      <Footer>
        <Range value={time} onChange={e => setTime(e.target.value)} min={0} max={secondsInDay} />
      </Footer>
    </Dashboard>
  )
}

export default TimeVisualizer
