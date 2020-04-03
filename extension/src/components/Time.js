import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { Context } from './Context'

export const dateToSeconds = date =>
  date.seconds() + (date.minutes() * 60) + (date.hours() * 60 * 60)

export const timestampToClock = timestamp => moment(timestamp).format('h:mm')
export const timestampToCalendar = timestamp => moment(timestamp).format('dddd, MMMM D')

export const useTimestamp = () => {
  const [timestamp, setTimestamp] = useState(moment().valueOf())


  useEffect(() => {
    const timer = setInterval(() => setTimestamp(moment().valueOf()), 1000)
    return () => clearInterval(timer)
  })

  return timestamp
}

const Time = styled.div`
  display: grid;
  margin-bottom: 32px;
  grid-template-rows: auto;
  grid-row-gap: 4px;
  place-content: center;
  text-align: center;
  user-select: none;
`

const TimeText = styled.span`
  color: white;
  line-height: 1;
`

const Clock = styled(TimeText)`
  font-size: 96px;
  font-weight: 200;
`

const Calendar = styled(TimeText)`
  font-size: 20px;
`

export default () => {
  const timestamp = useTimestamp()
  const clock = timestampToClock(timestamp)
  const calendar = timestampToCalendar(timestamp)
  const { state, dispatch } = useContext(Context)

  useEffect(() => {
    const minuteStore = moment(state.time).minute()
    const minuteTimestamp = moment(timestamp).minute()
    const isNewMinute = minuteTimestamp !== minuteStore
    if (isNewMinute) dispatch({type: 'setTime'})
  }, [state.time, dispatch, timestamp])

  return (
    <Time>
      <Clock>
        {clock}
      </Clock>

      <Calendar>
        {calendar}
      </Calendar>
    </Time>
  )
}
