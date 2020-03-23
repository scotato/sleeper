import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import ColorView from './ColorView'

import { SECONDSPERMINUTE, SECONDSPERHOUR, SECONDSPERDAY, dateToSeconds } from './Time'

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

const TimeVisualizer = () => {
  const now = moment()
  const nowSeconds = dateToSeconds(now)
  const [time, setTime] = useState(nowSeconds) // seconds
  const [isPlaying, setIsPlaying] = useState(false)
  const date = moment().hours(0).minutes(0).seconds(time)
  const timePretty = date.format('h:mm:ss A')

  // const secondsPerMinutePortion = timeMoment.seconds() / secondsPerMinute
  const secondsPerHourPortion = (date.seconds() + (date.minutes() * SECONDSPERMINUTE)) / SECONDSPERHOUR
  const secondsPerDayPortion = (date.seconds() + (date.minutes() * SECONDSPERMINUTE) + (date.hours() * SECONDSPERHOUR)) / SECONDSPERDAY

  const timeMax = 86400
  
  // play
  useEffect(() => {
    const timer = setInterval(() =>
      isPlaying && setTime(time >= timeMax ? 0 : time + 100)
    , 27)
    return () => clearInterval(timer)
  })

  return (
    <ColorView timestamp={date.valueOf()}>
      {hsl => (
        <Dashboard>
          <Header>
            <h1>{timePretty}</h1>
            <Button onClick={() => setIsPlaying(!isPlaying)}>
              { isPlaying ? "Pause" : "Play" }
            </Button>
          </Header>
    
          <Colors>
            <p><strong>Hue:</strong> {Math.round(hsl.hue)}</p>
            <Range value={hsl.hue} min={0} max={360} />
            <p><strong>Saturation:</strong> {Math.round(hsl.saturation)}</p>
            <Range value={hsl.saturation} min={0} max={100} />
            <p><strong>Lightness:</strong> {Math.round(hsl.lightness)}</p>
            <Range value={hsl.lightness} min={0} max={100} />
          </Colors>
    
          <Time>
            <p><strong>Seconds / Minute:</strong> {date.seconds()} / {60} {Math.round(secondsPerHourPortion * 100)}%</p>
            <Range value={date.seconds()} min={0} max={60} />
            <p><strong>Seconds / Hour:</strong> {date.seconds() + (date.minutes() * 60)} / {SECONDSPERHOUR} {Math.round(secondsPerHourPortion * 100)}%</p>
            <Range value={date.seconds() + (date.minutes() * 60)} min={0} max={60 * 60} />
            <p><strong>Seconds / Day:</strong> {time} / {SECONDSPERDAY} {Math.round(secondsPerDayPortion * 100)}%</p>  
            <Range value={time} min={0} max={60 * 60 * 24} />
          </Time>
          
          <Footer>
            <Range value={time} onChange={e => setTime(e.target.value)} min={0} max={SECONDSPERDAY} />
          </Footer>
        </Dashboard>
      )}
    </ColorView>
  )
}

export default TimeVisualizer
